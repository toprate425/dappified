import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, TextField, Button } from '@material-ui/core';

import SideBar from '../../component/Portfolio/SideBar';
import '../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        '& fieldset': {
            borderColor: '#006cff',
        },
        '&$focused $notchedOutline': {
            borderColor: '#006cff'
        },
        '&:hover $notchedOutline': {
            borderColor: '#006cff'
        }
     },
     focused: {},
     notchedOutline: {}
}));

const Portfolio = () => {
    const classes = useStyles();

    return (
        <div className="main-content">
            <div className="nft-container">
                <SideBar />
                <div className="w-10 white">
                    <div className="w-10 pb-30">
                        <div className="mb-30">
                            <h1 className="heading mt-20 mb-0">Portfolio Tracker</h1>
                            <span>Check your assets, recent dapp usage, view your NFTs and more.</span>
                        </div>
                        <div className="w-6">
                            <div className="mb-15">
                                <Button className="text-btn">Ethereum</Button>
                                <Button className="text-btn">BSC</Button>
                                <Button className="text-btn">Polygon</Button>
                            </div>
                            <FormControl className="w-10" >
                                <div className="w-10 mb-15">
                                    <TextField 
                                        className="w-10"
                                        name="address"
                                        variant="outlined"
                                        InputProps={{
                                            classes: {
                                                root: classes.root,
                                                focused: classes.focused,
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                        required placeholder="Paste Wallet address or ens" 
                                    />
                                </div>
                                <Button className="open-wallet-btn">Open Wallet</Button>
                                <div className="d-flex jc-btw mt-15">
                                    <Button className="w-3 primary-btn">MetaMask</Button>
                                    <Button className="w-3 primary-btn">WalletConnect</Button>
                                    <Button className="w-3 primary-btn">Coinbase Wallet</Button>
                                </div>
                            </FormControl>
                            <div className="mt-15 mb-30">
                                <span>Don't have a wallet?<a href="#" target="_self">View a Demo</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex wallet-landing-reverse">
                        <div className="w-4">
                            <hi className="heading-bold mb-0">Wallet<br /> Holdings</hi><br />
                            <span>Always stay up-to-date with the performance of your holdings and net worth. Track the historical activity of your Ethereum or Binance Smart Chain wallet</span>
                        </div>
                        <div className="w-6">
                            <img className="wallet-landing-img" src="/portfolio/wallet_landing_assets_1.png" alt="image" />
                        </div>
                    </div>
                    <div className="d-flex wallet-landing">
                        <div className="w-4">
                            <h1  className="heading-bold mb-0">NFT Portfolio</h1><br />
                            <span>Visualize your NFT Portfolio in a clean interface and estimate your total value by the last sale price. Easily share your portfolio with anybody.</span>
                        </div>
                        <div className="w-6 text-right">
                            <img className="wallet-landing-img" src="/portfolio/wallet_landing_nft_1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;