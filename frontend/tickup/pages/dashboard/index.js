import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import ChartsInfo from '../../sections/ChartsInfo'

function dashboard() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Container>
                <Typography
                    component={'h2'}
                    color={theme.palette.primary.main}
                    fontSize={'28px'}
                    fontWeight={'600'}
                >
                    TripCo's Dashboard
                </Typography>
                <ChartsInfo />
            </Container>
        </Box>
    )
}

export default dashboard