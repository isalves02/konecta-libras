import { Title } from "../../../../components/Layout/Text/Title"
import { Text } from "../../../../components/Layout/Text/Text"
import { Video } from "../../../../components/Layout/Video/Video"

export function Plataforma () {
  return (
    <>
      <section className="plataforma relative bg-blue-800" id="plataforma">
        <div className="container py-28 sm:py-40 md:py-52 relative z-10">
          <Text
            type="topic" 
            classes="pb-2 text-center" 
            text="Nossa Plataforma"
          />

          <Title 
            classes="pb-16 text-center" 
            text="O seu streaming de aprendizado de LIBRAS"
          />

          <Video type="video" />
        </div>

        <div 
          className="detail-radial-gradient 
          w-4/5 h-3/5 absolute top-1/2 
          -left-1/4 z-0 -translate-y-1/2" 
        />
      </section>
    </>
  )
} 