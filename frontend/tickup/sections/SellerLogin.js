import React from 'react'
import { useTheme, Box, Typography, Button, Divider } from '@mui/material'
import Link from 'next/link'
import SquareLogo from '../public/images/square-logo.png'
import Image from 'next/image'
import {backendServer} from '../config'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
// import nookies from 'nookies'
// import { parseCookies, setCookie, destroyCookie } from 'nookies'

function SellerLogin(props) {
    const theme = useTheme()
    const {changeLoginMode} = props
    // const MySwal = withReactContent(Swal)
    const router = useRouter()
    const updateLoginMode = () => {
        changeLoginMode(1)
    }
    const loginSeller = () => {
        console.log("LOGIN SELLER")
    }
    const loginDemoSeller = async (userId) => {
        try {
            await fetch(`${backendServer}/users/${userId}`, {
                method: 'GET',
                mode:'cors',
            })
                .then((res) => res.json())
                .then((data) => {
                    if(data.details){
                        Swal.fire({
                            title: 'Sorry',
                            text: data.detail,
                            icon: 'warning',
                            confirmButtonText: 'OK'
                        })
                    } else {
                        console.log({'USER DATA': data})
                        localStorage.setItem('User', JSON.stringify(data))
                        router.push(`seller/${data.id}/dashboard`)
                    }
                })
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Sorry',
                text: 'We Cannot Connect To Server Right Know, Please Try Again Later',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
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
                <Link href={'https://squareup.com/oauth2/authorize?client_id=sq0idp-FuPiCIjGxeZe7JmFVfq68w&scope=PAYMENTS_WRITE+ORDERS_WRITE+ORDERS_READ+MERCHANT_PROFILE_READ&state=82201dd8d83d23cc8a48caf52b'} >
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
                </Link>
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
                {/* <Box
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
                    <Button onClick={updateLoginMode}>
                        Are you a Customer?
                    </Button>
                </Box> */}
            </Box>
        </Box>
    )
}

export default SellerLogin