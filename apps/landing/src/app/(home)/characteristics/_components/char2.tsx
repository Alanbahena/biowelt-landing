import Image from 'next/image'
import Pov from '../../../../../public/assets/pov.jpg'
import Inv from '../../../../../public/assets/inv.jpg'
import Corp from '../../../../../public/assets/corp.jpg'
import Cocina from '../../../../../public/assets/cocina.jpg'
import clasess from './char2.module.scss'

export default function Char2(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <h4>Automatización de control de inventario</h4>
        <hr />
        <h2>
          Transforma tu <span>restaurante</span> en una linea de producción
          <span> lean</span>
        </h2>
      </div>
      <div className={clasess.cards}>
        <div className={clasess.card}>
          <Image alt="Punto de venta" className={clasess.pov} src={Pov} />
          <h3>Punto de Venta</h3>
          <p>
            Nuestro punto de venta es la solución integral que tu negocio necesita para agilizar las
            ventas y brindar una experiencia de compra excepcional a tus clientes.
          </p>
        </div>
        <div className={clasess.card}>
          <Image alt="Invenario" className={clasess.pov} src={Inv} />
          <h3>Inventario</h3>
          <p>
            Adquiere únicamente los alimentos que necesitas, haz uso de aquellos productos que
            tienen su fecha de caducidad próxima, ofrece porciones adecuadas de alimentos y anticipa
            la cantidad de comida que se necesita cada día.
          </p>
        </div>
        <div className={clasess.card}>
          <Image alt="Coporativo" className={clasess.pov} src={Corp} />
          <h3>Tablero corporativo</h3>
          <p>
            Nuestra plataforma corporativa incrementa la eficiencia operativa, la toma de decisiones
            basada en datos, la experiencia del cliente y tu relación con proveedores.
          </p>
        </div>
        <div className={clasess.card}>
          <Image alt="Cocina" className={clasess.pov} src={Cocina} />
          <h3>Cocina</h3>
          <p>
            Perfecciona los procesos de producción con las cantidades adecuadas en los platillos
            gracias a nuestra plataforma de cocina integral con recetarios y descripción de metodos
            de preparación.
          </p>
        </div>
      </div>
    </div>
  )
}
