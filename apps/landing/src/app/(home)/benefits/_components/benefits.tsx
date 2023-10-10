import clasess from './benefits.module.scss'

export default function Benefits(): JSX.Element {
  return (
    <section className={clasess.container}>
      <div className={clasess.box}>
        <div className={clasess['box-header']}>
          <p>Una plataforma todo en uno de analíticas, datos y automatización en la nube</p>
          <hr />
          <h2>
            ¿Estás listo para <span>transformar</span> tu restaurante y aumentar tus
            <span> ganancias?</span>
          </h2>
        </div>
        <div className={clasess['box-image']}>Image</div>
        <div className={clasess['box-text']}>Text</div>
      </div>
    </section>
  )
}
