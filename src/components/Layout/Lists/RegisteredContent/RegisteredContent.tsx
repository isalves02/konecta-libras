import { ArrowRight } from "phosphor-react"
import { Tag } from "../../../../components/Layout/Tag/Tag"
import { VideoRegisteredByTeacher } from "../../../../data/VideoData"
import { Text } from "../../Text/Text"

export function RegisteredContent() {
  const VideosList = VideoRegisteredByTeacher

  return(
    <>
      <ul className="mt-4 rounded-md bg-blue-600/30">
        {VideosList.map(video => {
          return (
            <li key={video.id} className="flex pt-6 pb-8 px-8 gap-3 border-b-default justify-between w-full">
              <div>
                <Tag text={video.status} type={video.status} />
                <div className="flex items-center gap-2">
                  <Text 
                    type="h4"
                    text="Título:" 
                    classes="uppercase"
                  />
                  <Text 
                    type="paragraph"
                    text={video.title} 
                    classes="font-thin"
                  />
                </div>
              </div>

              <ArrowRight className="cursor-pointer" color="white" size={32} />
            </li>
          )
        })}
      </ul>
    </>
  )
}