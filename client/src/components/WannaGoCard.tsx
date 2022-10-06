import { dateFormatter } from '../utils/helperFunctions';

type Props = { wannaGo: { when: number, what: string, where: string} | any}

const WannaGoCard = ({ wannaGo } : Props) => {

  const dateTime = dateFormatter(wannaGo.when);

  return (
    <div className='border-2 border-third m-auto bg-second shadow-lg hover:scale-105 ease-in duration-100'>
      <div>
          <p className='font-space-grotesk text-third mt-4 pl-4'>
            What:
            <span className='font-nbinternational font-light text-fourth'> {wannaGo.what}</span>
          </p>{' '}
      </div>
      <div>
          <p className='font-space-grotesk text-third pl-4'>
            Where:
            <span className='font-nbinternational font-light text-fourth'> {wannaGo.where}</span>
          </p>{' '}
      </div>
      <div>
          <p className='font-space-grotesk text-third pl-4'>
            When:
            <span className='font-nbinternational font-light text-fourth'>
            {dateTime.wannaGoFormat}, At {dateTime.time}
          </span>
          </p>
      </div>
    </div>
  );
};

export default WannaGoCard;
