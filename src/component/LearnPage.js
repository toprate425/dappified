import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    img: {
        width: "364px",
        marginTop: "-40px"
    },
    title: {
        fontSize: "46px",
        fontWeight: "bold",
        marginTop: "-115px"
    },
    content: {
        fontSize: "20px",
        marginTop: "-26px"
    },
    button: {
        background: "red",
        color: "white",
        padding: "11px",
        borderRadius: "7px",
        fontWeight: "bold",
        marginBottom: "50px"
    }
    
  }));
  

function LearnPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(22 65 225)", color: "white", textAlign: "center"}}>
                <Grid item xs={12} sm={0} md={3}>
                </Grid>
                <Grid item xs={12} sm={0} md={6}>
                    <img src="dappradar-tokens.png" className={classes.img}></img>
                    <p className={classes.title}>Shape a decentralised future</p>
                    <p className={classes.content}>Dappified - The token scaling the World’s Dapp Store</p>
                    <Button className={classes.button}>Learn More</Button>
                </Grid>
                <Grid item xs={12} sm={0} md={3}>
                </Grid>
                
                
            </Grid>
            
        </div>
    );
}
export default LearnPage;