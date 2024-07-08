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

      <header className='flex items-center w-1/2 py-8  gap-[64px] mob-mini:gap-[32px] mob-mini:w-full mob-mini:flex-col'>

        <figure className='flex'>
          <img src={logo} alt="stonelogo" className='w-[150px] mob-mini:w-[100px]' />
        </figure>

        <section className='flex flex-col  mob-mini:items-center mob-mini:justify-center'>
          <div className='flex gap-4 mob-mini:items-center justify-center'>
            <strong className='text-[18px] sharon text-primary-text mob-mini:w-[140px] mob-mini:text-center'> {`${utcDay} ${monthNames[utcMonth]} de ${utcYear}`}</strong>
            <span className='border-[2px] h-[30px]'></span>
            <strong className='text-[18px] sharon text-primary-text mob-mini:w-[120px] mob-mini:text-center'>
              {`${utcHours < 10 ? "0" + utcHours : utcHours} : ${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes} UTC`}
            </strong>

          </div>
          <section className='flex w-[100%] text-[14px] text-second-text mob-mini:text-center mob-mini:text-[12px]'>
            Dados de câmbio disponibilizados pela Morningstar.
          </section>
        </section>



      </header>
    </>
  )
}