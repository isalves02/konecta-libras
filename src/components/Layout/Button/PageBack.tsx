import { ArrowLeft } from "phosphor-react";
import { Text } from "../Text/Text";

export function PageBack() {
  return (
    <>
      <button className="flex items-center gap-4 mb-8 transition-opacity opacity-60 hover:opacity-90">
        <ArrowLeft 
          size={24}
          className="text-gray-100"
          // color="rgb(156 163 175)"
        />

        <Text type="paragraph" text="Voltar" classes="uppercase text-gray-100"/>
      </button>
    </>
  )
}