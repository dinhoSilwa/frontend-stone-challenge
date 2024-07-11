import './App.css';
import { Form } from './components/FinancialForm';
import { HeaderStone } from './components/HeaderStone';
import graph from './assets/Graph.png';
import clsx from 'clsx';

function App() {
  return (
    <main className={clsx('relative flex flex-col justify-start h-screen overflow-x-hidden',
      'mob-medium:overflow-hidden', 'desk-small:w-full desk-small:py-8 desk-small:gap-6 ',
      ' mob-small:bg-[url("./assets/Mask.png")] bg-cover bg-center',
      'desk-larger:w-1/2 desk-larger:ml-auto desk-larger:mr-auto ')}>
      <img
        src={graph}
        alt="elemento grafico"
        className='hidden absolute z-50 desk-small:flex desk-small:w-[10%] desk-small:left-[60%] desk-small:top-[45%] mob-medium:flex mob-medium:w-[100px] mob-medium:left-[60%] mob-medium:top-[50%]'
      />
      <HeaderStone />
      <Form />
    </main>
  );
}

export default App;
