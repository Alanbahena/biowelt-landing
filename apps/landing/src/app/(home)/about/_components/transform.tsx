import Image from 'next/image'
import Client from '../../../../../public/assets/client.png'
import Trans from '../../../../../public/assets/transform.png'
import clasess from './transform.module.scss'

export default function Transform(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <h4>Transforma tu negocio</h4>
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
            “La gestión de los procesos internos de un restaurante es un problema frecuente, ya que
            los servicios actuales ofrecen características complejas que no son muy fáciles de usar
            y disminuir nuestros esfuerzos como dueños para enfocarnos en la calidad del cliente es
            nuestra prioridad”
          </p>
          <h4>
            Santiago Ramirez - <span>Dueño de restaurante mexicano</span>
          </h4>
        </div>
      </div>
    </div>
  )
}
