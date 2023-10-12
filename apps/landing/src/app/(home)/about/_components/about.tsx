import clasess from './about.module.scss'
import Transform from './transform'

export default function About(): JSX.Element {
  return (
    <section className={clasess.container}>
      <Transform />
    </section>
  )
}
