import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { finalList } from "./Dropdrag"


export const Final=()=>{
    return(
        <div>
            <Box >
                <AppBar position="static" style={{ backgroundColor: "forestgreen" }}>
                    <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1}} style={{ fontFamily:"cursive" }}>
                        Ready To Serve Pizza
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Pizza />
        </div>
    ) 
}

const Pizza=()=>{
    return(
        <div className="image" >
            <img style={{width:"420px"}} src="assets/PizzaBase.png" alt="pizza" className="ingredients"/>
            {
                finalList.map((picture)=>{
                    if(picture["id"]===6){
                        picture["selected"]=false
                        return(
                            <img style={{width:"420px"}} src={picture.image} alt="pizza" className="ingredients"/>
                        )
                    }
                    return null
                })}
            {
                finalList.map((picture)=>{
                    if(picture["selected"]===true){
                        return(
                            <img style={{width:"420px"}} src={picture.image} alt="pizza" className="ingredients"/>
                        )
                    }
                    return null
                })
            }
        </div>
    )
}