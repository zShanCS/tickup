import React from 'react'
import Topbar from './Topbar'
import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import {useState} from 'react'
import Footer from './Footer'

function index(props) {
    const {layourData, children} = props
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenSidebar = () => {
        setIsOpen(true)
    }
    const handleCloseSidebar = () => {
        setIsOpen(false)
    }
    return (
        <>
            <Topbar handleOpenSidebar={handleOpenSidebar} />
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