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
          Nuestra <span>misión</span> es ofrecer herramientas prácticas que potencializen la
          <span> exactitud</span> administrativa y financiera de un restaurante y así crear un
          <span> impacto</span> positivo en el medio ambiente al reducir la cantidad de desperdicios
          generados.
        </h2>
      </div>
      <div className={clasess.image}>
        <Image alt="Mision" className={clasess.mision} src={Purpose} />
      </div>
    </div>
  )
}
