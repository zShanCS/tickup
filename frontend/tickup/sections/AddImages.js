import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'

function AddImages(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    return (
        <Box>
            <TextField 
                variant={'filled'} 
                type={'file'} 
                label={'Images'} 
                fullWidth 
                placeholder='Image'
                InputLabelProps={{
                    shrink: true                                              
                }} 
            />
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                marginTop={'12px'}
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
                    {checkLastToFill()
                        ? 'Finish'
                        : 'Next'}
                </Button>
            </Box>
        </Box>

    )
}

export default AddImages