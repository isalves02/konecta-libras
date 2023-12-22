import { TextProps } from "../../../interfaces/GeneralProps"

export function Title ({ text, classes }:TextProps) {
  return (
    <>
      <h3 
        className={`
          text-5xl
          font-medium
          leading-tight 
          relative z-20 ${classes}
        `}>
          {text}
      </h3>
    </>
  )
}