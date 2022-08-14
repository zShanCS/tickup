import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Container, FormLabel, Grid, useMediaQuery, useTheme, IconButton, Hidden, Grow, Button, Typography } from '@mui/material'
import {MdFilterList} from 'react-icons/md'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TourCard from '../components/TourCard'



export default function Home() {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const [showFilter, setShowFilter] = useState(false)
    const toggleFilterSection  = () => { setShowFilter(!showFilter) }
    return (
        <Box
            width={'100%'}
            marginY={'28px'}
        >
            <Container>
                <Box
                    width={'100%'}
                >
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Box
                            width={'100%'}
                            textAlign={'right'}
                        >
                            <IconButton onClick={toggleFilterSection}><MdFilterList /></IconButton>
                        </Box>
                    </Hidden>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3} xl={2}>
                            <Grow 
                                in={isMed?showFilter:true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(showFilter ? { timeout: 1000 } : {})}
                            >
                                <Box
                                    width={'100%'}
                                    backgroundColor={theme.palette.secondary.light}
                                    padding={'16px'}
                                    borderRadius={'8px'}
                                    display={isMed?(showFilter?'block':'none'):'block'}
                                >
                                    <FormControl>
                                        <FormLabel>Days</FormLabel>
                                        <RadioGroup 
                                            row={isMed?true:false}
                                        >
                                            <FormControlLabel value="ALL" control={<Radio />} label="All" />
                                            <FormControlLabel value="1D" control={<Radio />} label="1 Day" />
                                            <FormControlLabel value="3D" control={<Radio />} label="3 Days" />
                                            <FormControlLabel value="5D" control={<Radio />} label="5 Days" />
                                            <FormControlLabel value="8D" control={<Radio />} label="8 Days" />
                                            <FormControlLabel value="M8D" control={<Radio />} label="More Than 8 Days" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Price Range</FormLabel>
                                        <RadioGroup
                                            row={isMed?true:false}
                                        >
                                            <FormControlLabel value="ALL" control={<Radio />} label="All" />
                                            <FormControlLabel value="1D" control={<Radio />} label="10,000" />
                                            <FormControlLabel value="3D" control={<Radio />} label="15,000" />
                                            <FormControlLabel value="5D" control={<Radio />} label="20,000" />
                                            <FormControlLabel value="8D" control={<Radio />} label="25,000" />
                                            <FormControlLabel value="M8D" control={<Radio />} label="> 25,000" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box
                                        width={'100%'}
                                        textAlign={'right'}
                                    >
                                        <Button variant='outlined' sx={{marginRight:'16px', marginY:'8px'}}>Reset</Button>
                                        <Button variant='outlined' sx={{marginY:'8px'}}>Search</Button>
                                    </Box>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item xs={12} md={9} xl={10}>
                            <Box
                                width={'100%'}
                                sx={{
                                    transition: 'all 0.3s linear',
                                }}
                            >
                                <Typography 
                                    component={'h2'}
                                    color={theme.palette.primary.main}
                                    fontSize={'36px'}
                                    fontWeight={'600'}
                                >Search the Best for You</Typography>
                                <Box width={'100%'} marginTop={'28px'}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <TourCard />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <TourCard />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <TourCard />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <TourCard />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
        </Box>
    )
}
