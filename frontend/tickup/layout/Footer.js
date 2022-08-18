import React from 'react'
import {Box, Container, Grid, Typography, useTheme, IconButton, useMediaQuery} from '@mui/material'
import FooterLogo from '../public/images/logos/logo-light.png'
import Image from 'next/image'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
function Footer() {
    const theme = useTheme()
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.primary.main}
            paddingTop={'36px'}
            paddingBottom={'18px'}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box width={'80%'}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Box
                                    width={'100px'}
                                    position={'relative'}
                                >
                                    <Image src={FooterLogo} layout={'responsive'} />
                                </Box>
                                <Typography
                                    component={'h1'}
                                    fontFamily={'Russo One'}
                                    marginLeft={isSmall?'12px':isMed?'16px':'20px'}
                                    fontSize={isSmall?'28px':'36px'}
                                    color={theme.palette.secondary.light}
                                    sx={{
                                        transition: 'all 0.3s linear'
                                    }}
                                >
                                    Tick Up
                                </Typography>
                            </Box>
                            <Typography color={'white'} marginTop={'24px'} textAlign={'justify'}>
                                    Tick Up is a Generalized Digital Platform to get bookings for Tours and other Events
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box width={'100%'}>
                            <Box marginLeft={'28px'}>
                                <Typography color={'white'} fontWeight={600}>Explore</Typography>
                                <Typography color={'white'} fontWeight={600}>Help</Typography>
                                <Typography color={'white'} fontWeight={600}>Privacy Policy</Typography>
                                <Typography color={'white'} fontWeight={600}>Terms and Conditions</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box width={'100%'}>
                            <Typography fontWeight={500} color={'white'} fontSize={'18px'}>Get in Touch</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <IconButton sx={{color: theme.palette.secondary.light}}>
                                <FaInstagram />
                            </IconButton>
                            <IconButton sx={{marginLeft:'4px', color: theme.palette.secondary.light}}>
                                <FaFacebook />
                            </IconButton>
                            <IconButton sx={{marginLeft:'4px', color: theme.palette.secondary.light}}>
                                <FaTwitter />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box width={'100%'} textAlign={'center'} color={'white'} marginTop={'18px'}>
                Copyright © 2022 Tick Up. All rights reserved.
            </Box>
        </Box>
    )
}

export default Footer