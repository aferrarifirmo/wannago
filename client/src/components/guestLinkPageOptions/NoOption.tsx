import { putRejectCounter } from '../../utils/apis/wannagoApiServices/putWannaGos';


type Props = { id: null | string, rejectCounter: number, ownerName: string }

const NoOption = ({ id, rejectCounter, ownerName }: Props) => {
  console.log(rejectCounter)
  putRejectCounter(id, ++rejectCounter)
  return <h3 className='textGuestLink'>We'll let know {ownerName} that you can't go. People will miss you!</h3>;
};

export default NoOption;