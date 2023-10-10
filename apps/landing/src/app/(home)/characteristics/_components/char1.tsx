import clasess from './char1.module.scss'

export default function Char1(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>text</div>
      <div className={clasess.image}>Image</div>
    </div>
  )
}
