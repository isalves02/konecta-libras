import { NavLink } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { Card } from "../../../components/Layout/Card/Card";
import { Texto } from "../../../components/Layout/Texto/Texto";
import { VideoRegisteredByTeacher } from "../../../data/VideoData";
import { ArrowRight } from "phosphor-react";
import { Tag } from "../../../components/Layout/Tag/Tag";

export function AreaDoDocente () {
  const VideosList = VideoRegisteredByTeacher

  console.log(VideosList)
  return (
    <>
      <Header page="teacher" />

      <section className="plataforma pt-28 bg-blue-900 min-h-screen">
        <div className="container">
          <NavLink className={"w-full"} to="/" title="Página Inicial">
            <Card text="Cadastrar novo conteúdo" />
          </NavLink>

          <div className="mt-8 py-10 ">
            <Texto type="h4" text="Lista de conteúdos cadastrados" classes="uppercase tracking-wide" />
            <ul className="mt-8 rounded-md bg-blue-600/30">
              {VideosList.map(video => {
                return (
                  <li key={video.id} className="flex pt-3 pb-8 px-8 gap-3 mb-4 border-b-default justify-between w-full">
                    <div>
                      <Tag text={video.status} type={video.status} />
                      <div className="flex items-center gap-2">
                        <Texto 
                          type="h4"
                          text="Título:" 
                          classes="uppercase"
                        />
                        <Texto 
                          type="paragraph"
                          text={video.title} 
                          classes="font-thin"
                        />
                      </div>
                    </div>

                    <ArrowRight className="cursor-pointer" color="white" size={32} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}