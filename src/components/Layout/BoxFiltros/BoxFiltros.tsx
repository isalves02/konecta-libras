interface FilterBoxProps {
  name: string,
  classes?: string,
}

export function BoxFiltros({ name, classes }:FilterBoxProps) {
  return (
    <>
    <div 
      className={`filtro flex py-5 px-10 
        items-center justify-center
        rounded-md gap-2 border
        border-solid border-gray-600 ${classes}`}>

      <h3 className="text-base uppercase tracking-widest">{name}</h3>
    </div>
    </>
  )
}