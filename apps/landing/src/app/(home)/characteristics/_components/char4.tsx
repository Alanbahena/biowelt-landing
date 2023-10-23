import Image from 'next/image'
import Dash2 from '../../../../../public/assets/dash-pov.png'
import clasess from './char4.module.scss'

export default function char4(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.image}>
        <Image alt="Dasborad 1" className={clasess.dash1} src={Dash2} />
      </div>
      <div className={clasess.text}>
        <div>
          <h4>Experiencia digital única</h4>
          <hr />
          <h2>
            Un diseño intuitivo, simple y <span>moderno</span> desde cualquier dispositivo
          </h2>
        </div>
        <p>
          Con una navegación sencilla y una disposición lógica, podrás aprovechar al máximo todas
          las características de nuestra plataforma sin esfuerzo y sin la necesidad de instalar
          ningún programa.
        </p>
      </div>
    </div>
  )
}
