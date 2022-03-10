import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#34349d",
        color: "white",
        padding: '0px',
        minHeight: "805px",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: "blue",
      borderRadius: "0px",
    },
    h1: {
        color: "white",
        fontSize: "40px",
        marginTop: "100px"
    },
    gridItem1: {
        padding: "10px",
        textAlign: "center",
    },
    gridItem2: {
        padding: "0px",
        textAlign: "center",
    },
    p1: {
        fontSize: "16px",
        color: "white",
        marginTop: "40px",
        marginBottom: "40px"
    },
    p2: {
        fontSize: "16px",
        color: "white",
        marginTop: "40px",
        marginBottom: "40px"
    },
    p3: {
        fontSize: "13px",
        color: "white",
        marginTop: "40px",
        marginBottom: "40px"
    },
    button1: {
        background: "white",
        color: "black",
        fontFamily: "system-ui",
        margin: "5px",
    },
    button2: {
        background: "red",
        color: "white",
        fontFamily: "system-ui",
        margin: "5px",
    },
    claimToken: {
        backgroundColor: "#0d2393",
        width: "350px",
        borderRadius: "10px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    trending: {

    },
    btn1: {
        padding: "7px",
        backgroundColor: "#3c52c3",
        borderRadius: "14px",
        marginLeft: "17px",
        color: "white",
        marginTop: "10px"
    },
    buttonGroup: {
        width: "454px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "90px"
    }
  }));
  

function Welcomepage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "#0d41b5"}}>
                <Grid item xs={12} sm={5} md={5} className={classes.gridItem1}>
                    <h1 className={classes.h1}>The World’s Dapp Store</h1>
                    <p className={classes.p1}>Discover, Track & Trade Everything DeFi, NFT and Gaming</p>
                    <Button className={classes.button1}>Explore dapps and more</Button>
                    <Button className={classes.button2}>Go to portfolio app</Button>
                    <div className={classes.claimToken}>
                        <p className={classes.p2}>Dappified Token is Now Available for Claiming</p>
                        <p className={classes.p3}>Claim Token and enter the ecosystem</p>
                    </div>
                    {/* <p className={classes.trending}>
                        Trending
                    </p> */}
                    <div className={classes.buttonGroup}>
                        <p className={classes.p1}>Trending</p>
                        <button className={classes.btn1}>Games</button>
                        <button className={classes.btn1}>NFTs</button>
                        <button className={classes.btn1}>DeFi</button>
                        <button className={classes.btn1}>BSC</button>
                        <button className={classes.btn1}>Ethereum</button>
                        <button className={classes.btn1}>Polygon</button>
                        <button className={classes.btn1}>Snoop Dogg NFTs</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7} className={classes.gridItem2}>
                    <img src="desktop-dapps-grid.png" style={{width: "95%"}}/>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default Welcomepage;