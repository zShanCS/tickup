import React, { useEffect } from 'react'
import Topbar from './Topbar'
import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import {useState} from 'react'
import Footer from './Footer'
import { getCookie } from 'cookies-next'

function index(props) {
    const {layourData, children} = props
    const [isOpen, setIsOpen] = useState(false)
    const [userData, setUserData] = useState(null)
    const handleOpenSidebar = () => {
        setIsOpen(true)
    }
    const handleCloseSidebar = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        setUserData(JSON.parse(getCookie('User')))
        console.log({'Layout Data': userData})
    }, [])
    return (
        <>
            <Topbar handleOpenSidebar={handleOpenSidebar} userData={userData} />
            <Sidebar isOpen={isOpen} handleCloseSidebar={handleCloseSidebar} />
            <Box
                minHeight={'80vh'}
            >
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default index