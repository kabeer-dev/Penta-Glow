import { Box, Container, Grid, Typography } from "@mui/material"
import Logo from '../../assets/images/logo-removebg.png'

const AboutBrand = () => {

    return (
        <>
            <Container sx={{mt: 4}}>
                <Grid container>
                    <Grid item md={4} sm={6} xs={12}>
                        <Box component="img" src={Logo} sx={{height: '300px', display: 'flex', justifyContent: {md: 'left', xs: 'center'}}}/>                        
                    </Grid>
                    <Grid item md={8} sm={6} xs={12} sx={{alignContent: 'center'}}>
                    <Typography variant="h4" sx={{color: '#553a20', fontWeight: '700', fontSize: {lg: '28px', sm: '24px', xs: '16px'}, textAlign: {md: 'left', xs: 'center'}}}>About the Brand</Typography>
                    <Typography sx={{ color: '#553a20', mt: 2, fontSize: {md:'20px', sm: '18px', xs: '12px', textAlign: {md: 'left', xs: 'center'}}}}>
                        Our brand is based on luxurious quality at affordable price. It gives the glow that every person need it's also easy to carry and most useful for students who don't compromise with their looks and hygiene. It's the whole kit with quality and quantity but at very reasonable range.
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutBrand