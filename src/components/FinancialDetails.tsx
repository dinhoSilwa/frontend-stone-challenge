import { ICurrency } from "../@types/taxtypes"


interface IDashBoardProps {
  Operation : ICurrency
}
export const Dashboard : React.FC<IDashBoardProps> = ({Operation}) =>{
  
  return(
    <>
{
  Operation.totalBRL && <section>
  <button>Voltar</button>
     <ul>
      <li>O resultado do Calculo é : </li>
      <li>{Operation.totalBRL}</li>
      <li>Compra no {Operation.PayMethod == "money" ? 'Pix / Dinheiro' : "Cartão de Crédito"}</li>
      <li>Cotação do Dola $1 = R$ {Operation.BRL}</li>
     </ul>
  </section>
}
    </>
  )
}