import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SortIcon from "@mui/icons-material/Sort";

const pages = ["Home", "Services", "OurProject", "About us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" disableElevatin={true}>
      <Container
        maxWidth="xl"
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#19191B",
          margin: "0px",
          padding: "0px",
        }}
        
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center",paddingRight:"100px" }}>
            <Box
              className="LogoImage"
              sx={{
                height: "40px",
                width: { xs: "27px", sm: "40px" },
                height: { xs: "27px", sm: "40px" },
              }}
            >
              <img
                src="src\assets\images\Logo Icon 1.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "28px",
                marginLeft: "5px",
                width: "84px",
                height: "39px",
              }}
            >
              Enver
            </Typography>
          </Box>
          {/* Navlinks Start========> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "400px",
              fontSize: "18px",
              lineHeight: "25px",
              alignItems: "center",
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            {pages.map((link, index) => {
              return (
                <Box key={index}>
                  <a
                    href="#"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {link}
                  </a>
                </Box>
              );
            })}
          </Box>
          {/* End of NavLink=====> */}
          <Box>
            <Button
              variant=""
              sx={{
                width: "157px",
                height: "44px",
                border: "1px solid white",
                display: { xs: "none", sm: "block" },
              }}
            >
              Contact us
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ color: "white", height: "24px", width: "24px" }}>
              <img src="src\assets\images\Sort.png" alt="" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
