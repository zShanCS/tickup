import React, { useState } from 'react'
import {useTheme, Box, Container, Grid, IconButton, Typography, Divider} from '@mui/material'
import EditMainDetails from  '../../../sections/EditMainDetails'
import EditPackages from '../../../sections/EditPackages'

function EditTour() {
    const theme = useTheme()
    
    return (
        <Box
            width={'100%'}
            marginY={'28px'}
        >
            <Container>
                <EditMainDetails />
                <Divider />
                <EditPackages />
                <Divider />
            </Container>

        </Box>
    )
}

export default EditTour