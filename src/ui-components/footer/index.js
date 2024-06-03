import { Box, Container, Grid, Typography } from "@mui/material"
import LogoImage from '../../assets/images/logo.jpg'

const Footer = () => {

    return (
        <>
        <Grid sx={{backgroundColor: "#efebcf", mt: "100px"}}>
          <Container>
            <Grid container sx={{pt: 4, pb: 1}}>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: "center"}}>
                    <Typography variant="h4" sx={{color: '#553a20', fontWeight: '700',}}>Contact Us</Typography>
                </Grid>
                <Grid item xs={4} sx={{justifyContent: "center", lineHeight: 3}}>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20'}}>Mailing Address</Typography>
                    <Typography sx={{ color: '#553a20'}}>Superior University Sargodha Campus</Typography>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20', mt: 1}}>Phone Number</Typography>
                    <Typography sx={{ color: '#553a20'}}>+92 3277329793</Typography>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20', mt: 1}}>Email Address</Typography>
                    <Typography sx={{ color: '#553a20'}}>haffsahaffsa801@gmail.com</Typography>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: "center"}}>
                    <Box component="img" src={LogoImage} sx={{height: '220px'}}/>
                </Grid>
            </Grid>
          </Container>
          </Grid>
        </>
    )
}

export default Footer