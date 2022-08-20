import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    title: yup
        .string("Enter Your Tour Title")
        .required("Title is required"),
    days: yup
        .number("Enter Number of Days for Tour")
        .required("Days are required"),
    departure_date: yup
        .date("Enter departure_date Date")
        .required("departure_date Date is required"),
    description: yup
        .string("Enter Tour description")
        .required("description are Must.")
});

function AddMaindescriptionForm(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    const formik = useFormik({
        initialValues: {
            title: '',
            days: 5,
            departure_date: new Date(new Date().getTime()+(5*24*60*60*1000)),
            description: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleComplete(values)
        },
    });
    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <TextField 
                    variant={'filled'} 
                    type={'text'} 
                    label={'Title'} 
                    fullWidth 
                    placeholder='Title for your Tour...'
                    InputLabelProps={{
                        shrink: true                                              
                    }}
                    name={'title'}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
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
                            name={'days'}
                            value={formik.values.days}
                            onChange={formik.handleChange}
                            error={formik.touched.days && Boolean(formik.errors.days)}
                            helperText={formik.touched.days && formik.errors.days}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            variant={'filled'} 
                            type={'date'} 
                            label={'Departure Date'} 
                            fullWidth
                            InputLabelProps={{
                                shrink: true                                              
                            }}
                            // sx={{marginTop:'8px'}} 
                            name={'departure_date'}
                            value={formik.values.departure_date}
                            onChange={formik.handleChange}
                            error={formik.touched.departure_date && Boolean(formik.errors.departure_date)}
                            helperText={formik.touched.departure_date && formik.errors.departure_date}
                        />
                    </Grid>
                </Grid>
                <TextField 
                    variant={'filled'} 
                    type={'text'} 
                    label={'description'} 
                    fullWidth 
                    multiline
                    rows={7}
                    sx={{marginTop:'8px'}} 
                    InputLabelProps={{
                        shrink: true                                              
                    }} 
                    placeholder={'Write description for Your Tour ...'}
                    name={'description'}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
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
                        // onClick={handleComplete}
                        type={'submit'}
                    >
                        {checkLastToFill()
                            ? 'Finish'
                            : 'Next'}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default AddMaindescriptionForm