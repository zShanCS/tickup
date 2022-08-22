import { Box, useTheme, Typography, Button, Chip, colors } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Tour1 from '../public/images/tour1.jpg'
import Link from 'next/link'
import Person1 from '../public/images/person1.jpg'
import { backendServer } from '../config'

function TourCard(props) {
    const theme = useTheme()
    const {mode, state, title, price, days, departure_date, seats, image, id} = props
    return (
        <Box
            width={'100%'}
            borderRadius={'8px'}
            border={`1px solid ${theme.palette.secondary.light}`}
            padding={'16px'}
            sx={{
                cursor: 'pointer',
                transition: 'all 0.3s linear',
                '&:hover': {
                    backgroundColor: theme.palette.secondary.light,
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                }
            }}
        >
            {/* <Box
                display={'flex'}
                alignItems={'center'}
                marginBottom={'8px'}
            >   
                <Box
                    width={'24px'}
                    height={'24px'}
                    position={'relative'}
                    borderRadius={'50%'}
                    overflow={'hidden'}
                >
                    <Image src={`${image}`} layout={'fill'} objectFit={'cover'} />
                </Box>
                <Box display={'flex'} marginLeft={'8px'}>
                    <Typography><em>By </em></Typography>
                    <Typography marginLeft={'4px'} fontWeight={800}>TripCo. PVT Ltd.</Typography>
                </Box>
            </Box> */}
            <Box
                width={'100%'}
                height={'200px'}
                position={'relative'}
                borderRadius={'8px'}
                overflow={'hidden'}
            >
                <Image src={`${image}`} layout={'fill'} objectFit={'cover'} />
            </Box>
            <Box>
                <Link href={mode==='customer'?`/tours/${id}`:`/tours/${id}/edit`}>
                    <Typography 
                        component={'h3'}
                        fontSize={'16px'}
                        fontWeight={'500'}
                        lineHeight={'18px'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        marginTop={'12px'}
                    >
                        {title}
                    </Typography>
                </Link>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    marginBottom={'4px'}
                >
                    <Typography
                        component={'h3'}
                        fontSize={'14px'}
                        fontWeight={'400'}
                        lineHeight={'16px'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        // marginBottom={'12px'}
                    >
                        {days} Days
                    </Typography>
                    <Typography
                        component={'h3'}
                        fontSize={'14px'}
                        fontWeight={'400'}
                        lineHeight={'16px'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        // marginBottom={'12px'}
                    >
                        {departure_date.split('T')[0]}
                    </Typography>
                </Box>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography>$ {price/100}</Typography>
                    {state === 'Scheduled' &&
                        (
                            mode === 'customer' ? (
                                <Link href={`/tours/${id}`}>
                                    <Button variant={'contained'} color={'primary'}>
                                        Book Seat
                                    </Button>
                                </Link>
                            ):(
                                <Link href={`/tours/${id}/edit`}>
                                    <Button variant={'contained'} color={'primary'}>
                                        Edit
                                    </Button>
                                </Link>
                            )
                        )
                    }
                    {state === 'progress' && 
                        <Chip 
                            label={'In Progress'} 
                            sx={{
                                backgroundColor: colors.yellow[600],
                                color: 'black'
                            }} 
                        />
                    }
                    {state === 'completed' && 
                        <Chip 
                            label={'Completed'} 
                            sx={{
                                backgroundColor: colors.green[600],
                                color: 'white'
                            }} 
                        />
                    }
                    {state === 'cancelled' && 
                        <Chip 
                            label={'Cancelled'} 
                            sx={{
                                backgroundColor: colors.red[600],
                                color: 'white'
                            }} 
                        />
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default TourCard