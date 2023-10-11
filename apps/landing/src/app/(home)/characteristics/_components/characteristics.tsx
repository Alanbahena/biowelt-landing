import clasess from './characteristics.module.scss'
import Char1 from './char1'
import Char2 from './char2'
import Char3 from './char3'
import Char4 from './char4'

export default function Characteristics(): JSX.Element {
  return (
    <section className={clasess.container}>
      <Char1 />
      <Char2 />
      <Char3 />
      <Char4 />
    </section>
  )
}
