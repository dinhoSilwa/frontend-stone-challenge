
import './App.css'
import { Form } from './components/FinancialForm'
import bg from './assets/Mask.png'
import { HeaderStone } from './components/HeaderStone'
import graph from './assets/Graph.png'

function App() {

  return (
<main className='desk-small:w-full desk-small:h-screen overflow-hidden relative flex flex-col justify-start desk-small:py-8 desk-small:gap-6 mob-medium:overflow-hidden mob-medium:h-screen'>
<img src={bg} alt=" background-stone" className='hidden mob-mini:hidden left-0 desk-small:w-full absolute border-red-2 -z-50  mob-medium:flex mob-medium:top-[30%] desk-small:top-[10%]' />
<img src={graph} alt="elemento grafico" className='hidden desk-small:flex absolute desk-small:w-[10%] z-50 desk-small:left-[60%] mob-medium:flex mob-medium:w-[100px] mob-medium:top-[50%] mob-medium:left-[60%] desk-small:top-[45%]' />
<HeaderStone />
 <Form  />

</main>
  )
}

export default App
