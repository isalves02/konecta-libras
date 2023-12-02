import { createContext, useState } from 'react'
import { GeneralChildrenContext, AccountTypeProps } from '../interfaces/ContextProps'


export const AccountTypeContext = createContext({} as AccountTypeProps)


export function GeneralContextProvider( { children }:GeneralChildrenContext) {
  const [registerType, setRegisterType] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [menuFilterActive, setMenuFilterActive] = useState(false)
  

  function handleButtonRegisterType (type: string) {
    setRegisterType(type)
  }

  function handleChangeEvent (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    if (value === 'aluno' || value === 'instrutor')
      setRegisterType(value)

    if (value === 'cartao' || value === 'pix')
      setPaymentMethod(value)
  }

  function handleMenuVisibility (visibility: string) {
    if (visibility==="visible")
      setMenuFilterActive(true)
    else
      setMenuFilterActive(false)
  }

  return (
    <>
    <AccountTypeContext.Provider 
      value={{
        registerType: registerType,
        paymentMethod: paymentMethod,
        isMenuActive: menuFilterActive,
        handleChangeEvent: handleChangeEvent,
        setMenuVisibility: handleMenuVisibility,
        handleButtonRegisterType: handleButtonRegisterType,
      }}>

      {children}
    </AccountTypeContext.Provider>  
    </>
  )
}
