import { BoxFiltros } from "../../../../components/Layout/BoxFiltros/BoxFiltros"
import { Titulo } from "../../../../components/Layout/Texto/Titulo"

export function Filtros() {
  return (
    <>
      <section className="filtros bg-blue-900 py-80 relative">
        <div className="container">
          <Titulo 
              classes="m-auto text-center max-w-3xl" 
              text="Nosso sistema de filtros
              personaliza a sua experiência..."
            />
        </div>

        <BoxFiltros classes="absolute top-1/2 left-44" name="Saudações" />
        <BoxFiltros classes="absolute top-1/2 right-44" name="Artes" />
        <BoxFiltros classes="absolute top-28 left-1/2 -translate-x-1/2" name="Aniversário" />
        <BoxFiltros classes="absolute bottom-28 left-1/2 -translate-x-1/2" name="Dialetos locais" />
      </section>
    </>
  )
}