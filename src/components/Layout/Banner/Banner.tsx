import { Subtitle } from "../Text/Subtitle";

interface BannerProps {
  text: string,
  imageUrl: string,
  classes?: string,
}

export function Banner({text, imageUrl, classes}:BannerProps) {
  return (
    <>
      <section 
        className={`
          pl-10 
          w-full h-40
          rounded-md relative 
          overflow-hidden flex 
          items-center lg:h-60 lg:pl-20

          after:content-[''] after:absolute 
          after:inset-y-0 after:right-0 
          after:w-3/5 after:bg-gradient-to-r 
          after:from-blue-800 after:from-20% after:to-transparent
          ${classes}`}>
          
          <Subtitle text={text}/>

          <img 
            alt="" 
            src={imageUrl} 
            className="ml-auto w-3/5 h-full object-cover" 
          />
      </section>
    </>
  )
}