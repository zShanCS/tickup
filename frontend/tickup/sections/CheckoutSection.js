import { Box, FormLabel, RadioGroup, FormControlLabel, Typography, useTheme, Radio, FormControl, TextField, Button } from '@mui/material'
import React, {useState} from 'react'
import { backendServer } from '../config'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import redirect from 'nextjs-redirect'

function CheckoutSection(props) {
    const theme = useTheme()
    const {price, id} = props
    const [seatsSelected, setSeatsSelected] = useState(0)
    const router = useRouter()
    const createCheckout = async () => {
        // console.log({'seatsSelected': seatsSelected})
        // window.open('https://upmostly.com/nextjs/how-to-link-to-an-external-page-in-nextjs', '_blank')
        fetch(`${backendServer}/create_checkout?item_id=${id}&quantity=${seatsSelected}`,{
            method: 'GET',
            mode:'cors',
        })
        .then(response => response.json())
        .then((data) => {
            if(data.detail){
                console.log({Error: data.detail})
                Swal.fire({
                    title:' Sorry',
                    text: data.detail,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            } else {
                console.log({Data: data})
                window.open(data.checkout_url, '_blank')
            }
        })
    }
    return (
        <Box
            width={'100%'}
            borderRadius={'8px'}
            position={'relative'}
            sx={{
                transition: 'all 0.3s linear'
            }}
        >
            <Box
                width={'100%'}
                padding={'12px'}
                backgroundColor={theme.palette.secondary.light}
                textAlign={'center'}
                positon={'absolute'}
                top={0}
            >
                <Typography
                    fontFamily={'Russo One'}
                    fontSize={'18px'}
                    color={theme.palette.primary.main}
                    textAlign={'center'}
                >
                    BOOK YOUR SEAT
                </Typography>
                <Box
                    textAlign={'center'}
                >
                    {/* <FormControl sx={{marginTop: '8px'}}>
                        <FormLabel>Package</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel label={'Standard'} value={'standard'} control={<Radio />} />
                            <FormControlLabel label={'Deluxe'} value={'deluxe'} control={<Radio />} />
                        </RadioGroup>
                    </FormControl> */}
                    <TextField
                        type={'number'}
                        variant={'filled'}
                        label={'No. of Seats'}
                        sx={{marginTop: '8px'}}
                        value={seatsSelected}
                        onChange={(e) => setSeatsSelected(e.target.value)}
                        max={36}
                        min={1}
                    />
                </Box>
                <Box
                    width={'80%'}
                    margin={'18px auto'}
                    borderRadius={'8px'}
                    paddingY={'12px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    textAlign={'center'}
                    border={`1px solid ${theme.palette.primary.main}`}
                >
                    <Typography>TOTAL PRICE</Typography>
                    <Typography color={theme.palette.primary.main} fontWeight={600}>{seatsSelected} X Seats</Typography>
                    {/* <Typography color={theme.palette.primary.main} fontWeight={600}>Deluxe</Typography> */}
                    <Typography 
                        component={'h3'}
                        color={theme.palette.primary.main}
                        fontSize={'32px'}
                        fontWeight={500}
                        borderRadius={'8px'}
                        margin={0}
                    >
                        Rs. {seatsSelected * price}
                    </Typography>
                </Box>
                <Button 
                    color={'primary'} 
                    variant={'contained'}
                    disabled={seatsSelected <= 0}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        padding: '14px',
                        fontSize: '18px'
                    }}
                    onClick={createCheckout}
                >
                    Checkout
                </Button>
            </Box>
        </Box>
    )
}

export default CheckoutSection