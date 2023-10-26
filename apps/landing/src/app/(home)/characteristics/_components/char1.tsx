import Image from 'next/image'
import Dash1 from '../../../../../public/assets/dash1.png'
import clasess from './char1.module.scss'

export default function Char1(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <div>
          <h4>Automatización de control de inventario</h4>
          <hr />
          <h2>
            Transforma tu <span>restaurante</span> en una linea de producción
            <span> lean</span>
          </h2>
        </div>
        <p>
          Reduce perdidas economicas por falta de precisión en cantidades de compra, robo, alimentos
          caducados, baja calidad. Deja que nuestro programa se encargue de mantener un bajo
          inventario profesional y de anticipar tus compras al conectarlo en tiempo real con
          recetarios y punto de venta.
        </p>
      </div>
      <div className={clasess.image}>
        <Image alt="Dasborad 1" className={clasess.dash1} src={Dash1} />
      </div>
    </div>
  )
}
