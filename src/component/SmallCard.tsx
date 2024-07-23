interface SmallCardProps {
  text: string;
  iconPath: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ text, iconPath }) => {
  return (
    <div className="flex-col mx-auto text-center border-2 p-2 sm: mb-4 border-gray-300 basis-auto w-[20%] rounded-xl">
      <div className=" basis-auto  md:h-[30%]">
        <svg
          className="h-[80%] w-[80%] "
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconPath}></path>
        </svg>
      </div>
      <p className="mt-4 text-xl font-semibold">{text}</p>
    </div>
  );
};

export default SmallCard;
