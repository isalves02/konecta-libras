import { ReactNode } from 'react'

export interface MenuVisibilityProps {
  isMenuActive: boolean,
  setMenuVisibility: (visibility: string) => void,
}

export interface AccountTypeProps {
  paymentMethod: string,
  registerType: string,
  isMenuActive: boolean,
  handleButtonRegisterType: (type: string) => void,
  setMenuVisibility: (visibility: string) => void,
  handleChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface GeneralChildrenContext {
  children: ReactNode
}