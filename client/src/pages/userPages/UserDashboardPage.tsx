import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { putOwnerToWannaGo, getUserById } from '../../utils/apis/userApiServices/userApi';
import { getAllWannaGosOfUser } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  getNumOfActiveWannaGos,
  getNumOfOlderWannaGos,
  aggregatePplGoing,
  aggregateRejections,
  aggregateSuggestions,
  aggregateOpenedTimes,
} from '../../utils/helperFunctions';
import { CLIENT_PORT, URL } from '../../utils/config';
import WannaGoCard from '../../components/WannaGoCard';
import '../../css/MaybeOption.css';
import DonutChartTotals from '../../components/charts/DonutChartTotals';
import RadialChartTotals from '../../components/charts/RadialChartTotals';
import TotalWannaGos from '../../components/charts/TotalWannaGos';

type Props = { user: any, setUser: any, wannaGo: any, justCreatedWG: any, setJustCreatedWG: any }

const UserDashboard = ({
  user,
  setUser,
  wannaGo,
  justCreatedWG,
  setJustCreatedWG,
}: Props) => {
  const [totalPplGoing, setTotalPplGoing] = useState(0);
  const [totalRejections, setTotalRejections] = useState(0);
  const [totalSuggestions, setTotalSuggestions] = useState(0);
  const [totalWannaGos, setTotalWannaGos] = useState(0);
  const [numOfActiveWannaGos, setNumOfActiveWannaGos] = useState(0);
  const [numOfOlderWannaGos, setNumOfOlderWannaGos] = useState(0);
  const [numOfTimesLinksOpened, setNumOfTimesLinksOpened] = useState(0);
  const [totalEngagement, setTotalEngagement] = useState(0);
  const [totalSuccessRatio, setTotalSuccessRatio] = useState(0)
  const [allUserWGs, setAllUserWGs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    handlePromise();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePromise = async () => {
    const userToRender = await getUserById(currentUser.uid);
    setUser(userToRender);

    if (justCreatedWG) {
      console.log('wannagoID', wannaGo._id);
      await putOwnerToWannaGo(wannaGo._id, userToRender._id);
      const allUserWannaGos = await getAllWannaGosOfUser(userToRender._id);
      setAllUserWGs(allUserWannaGos);
      setJustCreatedWG(false);
      return;
    }

    const totalSuccess = () => {
      return Math.floor((aggregatePplGoing(allUserWannaGos)/aggregateOpenedTimes(allUserWannaGos))*100)
    }

    const totalEng = () => {
      return Math.floor(((aggregatePplGoing(allUserWannaGos)+aggregateRejections(allUserWannaGos)+aggregateSuggestions(allUserWannaGos))/aggregateOpenedTimes(allUserWannaGos))*100)
    }

    const allUserWannaGos: [] = await getAllWannaGosOfUser(userToRender._id);
    setAllUserWGs(allUserWannaGos);
    console.log(allUserWannaGos.length);
    setTotalWannaGos(allUserWannaGos.length);
    setTotalPplGoing(aggregatePplGoing(allUserWannaGos));
    setTotalRejections(aggregateRejections(allUserWannaGos));
    setTotalSuggestions(aggregateSuggestions(allUserWannaGos));
    setNumOfActiveWannaGos(getNumOfActiveWannaGos(allUserWannaGos));
    setNumOfOlderWannaGos(getNumOfOlderWannaGos(allUserWannaGos));
    setNumOfTimesLinksOpened(aggregateOpenedTimes(allUserWannaGos));
    setTotalSuccessRatio(totalSuccess());
    setTotalEngagement(totalEng());
    console.log('this is all userWannago', allUserWannaGos);
    console.log('this is setted, ', allUserWGs);
  };

  return (
    <>
      <h4 className='welcome'>Welcome {user.name}!</h4>
      <h3>Number of times your links were opened: {numOfTimesLinksOpened}</h3>
      <div className='testingGrid'>
      <DonutChartTotals going={totalPplGoing} maybe={totalSuggestions} notGoing={totalRejections}></DonutChartTotals>
      <RadialChartTotals engagement={totalEngagement} successRatio={totalSuccessRatio}></RadialChartTotals>
      <TotalWannaGos total={totalWannaGos} active={numOfActiveWannaGos} past={numOfOlderWannaGos}></TotalWannaGos>
      </div>
      <h4 className='justCreatedWannaGo'>These are your wannagos:</h4>
      <div className='holdWannaGos'>
        {allUserWGs &&
          allUserWGs
            .sort((a: any, b: any) => {return Number(new Date(a.when)) - Number(new Date(b.when))})
            .map((wannaGo: any) => {
              return (
                <a
                  key={wannaGo._id}
                  target='blank'
                  href={`${URL}${CLIENT_PORT}/user/wannago/stats/id=${wannaGo._id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <WannaGoCard
                    key={wannaGo._id}
                    wannaGo={wannaGo}
                  />
                </a>
              );
            })}
      </div>
    </>
  );
};

export default UserDashboard;
