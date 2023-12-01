import { HeaderProps } from '../../interfaces/GeneralProps'
import { HeaderArea } from '../Layout/Header/HeaderArea'
import { HeaderHome } from '../Layout/Header/HeaderHome'
import { HeaderMin } from '../Layout/Header/HeaderMin'
import { HeaderPlataforma } from '../Layout/Header/HeaderPlataforma'
import { MenuFiltro } from '../Layout/MenuFiltro/MenuFiltro'



export function Header ({ page }:HeaderProps) {
  return (
    <>
      <header 
        className={`
          fixed top-0 inset-x-0 
          z-50 bg-blue-950 
          flex items-center 
          ${page === 'home' && 'h-24'}
          ${page === 'account' && 'h-16'}
          ${(page === 'platform' || page === 'teacher') && 'h-20'}
        `}>
        
        { page === "home" &&
          <HeaderHome />
        }

        { page === "account" &&
          <HeaderMin />
        }

        { page === "platform" &&
          <HeaderPlataforma />
        }

        { page === "teacher" &&
          <HeaderArea />
        }
      </header>
      
      { page === "platform" &&
        <MenuFiltro />
      }
    </>
  )
}