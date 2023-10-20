import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-green.png'
import clasess from './cta.module.scss'

export default function Cta(): JSX.Element {
  return (
    <div className={clasess.container}>
      <h2>
        Listo para comenzar? <br />
        Agenda una nueva demo ahora mismo
      </h2>
      <Button className={clasess['btn--full']} link="/demo">
        <div className={clasess['btn-content']}>
          <p>Empezar demo</p>
          <Image alt="arrow" height={11} priority src={Arrow} width={17} />
        </div>
      </Button>
    </div>
  )
}
