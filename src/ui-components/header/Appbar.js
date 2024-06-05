import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SmallLogo from '../../assets/images/small_logo.png'
import LogoRemovebg from '../../assets/images/logo-removebg.png'
import { Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate()
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#553a20' }}>
                <Container>
                    <Toolbar>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Grid sm={3} xs={12}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <Box
                                        component="img"
                                        src={SmallLogo}
                                        sx={{width: '100%'}}
                                    />
                                </IconButton>
                            </Grid>
                            <Grid sm={9} xs={12} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'end'}}>
                                <Button color="inherit" onClick={() => navigate('/')} sx={{ color: '#efeee7', fontSize: {md:'16px', sm: '11px', xs:'8px'} }}>Home</Button>
                                <Button color="inherit" onClick={() => navigate('/team-members')} sx={{ color: '#efeee7', ml: 1, fontSize: {md:'16px', sm: '11px', xs:'8px'}  }}>Team</Button>
                                <Button color="inherit" onClick={() => navigate('/job-details')} sx={{ color: '#efeee7', ml: 1, fontSize: {md:'16px', sm: '11px', xs:'8px'}  }}>Job Details</Button>
                                <Button color="inherit" onClick={() => navigate('/certificate')} sx={{ color: '#efeee7', ml: 1, fontSize: {md:'16px', sm: '11px', xs:'8px'}  }}>Certificates</Button>
                                <Button color="inherit" onClick={() => navigate('/financial-statements')} sx={{ color: '#efeee7', ml: 1, fontSize: {md:'16px', sm: '11px', xs:'8px'}  }}>Financial Statments</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

    );
}