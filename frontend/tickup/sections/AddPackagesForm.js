import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    price: yup
        .string("Enter Your Tour Prie")
        .required("Price is required"),
    total_seats: yup
        .number("Enter Number of Available Seats")
        .required("Seats are required")
});

function AddPackagesForm(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    const formik = useFormik({
        initialValues: {
            price: 0,
            total_seats: 24
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
                    type={'number'} 
                    label={'Price'} 
                    fullWidth 
                    placeholder='Price of Tour per Seat'
                    InputLabelProps={{
                        shrink: true                                              
                    }} 
                    name={'price'}
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
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
                    name={'total_seats'}
                    value={formik.values.total_seats}
                    onChange={formik.handleChange}
                    error={formik.touched.total_seats && Boolean(formik.errors.total_seats)}
                    helperText={formik.touched.total_seats && formik.errors.total_seats}
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

export default AddPackagesForm