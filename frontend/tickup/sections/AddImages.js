import React, { useState } from 'react'
import {Box, TextField, Grid, Button, Typography, colors} from '@mui/material'



function AddImages(props) {
    const {handleBack, handleComplete, activeStep, checkLastToFill} = props
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [imgUploaded, setImgUploaded] = useState(false)

    const uploadImage = async () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","tickup_tour_photos")
        data.append("cloud_name","tickup")
        fetch("https://api.cloudinary.com/v1_1/tickup/image/upload",{
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((data) => {
            console.log({CLoud: data.url})
            setImageUrl(data.url)
            setImgUploaded(true)
        })
    } 

    const handleSubmit = () => {
        const values = {
            file: imageUrl,
        }
        handleComplete(values)
    }
    // const myImage = cld.image('sample'); 
    return (
        <Box>
            {/* <AdvancedImage
			           cldImg={myImage}
			        /> */}
            <TextField 
                variant={'filled'} 
                type={'file'} 
                label={'Images'} 
                fullWidth 
                placeholder='Image'
                InputLabelProps={{
                    shrink: true                                              
                }} 
                name={'file'}
                // value={image}
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
            />
            <Box
                textAlign={'center'}
            >
            {imgUploaded?
                <Typography sx={{color: colors.green[600]}}>Image Uploaded  	&#10004;</Typography>:
                <Button disabled={!image} onClick={uploadImage}>Upload Image</Button>
            }
            </Box>
            
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                marginTop={'12px'}
            >
                <Button 
                    variant={'outlined'}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button 
                    variant={'outlined'}
                    onClick={handleSubmit}
                    disabled={!imageUrl}
                >
                    {checkLastToFill()
                        ? 'Finish'
                        : 'Next'}
                </Button>
            </Box>
            
        </Box>

    )
}

export default AddImages