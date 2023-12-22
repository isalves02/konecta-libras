import { ArrowRight } from 'phosphor-react';
import { CardProps  } from "../../../interfaces/GeneralProps";
import { Text } from '../Text/Text';

export function Card({text, hasHover}:CardProps) {
  return (
    <>
      <div className={`rounded-md p-12 pb-16 flex items-center 
        justify-between transition-all cursor-pointer relative
        bg-blue-600/50 ${hasHover && "hover:bg-blue-600/80"}`}>

        <Text type="h4" text={text} classes="uppercase tracking-wide" />
        <ArrowRight size={32} />
      </div>
    </>
  )
}