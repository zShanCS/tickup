import React from 'react'
import {Box, Button, Hidden, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material'
import { useRouter } from "next/router"
import Logo from '../public/images/logos/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import {MdMenu} from 'react-icons/md'

function Topbar(props) {
    const {handleOpenSidebar} = props
    const theme = useTheme()
    const router = useRouter()
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            // position={'sticky'}
            backgroundColor={theme.palette.secondary.light}
            top={0}
            boxShadow={'5px 5px 15px 5px ##FF9137'}
            paddingY={isSmall?'12px':isMed?'18px':'24px'}
            sx={{
                zIndex:99,
                transition: `all 0.4s linear`,
                boxShadow: '5px 5px 15px 5px ##FF9137'
            }}
        >
            <Box
                width={'90%'}
                margin={'0 auto'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Box
                        position={'relative'}
                        width={isSmall?'56px':isMed?'64px':'72px'}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        <Image layout={'responsive'} src={Logo} />
                    </Box>
                    <Typography
                        component={'h1'}
                        fontFamily={'Russo One'}
                        marginLeft={isSmall?'12px':isMed?'16px':'20px'}
                        fontSize={isSmall?'28px':'36px'}
                        color={theme.palette.primary.main}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        Tick Up
                    </Typography>
                </Box>
                <Hidden only={['xs', 'sm']}>
                    
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Box width={'fit-content'} marginRight={'24px'}>
                            <Link href={'/explore'}>
                                <a className={router.pathname=='/explore'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Merchant</a>
                            </Link>
                        </Box>
                        <Button
                            variant={'outlined'}
                            sx={{
                                backgroundColor: 'transparent',
                                color: theme.palette.primary.main,
                                borderColor: theme.palette.primary.main,
                                '&:hover':{
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                },
                                textTransform: 'capitalize'
                            }}
                        >
                            Log In
                        </Button>
                    </Box>
                </Hidden>
                <Hidden only={['md','lg','xl']}>
                    <Box>
                        <IconButton color={'primary'} onClick={handleOpenSidebar}>
                            <MdMenu />
                        </IconButton>
                    </Box>
                </Hidden>
            </Box>

        </Box>
    )
}

export default Topbar