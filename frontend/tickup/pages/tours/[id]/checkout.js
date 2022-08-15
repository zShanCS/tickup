import { Box, Container, Typography, useTheme, Fade, TextField, useThemeProps, Divider, Paper, Button } from '@mui/material'
import React, { useState } from 'react'
import Person1 from '../../../public/images/person1.jpg'
import Image from 'next/image'
import {FaCcVisa, FaCcMastercard, FaGooglePay, FaApplePay} from 'react-icons/fa'
import {AiFillBank} from 'react-icons/ai'

function TourCheckout() {
    const theme = useTheme()
    const [seats, setSeats] = useState(1)
    
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
            position={'relative'}
        >
            <Container>
                <Box
                    width={'100%'}
                >
                    <Box
                        width={'100%'}
                        textAlign={'center'}
                    >
                        <Typography
                            fontFamily={'Russo One'}
                            fontSize={'28px'}
                            color={theme.palette.primary.main}
                        >
                            BOOK YOUR SEAT
                        </Typography>
                        <Typography
                            component={'h2'}
                            color={theme.palette.primary.main}
                            fontSize={'24px'}
                            fontWeight={'600'}
                        >
                            5 Days Kashmir Tour (Arangkel and Taobatt)
                        </Typography>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >   
                            <Box
                                width={'24px'}
                                height={'24px'}
                                position={'relative'}
                                borderRadius={'50%'}
                                overflow={'hidden'}
                            >
                                <Image src={Person1} layout={'fill'} objectFit={'cover'} />
                            </Box>
                            <Box display={'flex'} marginLeft={'8px'}>
                                <Typography><em>By </em></Typography>
                                <Typography marginLeft={'4px'} fontWeight={800}>TripCo. PVT Ltd.</Typography>
                            </Box>
                        </Box>
                        <Typography 
                            component={'h4'}
                            color={theme.palette.primary.main}
                            fontSize={'18px'}
                            fontWeight={400}
                            marginTop={'18px'}
                        >
                            5 Days
                        </Typography>
                        <Typography 
                            component={'h4'}
                            color={theme.palette.primary.main}
                            fontSize={'18px'}
                            fontWeight={500}
                        >
                            Rs 20,000/Seat
                        </Typography>
                        <Typography 
                            component={'h4'}
                            color={theme.palette.primary.main}
                            fontSize={'18px'}
                            fontWeight={400}
                            marginBottom={'18px'}
                        >
                            Departure on 26th August 2022, Thursday
                        </Typography>
                        <Typography 
                            component={'h4'}
                            fontSize={'16px'}
                            fontWeight={400}
                            marginBottom={'18px'}
                        >
                            21 out of 32 Seats Available
                        </Typography>
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'center'}
                            marginBottom={'18px'}
                        >
                            <TextField 
                                type={'number'} 
                                width={'300px'} 
                                variant={'filled'} 
                                label={'No. of Seats'} 
                                value={seats}
                                onChange={(e) => setSeats(e.target.value)}
                                InputProps={{
                                    inputProps: {
                                        min: 1,
                                        max: 21
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    width={'300px'}
                    margin={'18px auto'}
                >
                    <Paper elevation={2}>
                        <Box
                            width={'100%'}
                            paddingY={'18px'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={'column'}
                            textAlign={'center'}
                            backgroundColor={theme.palette.secondary.light}
                        >
                            <Typography>TOTAL PRICE</Typography>
                            <Typography color={theme.palette.primary.main}>{seats} X Seats</Typography>
                            <Typography 
                                component={'h3'}
                                color={theme.palette.primary.main}
                                fontSize={'48px'}
                                fontWeight={500}
                                borderRadius={'8px'}
                                margin={0}
                            >
                                Rs. {seats * 20000}
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
                <Divider />
                <Box
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    jusifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography 
                        marginY={'18px'} 
                        color={theme.palette.primary.main} 
                        fontSize={'18px'} 
                        fontWeight={400}
                    >
                        PAYMENT by
                    </Typography>
                    <Button
                        variant={'outlined'}
                        fontSize={'36px'}
                        size={'large'}
                        sx={{
                            width:'300px',
                            color: theme.palette.primary.main,
                            '&:hover':{
                                color: 'white',
                                backgroundColor: theme.palette.primary.main
                            }
                        }}
                    >
                        <FaCcVisa fontSize={'36px'} /><Box width={'10px'}></Box> 
                        <FaCcMastercard fontSize={'36px'} />
                    </Button>
                    <Button
                        variant={'outlined'}
                        fontSize={'36px'}
                        size={'large'}
                        sx={{
                            width:'300px',
                            marginTop: '12px',
                            color: theme.palette.primary.main,
                            '&:hover':{
                                color: 'white',
                                backgroundColor: theme.palette.primary.main
                            }
                        }}
                    >
                        <FaGooglePay fontSize={'36px'} /><Box width={'10px'}></Box> 
                        <FaApplePay fontSize={'36px'} />
                    </Button>
                    <Button
                        variant={'outlined'}
                        fontSize={'36px'}
                        size={'large'}
                        sx={{
                            width:'300px',
                            marginTop: '12px',
                            color: theme.palette.primary.main,
                            '&:hover':{
                                color: 'white',
                                backgroundColor: theme.palette.primary.main
                            }
                        }}
                    >
                        <AiFillBank fontSize={'36px'} /><Box width={'10px'}></Box> 
                        Bank Transfer
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default TourCheckout