import { LabelProps } from "../../../../interfaces/GeneralProps";

export function Label({ name, text, sreader, classes}: LabelProps) {
  return (
    <>
      <label 
        htmlFor={name} 
        className={`
            text-base text-gray-700
            ${ sreader && 'sr-only' }
            ${ classes }
          `}>
          
          {text}
      </label>
    </>
  )
}