type Props = { handleClick: any };

export const YesButton = ({ handleClick }: Props) => {
  return (
    <button
      title='Yes, I wannaGo'
      className='button important'
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
      className='button'
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
      className='button'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};
