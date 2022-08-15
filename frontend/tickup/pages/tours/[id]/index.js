import React, {useState} from 'react'
import {Box, Container, Typography, useTheme, useMediaQuery, Button} from '@mui/material'
// import { Carousel } from '@trendyol-js/react-carousel';
import Carousel from 'react-material-ui-carousel'
import Tour1 from '../../../public/images/tour1.jpg'
import Tour2 from '../../../public/images/tour2.jpg'
import Tour3 from '../../../public/images/tour3.jpg'
import Tour4 from '../../../public/images/tour4.jpg'
import Person1 from '../../../public/images/person1.jpg'
import FirstAidKitIcon from '../../../public/images/icons/first-aid-kit.png'
import AccommodationIcon from '../../../public/images/icons/accommodation.png'
import FoodIcon from '../../../public/images/icons/restaurant.png'
import TransportationIcon from '../../../public/images/icons/bus.png'
import TourGuideIcon from '../../../public/images/icons/tour-guide.png'
import OffRoadIcon from '../../../public/images/icons/jeep.png'
import Image from 'next/image';
import BookSeatsModal from '../../../modals/BookSeatsModal'

const tourPics = [Tour1, Tour2, Tour3, Tour4]
const servicesProvided = [
    {
        name: 'Food',
        icon: FoodIcon
    },{
        name: 'Accommodation',
        icon: AccommodationIcon
    },{
        name: 'Transport',
        icon: TransportationIcon
    },{
        name: 'Tour Guide',
        icon: TourGuideIcon
    },{
        name: 'Off Road',
        icon: OffRoadIcon
    },{
        name: 'First Aid',
        icon: FirstAidKitIcon
    }
] 

function BookTourPage() {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box
            width={'100%'}
            paddingY={'36px'}
            position={'relative'}
        >
            <Container>
                <Typography
                    component={'h2'}
                    color={theme.palette.primary.main}
                    fontSize={'28px'}
                    fontWeight={'600'}
                >5 Days Kashmir Tour (Arangkel and Taobatt)</Typography>
                <Box
                    display={'flex'}
                    alignItems={'center'}
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
                <Box
                    width={'100%'}
                    paddingY={'18px'}
                    textAlign={'center'}
                    // backgroundColor={theme.palette.secondary.dark}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <Box
                        width={'640px'}
                        maxWidth={'80%'}
                        // backgroundColor={theme.palette.secondary.light}
                    >
                        <Carousel 
                            show={1} 
                            slide={1} 
                            swiping={true} 
                            animation={'fade'}
                            indicatorIconButtonProps={{
                                style: {
                                    color: theme.palette.secondary.light       // 3
                                }
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: theme.palette.primary.main // 2
                                }
                            }}
                        >
                            {tourPics.map((pic, index) => (
                                <Box
                                    key={index}
                                    width={'100%'}
                                >
                                    <Box
                                        width={'100%'}
                                        height={isMed?(isSmall?'360px':'420px'):'480px'}
                                        position={'relative'}
                                        borderRadius={'8px'}
                                        overflow={'hidden'}
                                    >
                                        <Image src={pic} layout={'fill'} objectFit={'cover'} />
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Box>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                >
                    {servicesProvided.map((service, index) => (
                        <Box
                            key={index}
                            width={'124px'}
                            borderRadius={'8px'}
                            backgroundColor={theme.palette.secondary.light}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            padding={'12px'}
                            margin={'12px'}
                        >
                            <Box
                                width={'60px'}
                                position={'relative'}
                            >
                                <Image src={service.icon} layout={'responsive'} />
                            </Box>
                            <Typography>{service.name}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box
                    width={'100%'}
                    //textAlign={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    marginY={'24px'}
                >
                    <Typography 
                        component={'h4'}
                        color={theme.palette.primary.main}
                        fontSize={'24px'}
                        fontWeight={400}
                        marginBottom={'8px'}
                    >
                        5 Days
                    </Typography>
                    <Typography 
                        component={'h3'}
                        backgroundColor={theme.palette.primary.main}
                        fontSize={'48px'}
                        fontWeight={500}  
                        paddingX={'12px'}
                        color={theme.palette.secondary.light}  
                        borderRadius={'8px'}
                    >
                        Rs. 20,000
                    </Typography>
                    <Typography 
                        component={'h4'}
                        color={theme.palette.primary.main}
                        fontSize={'24px'}
                        fontWeight={400}
                        marginTop={'8px'}
                    >
                        Departure on 26th Aug, 2022, Thursday
                    </Typography>

                </Box>
                <Box>
                    <Typography>DETAILS ... </Typography>
                </Box>
                <Box
                    display={'flex'}
                    width={'100%'}
                    justifyContent={'center'}
                >
                    <Button 
                        sx={{
                            color: theme.palette.primary.main,
                            width:'300px',
                            fontSize: '24px',
                            padding:'8px',
                            border: `1px solid ${theme.palette.primary.main}`,
                            '&:hover':{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.light,
                            }
                        }}
                        onClick={handleOpenModal}
                    >
                        Book Seat
                    </Button>
                </Box>
            </Container>
            <BookSeatsModal open={openModal} handleClose={handleCloseModal} />
        </Box>
    )
}

export default BookTourPage