import React from 'react'
import {Box, useTheme, Typography, useMediaQuery, Button} from '@mui/material'
import Logo from '../public/images/logos/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'

function TicketBought() {
    const theme = useTheme()
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            backgroundColor={theme.palette.secondary.light}
            paddingY={'36px'}
            minHeight={'80vh'}
            width={'100%'}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                // flexWrap={'wrap'}
                width={'100%'}
                // backgroundColor={'yellow'}
            >
                <Box
                    position={'relative'}
                    // backgroundColor={'red'}
                    width={'100px'}
                    sx={{
                        transition: 'all 0.3s linear',
                        cursor: 'pointer'
                    }}
                >
                    <Image layout={'responsive'} src={Logo} />
                </Box>
                <Typography
                    component={'h1'}
                    fontFamily={'Russo One'}
                    marginLeft={isSmall?'12px':isMed?'16px':'20px'}
                    fontSize={'48px'}
                    color={theme.palette.primary.main}
                    sx={{
                        transition: 'all 0.3s linear',
                        cursor: 'pointer'
                    }}
                >
                    Thank You
                </Typography>
            </Box>
            <Box
                textAlign={'center'}
                fontSize={'36px'}
            >
                <Typography>For Buying Ticket with <b>TICK UP</b></Typography>
                <Link href={'/tours'}>
                    <Button
                        variant={'outlined'}
                        color={'primary'}
                        sx={{
                            marginTop:'64px'
                        }}
                    >
                        Go back to Tours
                    </Button>
                </Link>
            </Box>
            
        </Box>
    )
}

export default TicketBought