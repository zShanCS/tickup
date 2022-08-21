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
import ErrorPage from '../../sections/ErrorPage'
import PageLoader from '../../sections/PageLoader'

function dashboard(props) {
    const theme = useTheme()
    // const [userData, setUserData] = useState(null)
    // const {userData} = props
    const [userData, setUserData] = useState(null)
    const [dashboardData, setDashboardData] = useState(null)
    useEffect(() => {
        setUserData(localStorage.getItem('User'))
        if(userData){
            setDashboardData(JSON.parse(userData))
            
        }
        console.log({Dashboard: JSON.parse(localStorage.getItem('User'))})
    }, [userData])
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Container>
                {userData ? (
                    <Box
                        width={'100%'}
                    >
                        {dashboardData ? (
                            <Box
                                width={'100%'}
                            >
                                {dashboardData.items && dashboardData.items.length > 0 ? (
                                    <Box
                                        width={'100%'}
                                    >
                                        <ChartsInfo />
                                        <Divider />
                                        <SellerScheduled tours={dashboardData.items.filter((item) => item.state==='Scheduled')} />
                                        {/* <Divider />
                                        <SellerInProgress />
                                        <Divider />
                                        <SellerCompleted />
                                        <Divider />
                                        <SellerCancelled /> */}
                                    </Box> 
                                ) : (
                                    <Box>
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
                                )}
                                
                            </Box>
                        ):(
                            <ErrorPage />
                        )}
                    </Box>
                ):(
                    <Box>
                        {/* You have to Login First */}
                        <PageLoader />
                    </Box>
                )}
                
                
            </Container>
        </Box>
    )
}

export default dashboard

// export const getServerSideProps = async ({ req, res }) => {
//     // const cookies = nookies.get(context)
//     // console.log({COOKIES: cookies})
    
    
//     return {
//         props:{
//             userData: localStorage.getItem('User')
//         }
//     }
// }