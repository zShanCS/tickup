import { Box, Typography, IconButton, useTheme, Hidden } from '@mui/material'
import { MdOutlineAddCircle } from 'react-icons/md'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AddFirst from '../public/images/add-first-illustration.png'

function AddFirstTour() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
            marginTop={'36px'}
        >
            <Box
                textAlign={'center'}
            >
                <Typography
                    fontSize={'20px'}
                    fontWeight={'500'}
                >
                    Add Your First Tour
                </Typography>
                <Link href={'/tours/create'}>
                    <IconButton
                        sx={{
                            fontSize: '72px',
                            color: theme.palette.primary.main
                        }}
                    >
                        <MdOutlineAddCircle />
                    </IconButton>
                </Link>
            </Box>
            <Hidden only={['xs', 'sm']}>
                <Box
                    position={'relative'}
                    width={'400px'}
                >
                    <Image src={AddFirst} layout={'responsive'}  />
                </Box>
            </Hidden>
        </Box>
    )
}

export default AddFirstTour