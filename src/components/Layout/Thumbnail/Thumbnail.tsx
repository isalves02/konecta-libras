import { Play } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Text } from '../Text/Text'
import { ThumbnailProps } from '../../../interfaces/GeneralProps'


export function Thumbnail({ imageUrl, classes, title, category }: ThumbnailProps) {
  return (
    <>
      <NavLink to='interna'>
        <div className={`mb-2 relative overflow-hidden rounded-md ${classes}`}>
          <img 
            alt={title}
            src={imageUrl} 
            className={`w-full h-full inset-0
              absolute opacity-50 transition-opacity
              hover:opacity-100 object-cover
            `}
          />
          
          <Play 
            color="white"
            size={64}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          { title && 
            <div className="p-4 absolute text-base tracking-wider bottom-0 inset-x-0 bg-black/60">
              <Text text={title} />
            </div>
          }

          { category &&
            <span 
              className="px-4 py-2 
                rounded-md block font-medium
                bg-yellow-500 text-white 
                absolute uppercase top-2 right-2
                text-base tracking-wider">
            
                  {category}
            </span>
          }
        </div>  
      </NavLink>
    </>
  )
}