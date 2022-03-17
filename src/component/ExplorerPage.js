import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {ButtonGroup, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "49px",
        color: "white",
        fontWeight: "bold"
    },
    text: {
        fontSize: "20px",
        color: "white",
    },
    card: {
        width: "190px",
        minHeight: "82px",
        paddingLeft: "14px",
        borderRadius: "7px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
        marginLeft: "18px",
        marginBottom: "18px",
    },
    cardGroup: {
        display: "flex"
    },
    number: {
        color: "white",
        fontSize: "25px"
    },
    category: {
        color: "white",
        fontSize: "14px"
    },
    buttonGroup: {
        marginTop: "20px"
    },
    gropButton: {
        color: "white",
        border: "0px",
        marginRight: "20px"
    },
    table: {
        borderRadius: "7px"

    },
    tableRow: {
        background: "white",
        paddingTop: "10px"
    },
    explorerButton: {
        background: "#2b3ae9",
        color: "white",
        padding: "12px",
        borderRadius: "11px",
        boxShadow: "0 14px 25px rgb(11 22 74 / 20%)",
        marginTop: "20px",
        marginBottom: "30px"
    }
    
  }));
  

function ExplorerPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(60 80 159)"}}>
                <Grid item xs={12} sm={0} md={3}>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <p className={classes.title}>Far more to explore</p>
                    <p className={classes.text}>Peerless, actionable, multichain data and coverage on the widest selection of dapps, NFT collections, DeFi projects and more. View top collections, trending dapps, trader volume and maybe, just maybe, uncover the next blockchain unicorn.</p>
                    <div className={classes.cardGroup}>
                        <div className={classes.card}>
                            <p className={classes.number}>9,648</p>
                            <p className={classes.category}>Dapps</p>
                        </div>
                        <div className={classes.card}>
                            <p className={classes.number}>3,324</p>
                            <p className={classes.category}>NFT Collections</p>
                        </div>
                        <div className={classes.card}>
                            <p className={classes.number}>44</p>
                            <p className={classes.category}>Protocols</p>
                        </div>
                    </div>
                    <ButtonGroup className={classes.buttonGroup}>
                        <Button className={classes.gropButton}>Top Dapps</Button>
                        <Button className={classes.gropButton}>Top NFT Collections</Button>
                        <Button className={classes.gropButton}>Top DeFi Projects</Button>
                        <Button className={classes.gropButton}>Top Tokens</Button>
                    </ButtonGroup>
                    <div className={classes.table}>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>1
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>2
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>3
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>4
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>5
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>6
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>7
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>8
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>9
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>10
                                <img src="/dappified/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
                            </Grid>
                            <Grid item xs={12} sm={0} md={6}>PancakeSwap(BSC)
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>Games
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$272.57k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>335.9K
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}>$3.5k
                            </Grid>
                            <Grid item xs={12} sm={0} md={1}><img src="https://s3.amazonaws.com/dapp-activity.dappradar.com/hive_3803_f4080b58e0396f39f4e6ba94a0fd5884.png" alt="Activity" style={{width: "60px"}}/>
                            </Grid>
                        </Grid>
                    </div>
                    <Button className={classes.explorerButton}>EXPLORE DAPPS</Button>
                </Grid>
                <Grid item xs={3} sm={0} md={3} className={classes.gridItem1}>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default ExplorerPage;