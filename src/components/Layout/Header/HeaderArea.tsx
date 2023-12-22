import { NavLink } from "react-router-dom"
import { SignOut } from 'phosphor-react'
import { Logomarca } from "../Logomarca/Logomarca"

export function HeaderArea() {
  return (
    <>
      <div className="w-full flex items-center justify-end px-8">
        <Logomarca />
        
        <ul className="flex items-center gap-6">
          <li className="text-sm text-white font-light">Olá, Jéssica!</li>
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