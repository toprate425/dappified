import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton, Checkbox } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Select from 'react-select';

import SideBar from '../../component/Portfolio/SideBar';
import '../../assets/css/styles.css';

const options = [
    { value: '0N1 Force', label: '0N1 Force' },
    { value: 'Animetas', label: 'Animetas' },
    { value: 'Anonymice', label: 'Anonymice' },
];

const Estimator = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="main-content">
            <div className="nft-container">
                <SideBar />
                <div className="w-10 white">
                    <div className="text-center">
                        <h1>NFT Value Estimator</h1>
                        <div className="text-center">
                            <div className="card-container d-flex p-relative mb-30">
                                <div className="card-container-img-left">
                                    <img src="/dappified/img/axie-full-transparent.png" className="img-loaded" alt="nft-cryptokittie" />
                                </div>
                                <div className="card-container-img-right">
                                    <img src="/dappified/img/crypto-punk.png" className="img-loaded" alt="nft-cryptopunk" />
                                </div>
                                <div className="card text-center">
                                    <img src="/dappified/img/scale.png" />
                                    <div className="card--title">
                                        <span>Get price estimates of any NFT</span>
                                    </div>
                                    <div className="card--subtitle">
                                        <span>Select a NFT collection to continue</span>
                                    </div>
                                    <div className="w-5 black text-left">
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="top-searches">
                                <div className="top-searches--title mb-15">
                                    <span>TOP SEARCHES</span>
                                </div>
                                <div className="d-flex jc-center">
                                    <Button className="secondary-btn">Crypto Punks #3609</Button>
                                    <Button className="secondary-btn">Crypto Punks #22</Button>
                                    <Button className="secondary-btn">Crypto Punks #9</Button>
                                </div>
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
                                    <li className="help-sidebar-list-item">What is Rarible and how to use it</li>
                                    <li className="help-sidebar-list-item">What are NFTs or Non-Fungible Tokens?</li>
                                    <li className="help-sidebar-list-item">Top NFT Marketplaces | Beginners Guide</li>
                                </ul>
                            </div>
                            <div className="help-content w-6-5">
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>What is Rarible and how to use it</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>The growth of crypto art was one of the most interesting trends of 2020 and shows no signs of slowing as we enter 2021. NFT art marketplaces such as Rarible have boomed on Ethereum, in part as a direct result of the amount of value being generated through activity on DeFi dapps.</p>
                                        <p>In that context, it is perhaps fitting that Rarible made its reputation by employing one key technique from the DeFi boom. Anyone selling or buying art on Rarible also earns some of the 75,000 RARI tokens which are distributed weekly to encourage activity. Of course, this is just another form of asset or yield farming that was kicked off back in June with the launch of Compound’s COMP token.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>What are NFTs or Non-Fungible Tokens?</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>Non-Fungible tokens or NFTs for short are completely unique digital items that are issued on a blockchain. In many ways, they hold similar qualities to items in the real-world. Think about physical goods like limited-edition trainers, or the limited edition drops by clothing brand Supreme. These digital items are distinguishable from one another by a unique number.</p>
                                        <div className="help-sub-title">
                                            <span>Digital collectibles</span>
                                        </div>
                                        <p>One of the first tangible use cases to employ NFTs were digital collectible dapps such as CryptoKitties, CryptoPunks, and Topps GPK. In 2020 this is also a space that has seen a lot of activity. Users have regular opportunities to win NFTs as they are used as ‘sign up bait’ quite often during marketing campaigns. Furthermore, users can simply purchase NFT’s.</p>
                                        <p>CryptoKitties is an excellent example of this process with the added game mechanic of breeding new kitties using yours and others to create a new hybrid kitty. The new CryptoKitty will hold some attributes of its parents.</p>
                                        <p>The premise of the game is to collect CryptoKitties and their traits, which determine how they look. Different CryptoKitties are not just random. Images assigned to each Kitty serial number, it is a result of “reading” the traits or digital information of that CryptoKitty from the blockchain.</p>
                                        <div className="mb-30">
                                            <a href="#" className="ml-0">Continue reading...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="help-section">
                                    <div className="help-title">
                                        <span>Top NFT Marketplaces | Beginners Guide</span>
                                    </div>
                                    <div className="help-sub-content">
                                        <p>NFT marketplaces are quickly rising to prominence in 2021 and NFTs are becoming the new asset class to care about in the crypto space. NFT marketplaces, simply put, provide a marketplace for the buying, selling, and trading of NFT tokens.</p>
                                        <p>What are NFTs? To explain in detail is best left to this article. In essence, an NFT is a completely unique class of tokens. Bitcoin and Ethereum are ERC-20 tokens, they are not unique as many people hold them.</p>
                                        <p>By comparison, an NFT or ERC-721 token is a one-off and carries unique identifiers. In this instance it’s what gives the NFT its value, like Bitcoin, it’s scarcity. Dapps such as CrypotKitties and Cryptopunks pioneered the NFT collectibles hype back in 2017 and continue to lead the space today.</p>
                                        <p>Due to the fact that an NFT ERC-721 token is completely unique, some of the first iterations to enter the market have utilized art and digital items. It’s quite simple to understand why art came to the fore so quickly. After all, if Leonardo da Vinci had made 100 copies of the Mona Lisa then the original would never have been so valuable we presume.</p>
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