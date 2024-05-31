import { Box, Container, Grid, Typography } from "@mui/material"
import Logo from '../../assets/images/logo-removebg.png'

const AboutBrand = () => {

    return (
        <>
            <Container sx={{mt: 4}}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box component="img" src={Logo} sx={{height: '300px'}}/>                        
                    </Grid>
                    <Grid item xs={8} sx={{alignContent: 'center'}}>
                    <Typography variant="h4" sx={{color: '#553a20', fontWeight: '700',}}>About the Brand</Typography>
                    <Typography sx={{ color: '#553a20', mt: 2}}>
                        Our brand is based on luxurious quality at affordable price. It gives the glow that every person need it's also easy to carry and most useful for students who don't compromise with their looks and hygiene. It's the whole kit with quality and quantity but at very reasonable range.
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutBrand