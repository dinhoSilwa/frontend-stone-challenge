
import './App.css'
import { Form } from './components/FinancialForm'
import bg from './assets/Mask.png'

function App() {

  return (
<main className='w-full h-screen overflow-hidden relative'>
<img src={bg} alt="background-stone" className='top-[-100px] left-0 w-full absolute border-red-2 -z-50' />
<header>Stone aqui</header>
 <Form  />
</main>
  )
}

export default App
