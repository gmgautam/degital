import { Box } from "@mui/material"
import { Outlet } from "react-router"
import NavBar from "../Components/Navbar/NavBar"

const LayoutOfDegital=()=>{
    return(
        <Box>
            <Box className="Navbar">
                <NavBar/>
            </Box>
            <Box className="Contained" >
                <Outlet/>
            </Box>
            <Box>
                Fotter
            </Box>
        </Box>
    )
}
export default LayoutOfDegital