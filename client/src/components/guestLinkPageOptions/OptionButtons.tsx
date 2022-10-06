type Props = { handleClick: React.MouseEventHandler<HTMLButtonElement> };

export const YesButton = ({ handleClick }: Props) => {
  return (
    <button
      title='Yes, I wannaGo'

      className='font-space-grotesk 
                 font-bold 
                 text-second 
                 bg-third 
                 h-50 
                 mt-10 
                 p-4
                 hover:scale-110 ease-in duration-100'

      data-testid='Yes, I wannaGo'
      onClick={handleClick}
    >
      I wannaGo!
    </button>
  );
};

export const NoButton = ({ handleClick }: Props) => {
  return (
    <button
      title="I can't go"
      className='font-space-grotesk text-second bg-third h-50 mt-10 p-4 hover:scale-110 ease-in duration-100'
      data-testid="I can't"
      onClick={handleClick}
    >
      I can't
    </button>
  );
};

export const MaybeButton = ({ handleClick }: Props) => {
  return (
    <button
      title='Maybe'
      className='font-space-grotesk text-second bg-third h-50 mt-10 p-4 hover:scale-110 ease-in duration-100'
      data-testid='maybe-btn'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};
