import { Drawer, Box, IconButton, Divider, Button, useTheme, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Logo from '../public/images/logos/logo-dark.png'
import {MdChevronLeft} from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Company1 from '../public/images/company1.jpg'
import Company2 from '../public/images/company2.jpg'
import Company0 from '../public/images/company0.jpg'

function Sidebar(props) {
    const router = useRouter()
    const {isOpen, handleCloseSidebar, userData} = props
    const theme = useTheme()
    const handleLogOut = () => {
        console.log("LOGOUT")
        localStorage.removeItem('User')
        router.push('/login')
    }
    return (
        <Drawer
            variant={'temporary'}
            anchor={'left'}
            open={isOpen}
            onClose={(ev, reason) => handleCloseSidebar()}
            ModalProps={{ onBackdropClick: handleCloseSidebar }}
            sx={{
                width: '300px',
                textAlign:'center',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '300px',
                    boxSizing: 'border-box',
                    backgroundColor: theme.palette.secondary.light,
                },
            }}
        >
            <Box
                textAlign={'right'}
            >
                <IconButton color={'primary'} onClick={handleCloseSidebar}> 
                    <MdChevronLeft />
                </IconButton>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                width={'100%'}
                flexDirection={'column'}
                alignItems={'center'}
                // backgroundColor={'blue'}
            >
                <Box
                    position={'relative'}
                    marginY={2}
                    width={'100px'}
                    borderRadius={'50%'}
                    overflow={'hidden'}
                    sx={{
                        transition: 'all 0.3s linear'
                    }}
                >
                    {userData?
                    <Image layout={'responsive'} src={userData.id===1?Company1:(userData.id===2?Company2:Company0)} />:
                    <Image layout={'responsive'} src={Logo} />}
                </Box>
                <Link href={'/'}>
                    <Typography
                        component={'h1'}
                        fontFamily={'Russo One'}
                        fontSize={userData?'24px':'36px'}
                        marginX={'12px'}
                        color={theme.palette.primary.main}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        {userData?userData.name:'TickUp'}
                    </Typography>
                </Link>
            </Box>
            <Box width={'100%'} textAlign={'center'} marginTop={5} marginBottom={1}>
            {userData?(
                <Box>
                    {(router.pathname.includes('seller') || router.pathname.includes('edit') || router.pathname.includes('create'))?(
                        <Link href={'/tours'}>
                            <a className={router.pathname=='/tours'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Customer</a>
                        </Link>
                    ):(
                        <Link href={`/seller/${userData.id}/dashboard`}>
                            <a className={router.pathname=='/dashboard'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Seller</a>
                        </Link>
                    )}
                </Box>
            ):(
                <Link href={`/login`}>
                    <a className={router.pathname=='/dashboard'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Seller</a>
                </Link>
            )}
            </Box>
            <Divider />
            <Box
                width={'80%'}
                // backgroundColor={'yellow'}
                marginX={'auto'}
                marginTop={3}
            >
                {userData?(
                    <Button
                        variant={'outlined'}
                        fullWidth
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
                        onClick={handleLogOut}
                    >
                        Log Out
                    </Button>
                ):(
                    <Link href={'/login'}>
                        <Button
                            variant={'outlined'}
                            fullWidth
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
            </Box>
        </Drawer>
    )
}

export default Sidebar