import React, {useState} from 'react'
import {Box, Container, Typography, useTheme, useMediaQuery, Button, Grid} from '@mui/material'
import Link from 'next/link'
import TourDetails from '../../../sections/TourDetails'
import CheckoutSection from '../../../sections/CheckoutSection'



function BookTourPage() {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
            position={'relative'}
        >
            <Container maxWidth={'lg'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9} >
                        <TourDetails />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <CheckoutSection />
                    </Grid>
                </Grid>
            </Container>
            {/* <BookSeatsModal open={openModal} handleClose={handleCloseModal} /> */}
        </Box>
    )
}

export default BookTourPage