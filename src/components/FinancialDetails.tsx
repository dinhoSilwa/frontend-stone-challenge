import clsx from "clsx"
import { ICurrency } from "../@types/taxtypes"
import { MoveLeft } from "lucide-react"


interface IDashBoardProps {
  Operation: ICurrency
}
export const Dashboard: React.FC<IDashBoardProps> = ({ Operation }) => {

  return (
    <>
      {
        Operation.totalBRL && <form className="mob-mini:px-12 px-8" action="/">
          <button type="submit" 
          className={clsx("flex items-center px-4 py-2 gap-2 h-12 rounded-[10px] text-primary-text border-2 border-zinc-400 shadow-md mb-10")}
         
          >
            <MoveLeft /> Voltar</button>

          <article className="w-[40%]" >
            <strong className=' text-[18px] text-primary-text'>O resultado do Calculo é : </strong>
            <p className="text-[56px] font-semibold text-stone-color font-[inter]">{Operation.totalBRL}</p>
            <p className='w-[100%] text-[14px] font-semibold text-primary-text'>Compra no {Operation.PayMethod == "money" ? 'Pix / Dinheiro' : "Cartão de Crédito"} e taxa total de {Operation.totalRate} %</p>
            <p className='w-[100%] text-[14px] font-semibold text-primary-text'>Cotação do Dola $1 = R$ {Operation.BRL}</p>
          </article>
        </form>
      }
    </>
  )
}