import { TextProps } from "../../../interfaces/GeneralProps"

export function Texto({ type, text, classes }:TextProps) {
  return(
    <> 
      { (!type ) && 
        <p className={`z-20 font-light 
          leading-normal relative ${classes}`}>
          {text}
        </p>
      }

      { type === 'detail' && 
       <p className={`z-20 text-xs
          font-medium leading-normal
          relative ${classes}`}>
            {text}
        </p>
      }
 
      { type === 'paragraph' && 
       <p className={`z-20 text-base
          font-normal leading-normal
          relative ${classes}`}>
            {text}
        </p>
      }
 
      { type === 'paragraph-max' && 
       <p className={`z-20 text-3xl
          font-normal leading-normal
          relative ${classes}`}>
            {text}
        </p>
      }


      { type === "topic" &&
        <p className={`text-base uppercase 
          font-medium tracking-wider pb-3
          ${classes}
          `}>
              
          {text}
        </p>
      }

      
      { type === "h4" && 
        <h4 className={`text-lg ${classes}`}>
          {text}
        </h4>
      }
    </>
  )
}