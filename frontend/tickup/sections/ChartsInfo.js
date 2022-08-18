import { Box, Grid, useTheme, Typography, colors } from '@mui/material'
import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import InProgressIcon from '../public/images/icons/in-progress.png'
import CompletedIcon from '../public/images/icons/completed.png'
import ScheduledIcon from '../public/images/icons/scheduled.png'
import CancelledIcon from '../public/images/icons/cancelled.png'
import PlannedIcon from '../public/images/icons/planned.png'
import Image from 'next/image'

// Chart.register(ArcElement);

const toursData = {
    planned: {
        count: 26,
        icon: PlannedIcon,
        color: '#274C77'
    },
    completed: {
        count: 14,
        icon: CompletedIcon,
        color: colors.green[600]
    },
    cancelled: {
        count: 2,
        icon: CancelledIcon,
        color: colors.red[600]
    },
    scheduled: {
        count: 6,
        icon: ScheduledIcon,
        color: colors.purple[600]
    },
    progress: {
        count: 4,
        icon: InProgressIcon,
        color: colors.yellow[600]
    }
}
function ChartsInfo() {
    const theme = useTheme()
    const pieChartData = {
        labels: Object.keys(toursData).filter((key) => key!=='planned'),
        datasets: [
            {
                label: 'Tours',
                data: Object.keys(toursData).filter((key) => key!=='planned').map((key) => toursData[key].count),
                backgroundColor: Object.keys(toursData).filter((key) => key!=='planned').map((key) => toursData[key].color),
                borderWidth: 1,
            }
        ]
    }

    return (
        <Box
            width={'100%'}
            marginY={'18px'}
        >
            <Typography
                component={'h2'}
                color={theme.palette.primary.main}
                fontSize={'28px'}
                fontWeight={'600'}
            >
                TripCo's Dashboard
            </Typography>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} md={6} lg={8}>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        justifyContent={'center'}
                        // backgroundColor="yellow"
                    >
                        {Object.keys(toursData).map((key, index) => (
                            <Box
                                key={index}
                                backgroundColor={theme.palette.secondary.light}
                                padding={'14px'}
                                borderRadius={'8px'}
                                display={'flex'}
                                alignItems={'center'}
                                margin={'12px'}
                            >
                                <Box
                                    width={'72px'}
                                    position={'relative'}
                                >
                                    <Image src={toursData[key].icon} layout={'responsive'} />
                                </Box>
                                <Box marginLeft={'12px'}>
                                    <Typography
                                        textTransform={'uppercase'}
                                        textAlign={'center'}
                                    >
                                        {key}
                                    </Typography>
                                    <Typography
                                        // fontWeight={'600'}
                                        color={theme.palette.primary.main}
                                        fontSize={'36px'}
                                        textAlign={'center'}
                                        fontFamily={'Russo One'}
                                    >
                                        {toursData[key].count}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <Box
                            width={'300px'}
                        >
                            <Pie data={pieChartData} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChartsInfo