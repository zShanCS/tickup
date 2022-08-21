import { Box, TextField, FormGroup, FormControlLabel, Checkbox, FormLabel, FormControl, Button, Grid, IconButton, useTheme, Typography } from '@mui/material'
import React, { useState } from 'react';
import Image from 'next/image';
import {FaEdit, FaTrash, FaPlusCircle} from 'react-icons/fa'
import AddPackageModal from '../modals/AddPackageModal';

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

function EditPackages(props) {
    const [openPackageModal, setOpenPackageModal] = useState(false)
    const {price, seats} = props
    const theme = useTheme()
    const handleOpenPackageModal = () => {
        setOpenPackageModal(true)
    }
    const handleClosePackageModal = () => {
        setOpenPackageModal(false)
    }
    return (
        <Box
            width={'100%'}
            marginY={'16px'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} lg={1} textAlign={'right'}>
                    <IconButton onClick={handleOpenPackageModal}>
                        <FaPlusCircle />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={10} lg={11}>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        
                        <Box
                            width={'300px'}
                            borderRadius={'8px'}
                            border={`1px solid ${theme.palette.primary.main}`}
                            padding={'8px'}
                            margin={'8px'}
                            position={'relative'}
                            sx={{
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
                                {seats} Seats
                            </Typography>
                            <Typography 
                                textAlign={'center'} 
                                fontWeight={600} 
                                fontSize={'28px'}
                                color={theme.palette.primary.main}
                                textTransform={'uppercase'}
                            >
                                Rs. {price}
                            </Typography>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <AddPackageModal open={openPackageModal} handleClose={handleClosePackageModal} />
        </Box>
    )
}

export default EditPackages