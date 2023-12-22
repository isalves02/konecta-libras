import { NavLink } from "react-router-dom"
import { SignOut, Bell } from 'phosphor-react'
import { Logo } from "../Logo/Logo"

export function HeaderArea() {
  return (
    <>
      <div className="w-full flex items-center justify-between px-8">
        <button 
          type="button" 
          className="flex items-center justify-center
            w-8 h-8 text-sm text-white font-light bg-gray-200 
            rounded-full relative">
            <Bell 
              color="black"
              size={20}
            />
            <span className="hasNotify absolute rounded-full w-2 h-2 bg-red-500 top-0 right-0"></span>
        </button>

        <Logo />
        
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