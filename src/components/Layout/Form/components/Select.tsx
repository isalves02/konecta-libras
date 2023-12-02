import { SelectProps } from "../../../../interfaces/GeneralProps";

export function Select ({
  id,
  name,
  options,
  required
}:SelectProps) {

  
  return (
    <>
      <select 
        id={id} 
        name={name}
        required={required}
        className="py-4 px-4 
        text-sm rounded-md bg-gray-100 text-blue-800 
        placeholder:text-gray-700 mb-3 shadow">
        
        {options.map((option, index) => {
          if (index === 0) {
            return (
              <option key={option.value} defaultValue={option.value} disabled>{option.value}</option>
            )
          }

          return (
            <option key={option.value} value={option.value}>{option.value}</option>
          )
        })}
      </select>
    </>
  )
}