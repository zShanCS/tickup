import { Box, useTheme, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Tour1 from '../public/images/tour1.jpg'

function TourCard() {
    const theme = useTheme()
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
            <Box
                width={'100%'}
                height={'200px'}
                position={'relative'}
                borderRadius={'8px'}
                overflow={'hidden'}
            >
                <Image src={Tour1} layout={'fill'} objectFit={'cover'} />
            </Box>
            <Box>
                <Typography 
                    component={'h3'}
                    fontSize={'16px'}
                    fontWeight={'500'}
                    lineHeight={'18px'}
                    textAlign={'center'}
                    color={theme.palette.primary.main}
                    marginTop={'12px'}
                >
                    5 Days Tour to Kashmir (Arang Kel and Taobat)
                </Typography>
                <Typography
                    component={'h3'}
                    fontSize={'14px'}
                    fontWeight={'400'}
                    lineHeight={'16px'}
                    textAlign={'center'}
                    color={theme.palette.primary.main}
                    marginBottom={'12px'}
                >
                    5 Days
                </Typography>
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography>Rs 20,000</Typography>
                    <Button variant={'contained'}>
                        Book Seat
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default TourCard