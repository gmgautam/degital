import { Box } from "@mui/system";
import NavBar from "../../Components/Navbar/NavBar";
import styles from "./Hero.module.css"
const HeroSection = () => {
  return (
    <Box
      className={styles.heroContainer}
      sx={{
        width: "100%",
        height: "720px",
        border: "1px solid black",
      }}
    >
        <Box sx={{display:"flex"}}>
            <Box className="leftSideTitleSection" sx={{width:"50%",height:"720px"}} >
               sdf
            </Box>
            <Box className="rightSideImageSection" sx={{width:"50%"}}>
                image
            </Box>
        </Box>
    </Box>
  );
};
export default HeroSection;
