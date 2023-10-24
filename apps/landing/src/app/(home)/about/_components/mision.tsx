import Image from 'next/image'
import Purpose from '../../../../../public/assets/mision.png'
import clasess from './mision.module.scss'

export default function Mision(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <h4>Transformando el futuro: Nuestra misión es tu éxito</h4>
        <hr />
        <h2>
          Nuestra <span>misión</span> es crear un impacto positivo en el medio ambiente al facilitar
          la gestión de restaurantes con herramientas <span>prácticas</span> que reduzcan la
          cantidad de desperdicios generados y mejoren el enfoque en <span>calidad</span> de
          servicio, satisfacción y relación con comensales.
        </h2>
      </div>
      <div className={clasess.image}>
        <Image alt="Mision" className={clasess.mision} src={Purpose} />
      </div>
    </div>
  )
}
