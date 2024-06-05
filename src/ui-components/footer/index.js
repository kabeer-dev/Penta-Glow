import { Box, Container, Grid, Typography } from "@mui/material"
import LogoImage from '../../assets/images/logo.jpg'

const Footer = () => {

    return (
        <>
        <Grid sx={{backgroundColor: "#efebcf", mt: "100px"}}>
          <Container>
            <Grid container sx={{pt: 4, pb: 1}}>
                <Grid item md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: "center"}}>
                    <Typography variant="h4" sx={{color: '#553a20', fontWeight: '700',}}>Contact Us</Typography>
                </Grid>
                <Grid item md={4} sm ={6} xs={12} sx={{justifyContent: "center", lineHeight: 3, mt: {sm: 0, xs: 2}}}>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20', textAlign: {sm: 'left', xs: 'center'}}}>Mailing Address</Typography>
                    <Typography sx={{ color: '#553a20', textAlign: {sm: 'left', xs: 'center'}}}>Superior University Sargodha Campus</Typography>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20', mt: 1, textAlign: {sm: 'left', xs: 'center'}}}>Phone Number</Typography>
                    <Typography sx={{ color: '#553a20', textAlign: {sm: 'left', xs: 'center'}}}>+92 3277329793</Typography>
                    <Typography variant="h6" sx={{fontWeight: '600', color: '#553a20', mt: 1, textAlign: {sm: 'left', xs: 'center'}}}>Email Address</Typography>
                    <Typography sx={{ color: '#553a20', textAlign: {sm: 'left', xs: 'center'}}}>haffsahaffsa801@gmail.com</Typography>
                </Grid>
                <Grid item md={4} sm ={7} xs={12}  sx={{display: 'flex', justifyContent: "center", mt: {sm: 0, xs: 2}}}>
                    <Box component="img" src={LogoImage} sx={{height: '220px'}}/>
                </Grid>
            </Grid>
          </Container>
          </Grid>
        </>
    )
}

export default Footer