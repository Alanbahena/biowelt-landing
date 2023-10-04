import Navbar from './navbar'
import clasess from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <div className={clasess.container}>
      <Navbar />
      <div>Header</div>
    </div>
  )
}
