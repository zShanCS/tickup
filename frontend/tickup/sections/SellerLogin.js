import React from 'react'
import { useTheme, Box, Typography, Button, Divider } from '@mui/material'
import Link from 'next/link'
import SquareLogo from '../public/images/square-logo.png'
import Image from 'next/image'
import {backendServer} from '../config'
import {setCookies} from 'cookies-next'
import {useRouter} from 'next/router'
// import nookies from 'nookies'
// import { parseCookies, setCookie, destroyCookie } from 'nookies'

function SellerLogin(props) {
    const theme = useTheme()
    const {changeLoginMode} = props
    const router = useRouter()
    const updateLoginMode = () => {
        changeLoginMode(1)
    }
    const loginSeller = () => {
        console.log("LOGIN SELLER")
    }
    const loginDemoSeller = async (userId) => {
        await fetch(`${backendServer}/users/${userId}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log({'USER DATA': data})
                    // const cookies = parseCookies()
                    // console.log({ cookies })

                    // // Set
                    // setCookie(null, 'user', JSON.stringify(data), {
                    //     maxAge: 30 * 24 * 60 * 60,
                    //     path: '/login',
                    // })

                    setCookies('User', JSON.stringify(data))
                    router.push('/dashboard')
                })
    }
    return (
        <Box
            width={'100%'}
            minHeight={'80vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                width={'80%'}
            >
                <Typography
                    component={'h2'}
                    fontFamily={'Russo One'}
                    fontSize={'28px'}
                    color={theme.palette.primary.main}
                    marginBottom={'28px'}
                >
                    Login As Seller
                </Typography>
                <Box
                    marginY={'12px'}
                    border={`1px solid ${theme.palette.primary.main}`}
                    borderRadius={'8px'}
                    padding={'12px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontSize={'20px'}
                    sx={{
                        transition: 'all 0.3s linear',
                        cursor: 'pointer',
                        '&:hover':{
                            backgroundColor: 'white'
                        }
                    }}
                    onClick={loginSeller}
                >
                    Login with <Box width={'10px'}></Box>
                    <Box
                        width={'100px'}
                        position={'relative'}
                    >
                        <Image src={SquareLogo} layout={'responsive'} />
                    </Box> 
                </Box>
                <Divider sx={{borderColor: theme.palette.primary.main}} />
                <Box
                    marginY={'12px'}
                >
                    <Typography>Demo Accounts</Typography>
                    <Button
                        variant={'outlined'}
                        sx={{marginTop: '8px'}}
                        fullWidth
                        onClick={() => loginDemoSeller(1)}
                    >
                        National Adventure Club
                    </Button>
                    <Button
                        variant={'outlined'}
                        sx={{marginTop: '8px'}}
                        fullWidth
                        onClick={() => loginDemoSeller(2)}
                    >
                        Elite Adventure Club
                    </Button>
                </Box> 
                <Box
                    textAlign={'center'}
                    marginTop={'12px'}
                >
                    <Link href={'signup'}>
                        <Typography
                            sx={{
                                cursor: 'pointer'
                            }}
                        >
                            Don't Have an Account? <span className='sign-up-link'>Sign Up</span>
                        </Typography>
                    </Link>
                    {/* <Button onClick={updateLoginMode}>
                        Are you a Customer?
                    </Button> */}
                </Box>
            </Box>
        </Box>
    )
}

export default SellerLogin