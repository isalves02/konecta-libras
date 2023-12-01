import { Button } from "../Button/Button";

export function FormTrabalheConosco() {
  return (
    <>
      <form className="form flex flex-col">
        <label htmlFor="name" className="sr-only">Digite o seu nome</label>
        <input 
          id="name"
          name="name" 
          type="text"
          placeholder="Seu nome"
          required
          className="py-3 px-4 text-sm 
            rounded-md mb-2
            bg-gray-400 text-blue-800 
            placeholder:text-blue-800" 
        />

        <label htmlFor="email" className="sr-only">Digite o seu e-mail</label>
        <input 
          id="email" 
          name="email" 
          type="text" 
          required
          placeholder="Seu e-mail"
          className="py-3 px-4 text-sm 
            rounded-md mb-2
            bg-gray-400  text-blue-800 
            placeholder:text-blue-800" 
        />

        <label htmlFor="phone" className="sr-only">Digite o seu telefone/celular</label>
        <input 
          id="phone" 
          name="phone" 
          type="text" 
          required
          placeholder="Seu telefone/celular" 
          className="py-3 px-4 text-sm
            rounded-md mb-2
            bg-gray-400  text-blue-800 
            placeholder:text-blue-800" 
        />

        <label htmlFor="experience-time" className="sr-only">Há quanto tempo você é fluente em LIBRAS?</label>
        <select 
          id="experience-time" 
          name="experience-time" 
          className="py-3 px-4 text-sm
            rounded-md mb-2 
            bg-gray-400 text-blue-800"
          required>
          
          <option defaultValue="Há quanto tempo você é fluente em LIBRAS?" disabled>Há quanto tempo você é fluente em LIBRAS?</option>
          <option value="Menos de 1 ano">Menos de 1 ano</option>
          <option value="Entre 1 e 2 anos">Entre 1 e 2 anos</option>
          <option value="Mais de 3 anos">Mais de 3 anos</option>
          <option value="Não sou fluente em LIBRAS">Não sou fluente em LIBRAS</option>
        </select>

        <label htmlFor="experience-teaching" className="sr-only">Já ensinou LIBRAS?</label>
        <select 
          id="experience-teaching" 
          name="experience-teaching" 
          className="py-3 px-4 text-sm 
            rounded-md mb-2	
            bg-gray-400 text-blue-800" 
          required>
          
          <option defaultValue="Já ensinou LIBRAS?" disabled>Já ensinou LIBRAS?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <label htmlFor="experience-description" className="sr-only">Conte-nos suas experiências ensinando LIBRAS</label>
        <textarea 
          id="experience-description" 
          name="experience-description"
          className="bg-gray-400  text-blue-800 
            placeholder:text-blue-800 
            py-3 px-4 text-sm rounded-md mb-2 h-20" 
          placeholder="Conte-nos suas experiências ensinando LIBRAS" />

        <label htmlFor="reason" className="sr-only">Por que você quer fazer parte do Konecta LIBRAS?</label>
        <textarea 
          id="reason" 
          name="reason" 
          className="bg-gray-400  text-blue-800 
            placeholder:text-blue-800 
            py-3 px-4 text-sm rounded-md mb-2 h-20" 
          placeholder="Por que você quer fazer parte do Konecta LIBRAS?" />

        <div className="flex item-center gap-2 text-gray-400">
          <input type="checkbox" name="policy" required />
          <label htmlFor="policy" className="text-xs">Estou ciente e aceito os termos da Política de Privacidade.</label>
        </div>

        <Button 
          type="submit"
          text="Enviar"
          classes="text-blue-600 bg-white mt-6"
        />
      </form>
    </>
  )
}