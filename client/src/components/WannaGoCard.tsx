import { dateFormatter } from '../utils/helperFunctions';

type Props = { wannaGo: { when: number, what: string, where: string} | any}

const WannaGoCard = ({ wannaGo } : Props) => {

  const dateTime = dateFormatter(wannaGo.when);

  return (
    <div className='wannaGoCardContainer'>
      <div>
        <h4>
          <p>What:</p>{' '}
          <strong className='description'> {wannaGo.what}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <p>Where:</p>{' '}
          <strong className='description'> {wannaGo.where}</strong>
        </h4>
      </div>
      <div>
        <h4>
          <p>When:</p>
          <strong className='description'>
            {dateTime.wannaGoFormat}, At {dateTime.time}
          </strong>
        </h4>
      </div>
    </div>
  );
};

export default WannaGoCard;
