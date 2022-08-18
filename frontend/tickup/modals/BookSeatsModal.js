import { Modal, Backdrop, Zoom, Box, Typography, useTheme, Fade, TextField } from '@mui/material'
import React from 'react'
import Person1 from '../public/images/person1.jpg'
import Image from 'next/image'
function BookSeatsModal(props) {
    const {open, handleClose} = props
    const theme = useTheme()
    return (
        <Modal
            open={open}

            onClose={handleClose}
            closeAfterTransition
            onClickAway={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        maxWidth: '85%',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: 24,
                        padding: '18px'
                    }}
                >
                    <Box
                        width={'100%'}
                        textAlign={'center'}
                    >
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
                            marginBottom={'18px'}
                        >
                            Rs 20,000/Seat
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
            </Fade>
        </Modal>
    )
}

export default BookSeatsModal