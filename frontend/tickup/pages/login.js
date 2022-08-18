import { Box, useTheme, Grid, Typography, TextField, InputAdornment, IconButton, Button, Hidden,Container } from '@mui/material'
import React, {useState} from 'react'
import LoginIllustration from '../public/images/login.png'
import Image from 'next/image'
import {MdOutlineVisibility, MdOutlineVisibilityOff} from 'react-icons/md'
import Link from 'next/link'
import CustomerLogin from '../sections/CustomerLogin'
import SellerLogin from '../sections/SellerLogin'



function login() {
    const theme = useTheme()
    const [loginMode, setLoginMode] = useState(1)
    const changeLoginMode = (mode) => {
        setLoginMode(mode)
    }
    return (
        <Box
            width={'100%'}
            minHeight={'80vh'}
            backgroundColor={theme.palette.secondary.light}
        >
            <Container>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={6}>
                        {loginMode === 1 ? <CustomerLogin changeLoginMode={changeLoginMode} /> : <SellerLogin changeLoginMode={changeLoginMode} />}
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