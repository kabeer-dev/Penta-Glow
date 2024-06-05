import { Box, Grid } from "@mui/material"
import SliderImage from '../../assets/images/sliderImage2.png'

const Slider = () => {

    return (
        <>
            <Grid container>
                <Grid xs={12}>
                <Box component="img" src={SliderImage} sx={{width: '100%'}}/>                        
                    {/* // sx={{
                    //     backgroundImage: `url(${SliderImage})`, // Set background image
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center',
                    //     minHeight: '450px'
                    // }} */}
                
                </Grid>
            </Grid>
        </>
    )
}

export default Slider