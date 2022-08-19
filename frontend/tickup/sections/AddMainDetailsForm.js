import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'

function AddMainDetailsForm(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    return (
        <Box>
            <TextField 
                variant={'filled'} 
                type={'text'} 
                label={'Title'} 
                fullWidth 
                placeholder='Title for your Tour...'
                InputLabelProps={{
                    shrink: true                                              
                }} 
            />
            <Grid container spacing={'8px'} sx={{marginTop:'1px'}}>
                <Grid item xs={12} md={6}>
                    <TextField 
                        variant={'filled'} 
                        type={'number'} 
                        // sx={{marginTop: '8px'}}
                        label={'Days'} 
                        placeholder='Number of Days'
                        fullWidth
                        InputLabelProps={{
                            shrink: true                                              
                        }} 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        variant={'filled'} 
                        type={'date'} l
                        label={'Departure'} 
                        fullWidth
                        InputLabelProps={{
                            shrink: true                                              
                        }}
                        // sx={{marginTop:'8px'}} 
                    />
                </Grid>
            </Grid>
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

export default AddMainDetailsForm