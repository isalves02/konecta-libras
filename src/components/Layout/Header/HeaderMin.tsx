import { ArrowLeft } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function HeaderMin() {
  return (
    <>
      <NavLink to="/" title="Página Inicial">
        <div className="flex items-center gap-2 ml-4">
          <ArrowLeft 
            color="white"
            size={20}
          />
          
          <h4 className="uppercase text-sm font-medium">Voltar</h4>
        </div>
      </NavLink>
    </>
  )
}