import Image, { StaticImageData } from "next/image";

type ItemCardProps = {
  img: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
};

const ItemCard = ({ img, imgAlt, title, description }: ItemCardProps) => {
  return (
    <div className="flex h-48 w-full max-w-3xl overflow-hidden rounded-lg shadow-md">
      <div className="relative w-1/2">
        <Image
          src={img}
          fill
          alt={imgAlt}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-lg text-white font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
