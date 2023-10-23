import clasess from './about.module.scss'
import Transform from './transform'
import Cta from './cta'
import Mision from './mision'

export default function About(): JSX.Element {
  return (
    <section className={clasess.container} id="#acerca">
      <Transform />
      <Cta />
      <Mision />
    </section>
  )
}
