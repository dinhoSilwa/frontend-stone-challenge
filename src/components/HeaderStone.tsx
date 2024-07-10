import clsx from 'clsx';
import logo from './../assets/stonelogo.png';

export const HeaderStone = () => {
  const now = new Date();

  // Obtém a hora atual em UTC
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcMonth = now.getUTCMonth();
  const utcDay = now.getUTCDate();
  const utcYear = now.getFullYear();

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <header className={clsx("px-4 py-8 flex flex-col gap-[16px]", 
    "mob-small:flex-row mob-small:items-center mob-small:gap-8",
     "desk-small:px-8")}>
      <figure>
        <img src={logo} alt="stonelogo" className={clsx("w-[80px]", "mob-small:w-[120px]")} />
      </figure>

      <section className={clsx("flex flex-col gap-1",
         "mob-small:gap-0")}>
        <div className={clsx('flex')}>
          <strong className={clsx('w-[130px] text-primary-text flex justify-start text-[12px] sharon border-r-2 border-primary-text', 
            "mob-medium:text-[14px]")}>
            {`${utcDay} ${monthNames[utcMonth]} de ${utcYear}`}
          </strong>
          <strong className={clsx("w-[130px] text-primary-text flex justify-start pl-4 text-[12px] sharon", 
            "mob-medium:text-[14px]")}>
            {`${utcHours < 10 ? "0" + utcHours : utcHours}:${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes} UTC`}
          </strong>
        </div>
        <p className={clsx("text-[10px] text-second-text",
           "mob-medium:text-[12px]")}>
          Dados de câmbio disponibilizados pela Morningstar.
        </p>
      </section>
    </header>
  );
};
