import { ArrowRight } from 'phosphor-react';
import { CardProps  } from "../../../interfaces/GeneralProps";
import { Text } from '../Text/Text';

export function Card({text, hasHover, hasIcon, classes}:CardProps) {
  return (
    <>
      <div className={`rounded-md p-8 pb-10 
        lg:p-12 lg:pb-16 
        flex items-center justify-between 
        transition-[background]
         relative w-full
        bg-blue-600/50 ${hasHover && "cursor-pointer hover:bg-blue-600/80"} ${classes}`}>

        <Text type="h4" text={text} classes="uppercase tracking-wide" />
        {hasIcon && <ArrowRight size={32} />}
      </div>
    </>
  )
}