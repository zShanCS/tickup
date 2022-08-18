import { Box, useTheme } from '@mui/material'
import React from 'react'
import { RiseLoader } from 'react-spinners'
function PageLoader() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            height={'80vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <RiseLoader color={theme.palette.primary.main} />
        </Box>
    )
}

export default PageLoader