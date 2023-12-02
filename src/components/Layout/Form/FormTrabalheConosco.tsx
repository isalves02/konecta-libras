import { Button } from "../Button/Button";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { Select } from "./components/Select";
import { Textarea } from "./components/Textarea";

export function FormTrabalheConosco() {
  const experience = [
    {value: 'Há quanto tempo você é fluente em LIBRAS?'},
    {value: 'Menos de 1 ano'},
    {value: 'Entre 1 e 2 anos'},
    {value: 'Mais de 3 anos'},
    {value: 'Não sou fluente em LIBRAS'},
  ]

  const teaching = [
    {value: 'Já ensinou LIBRAS?', default: true},
    {value: 'Sim'},
    {value: 'Não'},
  ]
  
  return (
    <>
      <form className="form flex flex-col">
        <Label name="name" text="Digite o seu nome" sreader={true} />
        <Input           
          id="name"
          name="name" 
          type="text"
          required={true}
          placeholder="Seu nome" 
        />
        
        <Label name="email" text="Digite o seu e-mail" sreader={true} />
        <Input           
          id="email"
          name="email" 
          type="text"
          required={true}
          placeholder="Seu e-mail" 
        />
        
        <Label name="phone" text="Digite o seu telefone/celular" sreader={true} />
        <Input           
          id="phone"
          name="phone" 
          type="text"
          required={true}
          inputHasMask={true}
          mask="+__ (__) _ ____-____"
          placeholder="Seu telefone" 
        />

        <Label name="experience-time" text="Há quanto tempo você é fluente em LIBRAS?" sreader={true} />
        <Select 
            id="experience-time" 
            name="experience-time"
            options={experience}
        />

        <Label name="experience-teaching" text="Já ensinou LIBRAS?" sreader={true} />
        <Select 
            id="experience-teaching" 
            name="experience-teaching"
            options={teaching}
        />

        <Label name="experience-description" text="Conte-nos suas experiências ensinando LIBRAS" sreader={true} />
        <Textarea 
          id="experience-description" 
          name="experience-description"
          required={true}
          placeholder="Conte-nos suas experiências ensinando LIBRAS" 
        />

        <Label name="reason" text="Por que você quer fazer parte do Konecta LIBRAS?" sreader={true} />
        <Textarea 
          id="reason" 
          name="reason"
          required={true}
          placeholder="Por que você quer fazer parte do Konecta LIBRAS?" 
        />
      
        <Button 
          type="submit"
          text="Enviar"
          classes="text-blue-600 bg-white"
        />
      </form>
    </>
  )
}