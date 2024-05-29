import { Box, Grid } from "@mui/material"
import SliderImage from '../../assets/images/sliderImage2.png'

const Slider = () => {

    return (
        <>
            <Grid container>
                <Grid xs={12} 
                    sx={{
                        backgroundImage: `url(${SliderImage})`, // Set background image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '500px'
                    }}
                >
                </Grid>
            </Grid>
        </>
    )
}

export default Slider