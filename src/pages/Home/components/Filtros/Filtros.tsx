import { FilterBox } from "../../../../components/Layout/FilterBox/FilterBox"
import { Title } from "../../../../components/Layout/Text/Title"

export function Filtros() {
  return (
    <>
      <section className="filtros bg-blue-900 py-80 relative">
        <div className="container">
          <Title 
              classes="m-auto text-center max-w-3xl" 
              text="Nosso sistema de filtros
              personaliza a sua experiência..."
            />
        </div>

        <FilterBox classes="absolute top-1/2 left-44" name="Saudações" />
        <FilterBox classes="absolute top-1/2 right-44" name="Artes" />
        <FilterBox classes="absolute top-28 left-1/2 -translate-x-1/2" name="Aniversário" />
        <FilterBox classes="absolute bottom-28 left-1/2 -translate-x-1/2" name="Dialetos locais" />
      </section>
    </>
  )
}