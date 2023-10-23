import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import Demo from '../../../../../public/assets/demo-icon.png'
import Navbar from './navbar'
import clasess from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <header className={clasess.container}>
      <Navbar />
      <div className={clasess.box}>
        <div className={clasess['box--text']}>
          <h1>
            Administrar un restaurante nunca fue tan sencillo. Utiliza solo las
            <span> características</span> que necesites.
          </h1>
          <p>
            Solicita una demo y deja que nuestra tecnología gestione las cantidades y fechas de
            compra de productos, inventario en tiempo real, fechas de expiración, recetarios y
            porciones de platillos, comportamiento de consumo y satisfacción en el cliente, puntos
            de venta y más.
          </p>
          <div className={clasess.form}>
            <form>
              <div>
                <input
                  className={clasess.input}
                  id="nombre"
                  placeholder="Nombre"
                  required
                  type="text"
                />
                <input
                  className={clasess.input}
                  id="negocio"
                  placeholder="Nombre de Negocio"
                  required
                  type="text"
                />
              </div>
              <input id="correo" placeholder="Correo Electronico" required type="email" />
              <Button className={clasess.btn}>
                <div className={clasess['btn-content']}>
                  <p>Solicitar demo</p>
                  <Image alt="arrow" height={11} priority src={Arrow} width={17} />
                </div>
              </Button>
            </form>
          </div>
        </div>
        <div className={clasess['box--image']}>
          <Image alt="Icon" className={clasess.img} src={Demo} />
        </div>
      </div>
    </header>
  )
}
