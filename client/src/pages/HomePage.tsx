import {useNavigate} from 'react-router-dom'
import logo from '../finalWannaGoLogo.png';

const MainPage = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/wannaGo/VerticalStepperPage')
  };

  return (
  <>
      <div className='main'>
        <img
          className='img'
          src={logo}
          alt='logo'
          data-testid='logo'
          ></img>
        <h1 className='title-main'>Create a plan. Share it!</h1>
        <button
          onClick={handleClick}
          className='button'
          data-testid='plan-it-button'
          >
          Plan it!
        </button>
      </div>
  </>
  );
};

export default MainPage;
