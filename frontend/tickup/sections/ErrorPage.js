import React from 'react'
import {Box, useTheme, Typography} from '@mui/material'
import {TbFaceIdError} from 'react-icons/tb'
function ErrorPage() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            textAlign={'center'}
            marginTop={'36px'}
        >   
            <Box
                fontSize={'120px'}
                color={theme.palette.primary.main}
            >
                <TbFaceIdError />
                <Typography fontSize={'36px'}>
                    Sorry, We Got into Some Error please try again later
                </Typography>
            </Box>
        </Box>
    )
}

export default ErrorPage