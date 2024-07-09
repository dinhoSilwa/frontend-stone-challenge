import logo from './../assets/stonelogo.png';

export const HeaderStone = () => {
  const now = new Date();

  // Obtém a hora atual em UTC
  const utcHours = now.getHours();
  const utcMinutes = now.getUTCMinutes();
  const utcMonth = now.getUTCMonth();
  const utcDay = now.getUTCDate();
  const utcYear = now.getFullYear();

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <header className='flex items-center py-8 gap-[64px] mob-mini:gap-[32px] mob-mini:w-[70%] ml-10 mob-mini:flex-col mob-medium:flex-row mob-medium:px-8 flex-col px-8 mob-small:flex-row mob-small:pt-10'>
      <figure className='flex'>
        <img src={logo} alt="stonelogo" className='w-[100px] mob-mini:w-[120px]' />
      </figure>

      <section className='mob-mini:items-center mob-mini:justify-center mob-mini:gap-2 flex-row w-full mob-small:w-1/2 mob-medium:mob-mini:justify-start'>
        <div className='flex mob-mini:items-center items-center justify-center w-full mob-medium:justify-start'>
          <strong className='w-[300px] mob-medium:w-[130px] items-start text-[14px] sharon text-primary-text mob-mini:text-center border-r-4 border-zinc-500 flex justify-center'>
            {`${utcDay} ${monthNames[utcMonth]} de ${utcYear}`}
          </strong>
          <strong className='w-[300px] mob-medium:w-[130px] text-[14px] sharon text-primary-text mob-mini:text-center flex justify-center'>
            {`${utcHours < 10 ? "0" + utcHours : utcHours} : ${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes} UTC`}
          </strong>
        </div>
        <section className='flex w-[100%] text-[12px] text-center text-second-text mob-mini:text-center mob-mini:text-[12px] mob-medium:w-[80%]'>
          Dados de câmbio disponibilizados pela Morningstar.
        </section>
      </section>
    </header>
  );
};
