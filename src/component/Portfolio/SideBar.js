import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import '../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    
    
  }));
  

function SideBar() {
    const classes = useStyles();

    return (
        <ProSidebar>
            <Menu iconShape='square'>
                <MenuItem><Link to='/hub/wallet'>Portfolio</Link></MenuItem>
                <MenuItem><Link to='/hub/airdrop'>Airdrops</Link></MenuItem>
                <MenuItem><Link to='/'>NFT Value Estimator</Link></MenuItem>
                <MenuItem><Link to='/'>Token Swap</Link></MenuItem>
                <MenuItem><Link to='/'>Token Explorer</Link></MenuItem>
            </Menu>
        </ProSidebar>
    );
}
export default SideBar;