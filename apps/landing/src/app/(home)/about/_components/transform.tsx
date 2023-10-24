import Image from 'next/image'
import Client from '../../../../../public/assets/client.png'
import Trans from '../../../../../public/assets/transform.png'
import clasess from './transform.module.scss'

export default function Transform(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <h4>¿Estás listo para la transformación?</h4>
        <hr />
        <h2>
          ¡Descubre la revolución culinaria: donde la tradición se encuentra con la{' '}
          <span>innovación!</span>
        </h2>
      </div>
      <div className={clasess.content}>
        <div className={clasess.txt1}>Aprende de tus clientes</div>
        <div className={clasess.visual}>
          <Image alt="Visual Biowelt" className={clasess.img} src={Trans} />
        </div>
        <div className={clasess.txt2}>Enfoque en calidad</div>
        <div className={clasess.txt3}>Analisa y mide</div>
      </div>
      <div className={clasess['client-box']}>
        <Image alt="Biowelt Client" className={clasess.client} src={Client} />
        <div>
          <p>
            “La complejidad y el uso practico de un software para restaurantes se ha convertido en
            un problema frecuente, disminuir nuestros esfuerzos, automatizar nuestros procesos y
            poder tomar acciones en base a datos que incrementen la satisfacción y relación con
            comensales es nuestra prioridad”
          </p>
          <h4>
            Santiago Ramirez - <span>Dueño de restaurante mexicano</span>
          </h4>
        </div>
      </div>
    </div>
  )
}
