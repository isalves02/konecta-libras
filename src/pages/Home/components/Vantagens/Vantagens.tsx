// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import { Titulo } from "../../../../components/Layout/Texto/Titulo"

export function Vantagens () {
	return (
		<>
			<section className="vantagens bg-banner-carrossel bg-blue-800">
				<h2 className="sr-only">Especificações da plataforma Konecta LIBRAS</h2>

				<div className="container flex items-center justify-center h-96">
						{/* <Splide
              options={ {
                rewind: true,
                width : 1000,
                gap   : '1rem',
              } } 
              className="flex"
              aria-label="Nossas características"
            >

              <SplideTrack className="flex">
                <SplideSlide>
                  <div>
                    <h1>teste 1</h1>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div>
                    <h1>teste 2</h1>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div>
                    <h1>teste 3</h1>
                  </div>
                </SplideSlide>
              </SplideTrack>

							
						</Splide> */}

            <Titulo text="Conteúdos de até 1 minuto" />
				</div>
			</section>
		</>
	)
}