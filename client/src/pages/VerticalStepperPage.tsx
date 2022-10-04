import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  StepContent,
  Typography,
} from '@mui/material';

// import { useAuth } from '../contexts/AuthContext';
import { getWannaGoByParams } from '../utils/apis/wannagoApiServices/getWannaGos';
import { postAwannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';
import { steps } from '../data';

type Props = { wannaGo: any, setwannaGo: any, justCreatedWG: any, setJustCreatedWG: any};

export default function VerticalStepper({
  wannaGo,
  setwannaGo,
  justCreatedWG,
  setJustCreatedWG,
}: Props) {
  //Hooks
  const [activeStep, setActiveStep] = useState(0);
  let navigate = useNavigate();
  // const { currentUser } = useAuth();

  const handleNext = (e: any) => {
    e.preventDefault();
    const field = e.target[0].name;
    const inputValue = e.target[0].value;
    wannaGo[field] = inputValue;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const saveWannaGo = async () => {
    try {
      await postAwannaGo(wannaGo);
      console.log('here');
      const postedWannaGo = await getWannaGoByParams(
        wannaGo.what,
        wannaGo.when
      );
      console.log(postedWannaGo);
      setwannaGo(postedWannaGo);
      setJustCreatedWG(true);
      const { _id } = postedWannaGo;
      navigate(`/wannago/id=${_id}`);
    } catch (e) {
      console.log(`Error communicating with backend to postAWannago or to retrieve the just posted wannaGo. Error: ${e}`);
    }
  };

  return (
    <div className='stepper'>
      <Box sx={{ maxWidth: 700 }}>
        <Stepper
          activeStep={activeStep}
          orientation='vertical'
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <form onSubmit={handleNext}>
                    {step.formField}
                    <br />
                    <Button
                      variant='contained'
                      type='submit'
                      title={index === steps.length - 1 ? 'Finish' : 'Continue'}
                      style={{ backgroundColor: 'rgb(241, 138, 203)' }}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      title='Back'
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      style={{ backgroundColor: 'rgb(242,205,211)' }}
                    >
                      Back
                    </Button>
                  </form>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper
            square
            elevation={0}
            sx={{ p: 3 }}
          >
            <Button
              id='share-it'
              className='button'
              onClick={saveWannaGo}
              sx={{ mt: 1, mr: 1 }}
            >
              Share It!
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
