import { TextProps } from "../../../interfaces/GeneralProps"

export function SubTitle({ text, classes }:TextProps) {
  return (
    <>
      <h3 
        className={`
          text-3xl
          font-medium
          leading-tight 
          relative z-20 ${classes}`}>
            {text}
      </h3>
    </>
  )
}