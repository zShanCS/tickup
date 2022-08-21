import { Box, useTheme, Typography, Grid, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import TourCard from '../components/TourCard'
import {FaPlusCircle} from 'react-icons/fa'
import Link from 'next/link'

function SellerScheduled(props) {
    const theme = useTheme()
    const {tours} = props
    useEffect(() => {
        console.log({"Scheduled": props})
    }, [])
    return (
        <Box
            width={'100%'}
            marginY={'18px'}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography
                    component={'h2'}
                    color={theme.palette.primary.main}
                    fontSize={'28px'}
                    fontWeight={'600'}
                    marginBottom={'18px'}
                >
                    Upcoming Scheduled
                </Typography>
                <Link href={'/tours/create'}>
                    <IconButton>
                        <FaPlusCircle />
                    </IconButton>
                </Link>
            </Box>
            <Grid container spacing={2}>
                {tours.map((item, index) => (
                    <Grid item xs={12} md={6} lg={4} key={ `tour-${index}`}>
                        <TourCard 
                            state={item.state} 
                            mode={'seller'} 
                            title={item.title}
                            price={item.price}
                            seats={item.stock}
                            id={item.id}
                            image={item.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default SellerScheduled