import clasess from './benefits.module.scss'

export default function Benefits(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.box}>
        <div className={clasess['box-header']}>Header</div>
        <div className={clasess['box-image']}>Image</div>
        <div className={clasess['box-text']}>Text</div>
      </div>
    </div>
  )
}
