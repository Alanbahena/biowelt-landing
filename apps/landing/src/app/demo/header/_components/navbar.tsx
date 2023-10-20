import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../../public/assets/Logo.png'
import clasess from './navbar.module.scss'

export default function Navbar(): JSX.Element {
  return (
    <div className={clasess.container}>
      <Link href="/">
        <Image alt="Biowelt logo" height={51} priority src={Logo} width={165} />
      </Link>
      <nav className={clasess.nav}>
        <ul className={clasess.list}>
          <Link className={clasess.item} href="/">
            Inicio
          </Link>
          <Link className={clasess.item} href="/">
            Beneficios
          </Link>
          <Link className={clasess.item} href="/">
            Caracteristicas
          </Link>
          <Link className={clasess.item} href="/">
            Acerca
          </Link>
          <Link className={clasess.item} href="/">
            Blog
          </Link>
        </ul>
      </nav>
    </div>
  )
}
