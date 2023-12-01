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
          banner w-full h-80 
          rounded-md relative 
          overflow-hidden flex 
          items-center pl-20

          after:content-[''] after:absolute 
          after:inset-y-0 after:right-0 
          after:w-3/5 after:bg-gradient-to-r 
          after:from-blue-800 after:from-20% after:to-transparent
          ${classes}`}>

          <h3 className="text-4xl leading-normal font-medium max-w-md relative z-20">{text}</h3>

          <img 
            alt="" 
            src={imageUrl} 
            className="ml-auto w-3/5 h-full object-cover" 
          />
      </section>
    </>
  )
}