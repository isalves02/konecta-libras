import { TextProps } from "../../../interfaces/GeneralProps"

export function Subtitle({ text, classes }:TextProps) {
  return (
    <>
      <h3 
        className={`
          text-xl
          md:text-2xl
          xl:text-3xl
          font-medium
          md:max-w-none
          leading-normal 
          relative z-20 ${classes ? classes : ''}`}>
            {text}
      </h3>
    </>
  )
}