
import './App.css'
import { Form } from './components/FinancialForm'
import bg from './assets/Mask.png'
import { HeaderStone } from './components/HeaderStone'
import graph from './assets/Graph.png'

function App() {

  return (
<main className='desk-small:w-full desk-small:h-screen overflow-hidden relative flex flex-col justify-start desk-small:py-8 desk-small:gap-6'>
<img src={bg} alt="background-stone" className='mob-mini:hidden desk-small:top-[-100px] left-0 desk-small:w-full absolute border-red-2 -z-50' />
<img src={graph} alt="elemento grafico" className='hidden desk-small:flex absolute desk-small:w-[10%] z-50 desk-small:top-[35%] desk-small:left-[60%]' />
<HeaderStone />
 <Form  />

</main>
  )
}

export default App
