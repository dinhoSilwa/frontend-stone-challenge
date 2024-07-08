
import './App.css'
import { Form } from './components/FinancialForm'
import bg from './assets/Mask.png'
import { HeaderStone } from './components/HeaderStone'
import graph from './assets/Graph.png'

function App() {

  return (
<main className='w-full h-screen overflow-hidden relative flex flex-col justify-start py-8 gap-6'>
<img src={bg} alt="background-stone" className='top-[-100px] left-0 w-full absolute border-red-2 -z-50' />
<img src={graph} alt="elemento grafico" className='absolute w-[10%] z-50 top-[35%] left-[60%]' />
<HeaderStone />
 <Form  />

</main>
  )
}

export default App
