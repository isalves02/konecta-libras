import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { SignOut, MagnifyingGlass } from 'phosphor-react'

import filter from '../../../assets/icons/filter-menu.svg'
import konectaLibras from '../../../assets/icons/konecta-libras.svg'
import { AccountTypeContext } from '../../../contexts/GeneralContextProvider'


export function HeaderPlataforma() {
  const { setMenuVisibility  } = useContext(AccountTypeContext)

  return (
    <>
      <div className="w-full flex items-center justify-between px-8">
        <ul className="flex items-center gap-6">
          <li>
            <button 
              type="button" 
              onClick={() => setMenuVisibility("visible")}>

              <img src={filter} alt="" width="30" />
            </button>
          </li>

          <li>
            <button type="button" aria-label="Clique para pesquisar">
              <MagnifyingGlass 
                color="white"
                size={24}
              />
            </button>
          </li>
        </ul>

        <img src={konectaLibras} alt="Konecta LIBRAS" width="150" />
        
        <ul className="flex items-center gap-6">
          <li className="text-sm text-white font-light">Olá, Aline!</li>
          <li>
            <NavLink to="/" title="Página Inicial">
              <SignOut 
                color="white"
                size={24}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}