import { NavLink } from "react-router-dom"
import { Header } from "../../../components/Header/Header"
import { PageBack } from "../../../components/Layout/Button/PageBack"
import { Subtitle } from "../../../components/Layout/Text/Subtitle"
import { Text } from "../../../components/Layout/Text/Text"
import { Instructions } from "../../../components/Layout/Lists/Instructions/Instructions"
import { FormCadastroConteudo } from "../../../components/Layout/Form/FormCadastroConteudo"

export function Cadastro() {
  return (
    <>
      <Header page="teacher" />

      <section className="plataforma pt-28 bg-blue-900 min-h-screen relative overflow-x-hidden">
        <div className="container">
          <NavLink to="/area-do-docente" title="Retornar ao painel">
            <PageBack />
          </NavLink>
         
          <div className="max-w-3xl mb-16 relative z-10">
            <Subtitle text="Cadastrar novo conteudo" classes="mb-2 text-gray-300" />
            <Text 
              type="paragraph" 
              text="Cadastre os seus conteúdos 
                de acordo com as instruções abaixo e, ao seguir os requisitos de boa prática e da política de privacidade,
                o avaliaremos e logo o seu conteúdo estará disponível aos nossos usuários." 
              classes="mb-4 text-gray-300 " 
            />

            <div className="mt-8 pt-6 px-6 pb-12 bg-gray-400 rounded-md">
              <Text type="h4" text="Instruções" classes="text-gray-900 font-medium mb-2" />
              <Instructions />
            </div>
          </div>
        </div>
        
        <div className="detail-radial-gradient hidden w-4/5 h-3/5 absolute top-1/2 -right-1/4 z-0 -translate-y-1/2 md:block" />


        <div className="bg-blue-800 py-16">
          <div className="container">
            <Subtitle text="Adicionar novo" classes="mb-6 text-gray-300" />

            <FormCadastroConteudo />
          </div>
        </div>
      </section>
    </>
  )
}