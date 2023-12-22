import { NavLink } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { Card } from "../../../components/Layout/Card/Card";
import { Text } from "../../../components/Layout/Text/Text";
import { Subtitle } from "../../../components/Layout/Text/Subtitle";
import { RegisteredContent } from "../../../components/Layout/Lists/RegisteredContent/RegisteredContent";

export function AreaDoDocente () {
  return (
    <>
      <Header page="teacher" />

      <section className="plataforma pt-40 bg-blue-900 min-h-screen">
        <div className="container">
          <Subtitle text="Painel do docente" classes="mb-4" />

          <NavLink to="/area-do-docente/cadastro" title="Área para cadastrar conteúdo">
            <Card text="Cadastrar novo conteúdo" hasHover={true} hasIcon={true} />
          </NavLink>

          <div className="flex gap-2">
            <Card text="Visualizações última semana: +24 mil" classes="mt-4 bg-gray-500/50" />
            <Card text="Alcance mensal: +50 mil" classes="mt-4 bg-gray-500/50" />
            <Card text="Novo acesso ao perfil: +2 mil" classes="mt-4 bg-gray-500/50 text-yellow-400" />
          </div>

          <div className="mt-4 py-10">
            <Text type="h4" text="Lista de conteúdos cadastrados" classes="uppercase tracking-wide" />
            <RegisteredContent />
          </div>
        </div>
      </section>
    </>
  )
}