import { Header } from "../../components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { Plataforma } from "./components/Plataforma/Plataforma"
import { Filtros } from "./components/Filtros/Filtros"
import { Planos } from "./components/Planos/Planos"
import { TrabalheConosco } from "./components/TrabalheConosco/TrabalheConosco"
import { Footer } from "../../components/Footer/Footer"

export function Home() {   
  return (
    <>       
      <h1 className="sr-only">Konecta LIBRAS</h1>
      <h2 className="sr-only">Página Inicial</h2>

      <Header page="home"/>
      <Intro />
      <Plataforma />
      <Filtros />
      <Planos />
      <TrabalheConosco />
      <Footer />
    </>
  )
}