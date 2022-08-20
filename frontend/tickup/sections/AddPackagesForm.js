import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    price: yup
        .string("Enter Your Tour Prie")
        .required("Price is required"),
    stock: yup
        .number("Enter Number of Available Seats")
        .required("Seats are required")
});

function AddPackagesForm(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    const formik = useFormik({
        initialValues: {
            price: 0,
            stock: 24
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
                    name={'stock'}
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    error={formik.touched.stock && Boolean(formik.errors.stock)}
                    helperText={formik.touched.stock && formik.errors.stock}
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