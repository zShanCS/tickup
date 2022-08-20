import { Box, Container, Divider, Typography, useTheme, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChartsInfo from '../../sections/ChartsInfo'
import SellerCancelled from '../../sections/SellerCancelled'
import SellerCompleted from '../../sections/SellerCompleted'
import SellerInProgress from '../../sections/SellerInProgress'
import SellerScheduled from '../../sections/SellerScheduled'
import {MdOutlineAddCircle} from 'react-icons/md'
import AddFirstTour from '../../sections/AddFirstTour'
// import nookies from 'nookies'
// import { parseCookies, destroyCookie } from 'nookies'
import { getCookie } from 'cookies-next'

function dashboard(props) {
    const theme = useTheme()
    // const [userData, setUserData] = useState(null)
    const {userData} = props
    useEffect(() => {
        console.log({User: userData})
    }, [])
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Container>
                <Box
                    width={'100%'}
                >
                    <Typography
                        component={'h2'}
                        color={theme.palette.primary.main}
                        fontSize={'28px'}
                        fontWeight={'600'}
                    >
                        TripCo's Dashboard
                    </Typography>
                    <AddFirstTour />
                    
                </Box>
                {/* <Box
                    width={'100%'}
                >
                    <ChartsInfo />
                    <Divider />
                    <SellerScheduled />
                    <Divider />
                    <SellerInProgress />
                    <Divider />
                    <SellerCompleted />
                    <Divider />
                    <SellerCancelled />
                </Box> */}
            </Container>
        </Box>
    )
}

export default dashboard

export const getServerSideProps = async ({ req, res }) => {
    // const cookies = nookies.get(context)
    // console.log({COOKIES: cookies})
    console.log({COOKIES: getCookie('User', {req, res})})
    
    return {
        props:{
            userData: getCookie('User', {req, res})
        }
    }
}