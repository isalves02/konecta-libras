import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { User } from 'phosphor-react'
import konectaLibras from '/assets/icons/konecta-libras.svg'
import { AccountTypeContext } from '../../../contexts/GeneralContextProvider'


export function HeaderHome() {
  const { handleButtonRegisterType } = useContext(AccountTypeContext)

  return (
    <>
      <div className="container flex items-center justify-between">
        <img src={konectaLibras} alt="Konecta LIBRAS" width="204" height="21" className="w-36 sm:w-44 lg:w-auto" />
          
        <ul className="flex items-center uppercase text-sm gap-8 tracking-wider">
          <li className="max-lg:hidden"><a>A plataforma</a></li>
          <li className="max-lg:hidden"><a>Quero ensinar!</a></li>

          <li className="max-lg:hidden">
            <NavLink to="/criar-conta" title="Criar conta">
              <button 
                type="button" 
                className="py-2 px-5 text-blue-950 bg-blue-200 uppercase text-sm font-medium rounded-md" 
                onClick={() => handleButtonRegisterType("aluno") }>
                  Assinar
              </button>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" title="Login">
              <span className="sr-only">Efetuar Login</span>
              <User
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