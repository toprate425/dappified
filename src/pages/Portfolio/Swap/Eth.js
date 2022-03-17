import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, TextField, Button, IconButton, InputAdornment  } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SettingsIcon from '@material-ui/icons/Settings';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SideBar from '../../../component/Portfolio/SideBar';
import '../../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#000',
        borderRadius: '10px',
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

const Estimator = () => {

    const classes = useStyles();

    return (
        <div className="main-content">
            <div className="nft-container">
                <SideBar />
                <div className="w-10 white">
                    <div className="">
                        <div className="swap-container w-10 mb-30">
                            <div className="text-left mb-15">
                                <Button className="primary-btn"><img className="btn-token-img" src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" />Ethereum <MoreVertIcon className="size-15" /></Button>
                            </div>
                            <div className="card w-10 border-15 mb-15">
                                <div className="d-flex jc-btw text-left w-10 mb-10">
                                    <div className="swap-title">
                                        <span>Token Swap</span>
                                    </div>
                                    <div className="setting-icon">
                                        <IconButton className="icon-btn setting-icon" aria-label="setting-icon" color="primary">
                                            <SettingsIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <FormControl className="w-10" >
                                    <div className="w-10 mb-15">
                                        <TextField 
                                            className="w-10"
                                            name="swap-eth-from"
                                            label="From"
                                            variant="outlined"
                                            InputProps={{
                                                classes: {
                                                    root: classes.root,
                                                    focused: classes.focused,
                                                    notchedOutline: classes.notchedOutline
                                                },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <div className="token-icon-img d-flex jc-btw align-items-center">
                                                            <div>
                                                                <img className="token-img" src="https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png" />
                                                            </div>
                                                            <div className="token-name ml-5">
                                                                <span>ETH</span>
                                                            </div>
                                                        </div>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            placeholder="0.0" 
                                        />
                                    </div>
                                    <div className="text-center mb-15">
                                        <IconButton className="icon-btn swap-btn" aria-label="swap-icon" color="primary">
                                            <SwapVertIcon />
                                        </IconButton>
                                    </div>
                                    <div className="w-10 mb-15">
                                        <TextField 
                                            className="w-10"
                                            name="swap-eth-from"
                                            label="To"
                                            variant="outlined"
                                            InputProps={{
                                                classes: {
                                                    root: classes.root,
                                                    focused: classes.focused,
                                                    notchedOutline: classes.notchedOutline
                                                },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <div className="token-icon-img d-flex jc-btw align-items-center">
                                                            <div>
                                                                <img className="token-img" src="https://tokens.1inch.io/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png" />
                                                            </div>
                                                            <div className="token-name ml-5">
                                                                <span>ETH</span>
                                                            </div>
                                                        </div>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            placeholder="0.0" 
                                        />
                                    </div>
                                    <div className="w-10 mb-15">
                                        <Button className="w-10 open-wallet-btn">Swap</Button>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                        <div className="portfolio-feedback-wrapper--second w-10 mt-30 mb-30">
                            <div className="feedback-wrapper">
                                <span className="airdrop-card-title">How do you feel about this page?</span>
                                <div>
                                    <IconButton className="icon-btn" aria-label="thumb-up" color="primary">
                                        <ThumbUpIcon />
                                    </IconButton>
                                    <IconButton className="icon-btn" aria-label="thumb-down" color="primary">
                                        <ThumbDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className="help-card d-flex jc-btw text-left mb-60">
                            <div className="help-sidebar w-3-5">
                                <ul className="help-sidebar-list">
                                    <li className="help-sidebar-list-item">What is Token Swap on DappRadar?</li>
                                    <li className="help-sidebar-list-item">How to exchange tokens?</li>
                                    <li className="help-sidebar-list-item">How much does trading tokens on DappRadar cost?</li>
                                    <li className="help-sidebar-list-item">How do I know DappRadar gives me the best price?</li>
                                    <li className="help-sidebar-list-item">How do I know my money is safe?</li>
                                    <li className="help-sidebar-list-item">What does it mean to Approve a token?</li>
                                    <li className="help-sidebar-list-item">Why does token approval cost money?</li>
                                </ul>
                            </div>
                            <div className="help-content w-6-5">
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>What is Token Swap on DappRadar?</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>Token Swap on DappRadar offers users the ability to swap their crypto tokens at the best available market prices. DappRadar uses 0x Protocol to search for the best possible trading opportunities for its users across a wide variety of decentralized exchanges. Our Token Swap allows users to swap tokens on Ethereum, Binance Smart Chain and Polygon.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>How to exchange tokens?</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>Depending on which tokens users want to exchange, they first need to select the correct blockchain: Ethereum, BSC or Polygon. Note that Metamask or another web3 wallet needs to be switched to the same blockchain as well.</p>
                                        <p>Users then provide the input token from their wallet in the top selection field, and select which token they wish to receive in the bottom one.</p>
                                        <p>Also state how much you want to spend. The system will automatically calculate what you will receive.</p>
                                        <p>Tokens that users want to spend from their wallet, will first need to be approved, which involves a paid transaction. After confirming the approval transaction, Token Swap is ready to exchange the tokens.</p>
                                        <p>Press “swap”, then also “Confirm Swap”. Again, your web3 wallet (i.e. Metamask) will open up to confirm the transaction. Your new tokens will appear in your portfolio shortly after.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>How much does trading tokens on DappRadar cost?</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>During our Token Swap launch period, DappRadar doesn’t take a fee or commission. However, traders do need to keep in mind that transaction fees apply (commonly referred to as gas fees). The size of these fees depend on the activity on either Ethereum, Polygon or Binance Smart Chain, depending on which blockchain you’re using.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>How do I know DappRadar gives me the best price?</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>DappRadar taps into the 0x Protocol API, aggregating liquidity from the best decentralized exchange on each blockchain. We offer you the best price by looking at, for example, Uniswap and SushiSwap on Ethereum, PancakeSwap on Binance Smart Chain and QuickSwap and SushiSwap on Polygon.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Estimator;