export default function Card({
  title,
  description,
  imgSrc,
  imgAlt,
  topColor,
}: {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  topColor: string;
}) {
  return (
    <div
      className={`p-7 relative flex flex-col rounded-lg shadow-card overflow-hidden before:w-full before:h-1 before:absolute before:top-0 before:left-0 before:bg-${topColor}`}
    >
      <h2 className="font-semibold text-xl leading-10">{title}</h2>
      <p className="mb-[33px] text-[.8125rem] text-grayishBlue leading-[1.7] tracking-[.09px]">
        {description}
      </p>
      <img
        className="w-[57px] h-[57px] self-end"
        src={imgSrc}
        alt={imgAlt || `${title} icon`}
      />
    </div>
  );
}
