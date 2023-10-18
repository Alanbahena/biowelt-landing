import clasess from './about.module.scss'
import Transform from './transform'
import Cta from './cta'

export default function About(): JSX.Element {
  return (
    <section className={clasess.container}>
      <Transform />
      <Cta />
    </section>
  )
}
