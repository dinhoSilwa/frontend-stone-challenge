import { ChangeEvent, useState } from "react";
import { ICurrency, IFormCurrency } from "../@types/taxtypes";
import { USAstates } from "../model/TaxState";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../model/yupschema";
import {
  cleanNonNumeric,
  numberToMoneyString,
} from "../controller/currency-controller"
import useSWR from "swr";
import { fetcher } from "../api/apicurrency";
import { Dashboard } from "./FinancialDetails";




export const Form = () => {
  const { data } = useSWR(
    "https://economia.awesomeapi.com.br/last/USD-BRL",
    fetcher
  );

  const [currencyData, setcurrencyData] = useState<ICurrency>({
    BRL: null,
    dolar: null,
    stateRate: null,
    brlIOFmoney: 0.011,
    brlIOFcard: 0.0638,
    totalBRL: null,
    PayMethod: null,
    totalRate: null,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const convert = cleanNonNumeric(value);
    setcurrencyData((prevState) => ({
      ...prevState,
      [name]: name === "dolar" ? numberToMoneyString(convert) : value,
    }));
  };

  const calculateQuotation = ({ dolar, PayMethod, stateRate }: IFormCurrency) => {
   
    const USD = cleanNonNumeric(dolar);
    const BRL = Number(data.USDBRL.high);
    const stateTax = Number(stateRate) / 100;
    const USD_WITH_STATE_TAX = USD + (USD * stateTax);
    const IOF_MONEY = currencyData.brlIOFmoney;
    const IOF_CARD = currencyData.brlIOFcard;
    
    const totalBRL = PayMethod === "money"
      ? USD_WITH_STATE_TAX * (BRL + (BRL * IOF_MONEY))
      : (USD_WITH_STATE_TAX + (USD * IOF_CARD)) * BRL;

    const BRLCOIN = totalBRL.toLocaleString('pt-br', {style : 'currency', currency : 'BRL'})
    const BRLCOTATION = BRL.toLocaleString('pt-br', {style : 'currency', currency : 'BRL'})
    
      setcurrencyData((prevState)=>({
        ...prevState,
        BRL : BRLCOTATION,
        totalBRL : BRLCOIN,

       
      }))

  };

  const onSubmit: SubmitHandler<IFormCurrency> = (data) => {

    const { dolar, PayMethod, stateRate } = data;
    calculateQuotation({ dolar, PayMethod, stateRate });
  };

  return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="dolar">Dolar</label>
        <input
          type="text"
          inputMode="decimal"
          value={currencyData?.dolar as string}
          {...register("dolar")}
          onChange={handlechange}
        />
        {errors.dolar && <span>{errors.dolar.message}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="dolar">Taxa Do Estado</label>

        <select {...register("stateRate")} onChange={handlechange}>
          {USAstates.map(({ state, purchaseRate }, index) => (
            <option key={index} value={purchaseRate}>
              {`${state} - ${purchaseRate}%`}
            </option>
          ))}
        </select>
        {errors.stateRate && <span>{errors.stateRate.message}</span>}
      </fieldset>

      <fieldset>
        <legend>Tipo de Compra</legend>
        <label htmlFor="PayMethodMoney">Dinheiro / Pix</label>
        <input
          type="radio"
          value="money"
          {...register("PayMethod")}
          onChange={handlechange}
        />
        {errors.PayMethod && <span>{errors.PayMethod.message}</span>}

        <label htmlFor="PayMethodCard">Cartão de Credito</label>
        <input
          type="radio"
          value="card"
          {...register("PayMethod")}
          onChange={handlechange}
        />
        {errors.PayMethod && <span>{errors.PayMethod.message}</span>}
      </fieldset>

      <fieldset>
        <button type="submit">Converter</button>
      </fieldset>
    </form>

    <Dashboard Operation={currencyData} />
</>
  );
};
