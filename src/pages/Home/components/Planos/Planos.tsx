import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { Title } from "../../../../components/Layout/Text/Title"
import { AccountTypeContext } from '../../../../contexts/GeneralContextProvider'

export function Planos () {
  const { handleButtonRegisterType } = useContext(AccountTypeContext)

	return (
		<>
			<section className="planos bg-blue-800" id="planos">
				<div className="container py-52">
          <Title 
            classes="pb-16 max-w-3xl" 
            text="Assine o plano e tenha acesso aos nossos conteúdos"
          />

          <div 
            className="
              pt-16 pr-11 pb-8 pl-20 
              rounded-md block max-w-4xl
              bg-gradient-to-t from-blue-750 
              via-blue-600 to-blue-750">
              
                <h4 className="text-5xl font-bold leading-tight pb-5">
                  R$12,90
                  <span className="text-xl font-light uppercase">/Mês</span>
                </h4>

                <ul className="text-xl text-white leading-relaxed list-disc pb-16 pl-5">
                  <li>Filtros personalizados para você</li>
                  <li>Acesso a área do aluno</li>
                  <li>Acesso completo a todos os conteúdos</li>
                  <li>Novidades inéditas de atualização de conteúdo</li>
                  <li>Cancele quando quiser.</li>
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-light opacity-50 tracking-wide">
                    *devido a dinâmica de vídeos curtos da plataforma, não é permitido reembolso.
                  </span>

                  <NavLink to="/criar-conta" title="Criar conta">
                    <button 
                      type="button" 
                      className="text-xl font-bold uppercase tracking-widest text-white" 
                      onClick={() => handleButtonRegisterType("aluno") }>
                        Assinar
                    </button>
                  </NavLink>
                </div>
          </div>
				</div>
			</section>
		</>
	)
}