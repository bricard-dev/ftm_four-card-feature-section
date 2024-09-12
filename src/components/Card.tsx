import { cn } from '../utils/cn';

export interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  topColor: string;
  className?: string;
}

export default function Card({
  title,
  description,
  imgSrc,
  imgAlt = `${title} icon`,
  topColor = 'cyan',
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        `xl:w-[350px] xl:h-[250px] p-7 relative flex flex-col rounded-lg shadow-card overflow-hidden before:w-full before:h-1 before:absolute before:top-0 before:left-0`,
        {
          'before:bg-cyan': topColor === 'cyan',
          'before:bg-red': topColor === 'red',
          'before:bg-blue': topColor === 'blue',
          'before:bg-orange': topColor === 'orange',
        },
        className
      )}
    >
      <h2 className="font-semibold text-xl leading-10">{title}</h2>
      <p className="mb-[33px] xl:mb-10 text-[.8125rem] text-grayishBlue leading-[1.7] tracking-[.09px]">
        {description}
      </p>
      <img
        className="w-[57px] xl:w-[64px] h-[57px] xl:h-[64px] self-end"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
}
