import { Modal, Backdrop, Zoom, Box, Typography, useTheme, Fade, TextField, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'

function AddPackageModal(props) {
    const {open, handleClose} = props
    const theme = useTheme()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            // onClickAway={handleClose}
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
                        width: 400,
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
                            Add Package
                        </Typography>
                        
                        <Box
                            width={'100%'}
                            marginTop={'18px'}
                        >
                            <TextField 
                                type={'number'} 
                                sx={{marginTop: '8px'}}
                                fullWidth
                                variant={'filled'} 
                                label={'Price'} 
                                InputProps={{
                                    inputProps: {
                                        min: 0,
                                    }
                                }}
                            />
                            <TextField 
                                type={'number'} 
                                sx={{marginTop: '8px'}}
                                fullWidth
                                variant={'filled'} 
                                label={'No. of Seats'} 
                                InputProps={{
                                    inputProps: {
                                        min: 0,
                                    }
                                }}
                            />
                        </Box>
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            marginTop={'18px'}
                        >
                            <Button 
                                variant={'outlined'}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button variant={'contained'}>
                                Add
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default AddPackageModal