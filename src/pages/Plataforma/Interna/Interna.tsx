import { NavLink } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { Subtitulo } from "../../../components/Layout/Texto/Subtitulo";
import { Video } from "../../../components/Layout/Video/Video";
import { ArrowLeft, CaretRight } from "phosphor-react";
import { Texto } from "../../../components/Layout/Texto/Texto";
import { Comments } from "../../../components/Layout/Comments/Comments";


export function Interna () {
  return (
    <>
      <Header page="platform" />
      
      <section className="py-28 bg-blue-900 min-h-screen">
        <div className="container">
          <NavLink to="/plataforma" title="Retornar à página principal">
            <div className="flex items-center gap-4 mb-8">
              <ArrowLeft 
                size={24}
                color="rgb(156 163 175)"
              />
              <h4 className="uppercase text-sm font-medium text-gray-400">Voltar</h4>
            </div>
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
              <Subtitulo 
                text="Como perguntar o nome?"
                classes="mt-16 pb-8"
              />

              <span className="text-gray-300 text-sm flex gap-2">
                O video está todo em LIBRAS? 
                <u className="uppercase font-bold tracking-wider">Ativar legendas</u>
              </span>
            </div>

            <Texto 
              type="h4" 
              text="Descrição" 
              classes="text-gray-200 border-b-default pb-2 mb-4" 
            /> 

            <Texto 
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