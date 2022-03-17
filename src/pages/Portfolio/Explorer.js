import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton, Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Pagination from '@material-ui/lab/Pagination';

import HelpIcon from '@material-ui/icons/Help';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import SideBar from '../../component/Portfolio/SideBar';
import '../../assets/css/styles.css';

const textFieldStyle = makeStyles((theme) => ({
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
        },
     },
     focused: {},
     notchedOutline: {}
}));

const paginationStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const tokens = [
    { id: 1, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 2, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 3, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 4, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 5, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 6, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 7, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 8, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 9, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 10, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 11, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 12, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
    { id: 13, img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880', token_name: 'Ethereum', token_type: 'ETH', price: '$2,561.06', token_1H: '-0.28%', token_24H: '-0.54%', token_7D: '0.83%', token_volume_24H: '$12.15B', token_mkt_cap: '$307.14B'  },
];

const Explorer = () => {

    const classes = textFieldStyle();
    const pageMoveStyle = paginationStyle();

    return (
        <div className="main-content">
            <div className="nft-container">
                <SideBar />
                <div className="w-10 white">
                    <div className="explorer-heading d-flex jc-btw align-items-center">
                        <div className="explorer-title">
                            <h1>Token explorer</h1>
                        </div>
                        <div className="networks">
                            <Button className="text-btn explorer-heading-btn">Ethereum</Button>
                            <Button className="text-btn explorer-heading-btn">BSC</Button>
                            <Button className="text-btn explorer-heading-btn">Polygon</Button>
                        </div>
                    </div>
                    <div className="mb-15">
                        <Button className="secondary-btn border-20-i">All</Button>
                        <Button className="secondary-btn border-20-i">Winners24h</Button>
                        <Button className="secondary-btn border-20-i">Losers24h</Button>
                        <Button className="secondary-btn border-20-i">New Tokens</Button>
                    </div>
                    <div className="search-bar mb-15">
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
                            placeholder="Search in all tokens" 
                        />
                    </div>
                    <div className="mb-30">
                        <Button className="secondary-btn border-20-i">DeFi</Button>
                        <Button className="secondary-btn border-20-i">Exchanges</Button>
                        <Button className="secondary-btn border-20-i">Gambling</Button>
                        <Button className="secondary-btn border-20-i">Games</Button>
                        <Button className="secondary-btn border-20-i">Indexes</Button>
                        <Button className="secondary-btn border-20-i">NFT</Button>
                        <Button className="secondary-btn border-20-i">Social</Button>
                    </div>
                    <div className="explorer-heading d-flex jc-btw align-items-center mb-20">
                        <div className="explorer-title">
                            <h2>All Tokens</h2>
                        </div>
                        <div className="filter-switch align-items-center d-flex jc-around">
                            <div className="mr-5">
                                <IconButton className="icon-btn help-icon" aria-label="help-icon">
                                    <HelpIcon />
                                </IconButton>
                            </div>
                            <span className="grey">High risk token filter is <strong className="greenyellow">ON</strong></span>
                            <div className="ml-10">
                                <FormControlLabel control={ <Switch color="primary" /> } />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="explorer-table-label text-left d-flex mb-10">
                            <div className="w-2-5">
                                <span>Name</span>
                            </div>
                            <div className="w-1-5 d-flex cursor-pointer">
                                <span>Price</span>
                                <ArrowDropDownIcon />
                            </div>
                            <div className="w-1 d-flex cursor-pointer">
                                <span>1H</span>
                                <ArrowDropDownIcon />
                            </div>
                            <div className="w-1 d-flex cursor-pointer">
                                <span>24H</span>
                                <ArrowDropDownIcon />
                            </div>
                            <div className="w-1 d-flex cursor-pointer">
                                <span>7D</span>
                                <ArrowDropDownIcon />
                            </div>
                            <div className="w-1-5 d-flex cursor-pointer">
                                <span>Volume 24H</span>
                                <ArrowDropDownIcon />
                            </div>
                            <div className="w-1-5 d-flex cursor-pointer">
                                <span>Mkt. Cap</span>
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                        {
                            tokens.map((token, index) => (
                                <div className="explorer-card" key={index}>
                                    <div className="d-flex jc-btw align-items-center">
                                        <div className="token-num w-0-5">
                                            <span>{token.id}</span>
                                        </div>
                                        <div className="d-flex text-left align-items-center w-2">
                                            <div className="token-img">
                                                <img className="w-10" src={token.img} />
                                            </div>
                                            <div className="token-info">
                                                <div className="token-name">
                                                    <span>{token.token_name}</span><br />
                                                </div>
                                                <div className="token-type">
                                                    <span>{token.token_type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="token-price w-1-5">
                                            <span>{token.price}</span>
                                        </div>
                                        <div className="token-1H w-1 downward">
                                            <span>{token.token_1H}</span>
                                        </div>
                                        <div className="token-24H w-1 downward">
                                            <span>{token.token_24H}</span>
                                        </div>
                                        <div className="token-7D w-1 upward">
                                            <span>{token.token_7D}</span>
                                        </div>
                                        <div className="token-volume-24H w-1-5">
                                            <span>{token.token_volume_24H}</span>
                                        </div>
                                        <div className="token-mkt-cap w-1-5">
                                            <span>{token.token_mkt_cap}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="explorer-pagination w-10 text-center align-items-center mb-60">
                        <div className={pageMoveStyle.root}>
                            <Pagination count={10} color="primary" shape="rounded" showFirstButton showLastButton />
                        </div>
                    </div>
                    <div className="portfolio-feedback-wrapper w-10 mt-30 mb-30">
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
                </div>
            </div>
        </div>
    );
}
export default Explorer;