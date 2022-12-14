import React, {useState,useEffect} from 'react'
import {Box, Container, Typography, useTheme, useMediaQuery, Button, Grid} from '@mui/material'
import Link from 'next/link'
import TourDetails from '../../../sections/TourDetails'
import CheckoutSection from '../../../sections/CheckoutSection'
import {backendServer, frontendServer} from '../../../config'
import {FaTwitter} from 'react-icons/fa'
import Head from 'next/head'
import ErrorPage from '../../../sections/ErrorPage'



function BookTourPage(props) {
    const {tourData, pageError} = props
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const [creator, setCreator] = useState(false)
    useEffect(() => {
        console.log({'Props in Tour Page': props})
        
        // setCreator(localStorage.getItem(`created-${tourData.id}`) || 'false')
    }, [])
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
            position={'relative'}
        >
            <Head>
                <title>Tour - TickUp</title>
            </Head>
            <Container maxWidth={'lg'}>
                {pageError?(
                    <ErrorPage />
                ):(
                    <Grid container spacing={2} direction={'row'}>
                        <Grid item xs={12} md={8} lg={9} >
                            <TourDetails 
                                title={tourData.title} 
                                days={tourData.days} 
                                departure_date={tourData.departure_date.split('T')[0]} 
                                image={tourData.image} 
                                id={tourData.id} 
                                seats={tourData.stock} 
                                price={tourData.price} 
                                details={tourData.description}  
                            />
                        </Grid>
                        
                        <Grid item xs={12} md={4} lg={3} >
                            <Typography fontSize={'28px'} display={'flex'} alignContent={'center'} justifyContent={'center'}>
                                <Link target={'_blank'} href={`https://twitter.com/compose/tweet?text=Checkout the amazing new Trip at ${frontendServer}/tours/${tourData.id}`}>
                                <a target={'_blank'}>
                                <Button variant={'outlined'} sx={{
                                        color: theme.palette.social.twitter,
                                        border: '1px solid',
                                        borderColor: theme.palette.social.twitter,
                                        marginBottom:'18px'
                                }}
                                    startIcon={<FaTwitter />}
                                >
                                        Share via Tweet
                                </Button>
                                </a>
                                </Link>
                            </Typography>
                            
                            
                        
                            <CheckoutSection price={tourData.price} id={tourData.id} />
                        </Grid>
                    </Grid>
                )}
            </Container>
            {/* <BookSeatsModal open={openModal} handleClose={handleCloseModal} /> */}
        </Box>
    )
}

export default BookTourPage

export const getServerSideProps = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch(`${backendServer}/items/${id}`)
        const data = await res.json()
        // console.log({Data: data})
        
        return {
            props: {
                tourData: data
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