import React, { useState } from 'react'
import {useTheme, Box, Container, Grid, IconButton, Typography, Divider} from '@mui/material'
import EditMainDetails from  '../../../sections/EditMainDetails'
import EditPackages from '../../../sections/EditPackages'
import ErrorPage from '../../../sections/ErrorPage'
import {backendServer} from '../../../config'

function EditTour(props) {
    const theme = useTheme()
    const {tourData, pageError} = props

    return (
        <Box
            width={'100%'}
            marginY={'28px'}
        >
            <Container>
                {pageError && <ErrorPage />}
                {tourData && 
                <Box>
                    <EditMainDetails title={tourData.title} details={tourData.description} days={tourData.days} departure={tourData.departure_date} />
                    <Divider />
                    <EditPackages price={tourData.price}  seats={tourData.total_seats}/>
                    <Divider />    
                </Box>}
            </Container>

        </Box>
    )
}

export default EditTour

export const getServerSideProps = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch(`${backendServer}/items/${id}`)
        const data = await res.json()
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