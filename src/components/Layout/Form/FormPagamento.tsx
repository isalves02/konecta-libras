import { useEffect, useContext, useState } from "react"

import { Texto } from "../Texto/Texto"
import { Label } from "./Label"
import { Input } from "./Input"
import { AccountTypeContext } from "../../../contexts/GeneralContextProvider"
import uuid from "react-uuid"


export function FormPagamento() {
  const { paymentMethod } = useContext(AccountTypeContext)
  const [pixCode, setPixCode] = useState('')

  useEffect(() => {
    setPixCode(uuid())
  }, [paymentMethod])


  return (
    <>
      <div className="payment mt-4 bg-gray-100 rounded-md pt-2 pb-8 px-8 shadow mb-2">
        <Texto
          type="topic" 
          text="Resumo" 
          classes="py-3 text-gray-700" 
        />
        
        <div className="p-4 flex justify-between rounded-md shadow
          bg-gradient-to-r from-blue-600 to-blue-750">
          <Texto 
            type="topic"
            text="Plano padrão" 
          />
          <Texto 
            type="detail"
            text="R$12,90/Mês" 
          />
        </div>
        
        <Texto 
          type="topic"
          text="Pagamento" 
          classes="mt-4 text-gray-700" 
        />

        <Texto 
          type="paragraph"
          text="Escolha uma forma de pagamento" 
          classes="pt-1 text-gray-700" 
        />
        
        <div className="flex gap-2 justify-between mt-4 pb-4">
          <div className="flex items-center gap-1 w-full bg-gray-100 shadow rounded-md p-3">
            <Input 
              id="cartao" 
              type="radio"
              name="tipoPagamento" 
              placeholder="Cartão de crédito"
              value="cartao"
              hasEvent={true}
            />

            <Label 
              name="cartao"
              text="Cartão de crédito"
            />        
          </div>

          <div className="flex items-center gap-1 w-full bg-gray-100 shadow rounded-md p-3">
            <Input 
              id="pix" 
              type="radio"
              name="tipoPagamento" 
              placeholder="Pix"
              value="pix"
              hasEvent={true}
            />

            <Label 
              name="pix"
              text="Pix"
            />
          </div>
        </div>

        { paymentMethod === "cartao" && 
          <div>
            <Label 
              name="nameCard"
              text="Digite o nome impresso no cartão"
              sreader={true}
            />
            <Input 
              id="nameCard" 
              type="text"
              name="nomeCard" 
              classes="w-full"
              placeholder="Nome no cartão"
            />


            <Label 
              name="numberCard"
              text="Digite o número do cartão"
              sreader={true}
            />
            <Input 
              id="numberCard" 
              type="text"
              name="numberCard" 
              classes="w-full"
              placeholder="Número do cartão"
              inputHasMask={true}
              mask="____ ____ ____ ____" 
            />

            <div className="flex gap-2">
              <Label 
                name="cvv"
                text="Digite o número do código de segurança"
                sreader={true}
              />
              <Input 
                id="cvv" 
                type="text"
                name="cvv" 
                placeholder="CVV"
                inputHasMask={true}
                mask="___" 
              />

              <Label 
                name="validity"
                text="Digite a validade do cartão"
                sreader={true}
              />
              <Input 
                id="validity" 
                type="text"
                name="validity" 
                classes="w-full"
                placeholder="Validade do cartão"
                inputHasMask={true}
                mask="__/__"
              />
            </div>
          </div>
        }

        { paymentMethod === "pix" && 
          <div>
            <Label 
              name="pixCode"
              classes="mt-4 block"
              text="Copie o código abaixo e efetue o pagamento. Após a confirmação, o acesso será concedido."
            />

            <Input 
              id="pixCode" 
              name="pixCode" 
              type="text" 
              value={pixCode}
              isDisabled={true}
              classes="w-full bg-gray-300 text-gray-800 mt-4"
            />
          </div> 
        }
      </div>
    </>
  )
}