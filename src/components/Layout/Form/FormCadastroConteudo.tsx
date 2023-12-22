import { Button } from "../Button/Button";
import { Input } from "./components/Input";
import { Label } from "./components/Label";

export function FormCadastroConteudo() {
  return (
    <>
      <form>
        <div className="flex gap-8">
          <div className="flex flex-col w-full">
            <Label name="videoTitle" text="Título:" classes="text-white/80 mb-2" />
            <Input id="videoTitle" name="videoTitle" type="text" placeholder="Adicione o título do seu vídeo" classes="mb-4" required={true} />

            <Label name="completelyInLIBRAS" text="Esse vídeo é completamente em LIBRAS?" classes="text-white/80 mb-2" />
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Input 
                  id="simLibras" 
                  type="radio" 
                  name="completelyInLIBRAS" 
                  value="Sim" 
                />

                <Label 
                  name="simLibras"
                  text="Sim"
                  classes="text-white/80"
                />
              </div>

              <div className="flex items-center gap-1">
                <Input 
                  type="radio" 
                  id="naoLibras" 
                  name="completelyInLIBRAS" 
                  value="Não" 
                />

                <Label 
                  name="naoLibras"
                  text="Não"
                  classes="text-white/80"
                />
              </div>
            </div>
                
            <Label name="hasSubtitle" text="Possui legendas?" classes="text-white/80 mt-4 mb-2" />
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Input 
                  id="simLegenda" 
                  type="radio" 
                  name="hasSubtitle" 
                  value="Sim" 
                />

                <Label 
                  name="simLegenda"
                  text="Sim"
                  classes="text-white/80"
                />
              </div>

              <div className="flex items-center gap-1">
                <Input 
                  type="radio" 
                  id="naoLegenda" 
                  name="hasSubtitle" 
                  value="Não" 
                />

                <Label 
                  name="naoLegenda"
                  text="Não"
                  classes="text-white/80"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-blue-900 rounded-md p-12">
            <Label name="videoToUpload" text="Importe o seu vídeo (apenas no formato MP4, até 1 minuto)" classes="text-white/80 mb-2" />
            <Input id="videoToUpload" name="videoToUpload" type="file" accept="video/mp4" required={true} />
          </div>
        </div>

        <Button
          type="submit"
          text="Enviar conteúdo" 
          classes="text-white bg-blue-500 mt-8"
        />
      </form>
    </>
  )
}