import Navbar from './navbar'
import clasess from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <header className={clasess.container}>
      <Navbar />
      <div className={clasess.exs}>Here is the Demo version</div>
    </header>
  )
}
