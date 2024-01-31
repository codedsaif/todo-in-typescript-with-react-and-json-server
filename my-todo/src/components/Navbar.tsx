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

const pages = ["All Todos", "Add Todo"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              verticalAlign: "middle",
            }}
          >
            MyTODO
          </Typography>
          <Box
            title="time"
            sx={{
              display: "flex",
              p: 1,
              alignItems: "center",
              color: "#000",
              borderRadius: "20px",
              background: "#fff",
            }}
          >
            <Tooltip title="Days">
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                01
              </Typography>
            </Tooltip>
            <Typography>:</Typography>
            <Tooltip title="Hours">
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                12
              </Typography>
            </Tooltip>
            <Typography> : </Typography>
            <Tooltip title="Minutes">
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                12
              </Typography>
            </Tooltip>
            <Typography>:</Typography>
            <Tooltip title="Seconds">
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  margin: "auto",
                }}
                onClick={handleOpenUserMenu}
              >
                00
              </Typography>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
