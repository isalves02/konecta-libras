import { TagProps } from "../../../interfaces/GeneralProps";

export function Tag({text, type}:TagProps) {
  let bgColor: string;
 
  if (type === "Publicado") {
    bgColor = "bg-green-700";
  } else if (type === "Pendente") {
    bgColor = "bg-yellow-600";
  } else {
    bgColor = "bg-red-800";
  }

  return (
    <>
      <span className={`
        px-4 py-2 rounded-md 
        inline-block mb-3 ${bgColor}`
        }>
          
        {text}
      </span>
    </>
  )
}