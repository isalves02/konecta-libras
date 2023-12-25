import { Title } from "../../../../components/Layout/Text/Title"
import { Text } from "../../../../components/Layout/Text/Text"

export function Plataforma () {
  return (
    <>
      <section className="plataforma relative bg-blue-800" id="plataforma">
        <div className="container py-28 sm:py-40 md:py-52 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <Text
              type="topic" 
              classes="pb-2" 
              text="Nossa Plataforma"
            />

            <Title 
              classes="pb-8" 
              text="O seu streaming de aprendizado de LIBRAS"
            />

          
            <Text  
              classes="pb-12"
							type="paragraph-max"
              text="Você é fluente em Língua Brasileira de Sinais e 
							gostaria de fazer parte da nossa plataforma? 
							Preencha o formulário e entraremos em contato com você!"   
            />
          </div>

          {/* <iframe 
            width="560" 
            height="315" 
            className="
              absolute 
              rounded-md 
              top-1/2
              right-0 
              -translate-y-1/2"
            title="Apresentação Konecta LIBRAS" 
            src="https://www.youtube.com/embed/kw9-h1XIBQk?si=HvkCk566S5CB-BDW" 
            allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" 
          /> */}
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