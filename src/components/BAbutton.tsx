import { Button } from "@mui/material";

const BAbutton = (props:any)=>{
const {btnValue, click}=props;


    return(
        <>
        <Button variant="contained" color="primary" onClick={click}>{btnValue}</Button>
        
        </>
    )
}

export default BAbutton;