import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button, Input} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    contactFrom: {
        background: "#38383c",
        marginLeft: "auto",
        maxWidth: "933px",
        marginRight: "auto",
        minHeight: "117px",
        borderRadius: "13px",
        marginTop: "33px"
    },
    subTitle: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    divsubForm: {
        padding: "15px"
    },
    subContent: {
        fontSize: "14px",
        marginTop: "9px"
    },
    contactInput: {
        marginTop: "8px"
    },
    button: {
        background: "#eb2525",
        color: "white",
        marginLeft: "45px",
        fontWeight: "bold",
        marginTop: "8px"
    },
    hr: {
        borderTop: "1px solid rgb(245, 246, 255)",
        opacity: "0.3",
        width: "100%",
        marginLeft: "8px",
        marginRight: "8px",
        marginBottom: "24px",
        marginTop: "30px"
    },
    footeritems: {
        marginLeft: "10px"
    },
    footeritem: {
        fontWeight: "bold",
    }
  }));
  

function FooterPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(24 24 26)", color: "white"}}>
                <Grid item xs={12} sm={0} md={2}>
                </Grid>
                <Grid item xs={12} sm={0} md={8}>
                    <div className={classes.contactFrom}>
                        <Grid container>
                            <Grid item xs={12} sm={0} md={6} className={classes.divsubForm}>
                                <div className={classes.subTitle}>Subscribe to our newsletter</div>
                                <div className={classes.subContent}>Subscribe to the Week in Review newsletter and get the latest trends directly to your inbox</div>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>
                                <Input className={classes.contactInput} placeholder="Your Email"></Input>
                                <Button className={classes.button}>SUBSCRIBE</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.hr}></div>
                    <Grid container className={classes.footeritems}>
                            <Grid item xs={12} sm={0} md={3}>
                                <p className={classes.footeritem}>Products</p>
                                <p className={classes.footeritem}>Rankings</p>
                                <p className={classes.footeritem}>NFTs</p>
                                <p className={classes.footeritem}>Token Explorer</p>
                                <p className={classes.footeritem}>Portfolio</p>
                                <p className={classes.footeritem}>Token swap</p>
                                <p className={classes.footeritem}>Airdrops</p>
                            </Grid>
                            <Grid item xs={12} sm={0} md={3}>
                                <p className={classes.footeritem}>Company</p>
                                <p className={classes.footeritem}>About us</p>
                                <p className={classes.footeritem}>Press</p>
                                <p className={classes.footeritem}>Disclaimer</p>
                                <p className={classes.footeritem}>Privacy policy</p>
                                <p className={classes.footeritem}>Terms and conditions</p>
                                <p className={classes.footeritem}>Careers</p>
                            </Grid>
                            <Grid item xs={12} sm={0} md={3}>
                                <p className={classes.footeritem}>Resources</p>
                                <p className={classes.footeritem}>Blog</p>
                                <p className={classes.footeritem}>Industry Overview</p>
                                <p className={classes.footeritem}>Reports</p>
                            </Grid>
                            <Grid item xs={12} sm={0} md={3}>
                                <p className={classes.footeritem}>Recommendations</p>
                                <p className={classes.footeritem}>MetaMask</p>
                                <p className={classes.footeritem}>MyEtherWallet</p>
                                <p className={classes.footeritem}>TokenPocket</p>
                                <p className={classes.footeritem}>Huobi Wallet</p>
                                <p className={classes.footeritem}>imToken</p>
                                <p className={classes.footeritem}>Bitkeep</p>
                            </Grid>
                    </Grid>
                    <div className={classes.hr}></div>
                    <p className={classes.contactemail}>© 2022-2023 Dappified</p>
                </Grid>
                <Grid item xs={12} sm={0} md={2}>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default FooterPage;