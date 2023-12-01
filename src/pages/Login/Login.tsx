import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { Header } from '../../components/Header/Header'
import { Titulo } from '../../components/Layout/Texto/Titulo'
import { Subtitulo } from '../../components/Layout/Texto/Subtitulo'
import { Texto } from '../../components/Layout/Texto/Texto'
import { Button } from '../../components/Layout/Button/Button'
import { Input } from '../../components/Layout/Form/Input'
import { Label } from '../../components/Layout/Form/Label'


export function Login () {
  const [loginAccountType, setLoginAccountType] = useState('')
  const [pagePath, setPagePath] = useState('')

  useEffect(() => {
    if (loginAccountType === 'aluno')
      setPagePath('/plataforma')
    else 
      setPagePath('/area-do-docente')

  }, [loginAccountType])

  
  return (
    <>
      <Header page='account' />

      <div className="login relative flex justify-center items-center h-screen min-h-[6-0rem] bg-blue-800">
        <div className="min-w-[40rem] w-[40vw] p-20 bg-gray-200 rounded-xl"> 
          <Titulo 
            classes="sr-only" 
            text="Página de Login"
          />

          <Subtitulo 
            classes="text-center text-gray-800 pb-2"  
            text="Efetuar Login" 
          />

          { loginAccountType ?
            <div>
              <Texto 
                type="paragraph"
                classes="text-center pb-5 max-w-xs m-auto text-gray-800" 

                text="Escreva suas credenciais e tenha
                  acesso a plataforma Konecta LIBRAS."
              />
            
              <form className="form flex flex-col">
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
                  autoComplete={true}
                  placeholder="Seu e-mail"
                />

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
                  placeholder="Senha" 
                />

                <NavLink to={pagePath} title="Página Inicial">
                  <Button
                    text="Entrar" 
                    type="submit"
                    classes="text-white bg-blue-400"
                  />
                </NavLink>
              </form>
            </div>
          :  
            <div className="flex justify-center gap-2 my-4">
              <Button 
                type="button"
                text="Aluno"
                value="aluno"
                classes="bg-blue-500 text-white"
                clickEvent={() => setLoginAccountType('aluno')}
              />
              
              <Button 
                type="button"
                text="instrutor"
                value="instrutor"
                classes="bg-blue-500 text-white"
                clickEvent={() => setLoginAccountType('instrutor')}
              />
            </div>
          }
          
          <NavLink to="/criar-conta" title="Criar conta">
            <Texto 
              type="detail"
              text="Não possui conta? Criar conta."
              classes={`pt-4 font-medium text-gray-500 underline text-center ${loginAccountType === '' ? 'text-center' : ''}`} 
            />
          </NavLink>
        </div>
      </div>
    </>
  )
}