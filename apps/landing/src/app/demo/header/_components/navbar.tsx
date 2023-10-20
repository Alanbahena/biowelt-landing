import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Logo from '../../../../../public/assets/Logo.png'
import Arrow from '../../../../../public/assets/arrow-right.png'
import clasess from './navbar.module.scss'

export default function Navbar(): JSX.Element {
  return (
    <div className={clasess.container}>
      <Image alt="Biowelt logo" height={51} priority src={Logo} width={165} />
      <nav className={clasess.nav}>
        <ul className={clasess.list}>
          <li className={clasess.item}>Inicio</li>
          <li className={clasess.item}>Beneficios</li>
          <li className={clasess.item}>Caracteristicas</li>
          <li className={clasess.item}>Acerca</li>
          <li className={clasess.item}>Blog</li>
        </ul>
      </nav>
    </div>
  )
}
