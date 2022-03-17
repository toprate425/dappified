import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import PermMediaIcon from '@material-ui/icons/PermMedia';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import ExploreIcon from '@material-ui/icons/Explore';

import 'react-pro-sidebar/dist/css/styles.css';
import '../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    
}));
  

function SideBar() {
    const classes = useStyles();

    return (
        <ProSidebar>
            <Menu iconShape='square'>
                <MenuItem><Link to='/hub/wallet' className="sidebar-list"><PermMediaIcon className="sidebar-icon" />Portfolio</Link></MenuItem>
                <MenuItem><Link to='/hub/airdrop' className="sidebar-list"><PinDropIcon className="sidebar-icon" />Airdrops</Link></MenuItem>
                <MenuItem><Link to='/hub/nft-value-estimator' className="sidebar-list"><EventNoteIcon className="sidebar-icon" />NFT Value Estimator</Link></MenuItem>
                <MenuItem><Link to='/hub/swap/eth' className="sidebar-list"><SwapVerticalCircleIcon className="sidebar-icon" />Token Swap</Link></MenuItem>
                <MenuItem><Link to='/hub/explorer' className="sidebar-list"><ExploreIcon className="sidebar-icon" />Token Explorer</Link></MenuItem>
            </Menu>
        </ProSidebar>
    );
}
export default SideBar;