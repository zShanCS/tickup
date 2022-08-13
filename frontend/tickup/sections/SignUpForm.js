import React, {useState,useEffect} from 'react'
import {Box, Typography, TextField, Button, useTheme, Form, Autocomplete} from '@mui/material'
import Link from 'next/link'
import { useFormik } from 'formik';
import * as yup from 'yup';
import countriesList from '../utils/countriesList';

const validationSchema = yup.object({
    name: yup
        .string("Enter Your Name")
        .required("Name is required"),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    country: yup
      .string("Enter Your Country")
      .required("Country is required"),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
        .string()
        .required('Please Confirm your password.')
        .oneOf([yup.ref('password')], 'Your passwords do not match.')
});

function SignUpForm() {
    const theme = useTheme()
    const formik = useFormik({
        initialValues: {
            name: '',
            country: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <Box 
            width={'80%'}
        >
            <Typography
                component={'h2'}
                fontFamily={'Russo One'}
                fontSize={'28px'}
                color={theme.palette.primary.main}
                marginBottom={'28px'}
            >
                Sign Up
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    type={'text'}
                    label={'Name'}
                    variant={'filled'}
                    fullWidth
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    sx={{
                        marginTop:'12px'
                    }}
                    type={'email'}
                    label={'Email'}
                    variant={'filled'}
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                
                <Autocomplete
                    disablePortal
                    sx={{
                        marginTop:'12px'
                    }}
                    variant={'filled'}
                    options={countriesList.map((country, index) => {
                        return country.name.common
                    })}
                    fullWidth
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            variant={'filled'} 
                            label="Country"
                            id="country"
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />
                    )}
                    
                />
                <TextField
                    sx={{
                        marginTop:'12px'
                    }}
                    type={"password"}
                    label={'Password'}
                    variant={'filled'}
                    fullWidth
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    sx={{
                        marginTop:'12px'
                    }}
                    type={"password"}
                    label={'Confirm Password'}
                    variant={'filled'}
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                    marginTop={'12px'}
                >
                    
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'large'}
                        type={'submit'}
                        sx={{
                            textTransform: 'capitalize',
                            width: '200px'
                        }}
                    >
                        Sign Up
                    </Button>
            </Box>
            </form>
            
            <Box
                textAlign={'center'}
                marginTop={'12px'}
            >
                <Link href={'/login'}>
                    <Typography
                        sx={{
                            cursor: 'pointer'
                        }}
                    >
                        Already Have an Account? <span className='sign-up-link'>Log In</span>
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default SignUpForm