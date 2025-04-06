interface Props {
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({
  title,
  description,
  gradient = 'from-amber-500 to-amber-700',
}: Props) => {
  return (
    <div
      className={`w-[240px] h-[300px] bg-gradient-to-b  ${gradient} rounded-[24px] shadow-xl overflow-hidden`}
    >
      <div className='flex flex-col justify-end w-full h-full p-6'>
        <h3 className='text-xl font-bold text-white'>{title}</h3>
        <p className='mt-2 text-sm text-white/90'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;