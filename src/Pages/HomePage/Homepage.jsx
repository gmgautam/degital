import { Box } from "@mui/material"
import HeroSection from "../../Section/HeroSection/Hero"

const Homepage=()=>{
    return(
        <Box className="homePageContainer" sx={{marginTop:"49px"}}>
            <Box className="Herosection">
                <HeroSection/>
            </Box>
            <Box className="Choicesection">
               {/* <HeroSection/> */}
            </Box>

            <Box className="serviceYouProvide">
                The service you prove=ide
            </Box>
        </Box>
    )
}
export default Homepage