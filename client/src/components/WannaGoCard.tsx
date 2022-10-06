import { dateFormatter } from '../utils/helperFunctions';

type Props = { wannaGo: any}

const WannaGoCard = ({ wannaGo } : Props) => {
  const dateTime = dateFormatter(wannaGo.when);
  return (
    <div className='border-2 border-third m-auto bg-second shadow-lg'>
      <div>
          <p className='font-space-grotesk text-third'>What:</p>{' '}
          <p className='font-nbinternational font-light text-fourth'> {wannaGo.what}</p>
      </div>
      <div>
          <p className='font-space-grotesk text-third'>Where:</p>{' '}
          <p className='font-nbinternational font-light text-fourth'> {wannaGo.where}</p>
      </div>
      <div>
          <p className='font-space-grotesk text-third'>When:</p>
          <p className='font-nbinternational font-light text-fourth'>
            {dateTime.wannaGoFormat}, At {dateTime.time}
          </p>
      </div>
    </div>
  );
};

export default WannaGoCard;
