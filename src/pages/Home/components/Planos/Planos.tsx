import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { Title } from "../../../../components/Layout/Text/Title"
import { AccountTypeContext } from '../../../../contexts/GeneralContextProvider'

export function Planos () {
  const { handleButtonRegisterType } = useContext(AccountTypeContext)

	return (
		<>
			<section className="planos bg-blue-800" id="planos">
				<div className="container py-28 sm:py-40 md:py-52">
          <Title 
            classes="pb-8 md:pb-16 max-w-3xl" 
            text="Assine o plano e tenha acesso aos nossos conteúdos"
          />

          <div 
            className="
              pt-8 pr-5 pb-8 pl-10
              md:pt-16 md:pr-11 md:pl-20 
              rounded-md block max-w-4xl
              bg-gradient-to-t from-blue-750 
              via-blue-600 to-blue-750">
              
                <h4 className="text-3xl md:text-5xl font-bold leading-tight pb-5">
                  R$12,90
                  <span className="text-xl font-light uppercase">/Mês</span>
                </h4>

                <ul className="text-base md:text-xl text-white leading-relaxed list-disc pb-16 pl-5">
                  <li>Filtros personalizados para você</li>
                  <li>Acesso a área do aluno</li>
                  <li>Acesso completo a todos os conteúdos</li>
                  <li>Novidades inéditas de atualização de conteúdo</li>
                  <li>Cancele quando quiser.</li>
                </ul>

                <div className="flex flex-col md:justify-between md:flex-row md:items-center">
                  <span className="text-xs md:text-sm font-light opacity-50 tracking-wide">
                    *devido a dinâmica de vídeos curtos da plataforma, não é permitido reembolso.
                  </span>

                  <NavLink to="/criar-conta" title="Criar conta">
                    <button 
                      type="button" 
                      className="mt-2 text-lg font-bold uppercase tracking-widest text-white md:text-xl md:mt-0" 
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