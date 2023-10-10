import Image from 'next/image'
import MVP from '../../../../../public/assets/mvp.jpg'
import Automize from '../../../../../public/assets/automize.png'
import Chart from '../../../../../public/assets/chart.png'
import Trend from '../../../../../public/assets/trend-up.png'
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
        <div className={clasess['box-image']}>
          <Image alt="Biowelt MVP" className={clasess.image} src={MVP} />
        </div>
        <div className={clasess['box-text']}>
          <div className={clasess.benefit}>
            <Image alt="icon1" className={clasess.icon} src={Automize} />
            <h3>Automatiza el control de tu restaurante</h3>
            <p>
              Reduce perdidas y desperdicios al conectar el control de inventario con tu cocina
              (Recetarios) y punto de venta.
            </p>
          </div>
          <div className={clasess.benefit}>
            <Image alt="icon1" className={clasess.icon2} src={Chart} />
            <h3>Analisa y mide el comportamiento de comensales</h3>
            <p>
              Transforma los datos en una ventaja que te ayuden a modificar areas de oportunidad
              para un mejor control y planificación.
            </p>
          </div>
          <div className={clasess.benefit}>
            <Image alt="icon1" className={clasess.icon3} src={Trend} />
            <h3>Acelera el valor de tu restaurante</h3>
            <p>
              Incrementa la satisfacción y relación del cliente al mejorar la selección de
              productos, alimentos y platillos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
