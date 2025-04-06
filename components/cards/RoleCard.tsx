interface Props {
  title: string;
  colors: string;
  className?: string;
}

const RoleCard = ({ title, colors, className = '' }: Props) => {
  return (
    <div
      className={`w-[130px] h-[180px] rounded-[20px] overflow-hidden bg-gradient-to-br ${colors} shadow-md ${className}`}
    >
      <div className='flex flex-col justify-end w-full h-full p-3'>
        <h4 className='text-sm font-bold text-white'>{title}</h4>
      </div>
    </div>
  );
};

export default RoleCard;