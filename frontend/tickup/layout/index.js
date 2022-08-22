
import Topbar from './Topbar'
import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import {useState, useEffect} from 'react'
import Footer from './Footer'

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
        setUserData(JSON.parse(localStorage.getItem('User')))
    }, [props])

    return (
        <>
            <Topbar handleOpenSidebar={handleOpenSidebar} userData={userData} />
            <Sidebar isOpen={isOpen} handleCloseSidebar={handleCloseSidebar} userData={userData} />
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