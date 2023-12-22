import image1 from  '../../../../assets/images/thumb-1.png'
import image2 from  '../../../../assets/images/thumb-2.png'
import image3 from  '../../../../assets/images/thumb-3.png'

import { Title } from '../../../../components/Layout/Text/Title'
import { Text } from '../../../../components/Layout/Text/Text'
import { ArrowDown } from 'phosphor-react'


export function Intro () {
  return (
    <> 
      <h2 className="sr-only">Página Inicial</h2>
      <section className="relative mt-12 linear-gradient-default overflow-hidden bg-blue-800" id="intro">
        <div className="container py-52">
          <div className="max-w-3xl">
            <Title 
              classes="pb-8" 
              text="Os melhores instrutores de LIBRAS em um só lugar."
            />

            <Text 
              classes="pb-12"
              type="paragraph-max"
              text="Escolhemos a dedo e contamos com dezenas de 
                fluentes na Língua Brasileira de Sinais. Nosso foco 
                é democratizar o ensino e facilitar a sua busca."   
            />
          </div>

          <ArrowDown 
            color="white"
            size={32}
            className="motion-safe:animate-bounce"
          />
        </div>

        <div className="thumbnail opacity-50 absolute right-16 top-1/2 -translate-y-1/2 z-10 xl:opacity-100">
          <img src={image2} alt="" className="mb-2" width="487" height="303" />
          <img src={image1} alt="" className="absolute top-1/4 right-1/2" width="487" height="303" />
          <img src={image3} alt="" width="487" height="303" />
        </div>

        <div className="detail-radial-gradient w-4/5 h-3/5 absolute top-1/2 -left-1/4 z-0 -translate-y-1/2" />
      </section>
    </>
  )
}