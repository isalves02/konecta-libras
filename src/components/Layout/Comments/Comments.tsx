import uuid from "react-uuid"
import { CommentsData } from "../../../data/CommentData"
import { Texto } from "../Texto/Texto"

export function Comments() {
  const Comments = CommentsData

  return (
    <>
      <div className="mt-12">
        <Texto 
          type="h4" 
          text="Comentários" 
          classes="text-gray-200 border-b-default pb-2 mb-4" 
        /> 

        <ul>
          {Comments.map(comment => {
            return (
              <li key={uuid()+comment.comment}
                className="flex flex-col p-8 gap-3 bg-blue-300/30 rounded-md mb-4">
                  <Texto 
                    text={comment.name} 
                    classes="text-base"
                  />
                  
                  <Texto 
                    text={comment.comment} 
                    classes="text-md"
                  />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}