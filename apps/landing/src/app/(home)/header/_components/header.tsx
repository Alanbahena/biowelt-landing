import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import Navbar from './navbar'
import clasess from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={clasess.container}>
      <Navbar />
      <header>
        <div className={clasess.copywrite}>
          <h1>
            Una nueva forma de administrar tu negocio, lean restaurant <span>tu ventaja</span>
          </h1>
          <p>
            Automatiza toda las lineas de producción de tu restaurante partiendo desde un control de
            inventario en tiempo real desde cualquier dispositivo conectado a internet.{' '}
          </p>
          <Button className={clasess.btn} link="/dashboard">
            <div className={clasess['btn-content']}>
              <p>Empezar demo</p>
              <Image alt="arrow" height={11} priority src={Arrow} width={17} />
            </div>
          </Button>
        </div>
        <div className={clasess.image}>Image</div>
      </header>
    </div>
  )
}
