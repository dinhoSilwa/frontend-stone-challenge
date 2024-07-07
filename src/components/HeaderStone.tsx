import { useEffect, useState } from 'react'
import logo from '../assets/stonelogo.png'
export const HeaderStone = () => {

  const now = new Date();

  // Obtém a hora atual em UTC
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcMonth = now.getUTCMonth()
  const utcDay = now.getUTCDate();
  const utcYear = now.getFullYear()
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return (
    <>
 
      <header className='flex items-center gap-8 border w-1/2 py-8 px-8'>

        <figure className='flex w-[30%]'>
          <img src={logo} alt="stonelogo" className='w-[100px]' />
        </figure>

<section className='flex flex-col'>
          <div className='flex gap-4'>
            <span className='text-[20px] font-sharon'> {`${utcDay} ${monthNames[utcMonth]} de ${utcYear}`}</span>
            <span className='border-[2px] border-slate-400 h-[30px]'></span>
            <span> {`${utcHours} : ${utcMinutes} UTC`}</span>
          </div>
<section className='flex-1 w-[100%] text-[14px] text-slate-600'>
Dados de câmbio disponibilizados pela Morningstar.
</section>
</section>



      </header>
    </>
  )
}