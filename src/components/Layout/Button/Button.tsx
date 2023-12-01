import { ButtonProps } from "../../../interfaces/GeneralProps";

export function Button({ 
  type, 
  text, 
  value, 
  classes, 
  isDisabled, 
  clickEvent }:ButtonProps) {
    
  return (
    <>
      <button 
        value={value}
        disabled={isDisabled}
        type={type === null ? 'button' : type}
        onClick={clickEvent}
        className={`text-sm text-start font-medium
          uppercase tracking-widest max-w-fit rounded-md py-3 px-6 mt-2 ${classes}`}>

          {text}
      </button>
    </>
  )
}