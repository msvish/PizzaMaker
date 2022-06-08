import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export const Navbar=()=>{
    return (
      <div className='App'>
        <Box >
          <AppBar position="static" style={{ backgroundColor: "forestgreen" }}>
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1}} style={{ fontFamily:"cursive" }}>
                Let's Prepare
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <div>
            <Grid container  direction="row" justifyContent="space-evenly" alignItems="center">
              <Grid xs={2}>
                  <div style={{paddingLeft:"80px", fontFamily:"cursive", fontSize:22}}>
                    Make your own pizza the way you wish</div>
              </Grid>
              <Grid xs={8}>
                  <img style={{width:"450px",padding:"50px 50px"}}  src="assets/Pizza.png" alt='pizza'/>
              </Grid>
              <Grid xs={2}>
                  <Button variant="contained" component={ Link } to="/selectToppings"
                    style={{ backgroundColor: "saddlebrown",fontFamily:"cursive",Right:"100px",position:"absolute" }}>
                    Start
                  </Button>
              </Grid>
            </Grid>
        </div>
    </div>
        )
}