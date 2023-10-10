import clasess from './characteristics.module.scss'
import Char1 from './char1'

export default function Characteristics(): JSX.Element {
  return (
    <section className={clasess.container}>
      <Char1 />
    </section>
  )
}
