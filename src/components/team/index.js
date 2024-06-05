import { useState } from 'react';
import Header from '../../ui-components/header'
import { Grid, Container, Box } from '@mui/material'
import Footer from "../../ui-components/footer"
import Slider from '../home/slider'
import TeamImage from '../../assets/images/team.png'


const Team = () => {

    return (
        <>
            <Header />
            {/* <Slider/> */}
         
                <Grid container>
                    <Grid item xs={12}
                    // sx={{
                    //     backgroundImage: `url(${TeamImage})`, // Set background image
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center',
                    //     height: "1000px"
                    // }}
                    >
                        <Box component="img" src={TeamImage} sx={{width: '100%'}}/>
                    </Grid>
                </Grid>
           
            <Footer/>
        </>
    )
}

export default Team