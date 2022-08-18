import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'

function AddPackagesForm(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    return (
        <Box>
            <TextField 
                variant={'filled'} 
                type={'text'} 
                label={'Name'} 
                fullWidth 
                placeholder='Name of Your Package...'
                InputLabelProps={{
                    shrink: true                                              
                }} 
            />
            <TextField 
                variant={'filled'} 
                type={'number'} 
                label={'Seats'} 
                fullWidth
                sx={{marginTop:'8px'}} 
                InputLabelProps={{
                    shrink: true                                              
                }} 
                placeholder={'Number of Seats'}
            />
            <TextField 
                variant={'filled'} 
                type={'text'} 
                label={'Details'} 
                fullWidth 
                multiline
                rows={7}
                sx={{marginTop:'8px'}} 
                InputLabelProps={{
                    shrink: true                                              
                }} 
                placeholder={'Write Details for Your Tour ...'}
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

export default AddPackagesForm