import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "40px",
        fontWeight: "bold",
        marginTop: "50px"
    },
    content: {
        fontSize: "17px",
        fontWeight: "bold"
    },
    bgImage: {
        marginLeft: "15px",
        arginTop: "57px",
        border: "10px solid #1745c74f",
        borderRadius: "27px"
    },
    portfolioAppButton: {
        background: "#2b3ae9",
        color: "white",
        padding: "12px",
        borderRadius: "11px",
        boxShadow: "0 14px 25px rgb(11 22 74 / 20%)",
        marginTop: "20px",
        marginBottom: "30px"
    },
    buttonGroup: {
        marginTop: "40px"
    },
    button: {
        width: "100%",
        color: "white",
        fontWeight: "900",
        background: "#ff00009c",
        borderBottom: "1px solid"
    },
    bottomTitle: {
        fontSize: "18px"
    }
    
  }));
  

function ControlPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(66 71 90)", color: "white"}}>
                <Grid item xs={12} sm={0} md={3}>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.maincontainer}>
                        <Grid item xs={12} md={6}>
                            <p className={classes.title}>You're in control</p>
                            <p className={classes.content}>Effectively manage your digital assets, swap, buy, sell, (even take a little inspiration from the famous) all from within your DappRadar Portfolio.</p>
                            <Button className={classes.portfolioAppButton}>GO TO PORTFOLIO APP</Button>
                            <div className={classes.buttonGroup}>
                                <Button className={classes.button}>NFTs</Button>
                                <Button className={classes.button}>DeFi</Button>
                                <Button className={classes.button}>Tokens</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src="tradeimage.png" className={classes.bgImage}></img>
                        </Grid>
                    </Grid>
                    <div className={classes.pageBottom}>
                        <p className={classes.bottomTitle}>🔥Browse and be inspired by celebrity and crypto whale wallets</p>
                    </div>
                </Grid>
                <Grid item xs={3} sm={0} md={3} className={classes.gridItem1}>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default ControlPage;