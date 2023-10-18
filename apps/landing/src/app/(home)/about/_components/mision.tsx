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
          Nuestra <span>misión</span> es ofrecer herramientas tecnológicas fáciles de usar para
          restaurantes en México que gestionen y <span>automaticen</span> los procesos internos y
          que se acomoden a las necesidades de tu <span>restaurante.</span>
        </h2>
      </div>
      <div className={clasess.image}>
        <Image alt="Mision" className={clasess.mision} src={Purpose} />
      </div>
    </div>
  )
}
