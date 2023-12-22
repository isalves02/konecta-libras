import { NavLink } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { SubTitle } from "../../../components/Layout/Text/Subtitle";
import { Video } from "../../../components/Layout/Video/Video";
import { CaretRight } from "phosphor-react";
import { Text } from "../../../components/Layout/Text/Text";
import { Comments } from "../../../components/Layout/Lists/Comments/Comments";
import { PageBack } from "../../../components/Layout/Button/PageBack";


export function Interna () {
  return (
    <>
      <Header page="platform" />
      
      <section className="py-28 bg-blue-900 min-h-screen">
        <div className="container">
          <NavLink to="/plataforma" title="Retornar à página principal">
            <PageBack />
          </NavLink>
        
          <div className="breadcrumb flex items-center gap-2 text-xs uppercase tracking-wider mb-4">
            <span className="text-gray-400">Saudações</span>
            <CaretRight 
              size={12}
              color="rgb(156 163 175)"
            />
            <span className="text-gray-300 ">Como perguntar o nome?</span>
          </div>
 
          <Video 
            title="Como perguntar o nome?"
            url="https://www.youtube.com/embed/8uFWqqfLRSw?si=FVX1bbPCoqaEQ4R8" 
          />

          <div className="info">
            <div className="flex justify-between items-center">
              <SubTitle 
                text="Como perguntar o nome?"
                classes="mt-16 pb-8"
              />

              <span className="text-gray-300 text-sm flex gap-2">
                O video está todo em LIBRAS? 
                <u className="uppercase font-bold tracking-wider">Ativar legendas</u>
              </span>
            </div>

            <Text 
              type="h4" 
              text="Descrição" 
              classes="text-gray-200 border-b-default pb-2 mb-4" 
            /> 

            <Text 
              classes="text-gray-300 text-base"
              text="Nessa aula você irá aprender como perguntar o nome de um surdo e também como se apresentar em LIBRAS." 
            /> 
          </div>

          <Comments />
        </div>
      </section>
    </>
  )
}