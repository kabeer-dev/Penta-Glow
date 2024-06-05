import { Box, Container, Grid, Typography } from "@mui/material"
import Header from '../../ui-components/header'
import Footer from "../../ui-components/footer"
import Slider from '../home/slider'
import Certificate_1 from "../../assets/images/certificate_1.png"
import Certificate_2 from "../../assets/images/certificate_2.png"
import Certificate_3 from "../../assets/images/certificate_3.png"

const Certificate = (props) => {

    return (
        <>
            <Header />
            {/* <Slider/> */}
            <Container sx={{mt: 5}}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Box component="img" src={Certificate_1} sx={{width: '100%', height: {md: '400px' , xs: '100%'}}}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box component="img" src={Certificate_2} sx={{width: '100%', height: {md: '400px' , xs: '100%'}}}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box component="img" src={Certificate_3} sx={{width: '100%', height: {md: '400px' , xs: '100%'}}}/>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </>
    )
}

export default Certificate