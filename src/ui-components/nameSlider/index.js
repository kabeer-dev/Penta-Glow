import { Grid, Typography } from "@mui/material"

const NameSlider = (props) => {

    return (
        <>
           <Grid container>
                <Grid item xs={12} sx={{backgroundColor: 'black', height: '300px'}}>
                    <Typography variant="h3" sx={{color: 'white', textAlign: 'center'}}>{props.name}</Typography>
                </Grid>
           </Grid>
        </>
    )
}

export default NameSlider