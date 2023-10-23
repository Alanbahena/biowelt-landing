'use client'

import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Logo from '../../../../../public/assets/Logo.png'
import Arrow from '../../../../../public/assets/arrow-right.png'
import clasess from './navbar.module.scss'

export default function Navbar(): JSX.Element {
  const handleClickBeneftis = (): void => {
    document.getElementById('#beneficios')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickChars = (): void => {
    document.getElementById('#caracteristicas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickAbout = (): void => {
    document.getElementById('#acerca')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={clasess.container}>
      <Image alt="Biowelt logo" height={51} priority src={Logo} width={165} />
      <nav className={clasess.nav}>
        <ul className={clasess.list}>
          <li className={clasess.item}>Inicio</li>
          <li
            className={clasess.item}
            onClick={handleClickBeneftis}
            onKeyDown={handleClickBeneftis}
            role="presentation"
          >
            Beneficios
          </li>
          <li
            className={clasess.item}
            onClick={handleClickChars}
            onKeyDown={handleClickChars}
            role="presentation"
          >
            Caracteristicas
          </li>
          <li
            className={clasess.item}
            onClick={handleClickAbout}
            onKeyDown={handleClickAbout}
            role="presentation"
          >
            Acerca
          </li>
          <li className={clasess.item}>Blog</li>
        </ul>
      </nav>
      <Button className={clasess['btn--full']} link="/demo">
        <div className={clasess['btn-content']}>
          <p>Empezar demo</p>
          <Image alt="arrow" height={11} priority src={Arrow} width={17} />
        </div>
      </Button>
    </div>
  )
}
