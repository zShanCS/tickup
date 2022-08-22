import React, {useState} from 'react'
import { Box, Container, Step, Stepper, StepLabel, StepButton, Typography, useTheme, Button} from '@mui/material'
import AddMainDetailsForm from '../../sections/AddMainDetailsForm';
import AddPackagesForm from '../../sections/AddPackagesForm';
import AddImages from '../../sections/AddImages';
import FormData from 'form-data';
import {useRouter} from 'next/router';
import {backendServer} from '../../config'
import Head from 'next/head'

const steps = [
    'Fill out Major Details of Tour',
    'Add A Package',
    'Add Pictures'
]

function CreateTour() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = useState({})
    // const [userData, setUserData] = useState(null)
    
    const [createData, setCreateData] = useState({})
    const theme = useTheme()
    const router = useRouter()

    const totalSteps = () => {
        return steps.length;
    };
    
    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const checkLastToFill = () => {
        return (completedSteps() === totalSteps() - 1)
    }
    
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
    
    const handleComplete = (formObj) => {
        const newCompleted = completed;
        addToFormData(formObj)
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const addToFormData = (formObj) => {
        // console.log({FORM: formObj})
        setCreateData({...createData, ...formObj})
        // if(type === 'json'){
        //     console.log({FORM: formObj})
        //     setCreateData({...createData, ...formObj})
        // } else {
        //     console.log("TPE: ", type)
        //     const fileFormData = new FormData(formObj)
        //     for (const attr in createData){
        //         fileFormData.append(attr, createData[attr])
        //     }
        //     setCreateData(fileFormData)
        //     console.log({CREATE: createData})
        //     console.log(fileFormData)
        // }
        
        // console.log({Entries: createData})
    }

    const handleSave = async () => {
        
        const userId = JSON.parse(localStorage.getItem('User')).id
        const formData = new FormData()
        for (const attr in createData){
            formData.append(attr, createData[attr])
        }

        fetch(`${backendServer}/users/${userId}/items`,{
            method: 'POST',
            body: formData,
            // credentials:'omit'
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem(`created-${data.id}`,'true')
            router.push(`/tours/${data.id}`)
        })
    }
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Head>
                <title>Create Tour - TickUp</title>
            </Head>
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
                                    <Typography>Are You Sure you want to post this tour?</Typography>
                                    <Button onClick={handleSave} variant={'outlined'}>Save</Button>
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
                                    {activeStep === 0 && 
                                            <AddMainDetailsForm 
                                                handleBack={handleBack} 
                                                handleComplete={handleComplete} 
                                                activeStep={activeStep}
                                                checkLastToFill={checkLastToFill}
                                            />
                                            // <Typography>FORM</Typography>
                                        }
                                        {activeStep === 1 &&
                                            <AddPackagesForm
                                                handleBack={handleBack} 
                                                handleComplete={handleComplete} 
                                                activeStep={activeStep}
                                                checkLastToFill={checkLastToFill}
                                            />
                                        }
                                        {activeStep === 2 &&
                                            <AddImages
                                                handleBack={handleBack} 
                                                handleComplete={handleComplete} 
                                                activeStep={activeStep}
                                                checkLastToFill={checkLastToFill}
                                            />
                                        }
                                    
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