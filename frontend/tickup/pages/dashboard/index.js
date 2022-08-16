import { Box, Container, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'
import ChartsInfo from '../../sections/ChartsInfo'
import SellerCancelled from '../../sections/SellerCancelled'
import SellerCompleted from '../../sections/SellerCompleted'
import SellerInProgress from '../../sections/SellerInProgress'
import SellerScheduled from '../../sections/SellerScheduled'

function dashboard() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Container>
                
                <ChartsInfo />
                <Divider />
                <SellerScheduled />
                <Divider />
                <SellerInProgress />
                <Divider />
                <SellerCompleted />
                <Divider />
                <SellerCancelled />
                
            </Container>
        </Box>
    )
}

export default dashboard