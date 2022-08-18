import '../styles/globals.css'
import {ThemeProvider} from '@mui/material'
import theme from '../theme'
import Layout from '../layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLoader from '../sections/PageLoader'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleStart = (url) => setLoading(true);
        const handleComplete = (url) => setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                {loading?(
                    <PageLoader />
                ):(
                    <Component {...pageProps} />
                )}
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
