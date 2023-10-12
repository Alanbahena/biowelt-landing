import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import Card1 from '../../../../../public/assets/card-1.png'
import Card2 from '../../../../../public/assets/card-2.png'
import Card3 from '../../../../../public/assets/card-3.png'
import clasess from './char3.module.scss'

export default function Char3(): JSX.Element {
  return (
    <section className={clasess.container}>
      <div className={clasess.box}>
        <div className={clasess.text}>
          <h4>¿Cómo funciona?</h4>
          <hr />
          <h2>
            Unos <span>sencillos</span> pasos y listo
          </h2>
        </div>
        <div className={clasess.cards}>
          <div className={clasess.card}>
            <Image alt="Card 1" className={clasess.img} src={Card1} />
            <p>Crea una lista de productos y ordena tu inventario</p>
          </div>
          <div className={clasess.card}>
            <Image alt="Card 2" className={clasess.img} src={Card2} />
            <p>Diseña recetarios para cada uno de tus platillos</p>
          </div>
          <div className={clasess.card}>
            <Image alt="Card 3" className={clasess.img} src={Card3} />
            <p>Levanta comandas y tu restaurante se actualiza en tiempo real</p>
          </div>
        </div>
        <Button className={clasess.btn} link="/dashboard">
          <div className={clasess['btn-content']}>
            <p>Empezar demo</p>
            <Image alt="arrow" height={11} priority src={Arrow} width={17} />
          </div>
        </Button>
      </div>
    </section>
  )
}
