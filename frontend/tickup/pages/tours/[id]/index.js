import React, {useState,useEffect} from 'react'
import {Box, Container, Typography, useTheme, useMediaQuery, Button, Grid} from '@mui/material'
import Link from 'next/link'
import TourDetails from '../../../sections/TourDetails'
import CheckoutSection from '../../../sections/CheckoutSection'
import {backendServer} from '../../../config'



function BookTourPage(props) {
    const {tourData, pageError} = props
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    useEffect(() => {
        console.log({'Props in Tour Page': props})
    }, [])
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
            position={'relative'}
        >
            <Container maxWidth={'lg'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9} >
                        <TourDetails title={tourData.title} image={tourData.image} id={tourData.id} seaths={tourData.stock} price={tourData.price}  />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <CheckoutSection price={tourData.price} id={tourData.id} />
                    </Grid>
                </Grid>
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
        console.log({Data: data})
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