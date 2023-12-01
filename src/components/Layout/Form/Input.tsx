import { useContext } from "react";
import { InputProps } from "../../../interfaces/GeneralProps";
import { InputMask } from "@react-input/mask";
import { AccountTypeContext } from "../../../contexts/GeneralContextProvider";

export function Input ({ 
  id, 
  name, 
  type, 
  classes,
  required, 
  maxLength, 
  placeholder, 
  autoComplete, 
  hasEvent, isDisabled,
  inputHasMask, mask, 
  value }:InputProps) {

  const { handleChangeEvent } = useContext(AccountTypeContext)

  return (
    <>
      { !inputHasMask ? 
        <input 
        id={id} 
        name={name} 
        type={type} 
        value={value}
        required={required}
        disabled={isDisabled}
        maxLength={maxLength}
        placeholder={placeholder}
        autoComplete={`${autoComplete}`}
        onChange={hasEvent ? (event) => handleChangeEvent(event)  : undefined }

        className={`py-4 px-4 
          text-sm rounded-md
          bg-gray-100 text-blue-800 
          placeholder:text-gray-700 
          ${type !== "radio" && 'mb-3 shadow' }
          ${classes}
        `} 
      />

      : 
      
      <InputMask 
        mask={mask} 
        replacement={{ _: /\d/ }}

        itemID={id} 
        name={id} 
        type={id} 
        required={required}
        placeholder={placeholder}

        className={`py-4 px-4 
          text-sm rounded-md mb-3
          bg-gray-100 shadow  text-blue-800 
          placeholder:text-gray-700 ${classes}`}
      />
      }
    </>
  )
}