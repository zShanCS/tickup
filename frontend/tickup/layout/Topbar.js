import React from 'react'
import {Avatar, Box, Button, Hidden, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme} from '@mui/material'
import { useRouter } from "next/router"
import Logo from '../public/images/logos/logo-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import {MdMenu} from 'react-icons/md'
import Person1 from '../public/images/person1.jpg'
import { deleteCookie } from 'cookies-next'

function Topbar(props) {
    const {handleOpenSidebar, userData} = props
    const theme = useTheme()
    const router = useRouter()
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        console.log("LOGOUT")
        deleteCookie('User', { path: '/login', domain: 'http://localhost:3000' });
    }
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
                            transition: 'all 0.3s linear',
                            cursor: 'pointer'
                        }}
                    >
                        <Image layout={'responsive'} src={Logo} />
                    </Box>
                    <Link href={'/'}>
                        <Typography
                            component={'h1'}
                            fontFamily={'Russo One'}
                            marginLeft={isSmall?'12px':isMed?'16px':'20px'}
                            fontSize={isSmall?'28px':'36px'}
                            color={theme.palette.primary.main}
                            sx={{
                                transition: 'all 0.3s linear',
                                cursor: 'pointer'
                            }}
                        >
                            Tick Up
                        </Typography>
                    </Link>
                </Box>
                <Hidden only={['xs', 'sm']}>
                    {router.pathname !== '/login' && router.pathname !== '/signup' &&
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Box width={'fit-content'} marginRight={'24px'}>
                            {router.pathname === '/dashboard'? (
                                <Link href={'/tours'}>
                                    <a className={router.pathname=='/tours'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Customer</a>
                                </Link>
                            ):(
                                <Link href={'/dashboard'}>
                                    <a className={router.pathname=='/dashboard'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Seller</a>
                                </Link>
                            )}
                        </Box>
                        {userData?(
                            <Box>
                                {/* <IconButton
                                     onClick={handleClick}
                                     size="small"
                                     sx={{ ml: 2 }}
                                     aria-controls={open ? 'account-menu' : undefined}
                                     aria-haspopup="true"
                                     aria-expanded={open ? 'true' : undefined}
                                >
                                    National Icon
                                </IconButton> */}
                                {/* <Box
                                    position={'relative'}
                                    width={'40px'}
                                    height={'40px'}
                                    borderRadius={'50%'}
                                    overflow={'hidden'}
                                    onClick={handleClick}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    sx={{cursor: 'pointer'}}
                                >
                                    <Image src={Person1} layout={'fill'} objectFit={'cover'} />
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                                </Menu> */}
                                <Typography>NFC</Typography>
                            </Box>
                        ):(
                            <Link href={'/login'}>
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
                            </Link>
                        )}
                    </Box>}
                </Hidden>
                <Hidden only={['md','lg','xl']}>
                    {router.pathname !== '/login' && router.pathname !== '/signup' &&
                    <Box>
                        <IconButton color={'primary'} onClick={handleOpenSidebar}>
                            <MdMenu />
                        </IconButton>
                    </Box>}
                </Hidden>
            </Box>

        </Box>
    )
}

export default Topbar