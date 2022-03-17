import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton, Checkbox } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

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
        },
     },
     focused: {},
     notchedOutline: {}
}));

const tempArry = [
    { name: 'GHST', img: '/dappified/airdrop/GHST.png', title: 'Aavegotchi GHST airdrop', content: '$500 worth of GHST to 100 lucky winners'},
    { name: 'gmee', img: '/dappified/airdrop/gmee.png', title: 'GAMEE (GMEE) airdrop', content: '$500 worth of GMEE tokens to 100 lucky winners!'},
    { name: 'MATIC', img: '/dappified/airdrop/POLYGON.png', title: 'MATIC airdrop', content: '$500 worth of MATIC tokens to 100 lucky winners!'},
    { name: 'UNLAND', img: '/dappified/airdrop/UNLAND.png', title: 'ULAND (ULAND) airdrop', content: '$500 worth of ULAND to 100 lucky winners'},
    { name: 'THG', img: '/dappified/airdrop/THG.png', title: 'Thetan Arena (THG) airdrop', content: '$500 worth of THG to 100 lucky winners'},
    { name: 'TLM', img: '/dappified/airdrop/TLM.png', title: 'Alien Worlds (BSC) (TLM) airdrop', content: '$500 worth of TLM (BSC) to 100 lucky winners'},
    { name: 'XWG', img: '/dappified/airdrop/XWG.png', title: 'X World Games (XWG) airdrop', content: '$500 worth of XWG to 100 lucky winners'},
];

const Airdrops = () => {

    const classes = useStyles();
    
    return (
        <div className="main-content">
            <div className="nft-container">
                <SideBar />
                <div className="w-10 white">
                    <div className="card-container text-center">
                        <h1 className="title">Airdrops</h1>
                        <div className="w-10">
                            <div className="airdrop-card-img">
                                <img className="border-15" src="/dappified/airdrop/airdrop.jpg" />
                                <div className="airdrop-card-img-footer d-flex jc-btw w-10">
                                    <div className="d-flex jc-center">
                                        <div className="airdrop-feature-img">
                                            <img className="w-10" src="/dappified/airdrop/revv-motorsport.png" />
                                        </div>
                                        <div className="align-items-center text-left">
                                            <span className="airdrop-card-title">REVV Motorsport (REVV) airdrop</span><br />
                                            <span className="airdrop-card-content">$500 worth of REVV to 100 lucky winners</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="expired-btn"><i className="red pr-10 bold">⋅</i>Ends in 3 days</span>
                                        <Button className="primary-btn">Join now</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="airdrop-card d-flex jc-btw align-items-center">
                                <div className="d-flex jc-center">
                                    <div className="airdrop-feature-img">
                                        <img className="w-10" src="/dappified/airdrop/WRLD.png" alt="WRLD" />
                                    </div>
                                    <div className="align-items-center text-left">
                                        <span className="airdrop-card-title">NFT Worlds (WRLD) airdrop</span><br />
                                        <span className="airdrop-card-content">$500 worth of WRLD (Polygon) to 100 lucky winners</span>
                                    </div>
                                </div>
                                <div>
                                    <Button className="expired-btn">Expired</Button>
                                    <Button className="secondary-btn">Details</Button>
                                </div>
                            </div>
                            <div className="airdrop-card-img cursor-pointer">
                                <img className="border-15" src="/dappified/airdrop/kind-image.png" />
                            </div>
                            <div className="airdrop-card d-flex jc-btw align-items-center">
                                <div className="d-flex jc-center">
                                    <div className="airdrop-feature-img">
                                        <img className="w-10" src="/dappified/airdrop/quickswap-logo.png" alt="Quickswap" />
                                    </div>
                                    <div className="align-items-center text-left">
                                        <span className="airdrop-card-title">Quickswap (QUICK) airdrop</span><br />
                                        <span className="airdrop-card-content">$500 worth of QUICK to 100 lucky winners</span>
                                    </div>
                                </div>
                                <div>
                                    <Button className="expired-btn">Expired</Button>
                                    <Button className="secondary-btn">Details</Button>
                                </div>
                            </div>
                            <div className="airdrop-card d-flex jc-btw align-items-center">
                                <div className="d-flex jc-btw align-items-center">
                                    <div className="w-4 text-left">
                                        <span className="airdrop-card-title">New airdrop notifications</span><br />
                                        <span className="airdrop-card-content">Unsubscribe at any time. <a href="#">T&Cs</a> and <a href="#" className="m-0">Privacy Policy</a></span>
                                    </div>
                                    <div className="w-5 text-left">
                                        <div className="d-flex jc-btw mb-10">
                                            <TextField 
                                                className="w-6 email-input"
                                                name="address"
                                                variant="outlined"
                                                InputProps={{
                                                    classes: {
                                                        root: classes.root,
                                                        focused: classes.focused,
                                                        notchedOutline: classes.notchedOutline
                                                    },
                                                    style: {
                                                        padding: '0px 10px'
                                                    }
                                                }}
                                                required placeholder="Your E-mail" 
                                            />
                                            <Button className="primary-btn">Subscribe</Button>
                                        </div>
                                        <div className="d-flex jc-btw">
                                            <Checkbox name="receive-airdrop-notification" color="primary" />
                                            <span className="airdrop-card-content">To receive airdrop notifications, please subscribe to our weekly newsletter, (and find out what's happening on November 25th, 2021).</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                tempArry.map((array) => (
                                    <div className="airdrop-card d-flex jc-btw align-items-center" key={array.name}>
                                        <div className="d-flex jc-center">
                                            <div className="airdrop-feature-img">
                                                <img className="w-10" src={array.img} alt={array.name} />
                                            </div>
                                            <div className="align-items-center text-left">
                                                <span className="airdrop-card-title">{array.title}</span><br />
                                                <span className="airdrop-card-content">{array.content}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Button className="expired-btn">Expired</Button>
                                            <Button className="secondary-btn">Details</Button>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="mt-30 mb-60">
                                <Button className="secondary-btn">Show More</Button>
                            </div>
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
export default Airdrops;