import { Box, useTheme, Grid, Typography, TextField, InputAdornment, IconButton, Button, Hidden } from '@mui/material'
import React, {useState} from 'react'
import LoginIllustration from '../public/images/login.png'
import Image from 'next/image'
import { Container } from '@mui/system'
import {MdOutlineVisibility, MdOutlineVisibilityOff} from 'react-icons/md'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link'



function login() {
    const theme = useTheme()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    return (
        <Box
            width={'100%'}
            minHeight={'80vh'}
            backgroundColor={theme.palette.secondary.light}
        >
            <Container>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box
                            width={'100%'}
                            minHeight={'80vh'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
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
                                    Login
                                </Typography>
                                <TextField
                                    type={'email'}
                                    label={'Email'}
                                    variant={'filled'}
                                    fullWidth
                                />
                                <TextField
                                    sx={{
                                        marginTop:'12px'
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    label={'Password'}
                                    variant={'filled'}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                      }}
                                    fullWidth
                                />
                                <Box
                                    width={'100%'}
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    marginTop={'12px'}
                                >
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: '14px'
                                        }}
                                        
                                    >
                                        Forgot Password?
                                    </Button>
                                    <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        size={'large'}
                                        sx={{
                                            textTransform: 'capitalize',
                                            width: '120px'
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Box>
                                <Box
                                    textAlign={'center'}
                                    marginTop={'12px'}
                                >
                                    <Link href={'signup'}>
                                        <Typography
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Don't Have an Account? <span className='sign-up-link'>Sign Up</span>
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Hidden only={['xs','sm']}>
                            <Box 
                                width={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                // backgroundColor={'red'}
                                minHeight={'80vh'}
                            >
                                <Box
                                    width={'80%'}
                                    position={'relative'}
                                >
                                    <Image src={LoginIllustration} layout={'responsive'} />
                                </Box>
                            </Box>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default login