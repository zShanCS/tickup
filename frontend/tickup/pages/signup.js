import { Box, useTheme, Grid, Hidden} from '@mui/material'
import React from 'react'
import SignupIllustration from '../public/images/signup.png'
import Image from 'next/image'
import { Container } from '@mui/system'

import SignUpForm from '../sections/SignUpForm'



function signup() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            minHeight={'80vh'}
            backgroundColor={theme.palette.secondary.light}
        >
            <Container>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Hidden only={['xs', 'sm']}>
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
                                    <Image src={SignupIllustration} layout={'responsive'} />
                                </Box>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box
                            width={'100%'}
                            minHeight={'80vh'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <SignUpForm />
                        </Box>
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>
    )
}

export default signup