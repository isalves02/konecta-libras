import { Text } from "../Text/Text";

interface FilterBoxProps {
  name: string,
  classes?: string,
}

export function FilterBox({ name, classes }:FilterBoxProps) {
  return (
    <>
    <div 
      className={`filtro flex  
        items-center justify-center py-3 px-5
        rounded-md gap-2 border sm:py-5 sm:px-10 
        border-solid border-gray-600 ${classes}`}>
          
        <Text type="detail" text={name} classes="uppercase tracking-widest" />
    </div>
    </>
  )
}