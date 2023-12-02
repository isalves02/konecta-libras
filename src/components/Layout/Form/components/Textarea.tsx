import { TextareaProps } from "../../../../interfaces/GeneralProps";

export function Textarea ({
  id,
  name,
  placeholder,
  required
}:TextareaProps) {

  return (
    <textarea 
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className="py-4 px-4 
          text-sm rounded-md
          bg-gray-100 text-blue-800 h-28
          placeholder:text-gray-700 mb-3 shadow" 
       />
  )
}