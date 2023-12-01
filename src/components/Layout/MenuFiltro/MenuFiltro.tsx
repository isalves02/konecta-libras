import { useContext } from 'react'
import { X, CaretRight } from 'phosphor-react'
import { FiltersData } from '../../../data/Filter'
import { AccountTypeContext } from '../../../contexts/GeneralContextProvider'
import { Texto } from '../Texto/Texto'


export function MenuFiltro () {
  const filters = FiltersData.sort()
  const { isMenuActive, setMenuVisibility  } = useContext(AccountTypeContext)

  return (
    <>
      <div 
        className={`
          fixed w-1/3 
          inset-y-0 z-50 
          bg-blue-950 flex 
          items-center transition-transform 
          ${isMenuActive ? 'translate-x-0' : '-translate-x-full'}`
          }>
          
          <nav className="fixed flex items-center top-0 inset-x-0 h-16 px-4 bg-blue-950 border-b-default">
            <Texto 
              text="Filtros"
              classes="text-lg uppercase tracking-wider font-medium" 
            />

            <button 
              type="button" 
              value="closeMenu"
              className="absolute top-4 right-4"
              onClick={() => setMenuVisibility("hidden")}>
                <X color="white" size={20} />
            </button>
          </nav>

          <ul 
            className="
              pt-16 w-full h-full
              flex flex-col justify-start
              items-center text-white overflow-y-auto">
              
              { filters.map(filter => {
                return (
                <li 
                  key={filter}
                  className="
                    w-5/6
                    flex 
                    justify-between
                    items-center
                    text-base 
                    font-light
                    capitalize 
                    tracking-wider 
                    p-6 border-b-default">

                    {filter}

                    <CaretRight 
                      color="white"
                      size={14}
                    />
                </li>
                )
              })}
          </ul>
      </div>
    </>
  )
}