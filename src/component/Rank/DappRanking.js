import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {ButtonGroup, Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "44px",
        fontWeight: "bold"
    },
    ButtonGroup: {

    },
    button: {
        border: "1px solid #f7f2f2",
        color: "white",
        fontWeight: "bold",
        marginLeft: "10px",
        marginTop: "17px"
    },
    btnGroup: {
        marginTop: "43px",
        marginLeft: "11px"
    },
    btn: {
        color: "#0382ef",
        fontWeight: "bold",
        border: "0px solid"
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
    filterGroup: {

    },
    newFilter: {
        background: "#cdc704",
        color: "white",
        fontWeight: "bold"
    },
    filterDetail: {
        background: "red",
        color: "white",
        marginLeft: "30px",
        width: "150px"
    },
    dayFilter: {
        float: "right"
    },
    dayButton: {
        background: "white"
    },
    table: {
        borderRadius: "7px",
        marginTop: "17px",
        marginBottom: "50px"
    },
    tableRow: {
        background: "white",
        paddingTop: "10px",
        color: "black"
    }
  }));
  

function FooterPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(33 33 76)", color: "white"}}>
                <Grid item xs={12} sm={0} md={2}>
                </Grid>
                <Grid item xs={12} sm={0} md={8}>
                    <p className={classes.title}>Top Blockchain Dapps</p>
                    <div className={classes.ButtonGroup}>
                        <Button className={classes.button}>All</Button>
                        <Button className={classes.button}>ETH</Button>
                        <Button className={classes.button}>EOS</Button>
                        <Button className={classes.button}>TRON</Button>
                        <Button className={classes.button}>Ontology</Button>
                        <Button className={classes.button}>ThunderCore</Button>
                        <Button className={classes.button}>Waves</Button>
                        <Button className={classes.button}>WAX</Button>
                        <Button className={classes.button}>Steem</Button>
                        <Button className={classes.button}>Hive</Button>
                        <Button className={classes.button}>BSC</Button>
                        <Button className={classes.button}>Polygon</Button>
                        <Button className={classes.button}>Flow</Button>
                        <Button className={classes.button}>NEAR</Button>
                        <Button className={classes.button}>Avalanche</Button>
                        <Button className={classes.button}>Telos</Button>
                        <Button className={classes.button}>Tezos</Button>
                        <Button className={classes.button}>RSK</Button>
                        <Button className={classes.button}>IoTeX</Button>
                        <Button className={classes.button}>Vulcan Forged</Button>
                        <Button className={classes.button}>Harmony</Button>
                        <Button className={classes.button}>OEC</Button>
                        <Button className={classes.button}>Solana</Button>
                        <Button className={classes.button}>Ronin</Button>
                        <Button className={classes.button}>Klaytn</Button>
                        <Button className={classes.button}>Everscale</Button>
                        <Button className={classes.button}>Heco</Button>
                        <Button className={classes.button}>DEP</Button>
                        <Button className={classes.button}>Immutable</Button>
                        <Button className={classes.button}>FUSE</Button>
                        <Button className={classes.button}>Algorand</Button>
                        <Button className={classes.button}>Telos EVM</Button>
                        <Button className={classes.button}>Cronos</Button>
                        <Button className={classes.button}>Moonriver</Button>
                        <Button className={classes.button}>Moonbeam</Button>
                        <Button className={classes.button}>Fantom</Button>
                        <Button className={classes.button}>Oasis Network</Button>
                        <Button className={classes.button}>Shiden</Button>
                        <Button className={classes.button}>Celo</Button>
                        <Button className={classes.button}>Other</Button>
                    </div>
                    <ButtonGroup className={classes.btnGroup}>
                        <Button className={classes.btn}>All</Button>
                        <Button className={classes.btn}>Games</Button>
                        <Button className={classes.btn}>DeFi</Button>
                        <Button className={classes.btn}>Gambling</Button>
                        <Button className={classes.btn}>Exchange</Button>
                        <Button className={classes.btn}>Collectibles</Button>
                        <Button className={classes.btn}>Marketplaces</Button>
                        <Button className={classes.btn}>Social</Button>
                        <Button className={classes.btn}>Other</Button>
                        <Button className={classes.btn}>High Risk</Button>
                    </ButtonGroup>
                    <div class={classes.hr}></div>
                    <div className={classes.filterGroup}>
                        <Button className={classes.newFilter}>NEW</Button>
                        <Button className={classes.filterDetail}>
                            Filter
                        </Button>
                        <ButtonGroup className={classes.dayFilter}>
                            <Button className={classes.dayButton}>24H</Button>
                            <Button className={classes.dayButton}>7D</Button>
                            <Button className={classes.dayButton}>30D</Button>
                        </ButtonGroup>
                    </div>
                    <div className={classes.table}>
                        <Grid container className={classes.tableRow} style={{height: "40px"}}>
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>1
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>11
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>12
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>13
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>14
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>15
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>16
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>17
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                            <Grid item xs={12} sm={0} md={1} style={{paddingLeft: "11px"}}>18
                                <img src="pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png" style={{width: "25px", verticalAlign: "middle", float: "right"}}></img>
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
                </Grid>
                <Grid item xs={12} sm={0} md={2}>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default FooterPage;