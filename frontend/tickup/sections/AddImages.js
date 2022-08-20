import React from 'react'
import {Box, TextField, Grid, Button} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validateImageType = (value) => {
  if(value) {
    let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
    return SUPPORTED_FORMATS.includes(type)
  }
}

const validationSchema = yup.object({
    file: yup.mixed().required('Image is required'),
});

function AddImages(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    const formik = useFormik({
        initialValues: {
            file: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleComplete(values)
        },
    });
    return (
        <Box>
            <form onSubmit={formik.handleSubmit} >
                <TextField 
                    variant={'filled'} 
                    type={'file'} 
                    label={'Images'} 
                    fullWidth 
                    placeholder='Image'
                    InputLabelProps={{
                        shrink: true                                              
                    }} 
                    name={'file'}
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    error={formik.touched.file && Boolean(formik.errors.file)}
                    helperText={formik.touched.file && formik.errors.file}
                    accept="image/*"
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

export default AddImages