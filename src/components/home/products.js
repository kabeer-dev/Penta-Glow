import { Container, Grid, Typography, Box } from "@mui/material"
import product1 from '../../assets/images/p1.jpg'
import product2 from '../../assets/images/p2.jpg'
import product3 from '../../assets/images/p3.jpg'
import product4 from '../../assets/images/p4.jpg'

const productData = [
    {image: product1, name: 'Skin Care Goodies', description: "This is small description of the Skin Care Goodies"},
    {image: product2, name: 'Skin Care Goodies', description: "This is small description of the Skin Care Goodies"},
    {image: product3, name: 'Skin Care Goodies', description: "This is small description of the Skin Care Goodies"},
    {image: product4, name: 'Skin Care Goodies', description: "This is small description of the Skin Care Goodies"}
]

const Products = () => {

    return (
        <>
            <Container>
            <Typography variant='h4' sx={{textAlign: 'center', color: "#553a20", fontWeight: '600', mt: 4}}>What We Offer</Typography>
                <Grid container sx={{mt: 3}} spacing={2}>
                    {productData.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Box component="img" src={product.image} sx={{width: '100%'}}/>
                            <Typography sx={{textAlign: 'center', color: "#553a20", fontWeight: '600', mt: 2, fontSize: {lg:'22px', md: '18px', sm: '16px', xs: '14px'}}}>{product.name}</Typography>
                            <Typography sx={{textAlign: 'center', color: "#553a20", px: 3, fontSize: {lg:'16px', md: '12px', sm: '12px', xs: '10px'}}}>{product.description}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Products