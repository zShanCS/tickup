import { Box, TextField, FormGroup, FormControlLabel, Checkbox, FormLabel, FormControl, Button, Grid, IconButton, useTheme, Typography } from '@mui/material'
import React, { useState } from 'react';
import {FaEdit} from 'react-icons/fa'
import FirstAidKitIcon from '../public/images/icons/first-aid-kit.png'
import AccommodationIcon from '../public/images/icons/accommodation.png'
import FoodIcon from '../public/images/icons/restaurant.png'
import TransportationIcon from '../public/images/icons/bus.png'
import TourGuideIcon from '../public/images/icons/tour-guide.png'
import OffRoadIcon from '../public/images/icons/jeep.png'
import Image from 'next/image';

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

function EditMainDetails(props) {
    const [editMode, setEditMode] = useState(false)
    const theme = useTheme()
    const toggleMainEditMode = () => {
        setEditMode(!editMode)
    }
    return (
        <Box
            width={'100%'}
            marginY={'16px'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} lg={1} textAlign={'right'}>
                    <IconButton onClick={toggleMainEditMode} disabled={editMode}>
                        <FaEdit />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={10} lg={11}>
                    {editMode ? (
                        <Box
                            width={'100%'}
                        >
                            <TextField 
                                variant={'filled'} 
                                type={'text'} 
                                label={'Title'} 
                                fullWidth 
                                placeholder='Title for your Tour...'
                                InputLabelProps={{
                                    shrink: true                                              
                                }} 
                            />
                            <TextField 
                                variant={'filled'} 
                                type={'number'} 
                                label={'Days'} 
                                fullWidth 
                                sx={{marginTop:'12px'}} 
                            />
                            <TextField 
                                variant={'filled'} 
                                type={'date'} l
                                label={'Departure'} 
                                InputLabelProps={{
                                    shrink: true                                              
                                }} 
                                defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()} 
                                fullWidth 
                                sx={{marginTop:'12px'}} 
                            />
                            <TextField 
                                variant={'filled'} 
                                type={'text'} 
                                label={'Details'} 
                                fullWidth 
                                multiline
                                rows={7}
                                sx={{marginTop:'12px'}} 
                                InputLabelProps={{
                                    shrink: true                                              
                                }} 
                                placeholder={'Write Details for Your Tour ...'}
                            />

                            <FormControl sx={{marginTop: '12px'}}>
                                <FormLabel>Services Included</FormLabel>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox />} label="Food" />
                                    <FormControlLabel control={<Checkbox />} label="Accomodation" />
                                    <FormControlLabel control={<Checkbox />} label="Transportation" />
                                    <FormControlLabel control={<Checkbox />} label="Tour Guide" />
                                    <FormControlLabel control={<Checkbox />} label="Off Road Travel" />
                                    <FormControlLabel control={<Checkbox />} label="Snacks" />
                                    <FormControlLabel control={<Checkbox />} label="First Aid" />
                                </FormGroup>
                            </FormControl>
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                                sx={{marginTop: '12px'}}
                            >
                                <Button 
                                    variant={'outlined'}
                                    sx={{
                                        marginRight: '12px',
                                    }}
                                    onClick={toggleMainEditMode}
                                >
                                    Cancel
                                </Button>
                                <Button variant={'contained'}>
                                    update
                                </Button>
                            </Box>
                        </Box>
                    ):(
                        <Box
                            width={'100%'}
                        >
                            <Typography
                                component={'h2'}
                                color={theme.palette.primary.main}
                                fontSize={'28px'}
                                fontWeight={'600'}
                            >
                                5 Days Kashmir Tour (Arangkel and Taobatt)
                            </Typography>
                            <Typography
                                marginTop={'14px'}
                                fontSize={'18px'}
                                fontWeight={'600'}
                            >
                                5 Days
                            </Typography>
                            <Typography
                                fontSize={'18px'}
                                fontWeight={'600'}
                            >
                                Departure on 25 August
                            </Typography>
                            <Box
                                width={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                flexWrap={'wrap'}
                                marginTop={'14px'}
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
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditMainDetails

