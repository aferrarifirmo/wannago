type Props = { handleClick: React.MouseEventHandler<HTMLButtonElement> };

export const YesButton = ({ handleClick }: Props) => {
  return (
    <button
      title='Yes, I wannaGo'
      className='button important'
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
      className='button'
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
      className='button'
      data-testid='maybe-btn'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};
