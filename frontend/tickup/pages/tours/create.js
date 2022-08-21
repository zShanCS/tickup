import React, {useState} from 'react'
import { Box, Container, Step, Stepper, StepLabel, StepButton, Typography, useTheme, Button} from '@mui/material'
import AddMainDetailsForm from '../../sections/AddMainDetailsForm';
import AddPackagesForm from '../../sections/AddPackagesForm';
import AddImages from '../../sections/AddImages';
import FormData from 'form-data';
import {useRouter} from 'next/router';
import {backendServer} from '../../config'
// import fs from 'fs'

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
    const formData = new FormData()
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
    
    const handleComplete = (formObj, type='json') => {
        const newCompleted = completed;
        addToFormData(formObj, type)
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const addToFormData = (formObj, type='json') => {
        
        if(type === 'json'){
            console.log({FORM: formObj})
            setCreateData({...createData, ...formObj})
        } else {
            console.log("TPE: ", type)
            const fileFormData = new FormData(formObj)
            for (const attr in createData){
                fileFormData.append(attr, createData[attr])
            }
            setCreateData(fileFormData)
            console.log({CREATE: createData})
            console.log(fileFormData)
            // for (const pair of fileFormData.entries()) {
            //     console.log(`${pair[0]}, ${pair[1]}`);
            // }
        }
        
        console.log({Entries: createData})
        // console.log("BEFORE NEW ENTRIES")
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        // for (const attr in formObj){
        //     formData.append(attr, formObj[attr])
        // }
        // console.log("NEW ENTRIES")
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }

        // for (const value of formData.values()) {
        //     console.log(value);
        // }
    }

    const handleSave = () => {
        // formData.append('state', 'scheduled')
        // formData.append('owner_id', 1)
        // for (const attr in createData){
        //     formData.append(attr, createData[attr])
        // }
        // formData.append('type', 'multipart/form-data')
        // console.log({Entries: createData})

        // for (const pair of createData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        const userId = JSON.parse(localStorage.getItem('User')).id
        fetch(`${backendServer}/users/${userId}/items`,{
            method: 'POST',
            body: createData
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