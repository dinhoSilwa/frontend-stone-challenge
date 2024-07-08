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
import { ArrowRightLeft } from "lucide-react";
import clsx from "clsx";




export const Form = () => {
  const [isOpen, setisOpen] = useState(true)


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

    setisOpen(!isOpen)

    const USD = cleanNonNumeric(dolar);
    const BRL = Number(data.USDBRL.high);
    const stateTax = Number(stateRate) / 100;
    const USD_WITH_STATE_TAX = USD + (USD * stateTax);
    const IOF_MONEY = currencyData.brlIOFmoney;
    const IOF_CARD = currencyData.brlIOFcard;

    const totalBRL = PayMethod === "money"
      ? USD_WITH_STATE_TAX * (BRL + (BRL * IOF_MONEY))
      : (USD_WITH_STATE_TAX + (USD * IOF_CARD)) * BRL;

    const BRLCOIN = totalBRL.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const BRLCOTATION = BRL.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    setcurrencyData((prevState) => ({
      ...prevState,
      BRL: BRLCOTATION,
      totalBRL: BRLCOIN,


    }))

  };

  const onSubmit: SubmitHandler<IFormCurrency> = (data) => {

    const { dolar, PayMethod, stateRate } = data;
    calculateQuotation({ dolar, PayMethod, stateRate });
  };

  return (
    <>
      <section className="w-1/2 mob-mini:w-full flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)} className={clsx("hidden z-50 sharon  flex-col mob-mini:flex mob-mini:px-8", { "hidden mob-mini:hidden": !isOpen })}>
          <fieldset className=" w-1/2  flex gap-10 mob-mini:flex-col mob-mini:gap-4">
            <fieldset className="flex flex-col ">
              <label htmlFor="dolar" className="sharon font-semibold text-primary-text text-[18px]"><small>Dolar</small></label>

              <input
                type="text"
                inputMode="decimal"
                value={currencyData?.dolar as string}
                {...register("dolar")}
                onChange={handlechange}
                className="border py-2 px-2 border-b-[8px] focus:outline-green-700 w-[140px] rounded-sm mob-mini:text-[18px] mob-mini:font-bold text-zinc-700"
                aria-required="true"
              />
              {errors.dolar && <span className="text-red-600" role="alert" aria-live="assertive">{errors.dolar.message}</span>}
            </fieldset>

            <div className="flex flex-col">
              <label htmlFor="dolar" className="sharon font-semibold text-primary-text text-[18px]"><span>Taxa do Estado:</span></label>
              <select {...register("stateRate")} onChange={handlechange}
                className="border py-[8px] px-2 border-b-[8px] focus:outline-none w-auto rounded-sm mob-medium:w-[180px]"

              >
                {USAstates.map(({ state, purchaseRate }, index) => (
                  <option key={index} value={purchaseRate} aria-required="true" role="alert">
                    {`${state} - ${purchaseRate}%`}
                  </option>
                ))}
              </select>
              {errors.stateRate && <span className="text-red-600">{errors.stateRate.message}</span>}
            </div>


          </fieldset>
          <section className=" mt-6 mob-mini:flex mob-mini:px-0">
            <label className="sharon font-semibold text-primary-text text-[18px] mob-mini: "><span>Tipo de Compra</span></label>

          </section>
          <fieldset className="mb-4 button-radio-container flex gap-8  flex-wrap py-4 mob-mini:flex">
            <fieldset className="flex gap-1 items-center">

              <input
                id="PayMethodMoney"
                type="radio"
                value="money"
                {...register("PayMethod")}
                onChange={handlechange}
                className="peer"
                aria-required="true"
                aria-describedby="Campo de Dolar"
              />

              <label htmlFor="PayMethodMoney" className="cursor-pointer ml-2">Dinheiro / Pix</label>


            </fieldset>

            <fieldset className="flex items-center ">

              <input
                id="PayMethodCard"
                type="radio"
                value="card"
                {...register("PayMethod")}
                onChange={handlechange}
                className=" peer"
                aria-required="true"
                aria-describedby="Selecionar Taxa Estadual Americana"

              />

              <label htmlFor="PayMethodCard" className="cursor-pointer ml-2">Cartão de Crédito</label>


            </fieldset>
            {errors.PayMethod && <span className="text-red-600" role="alert" aria-live="assertive">Escolha um Tipo de Compra</span>}
          </fieldset>

          <fieldset className="">
            <button type="submit" className={clsx("flex items-center px-4 py-2 gap-2 h-12 bg-stone-color rounded-[10px] text-white")}><ArrowRightLeft /> Converter</button>
          </fieldset>
        </form>

        <Dashboard Operation={currencyData} />
      </section>
    </>
  );
};
