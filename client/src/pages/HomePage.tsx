import {useNavigate} from 'react-router-dom'

// import logo from '../finalWannaGoLogo.png';
const logo = require('../finalWannaGoLogo.png');


const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wannaGo/VerticalStepperPage')
  };

  return (
  <>
      <div className='bg-first main'>
        <img
          className='img'
          src={logo}
          alt='logo'
          ></img>
        <h1 className='font-nbinternational font-light text-fourth'>Create a plan. Share it!</h1>
        <button
          onClick={handleClick}
          className='font-space-grotesk bg-third'
          >
          <p className='m-3 text-second'>PLAN IT!</p>
        </button>
      </div>
  </>
  );
};

export default MainPage;
