import { Box, Container, Divider, Typography, useTheme, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChartsInfo from '../../../sections/ChartsInfo'
import SellerCancelled from '../../../sections/SellerCancelled'
import SellerCompleted from '../../../sections/SellerCompleted'
import SellerInProgress from '../../../sections/SellerInProgress'
import SellerScheduled from '../../../sections/SellerScheduled'
import {MdOutlineAddCircle} from 'react-icons/md'
import AddFirstTour from '../../../sections/AddFirstTour'
import ErrorPage from '../../../sections/ErrorPage'
import PageLoader from '../../../sections/PageLoader'
import { backendServer } from '../../../config'
import { useRouter } from 'next/router'
import Head from 'next/head'

function dashboard(props) {
    const theme = useTheme()
    const {userData, pageError} = props
    const [pageState, setPageState] = useState(0)
    const [localData, setLocalData] = useState(null)
    const router = useRouter()
    // const [userData, setUserData] = useState(null)
    // const {userData} = props
    // const [userData, setUserData] = useState(null)
    const [dashboardData, setDashboardData] = useState(null)
    useEffect(() => {
        
        if(localStorage.getItem('User')){
            setPageState(2)
            setLocalData(JSON.parse(localStorage.getItem('User')))
        } else {
            setPageState(1)
        }
    }, [])
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
        >
            <Head>
                <title>Dashboard - TickUp</title>
            </Head>

            <Container>
                {pageError? (
                    <ErrorPage />
                ):(
                    <Box>
                        {pageState === 0 && <PageLoader />}
                        {pageState === 1 && <ErrorPage />}
                        {(pageState === 2 && localData['id']!==userData['id']) && <ErrorPage />}
                        {(pageState === 2 && localData['id']===userData['id']) &&  
                        <Box>
                            {userData.items && userData.items.length > 0 ? (
                                <Box
                                    width={'100%'}
                                >
                                    <Typography
                                        component={'h2'}
                                        color={theme.palette.primary.main}
                                        fontSize={'28px'}
                                        fontWeight={'600'}
                                    >
                                        {userData.name} Dashboard
                                    </Typography>
                                    {/* <ChartsInfo /> */}
                                    <Divider />
                                    <SellerScheduled tours={userData.items.filter((item) => item.state==='Scheduled')} />
                                    {/* <Divider />
                                    <SellerInProgress />
                                    <Divider />
                                    <SellerCompleted />
                                    <Divider />
                                    <SellerCancelled /> */}
                                </Box> 
                            ):(
                                <Box>
                                    <Typography
                                        component={'h2'}
                                        color={theme.palette.primary.main}
                                        fontSize={'28px'}
                                        fontWeight={'600'}
                                    >
                                        {userData.name} Dashboard
                                    </Typography>
                                    <AddFirstTour />
                                </Box>
                            )}     
                        </Box>}
                    </Box>
                )}
                
                
            </Container>
        </Box>
    )
}

export default dashboard

export const getServerSideProps = async ({ params }) => {
    const { userId } = params
    console.log({PARAMS: params})
    try {
        const res = await fetch(`${backendServer}/users/${userId}`)
        const data = await res.json()
        // console.log({Data: data})
        return {
            props: {
                userData: data
            }
        } 
    } catch (error) {
        console.log({Error: error})
        return {
            props: {
                pageError: error.message
            }
        }
    }
}