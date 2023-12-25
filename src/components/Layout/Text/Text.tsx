import { TextProps } from "../../../interfaces/GeneralProps"

export function Text({ type, text, classes }:TextProps) {
  return(
    <> 
      { (!type ) && 
        <p className={`z-20 font-light 
          leading-normal relative ${classes ? classes : ''}`}>
          {text}
        </p>
      }

      { type === 'detail' && 
       <p className={`z-20 text-xs
          font-medium leading-normal
          relative ${classes ? classes : ''}`}>
            {text}
        </p>
      }
 
      { type === 'paragraph' && 
       <p className={`
          z-20 
          text-sm
          md:text-base
          font-normal leading-normal
          relative ${classes ? classes : ''}`}>
            {text}
        </p>
      }
 
      { type === 'paragraph-max' && 
       <p className={`
          z-20 
          text-lg
          md:text-2xl
          lg:text-3xl
          font-normal leading-normal
          relative ${classes ? classes : ''}`}>
            {text}
        </p>
      }


      { type === "topic" &&
        <p className={`uppercase 
          text-sm
          md:text-base
          font-medium tracking-wider pb-3
          ${classes ? classes : ''}
          `}>
              
          {text}
        </p>
      }

      
      { type === "h4" && 
        <h4 className={`
          text-base 
          md:text-lg 
          ${classes ? classes : ''}
          `}>
          
          {text}
        </h4>
      }
    </>
  )
}