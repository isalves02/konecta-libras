import { ArrowRight } from 'phosphor-react';
import { CardProps  } from "../../../interfaces/GeneralProps";
import { Texto } from '../Texto/Texto';

export function Card({text}:CardProps) {
  return (
    <>
      <div className="rounded-md p-12 pb-16
        transition-all cursor-pointer relative
        bg-blue-600/50 hover:bg-blue-600/80">

        <Texto type="paragraph-max" text={text} />
        <ArrowRight className="absolute right-4 bottom-4" size={32} />
      </div>
    </>
  )
}