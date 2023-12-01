import { Titulo } from "../../../../components/Layout/Texto/Titulo"
import { Texto } from "../../../../components/Layout/Texto/Texto"
import { Button } from "../../../../components/Layout/Button/Button"
import { FormTrabalheConosco } from "../../../../components/Layout/Form/FormTrabalheConosco"

export function TrabalheConosco () {
	return (
		<>
			<section className="trabalhe-conosco relative bg-blue-850" id="trabalhe-conosco">
				<div className="container py-52 relative flex items-center justify-between z-10">
					<div className="max-w-3xl">
						<Texto
							type="topic"
              classes="pb-2" 
              text="Trabalhe Conosco"
            />

            <Titulo 
              classes="pb-8" 
              text="Faça parte do nosso time!"
            />

            <Texto  
              classes="pb-12"
							type="paragraph-max"
              text="Você é fluente em Língua Brasileira de Sinais e 
							gostaria de fazer parte da nossa plataforma? 
							Preencha o formulário e entraremos em contato com você!"   
            />

						<Button 
							type="button"
							text="Suas vantagens"
							classes="text-blue-600 bg-white"
						/>
					</div>

					<FormTrabalheConosco />
				</div>

				<div className="detail-radial-gradient w-4/5 h-3/5 absolute top-1/2  -left-1/4 z-0 -translate-y-1/2" />
				<div className="detail-radial-gradient w-4/5 h-3/5 absolute top-1/2 -right-1/4 z-0 -translate-y-1/2" />
			</section>
		</>
	)
} 