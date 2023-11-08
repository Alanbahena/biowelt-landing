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
          Nuestra <span>misión</span> es transformar la gestión de un restaurante al potencializar
          la <span> exactitud</span> operativa, administrativa y financiera ofreciendo las
          herramientas más intuitivas y <span>fáciles</span> de usar en el mercado.
        </h2>
      </div>
      <div className={clasess.image}>
        <Image alt="Mision" className={clasess.mision} src={Purpose} />
      </div>
    </div>
  )
}
