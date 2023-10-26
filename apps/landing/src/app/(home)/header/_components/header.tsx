import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import Dashboard from '../../../../../public/assets/header-image.png'
import Rentabilidad from '../../../../../public/assets/rentabilidad.png'
import Eficiencia from '../../../../../public/assets/eficiencia.png'
import Control from '../../../../../public/assets/control.png'
import Ai from '../../../../../public/assets/ai.png'
import Navbar from './navbar'
import clasess from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={clasess.container}>
      <Navbar />
      <header>
        <div className={clasess.copywrite}>
          <h1>
            <span>Práctico,</span> eficiente e innovador. <br />
            Un restaurante lean, <span>tu ventaja</span>
          </h1>
          <p>
            Descubre como revolucionar y facilitar los procesos internos de tu restaurante con el
            software más intuitivo y fácil de usar desde cualquier dispositivo conectado a internet.
          </p>
          <Button className={clasess.btn} link="/demo">
            <div className={clasess['btn-content']}>
              <p>Empezar demo</p>
              <Image alt="arrow" height={11} priority src={Arrow} width={17} />
            </div>
          </Button>
        </div>
        <div className={clasess['container-image']}>
          <Image alt="Biowelt Dashboard" className={clasess.image} src={Dashboard} />
          <div className={clasess['box-details']}>
            <div className={clasess.box}>
              <Image alt="SVG" className={clasess['box-img']} src={Rentabilidad} />
              <p>Rentabilidad</p>
            </div>
            <div className={clasess.box}>
              <Image alt="SVG" className={clasess['box-img']} src={Eficiencia} />
              <p>Eficiencia</p>
            </div>
            <div className={clasess.box}>
              <Image alt="SVG" className={clasess['box-img']} src={Control} />
              <p>Control</p>
            </div>
            <div className={clasess.box}>
              <Image alt="SVG" className={clasess['box-img']} src={Ai} />
              <p>Tecnología</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
