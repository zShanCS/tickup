import { Box, Button, Typography, useTheme, useMediaQuery, Divider, IconButton } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Tour1 from '../public/images/tour1.jpg'
import Tour2 from '../public/images/tour2.jpg'
import Tour3 from '../public/images/tour3.jpg'
import Tour4 from '../public/images/tour4.jpg'
import Person1 from '../public/images/person1.jpg'
import FirstAidKitIcon from '../public/images/icons/first-aid-kit.png'
import AccommodationIcon from '../public/images/icons/accommodation.png'
import FoodIcon from '../public/images/icons/restaurant.png'
import TransportationIcon from '../public/images/icons/bus.png'
import TourGuideIcon from '../public/images/icons/tour-guide.png'
import OffRoadIcon from '../public/images/icons/jeep.png'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { backendServer } from '../config'

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
const packages = [
    {
        name: 'Basic',
        price: '20,000',
        description: 'Quad Sharing'
    },
    {
        name: 'Deluxe',
        price: '24,000',
        description: 'Double Sharing'
    }
]


function TourDetails(props) {
    const {title, id, image, seats, price} = props
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box
            // backgroundColor={theme.palette.secondary.main}
        >
            <Box
                paddingBottom={'18px'}
            >
                <Typography
                    component={'h2'}
                    color={theme.palette.primary.main}
                    fontSize={'28px'}
                    fontWeight={'600'}
                    lineHeight={'32px'}
                >
                    {title}
                </Typography>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    marginTop={'8px'}
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
                    fontSize={'20px'}
                    fontWeight={500}
                    textAlign={'center'}
                >
                    5 Days
                </Typography>
                <Typography 
                    component={'h4'}
                    color={theme.palette.primary.main}
                    fontSize={'20px'}
                    fontWeight={500}
                    textAlign={'center'}
                >
                    Departure on 26th Aug, 2022, Thursday
                </Typography>
                <Box
                    width={'100%'}
                    paddingY={'16px'}
                    textAlign={'center'}
                    marginTop={'12px'}
                    // backgroundColor={theme.palette.secondary.dark}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    
                    <Box
                        width={'640px'}
                        maxWidth={'80%'}
                        // backgroundColor={theme.palette.secondary.light}
                    >
                        <Box
                            width={'100%'}
                        >
                            <Box
                                width={'100%'}
                                height={isMed?(isSmall?'360px':'420px'):'480px'}
                                position={'relative'}
                                borderRadius={'8px'}
                                overflow={'hidden'}
                            >
                                <Image src={`${backendServer}/images/${id}-${image}`} layout={'fill'} objectFit={'cover'} />
                            </Box>
                        </Box>
                        {/* <Carousel 
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
                        </Carousel> */}
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
            </Box>
            <Divider />
            <Box
                marginY={'18px'}
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Typography fontSize={'28px'} fontWeight={500}>Total Seats Availabe: {seats}</Typography>
                <Box
                    padding={'8px'}
                    borderRadius={'8px'}
                    backgroundColor={theme.palette.primary.main}
                    textAlign={'center'}
                >
                    <Typography color={theme.palette.secondary.light} mb={'8px'}>PRICE PER SEAT</Typography>
                    <Typography
                        color={'white'}
                        fontSize={'36px'}
                        lineHeight={'36px'}
                        fontWeight={'600'}
                    >
                        Rs. {price}
                    </Typography>
                </Box>
            </Box>
            {/* <Box
                paddingY={'18px'}
                display={'flex'}
                justifyContent={'center'}
            >
                {packages.map((item, index) => (
                    <Box
                        width={'300px'}
                        borderRadius={'8px'}
                        border={`1px solid ${theme.palette.primary.main}`}
                        padding={'8px'}
                        margin={'8px'}
                        position={'relative'}
                        sx={{
                            transition: 'all 0.3s linear',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.light
                            }
                        }}
                        
                    >
                        <Typography 
                            textAlign={'center'} 
                            fontWeight={600} 
                            fontSize={'18px'}
                            color={theme.palette.primary.main}
                            textTransform={'uppercase'}
                        >
                            {item.name}
                        </Typography>
                        <Typography 
                            textAlign={'center'} 
                            fontWeight={600} 
                            fontSize={'28px'}
                            color={theme.palette.primary.main}
                            textTransform={'uppercase'}
                        >
                            {item.price}
                        </Typography>
                        <Typography
                            textAlign={'center'}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box> */}
            <Divider />
            <Box
                paddingY={'18px'}
            >
                <Typography>DETAILS ... </Typography>
            </Box>
            
        </Box>
    )
}

export default TourDetails