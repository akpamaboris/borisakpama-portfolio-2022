interface PropsTagProjectCard {
  text: string;
}

const TagProjectCard: React.FC<PropsTagProjectCard> = ({ text }) => {
  return <div className="px-4 py-1 border-2 rounded-full">{text}</div>;
};

export default TagProjectCard;
