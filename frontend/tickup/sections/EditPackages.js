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

function EditPackages() {
    const [openPackageModal, setOpenPackageModal] = useState(false)
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
                        
                        {packages.map((item, index) => (
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
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top:0,
                                        right:0,
                                        marginTop: '-8px',
                                        border:`1px solid ${theme.palette.primary.main}`,
                                        color: theme.palette.primary.main,
                                        backgroundColor: 'white',
                                        fontSize: '14px',
                                        '&:hover':{
                                            backgroundColor: theme.palette.primary.main,
                                            color: 'white'
                                        }
                                    }}
                                >
                                    <FaTrash />
                                </IconButton>
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
                    </Box>
                </Grid>
            </Grid>
            <AddPackageModal open={openPackageModal} handleClose={handleClosePackageModal} />
        </Box>
    )
}

export default EditPackages