import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import Heart from '../../../../../public/assets/heart.png'
import Logo from '../../../../../public/assets/Logo.png'
import clasess from './footer.module.scss'

export default function Footer(): JSX.Element {
  return (
    <>
      <hr className={clasess.hr} />
      <footer className={clasess.container}>
        <div className={clasess.logo}>
          <Image alt="Biowelt logo" className={clasess['logo-img']} priority src={Logo} />
          <p>
            Una nueva forma de administrar tu negocio, lean restaurant <span>tu ventaja</span>
          </p>
        </div>
        <div className={clasess.Cta}>
          <p>
            Listo para comenzar? <br />
            Agenda una nueva demo ahora mismo
          </p>
          <Button className={clasess.btn}>
            <div className={clasess['btn-content']}>
              <p>Empezar Demo</p>
              <Image alt="arrow" height={11} priority src={Arrow} width={17} />
            </div>
          </Button>
        </div>
        <div className={clasess.copywrite}>
          <p>
            Hecho con <Image alt="Heart" className={clasess.heart} src={Heart} /> en méxico
          </p>
          <span>Copyright © Biowelt 2023. </span>
        </div>
      </footer>
    </>
  )
}
