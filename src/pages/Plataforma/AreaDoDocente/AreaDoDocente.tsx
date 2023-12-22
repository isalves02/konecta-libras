import { NavLink } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { Card } from "../../../components/Layout/Card/Card";
import { Text } from "../../../components/Layout/Text/Text";

import { SubTitle } from "../../../components/Layout/Text/Subtitle";
import { RegisteredContent } from "../../../components/Layout/Lists/RegisteredContent/RegisteredContent";

export function AreaDoDocente () {
  return (
    <>
      <Header page="teacher" />

      <section className="plataforma pt-28 bg-blue-900 min-h-screen">
        <div className="container">
          <SubTitle text="Painel do docente" classes="mb-3" />

          <NavLink to="/area-do-docente/cadastro" title="Área para cadastrar conteúdo">
            <Card text="Cadastrar novo conteúdo" hasHover={true} />
          </NavLink>

          <div className="mt-8 py-10">
            <Text type="h4" text="Lista de conteúdos cadastrados" classes="uppercase tracking-wide" />

            <RegisteredContent />
          </div>
        </div>
      </section>
    </>
  )
}