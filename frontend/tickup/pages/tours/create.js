import React, {useState} from 'react'
import { Box, Container, Step, Stepper, StepLabel, StepButton, Typography, useTheme, Button} from '@mui/material'
import AddMainDetailsForm from '../../sections/AddMainDetailsForm';


const steps = [
    'Fill out Major Details of Tour',
    'Add Different Packages',
    'Add Pictures'
]

function CreateTour() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = useState({})

    const theme = useTheme()

    const totalSteps = () => {
        return steps.length;
    };
    
    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };
    
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    
    const handleNext = () => {
        const newActiveStep =
          isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
              steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Container>
                <Typography
                    component={'h2'}
                    color={theme.palette.primary.main}
                    fontSize={'28px'}
                    fontWeight={'600'}
                    lineHeight={'32px'}
                >
                    Add a Tour
                </Typography>
                <Box
                    marginTop={'18px'}
                >
                    <Stepper nonLinear alternativeLabel activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={index} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <Box>
                        {allStepsCompleted() ? (
                            <Box
                                width={'85%'}
                                margin={'0 auto'}
                            >
                                <Box
                                    width={'100%'}
                                    marginTop={'18px'}
                                >
                                    <Typography>All Steps are completed - Thank You</Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </Box>
                        ):(
                            <Box
                                width={'85%'}
                                margin={'0 auto'}
                            >
                                <Box
                                    width={'100%'}
                                    marginTop={'18px'}
                                >
                                    {activeStep === 0 && <AddMainDetailsForm />}
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                    >
                                        <Button 
                                            variant={'outlined'}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <Button 
                                            variant={'outlined'}
                                            // disabled={activeStep === 2}
                                            onClick={handleComplete}
                                        >
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Finish'
                                                : 'Next'}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CreateTour