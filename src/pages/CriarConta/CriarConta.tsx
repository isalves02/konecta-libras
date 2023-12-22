import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { FormPagamento } from '../../components/Layout/Form/FormPagamento'
import { AccountTypeContext } from '../../contexts/GeneralContextProvider'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Layout/Button/Button'
import { Label } from '../../components/Layout/Form/components/Label'
import { Input } from '../../components/Layout/Form/components/Input'
import { Title } from '../../components/Layout/Text/Title'
import { Subtitle } from '../../components/Layout/Text/Subtitle'
import { Text } from '../../components/Layout/Text/Text'

export function CriarConta () {
  const { registerType } = useContext(AccountTypeContext)

  return (
    <>
      <Header page="account" />

      <div className="criar-conta relative flex justify-center items-center h-screen min-h-[5rem] overflow-hidden bg-blue-800">
        <div 
          className="w-2/4 px-12 py-20 
            min-w-[40rem] max-h-[80vh]  
            bg-gray-200 rounded-xl 
            overflow-y-scroll
          ">
          
          <Title 
            classes="sr-only" 
            text="Página para criar sua conta"
          />

          <Subtitle 
            classes="text-center text-gray-800 pb-6"  
            text="Criar Conta" 
          />
         
          <form className="form flex flex-col">
            <div className="flex justify-center gap-8 pb-4">
              <div className="flex items-center gap-1">
                <Input 
                  id="aluno" 
                  type="radio" 
                  name="tipoConta" 
                  value="aluno" 
                  isChecked={registerType==="aluno"} 
                  hasEvent={true}
                />

                <Label 
                  name="aluno"
                  text="Sou aluno"
                />
              </div>

              <div className="flex items-center gap-1">
                <Input 
                  type="radio" 
                  id="instrutor" 
                  name="tipoConta" 
                  value="instrutor" 
                  hasEvent={true}
                />

                <Label 
                  name="instrutor"
                  text="Sou instrutor"
                />
              </div>
            </div>


            <Label 
              name="name"
              text="Digite o seu nome e sobrenome"
              sreader={true}
            />
            <Input 
              id="name" 
              name="name" 
              type="text" 
              required={true}
              placeholder="Seu nome e sobrenome"
            />

            <Label 
              name="email"
              text="Digite o seu e-mail"
              sreader={true}
            />
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required={true}
              placeholder="Seu e-mail"
            />

            <Label 
              name="cpf"
              text="Digite o seu cpf"
              sreader={true}
            />
            <Input 
              id="cpf" 
              name="cpf" 
              type="text"
              required={true}
              placeholder="CPF"

              inputHasMask={true}
              mask="___.___.___-__" 
            />


            {registerType === "instrutor" && 
              <div>
                <Label 
                  name="cnpj"
                  text="Digite o seu cnpj"
                  sreader={true}
                />
                <Input 
                  id="cnpj" 
                  name="cnpj" 
                  type="text"
                  required={true}
                  classes="w-full"
                  placeholder="CNPJ"

                  inputHasMask={true}
                  mask="__.___.___/0001-__" 
                />
              </div>
            }


            <Label 
              name="phone"
              text="Digite o seu celular"
              sreader={true}
            />
            <Input 
              id="phone" 
              name="phone" 
              type="text"
              required={true}
              placeholder="Seu celular"

              inputHasMask={true}
              mask="+55 (__) _ ____-____" 
            />


            <div className="flex gap-2">
              <Label 
                name="password"
                text="Digite a sua senha"
                sreader={true}
              />
              <Input 
                id="password" 
                name="password" 
                type="password"
                required={true}
                maxLength={15}
                classes="w-full"
                placeholder="Senha"
              />

              <Label 
                name="password-confirm"
                text="Confirme sua senha"
                sreader={true}
              />
              <Input 
                id="password-confirm" 
                name="password-confirm" 
                type="password"
                required={true}
                maxLength={15}
                classes="w-full"
                placeholder="Confirme sua senha"
              />
            </div>

            <Label 
              name="dataNascimento"
              text="Digite sua data de nascimento"
              sreader={true}
            />
            <Input 
              required={true}
              id="dataNascimento" 
              name="dataNascimento" 
              type="text"
              classes="w-full"
              placeholder="Data de nascimento"

              inputHasMask={true}
              mask="__/__/____" 
            />

            <Text 
              type="detail"
              text="Informe-nos seu endereço" 
              classes="font-normal text-gray-700 pt-1 pb-2" 
            />
            
            <div className="flex flex-wrap gap-2">
              <Label 
                name="cep"
                text="Digite seu CEP"
                sreader={true}
              />
              <Input 
                id="cep" 
                name="cep" 
                type="text"
                required={true}
                classes="flex-1"
                placeholder="CEP"

                inputHasMask={true}
                mask="_____-___" 
              />
              
              <Label 
                name="cidade"
                text="Digite sua cidade"
                sreader={true}
              />
              <Input 
                id="cidade" 
                name="cidade" 
                type="text"
                required={true}
                classes="w-5/12"
                placeholder="Cidade"
              />
              
              <Label 
                name="UF"
                text="Digite sua UF"
                sreader={true}
              />
              <Input 
                id="uf" 
                name="uf" 
                type="text"
                required={true}
                maxLength={2}
                classes="w-2/12"
                placeholder="UF"
              />


              <Label 
                name="logradouro"
                text="Logradouro"
                sreader={true}
              />
              <Input 
                id="logradouro" 
                name="logradouro" 
                type="text"
                required={true}
                classes="flex-1"
                placeholder="Logradouro"
              />

              <Label 
                name="bairro"
                text="bairro"
                sreader={true}
              />
              <Input 
                id="bairro" 
                name="bairro" 
                type="text"
                required={true}
                classes="w-4/12"
                placeholder="Bairro"
              />

              <Label 
                name="complemento"
                text="complemento"
                sreader={true}
              />
              <Input 
                id="complemento" 
                name="complemento" 
                type="text"
                required={true}
                classes="flex-1"
                placeholder="Complemento"
              />
            </div>
           
            {registerType === "aluno" && 
              <FormPagamento />
            }

            <div className="flex item-center gap-2 text-gray-700 pt-3 pb-4">
              <Input id="policy" name="policy" type="checkbox" required={true} />
              <Label 
                name="policy"
                classes="text-xs"
                text="Estou ciente e aceito os termos da Política de Privacidade."
              />
						</div>


            <Button
              type="submit"
              text="Criar conta" 
              isDisabled={registerType===""}
              classes="text-white bg-blue-400"
            />
          </form>

          <NavLink to="/login" title="Login">
            <Text 
              type="detail"
              text="Já possui conta? Fazer Login."
              classes="pt-4 font-medium text-gray-800 underline" 
            />
          </NavLink>
        </div>
      </div>
    </>
  )
}