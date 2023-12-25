import { TextProps } from "../../../interfaces/GeneralProps"

export function Title ({ text, classes }:TextProps) {
  return (
    <>
      <h3 
        className={`
          max-w-md
          text-2xl
          md:text-4xl
          xl:text-5xl
          font-medium
          md:max-w-none
          leading-normal
          relative z-20 ${classes ? classes : ''}
        `}>
          {text}
      </h3>
    </>
  )
}