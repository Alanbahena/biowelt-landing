import clasess from './footer.module.scss'

export default function Footer(): JSX.Element {
  return (
    <>
      <hr className={clasess.hr} />
      <footer className={clasess.container}>
        <div className={clasess.logo}>Logo</div>
        <div className={clasess.Cta}>CTA</div>
        <div className={clasess.copywrite}>COPY</div>
      </footer>
    </>
  )
}
