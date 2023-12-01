import { createContext, useState } from 'react'
import { GeneralChildrenContext, MenuVisibilityProps } from '../interfaces/ContextProps'

export const MenuVisibilityContext = createContext({} as MenuVisibilityProps)

export function MenuContextProvider( { children }:GeneralChildrenContext) {
  const [menuFilterActive, setMenuFilterActive] = useState(false)
  
  function handleMenuVisibility (visibility: string) {
    if (visibility==="visible") {
      setMenuFilterActive(true)
    } else {
      setMenuFilterActive(false)
    }
  }

  return (
    <>
    <MenuVisibilityContext.Provider 
      value={{
        isMenuActive: menuFilterActive,
        setMenuVisibility: handleMenuVisibility
      }}>

      {children}
    </MenuVisibilityContext.Provider>
    
    </>
  )
}
