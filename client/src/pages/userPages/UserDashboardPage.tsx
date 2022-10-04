import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { putOwnerToWannaGo, getUserById } from '../../utils/apis/userApiServices/userApi';
import { getAllWannaGosOfUser } from '../../utils/apis/wannagoApiServices/getWannaGos';
import {
  getNumOfActiveWannaGos,
  getNumOfOlderWannaGos,
  aggregateSuccessRatio,
  aggregateEngagement,
  aggregatePplGoing,
  aggregateRejections,
  aggregateSuggestions,
  aggregateOpenedTimes,
} from '../../utils/helperFunctions';
import { CLIENT_PORT, URL } from '../../utils/config';
import WannaGoCard from '../../components/WannaGoCard';
import '../../css/MaybeOption.css';

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
  const [totalSuccessRatio, setTotalSuccessRatio] = useState(0);
  const [allUserWGs, setAllUserWGs] = useState([]);
  //The next two states are to render active and expired wannaGos
  // const [activeWannaGos, setActiveWannaGos] = useState();
  // const [olderWannaGos, setOlderWannaGos] = useState();
  
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
    const allUserWannaGos: [] = await getAllWannaGosOfUser(userToRender._id);
    setAllUserWGs(allUserWannaGos);
    setTotalWannaGos(allUserWannaGos.length + 1);
    setTotalPplGoing(aggregatePplGoing(allUserWannaGos));
    setTotalRejections(aggregateRejections(allUserWannaGos));
    setTotalSuggestions(aggregateSuggestions(allUserWannaGos));
    setNumOfActiveWannaGos(getNumOfActiveWannaGos(allUserWannaGos));
    setNumOfOlderWannaGos(getNumOfOlderWannaGos(allUserWannaGos));
    setNumOfTimesLinksOpened(aggregateOpenedTimes(allUserWannaGos));
    setTotalEngagement(aggregateEngagement(allUserWannaGos)-100);
    setTotalSuccessRatio(Math.floor(aggregateSuccessRatio(allUserWannaGos)));
    console.log('this is all userWannago', allUserWannaGos);
    console.log('this is setted, ', allUserWGs);
  };

  return (
    <>
      <h4 className='welcome'>Welcome {user.name}!</h4>
      <div className='testingGrid'>
        <div className='insideGrid'>
          <h3>Success Ratio</h3>
          <div>{totalSuccessRatio}%</div>
        </div>
        <div className='insideGrid'>
          <h3>Engagement</h3>
          <div>{totalEngagement}%</div>
        </div>
        <div className='insideGrid'>
          <h3>Number of times your links were opened</h3>
          <div>{numOfTimesLinksOpened}</div>
        </div>
        <div className='insideGrid'>
          <h3>Total of active WannaGos</h3>
          <div>{numOfActiveWannaGos}</div>
        </div>
        <div className='insideGrid'>
          <h3>Total of people going to your WannaGos</h3>
          <div>{totalPplGoing}</div>
        </div>
        <div className='insideGrid'>
          <h3>People that can't go to your WannaGos</h3>
          <div>{totalRejections}</div>
        </div>
        <div className='insideGrid'>
          <h3>Total of people that have suggestions</h3>
          <div>{totalSuggestions}</div>
        </div>
        <div className='insideGrid'>
          <h3>Total of expired WannaGos</h3>
          <div>{numOfOlderWannaGos}</div>
        </div>
        <div className='insideGrid'>
          <h3>Total of people going to your WannaGos</h3>
          <div>{totalWannaGos}</div>
        </div>
      </div>
      <h4 className='justCreatedWannaGo'>These are your wannagos:</h4>
      <div className='holdWannaGos'>
        {allUserWGs &&
          allUserWGs
            .sort((a: any, b: any) => {return Number(new Date(a.date)) - Number(new Date(b.date))})
            .map((wannaGo: any) => {
              return (
                <a
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
