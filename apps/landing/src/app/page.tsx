import Header from './(home)/header/_components/header'
import Benefits from './(home)/benefits/_components/benefits'
import Characteristics from './(home)/characteristics/_components/characteristics'
import About from './(home)/about/_components/about'
import Contact from './(home)/contact/_components/contact'

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <Benefits />
      <Characteristics />
      <About />
      <Contact />
    </>
  )
}
