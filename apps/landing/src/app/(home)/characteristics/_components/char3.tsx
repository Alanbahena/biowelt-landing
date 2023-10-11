import clasess from './char3.module.scss'

export default function Char3(): JSX.Element {
  return (
    <section className={clasess.container}>
      <div className={clasess.box}>
        <div className={clasess.text}>
          <h4>¿Cómo funciona?</h4>
          <hr />
          <h2>
            Unos <span>sencillos</span> pasos y listo
          </h2>
        </div>
      </div>
    </section>
  )
}
