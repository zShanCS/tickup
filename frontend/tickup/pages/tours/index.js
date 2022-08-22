import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Container, FormLabel, Grid, useMediaQuery, useTheme, IconButton, Hidden, Grow, Button, Typography } from '@mui/material'
import {MdFilterList} from 'react-icons/md'
import { useEffect, useState } from 'react'
import TourCard from '../../components/TourCard'
import { backendServer } from '../../config'
import ErrorPage from '../../sections/ErrorPage'
import Head from 'next/head'

export default function Tours(props) {
    const {toursData, pageError} = props
    const [toursList, setToursList] = useState([])
    const [filterValue, setFilterValue] = useState('ALL')
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const [showFilter, setShowFilter] = useState(false)
    const toggleFilterSection  = () => { setShowFilter(!showFilter) }
    useEffect(() => {
        console.log({'Props in Tours': props})
        setToursList(toursData)
    }, [props])
    const handleFilterChange = (e) => {
        // console.log(e.target.value)
        setFilterValue(e.target.value)
        if(e.target.value=='ALL'){
            setToursList(toursData)
        } else if(e.target.value==='M8'){
            setToursList(toursData.filter(tour => tour.days >= 8))
        } else {
            setToursList(toursData.filter(tour => tour.days == e.target.value))
        }
    }
    return (
        <Box
            width={'100%'}
            marginY={'28px'}
        >
            <Head>
                <title>Tours - TickUp</title>
            </Head>
            <Container maxWidth="xl">
                
                {pageError?(
                    <Box>
                        <ErrorPage />
                    </Box>
                ):(
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
                                        // display={isMed?(showFilter?'block':'none'):'block'}
                                    >
                                        <FormControl>
                                            <FormLabel>Days</FormLabel>
                                            <RadioGroup 
                                                row={isMed?true:false}
                                                value={filterValue}
                                                onChange={handleFilterChange}
                                            >
                                                <FormControlLabel value="ALL" defaultChecked control={<Radio />} label="All" />
                                                <FormControlLabel value={1} control={<Radio />} label="1 Day" />
                                                <FormControlLabel value={3} control={<Radio />} label="3 Days" />
                                                <FormControlLabel value={4} control={<Radio />} label="4 Days" />
                                                <FormControlLabel value={5} control={<Radio />} label="5 Days" />
                                                <FormControlLabel value={7} control={<Radio />} label="7 Days" />
                                                <FormControlLabel value="M8" control={<Radio />} label=">=8 Days" />
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
                            <Grid item xs={12} sm={12} md={9} xl={10}>
                                <Box
                                    width={'100%'}
                                    sx={{
                                        transition: 'all 0.3s linear',
                                        marginTop: showFilter?'0px':isMed?(isSmall?'-240px':'-160px'):'0px',
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
                                            {toursList.length > 0 && toursList.map((item, index) => (
                                                <Grid item xs={12} md={6} lg={4} key={ `tour-${index}`}>
                                                    <TourCard 
                                                        state={item.state} 
                                                        days={item.days}
                                                        departure_date={item.departure_date}
                                                        mode={'customer'} 
                                                        title={item.title}
                                                        price={item.price}
                                                        seats={item.stock}
                                                        id={item.id}
                                                        image={item.image}
                                                    />
                                                </Grid>
                                            ))}
                                            {toursList.length === 0 && 
                                            <Grid item xs={12}>
                                                <Box width={'100%'} textAlign={'center'}>
                                                    <Typography>Sorry, there are no items for you Search</Typography> 
                                                </Box>    
                                            </Grid>}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export const getServerSideProps = async () => {
    
    try {
        const res = await fetch(`${backendServer}/items`)
        const data = await res.json()
        // console.log(data)
        return {
            props: {
                toursData: data
            }
        } 
    } catch (error) {
        return {
            props: {
                pageError: error.message
            }
        }
    }
}
