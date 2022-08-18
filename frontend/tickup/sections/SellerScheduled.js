import { Box, useTheme, Typography, Grid } from '@mui/material'
import React from 'react'
import TourCard from '../components/TourCard'

function SellerScheduled() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            marginY={'18px'}
        >
            <Typography
                component={'h2'}
                color={theme.palette.primary.main}
                fontSize={'28px'}
                fontWeight={'600'}
                marginBottom={'18px'}
            >
                Upcoming Scheduled
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <TourCard state={'scheduled'} mode={'seller'} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TourCard state={'scheduled'} mode={'seller'} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TourCard state={'scheduled'} mode={'seller'} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SellerScheduled