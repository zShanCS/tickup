import { Drawer, Box, IconButton, Divider, Button, useTheme, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Logo from '../public/images/logos/logo-dark.png'
import {MdChevronLeft} from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

function Sidebar(props) {
    const router = useRouter()
    const {isOpen, handleCloseSidebar} = props
    const theme = useTheme()
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
                    sx={{
                        transition: 'all 0.3s linear'
                    }}
                >
                    <Image layout={'responsive'} src={Logo} />
                </Box>
                <Link href={'/'}>
                    <Typography
                        component={'h1'}
                        fontFamily={'Russo One'}
                        fontSize={'36px'}
                        color={theme.palette.primary.main}
                        sx={{
                            transition: 'all 0.3s linear'
                        }}
                    >
                        Tick Up
                    </Typography>
                </Link>
            </Box>
            <Box width={'100%'} textAlign={'center'} marginTop={5} marginBottom={1}>
                <Link href={'/explore'}>
                    <a className={router.pathname=='/explore'?'menu_link_desktop_active':'menu_link_desktop'}>Become a Merchant</a>
                </Link>
            </Box>
            <Divider />
            <Box
                width={'80%'}
                // backgroundColor={'yellow'}
                marginX={'auto'}
                marginTop={3}
            >
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
            </Box>
        </Drawer>
    )
}

export default Sidebar