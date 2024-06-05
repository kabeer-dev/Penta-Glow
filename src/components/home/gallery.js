import { Container, Grid, Typography, Box } from "@mui/material"
import galleryImage1 from '../../assets/images/gallaryImage1.jpg'
import galleryImage2 from '../../assets/images/gallaryImage2.jpg'
import galleryImage3 from '../../assets/images/gallaryImage3.jpg'
import galleryImage4 from '../../assets/images/gallaryImage4.jpg'
import galleryImage5 from '../../assets/images/gallaryImage5.jpg'
import galleryImage6 from '../../assets/images/gallaryImage6.jpg'
import galleryImage7 from '../../assets/images/gallaryImage7.jpg'
import galleryImage8 from '../../assets/images/gallaryImage8.jpg'

const galleryData = [
    {image: galleryImage1},
    {image: galleryImage2},
    {image: galleryImage3},
    {image: galleryImage4},
    {image: galleryImage5},
    {image: galleryImage6},
    {image: galleryImage7},
    {image: galleryImage8}
]

const Gallery = () => {

    return (
        <>
            <Container sx={{mt: 8}}>
            <Typography variant='h4' sx={{textAlign: 'center', color: "#553a20", fontWeight: '600'}}>Gallery</Typography>
                <Grid container sx={{mt: 2}} spacing={2}>
                    {galleryData.map((data, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box component="img" src={data.image} sx={{width: '100%', height: '300px'}}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Gallery