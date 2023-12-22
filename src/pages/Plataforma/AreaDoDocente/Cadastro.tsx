import { NavLink } from "react-router-dom"
import { Header } from "../../../components/Header/Header"
import { PageBack } from "../../../components/Layout/Button/PageBack"

export function Cadastro() {
  return (
    <>
      <Header page="teacher" />

      <section className="plataforma pt-28 bg-blue-900 min-h-screen">
        <div className="container">

          <NavLink to="/area-do-docente" title="Retornar ao painel">
            <PageBack />
          </NavLink>
         
          <div className="mt-8 py-10">

          </div>
        </div>
      </section>
    </>
  )
}