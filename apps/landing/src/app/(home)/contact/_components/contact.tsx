import Image from 'next/image'
import { Button } from '@biowelt/custom-react'
import Arrow from '../../../../../public/assets/arrow-right.png'
import clasess from './contact.module.scss'

export default function Contact(): JSX.Element {
  return (
    <div className={clasess.container}>
      <div className={clasess.text}>
        <h4>Preguntanos cualquier cosa</h4>
        <hr />
        <h2>
          ¿Te gustaría aprender más sobre <span>Biowelt?</span> <br /> Estamos contentos de escuchar
          tus opiniones y preguntas
        </h2>
      </div>
      <div className={clasess.form}>
        <form>
          <div>
            <input
              className={clasess.input}
              id="nombre"
              placeholder="Nombre"
              required
              type="text"
            />
            <input
              className={clasess.input}
              id="negocio"
              placeholder="Nombre de Negocio"
              required
              type="text"
            />
          </div>
          <input id="correo" placeholder="Correo Electronico" required type="email" />
          <textarea className={clasess.textarea} placeholder="Escribe tu mensaje aquí" required />
          <Button className={clasess.btn}>
            <div className={clasess['btn-content']}>
              <p>Empezar demo</p>
              <Image alt="arrow" height={11} priority src={Arrow} width={17} />
            </div>
          </Button>
        </form>
      </div>
    </div>
  )
}
