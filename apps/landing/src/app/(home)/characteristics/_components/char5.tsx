import Image from 'next/image'
import Dash from '../../../../../public/assets/char-prods.png'
import clasess from './char5.module.scss'

export default function Char1(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <div>
          <h4>Ordena la gestión de tu restaurante</h4>
          <hr />
          <h2>
            Carga nuevas listas de <span>productos.</span>
          </h2>
        </div>
        <p>
          Mejora la organización de tu restaurante al ordenar tu inventario por estantes y así
          podrás identificar y rastrear el comportamiento y caducidad de tus productos con mayor
          facilidad.
        </p>
      </div>
      <div className={clasess.image}>
        <Image alt="Dasborad 1" className={clasess.dash1} src={Dash} />
      </div>
    </div>
  )
}
