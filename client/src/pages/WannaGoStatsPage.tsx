import { useEffect, useState } from 'react';
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { getSuccessRatioOfWannaGo } from '../utils/helperFunctions';
import { deleteWannaGo } from '../utils/apis/wannagoApiServices/deleteWannaGos';
import { useNavigate } from 'react-router-dom';
import DonutChart from '../components/charts/DonutChart'
import RadialChart from '../components/charts/RadialChart';

const WannaGoStats = () => {

  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/user/wannago/stats/id');
  console.log('this is id', id);
  const [wannaGo, setWannaGo] = useState({guestLink: '', goingCounter: 0, openedTimes: 0, rejectCounter: 0, suggestionBoxCounter: 0});
  const [copied, setCopied] = useState('Copy');
  const navigate = useNavigate();
  const [eng, setEng] = useState(0);

  useEffect(() => {
    promiseHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const promiseHandler = async () => {
    try {
      const queriedWannaGo = await getWannaGoById(id);
      setWannaGo(queriedWannaGo);
      setEng(Math.floor(((queriedWannaGo.goingCounter + queriedWannaGo.rejectCounter + queriedWannaGo.suggestionBoxCounter)/queriedWannaGo.openedTimes)*100));
    } catch (e) {
      console.log(`Error in the promiseHandler func of GuestLinks.js. Error: ${e}`);
    }
  };

  const handleClick = () => {
    navigator.clipboard.writeText(wannaGo.guestLink);
    setCopied('Copied');
  };

  const handleDelete = () => {
    console.log('id', id);
    console.log('this wannaGo');
    deleteWannaGo(id);
    navigate('/user/dashboard');
  };

  return (
    <>
      <div className='w-50 mx-auto '>
        <WannaGoCard wannaGo={wannaGo} />
      </div>
      <div>
        
        {wannaGo.guestLink && (
          <div className='w-50 mx-auto'>
            <a
              href='http://localhost:3001/wannago/guest-link/id=6332ff751b7dcf3f491aa7d5'
              target='blank'
            >
              {wannaGo.guestLink}
            </a>
            <div className='w-50 mx-auto'>
              <button
                className='bg-third p-3 font-space-grotesk text-second mx-10 hover:scale-110'
                onClick={handleClick}
              >
                {copied}
              </button>

              <button
                className='bg-third p-3 text-second font-space-grotesk hover:scale-110'
                onClick={handleDelete}
              >
                Delete It!
              </button>


            </div>
            
          </div>
        )}
      </div>
      <br />
      <h4 className='justCreatedWannaGo'>See how well the WannaGo is doing</h4>
      <br />
      <div className='w-50 mx-auto'>
        <h4 id='times-opened'>Number of times the link was opened: {wannaGo.openedTimes}</h4>
        <div className='flex'>
          <div id='donut-container' className='mx-10'><DonutChart going={wannaGo.goingCounter} maybe={wannaGo.suggestionBoxCounter} notGoing={wannaGo.rejectCounter}></DonutChart></div>
          <div id='radial-container' className='mx-10'><RadialChart engagement={eng} successRatio={Math.floor(getSuccessRatioOfWannaGo(wannaGo))}></RadialChart></div>
        </div>
      </div>
    </>
  );
};

export default WannaGoStats;
