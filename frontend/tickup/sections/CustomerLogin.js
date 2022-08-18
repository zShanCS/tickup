import { useTheme, Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material'
import React, {useState} from 'react'
import {MdOutlineVisibility, MdOutlineVisibilityOff} from 'react-icons/md'
import Link from 'next/link';

function CustomerLogin(props) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const theme = useTheme()
    const {changeLoginMode} = props
    const updateLoginMode = () => {
        changeLoginMode(2)
    }
    return (
        <Box
            width={'100%'}
            minHeight={'80vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box 
                width={'80%'}
            >
                <Typography
                    component={'h2'}
                    fontFamily={'Russo One'}
                    fontSize={'28px'}
                    color={theme.palette.primary.main}
                    marginBottom={'28px'}
                >
                    Login As Customer
                </Typography>
                <TextField
                    type={'email'}
                    label={'Email'}
                    variant={'filled'}
                    fullWidth
                />
                <TextField
                    sx={{
                        marginTop:'12px'
                    }}
                    type={showPassword ? "text" : "password"}
                    label={'Password'}
                    variant={'filled'}
                    InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                        }}
                    fullWidth
                />
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    marginTop={'12px'}
                >
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '14px'
                        }}
                        
                    >
                        Forgot Password?
                    </Button>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'large'}
                        sx={{
                            textTransform: 'capitalize',
                            width: '120px'
                        }}
                    >
                        Login
                    </Button>
                </Box>
                <Box
                    textAlign={'center'}
                    marginTop={'12px'}
                >
                    <Link href={'signup'}>
                        <Typography
                            sx={{
                                cursor: 'pointer'
                            }}
                        >
                            Don't Have an Account? <span className='sign-up-link'>Sign Up</span>
                        </Typography>
                    </Link>
                    <Button onClick={updateLoginMode}>
                        Are you a Seller?
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CustomerLogin