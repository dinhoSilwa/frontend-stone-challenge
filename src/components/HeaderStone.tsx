import logo from './../assets/stonelogo.png'
export const HeaderStone = () => {

  const now = new Date();

  // Obtém a hora atual em UTC
  const utcHours = now.getHours();
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

      <header className='flex items-center w-1/2 py-8 px-12 gap-[64px]'>

        <figure className='flex'>
          <img src={logo} alt="stonelogo" className='w-[150px]' />
        </figure>

        <section className='flex flex-col'>
          <div className='flex gap-4'>
            <strong className='text-[18px] sharon text-primary-text'> {`${utcDay} ${monthNames[utcMonth]} de ${utcYear}`}</strong>
            <span className='border-[2px] h-[30px]'></span>
            <strong className='text-[18px] sharon text-primary-text'>
              {`${utcHours < 10 ? "0" + utcHours : utcHours} : ${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes} UTC`}
            </strong>

          </div>
          <section className='flex-1 w-[100%] text-[14px] text-second-text'>
            Dados de câmbio disponibilizados pela Morningstar.
          </section>
        </section>



      </header>
    </>
  )
}