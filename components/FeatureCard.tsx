import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex-1 flex flex-col items-center text-center">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageSrc}
          alt={altText}
          width={500} // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title and Description */}
      <p className="mt-4 text-lg font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
