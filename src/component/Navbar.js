import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  walletButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#4557b9",
    marginLeft: theme.spacing(5),
    borderRadius: "25px",
  },
  logImg: {
    width: '40px',
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <AppBar position="static" style={{backgroundColor: "#0a1e8d"}}>
      <CssBaseline />
      <Toolbar>
        <img className={classes.logImg} src="logo.png"></img>
        <Typography variant="h5" className={classes.logo}>
        Dappified
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/rank" className={classes.link}>
              Rankings
            </Link>
            <Link to="/hub/wallet" className={classes.link}>
              Portfolio
            </Link>
            <Link to="/contact" className={classes.link}>
              NFTs
            </Link>
            <Link to="/faq" className={classes.link}>
              DeFi
            </Link>
            <Link to="/faq" className={classes.link}>
              RADAR
            </Link>
            <Link to="/faq" className={classes.link}>
              Blog
            </Link>
            
          </div>
        )}
        <Button variant="contained" className={classes.walletButton} onMouseEnter = {handleShow}>
          Connect
        </Button>
        
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
