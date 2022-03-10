import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#34349d",
        color: "white",
        paddingBottom: '0px',
        minHeight: "700px",
    },
    title: {
        fontSize: "40px",
        fontWeight: "bold"
    },
    cardGroup: {
        display: "flex"
    },
    card: {
        width: "200px",
        minHeight: "147px",
        padding: "18px",
        borderRadius: "7px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
        marginLeft: "18px",
        marginBottom: "18px",
    },
    cardLogo: {
        background: "#1a6be3",
        padding: "3px",
        borderRadius: "5px"
    },
    cardName: {
        fontWeight: "bold",
        fontSize: "17px"
    },
    cardContent: {

    }
    
  }));
  

function PlacePage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(240 241 245)", paddingBottom: "50px"}}>
                <Grid item xs={12} sm={2} md={2}>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <p className={classes.title}>All you need. All in one place.</p>
                    <div className={classes.cardGroup}>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 21 19.292" fill="#fff"><path d="M17 19.292a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5h2.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5zm-8 0a1.5 1.5 0 01-1.5-1.5V1.5A1.5 1.5 0 019 0h3a1.5 1.5 0 011.5 1.5v16.292a1.5 1.5 0 01-1.5 1.5zm-7.5 0a1.5 1.5 0 01-1.5-1.5v-7a1.5 1.5 0 011.5-1.5H4a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5z"></path></svg>
                            <p className={classes.cardName}>Dapp</p>
                            <p className={classes.cardContent}>Track, discover and analyze the latest dapps</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 21.016 20.421" fill="#fff"><path d="M3.297 18.053L.11 6.248a3.142 3.142 0 01.314-2.4 3.18 3.18 0 011.948-1.5h.006L10.8.111a3.207 3.207 0 013.933 2.245l3.182 11.808a3.143 3.143 0 01-.313 2.4 3.18 3.18 0 01-1.948 1.5h-.01l-8.422 2.245a3.207 3.207 0 01-3.929-2.25zM7.979 6.37a.442.442 0 00-.321.364L7.315 9.12l-2.27.828a.439.439 0 00-.041.809l2.17 1.069.1 2.411a.443.443 0 00.284.4.448.448 0 00.273.015.434.434 0 00.2-.12l1.682-1.728 2.326.659a.428.428 0 00.235 0 .449.449 0 00.23-.149.436.436 0 00.046-.483l-1.13-2.138 1.343-2a.442.442 0 000-.485.448.448 0 00-.448-.2l-2.382.407-1.49-1.889a.446.446 0 00-.351-.169.453.453 0 00-.113.013zm11.475 6.716L16.821 3.25l1.818.488a3.207 3.207 0 012.268 3.928l-1.451 5.42z"></path></svg>
                            <p className={classes.cardName}>NFTs</p>
                            <p className={classes.cardContent}>Track, discover and analyze latest NFTs</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28"><g data-name="Group 11226"><path data-name="Union 42" d="M13.725 19.334a12.054 12.054 0 01-4.017-1.049 2.043 2.043 0 01-1.3-1.992c.02-.327.051-.661.5-.283a8.728 8.728 0 005.1 1.651 13.931 13.931 0 006.143-.708 6 6 0 001.831-1.084c.439 1.192.241 1.76-.832 2.362a8.968 8.968 0 01-3.435.977c-.287.032-.572.084-.858.126zm-6.416-2.1a11.6 11.6 0 01-5.833-1.29c-.989-.589-1.12-1.048-.779-2.328 1.759 1.642 3.988 1.769 6.184 1.9.826.05 1.112.318 1.024 1.106-.042.381-.184.61-.572.61zm2.706-1.648a2.232 2.232 0 01-1.5-2.84c2.917 2.7 9.2 2.8 13.523.3.352 1.139.192 1.572-.842 2.242a7.968 7.968 0 01-3.606 1.08 23.389 23.389 0 01-2.433.137 13.583 13.583 0 01-5.143-.919zM1.89 13.317a1.951 1.951 0 01-1.354-2.123c.066-.364.195-.476.5-.225 1.692 1.393 3.73 1.573 5.793 1.631.627.016 1.076.112 1.089.9.012.849-.448.827-.9.8a1.74 1.74 0 00-.459.017 11.927 11.927 0 01-4.669-1zm7.95-.743c-.669-.317-1.314-.676-1.332-1.52-.02-.9.68-1.293 1.371-1.592a14.7 14.7 0 017.57-.866 9.119 9.119 0 013.544.971c.569.319 1.154.661 1.205 1.414.058.83-.553 1.22-1.159 1.533a11.7 11.7 0 01-5.973 1.021c-.222.013-.448.019-.678.019a10.66 10.66 0 01-4.549-.98zm-8.163-2.323C.593 9.651.386 9.187.69 7.866c1.86 1.721 4.219 1.712 6.49 2 .367.046.807-.094.752.571-.044.539-.073.93-.784.948q-.227.005-.452.006a10.065 10.065 0 01-5.02-1.14zm2.361-2.012a10.493 10.493 0 01-2.631-1c-.925-.443-.97-1.287-.8-2.284a9.565 9.565 0 006.844 1.921c2.345-.09 4.84-.008 6.785-2.014a2.113 2.113 0 01-1.326 2.69 13.4 13.4 0 01-4.157.914c-.486.018-.969.031-1.451.031a18.229 18.229 0 01-3.265-.258zm-1.6-3.343a4.558 4.558 0 01-1.053-.5c-1.152-.783-1.123-1.75.034-2.548a7.438 7.438 0 013.1-1.1 15.275 15.275 0 018.05.634 2.6 2.6 0 01.365.137c.662.377 1.382.815 1.372 1.637-.011.783-.695 1.2-1.377 1.5a16.105 16.105 0 01-5.57 1.064 19.227 19.227 0 01-4.921-.824z" stroke="rgba(0,0,0,0)" stroke-miterlimit="10"></path></g></svg>
                            <p className={classes.cardName}>Tokens</p>
                            <p className={classes.cardContent}>Track, discover and analyze the latest tokens</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 21 18.667" fill="#fff"><path d="M20.416 8.167h-1.075a5.852 5.852 0 00-1.364-1.914l.689-2.753h-1.168a3.478 3.478 0 00-2.66 1.251 5.783 5.783 0 00-.84-.084H9.332a5.839 5.839 0 00-5.716 4.667H2.041a.876.876 0 01-.857-1.05.9.9 0 01.893-.7h.036a.219.219 0 00.219-.219v-.729a.219.219 0 00-.219-.219 2.089 2.089 0 00-2.1 1.772A2.043 2.043 0 002.041 10.5h1.457a5.81 5.81 0 002.333 4.641v2.942a.585.585 0 00.583.583h2.335a.585.585 0 00.583-.583v-1.75h4.666v1.75a.585.585 0 00.583.583h2.333a.585.585 0 00.583-.583v-2.941A5.834 5.834 0 0018.641 14h1.776a.585.585 0 00.581-.583V8.75a.585.585 0 00-.582-.583zM15.749 10.5a.583.583 0 11.583-.583.585.585 0 01-.583.583zm-6.417-7h4.666c.2 0 .39.015.58.029V3.5a3.5 3.5 0 00-7 0c0 .077.018.149.022.226A6.931 6.931 0 019.332 3.5z"></path></svg>
                            <p className={classes.cardName}>DeFi</p>
                            <p className={classes.cardContent}>Track, discover and analyze latest DeFi projects</p>
                        </div>
                    </div>
                    <div className={classes.cardGroup}>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 22.071 22.069" fill="#fff"><path stroke="rgba(0,0,0,0)" stroke-miterlimit="10" d="M.5 10.894A10.6 10.6 0 019.424.515a.845.845 0 011.01.858v2.729a.87.87 0 01-.685.848 6.184 6.184 0 00-4.829 6.282 6.2 6.2 0 005.925 5.919 6.15 6.15 0 003.566-.959.871.871 0 011.085.118l1.919 1.919a.869.869 0 01-.1 1.316 10.48 10.48 0 01-6.015 2.023h-.2A10.621 10.621 0 01.5 10.894zm17.851 6.4l-1.921-1.923a.868.868 0 01-.118-1.082 6.118 6.118 0 00.812-1.972.868.868 0 01.848-.682h2.727a.869.869 0 01.86 1 10.412 10.412 0 01-1.9 4.561.859.859 0 01-.7.351.869.869 0 01-.608-.253zm-.374-6.982a.875.875 0 01-.854-.68 6.172 6.172 0 00-4.686-4.684.869.869 0 01-.678-.851V1.38a.878.878 0 011.017-.865 10.6 10.6 0 018.78 8.78.878.878 0 01-.865 1.017z"></path></svg>
                            <p className={classes.cardName}>Industry Pulse</p>
                            <p className={classes.cardContent}>A complete dapp industry overview</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 20.771 28.419" fill="#fff"><path d="M1.45 26.341a1.5 1.5 0 01-1.06-1.84l2-7.54a1.5 1.5 0 011.84-1.06l3.41.91c-.54-.62-7.53-9-7.54-9a.53.53 0 01-.08-.26C-.2 4.761 1.4 2.091 4.69.771a13 13 0 0114.33 3.83c2.2 2.8 2.23 5.92.63 8.21a.74.74 0 01-.13.12c-.12.09-11.11 4.09-11.15 4.09l3.42.92a1.5 1.5 0 011.06 1.84l-2 7.54a1.51 1.51 0 01-1.83 1.05zm6.17-17.49l.94 6 3.84-4.7a2.66 2.66 0 00-2-2 2.66 2.66 0 00-2.76.74zm2.26 6.24l8.6-3a2.61 2.61 0 00-2.05-2.41 2.66 2.66 0 00-2.87.87zm-8.53-7.54l6 6.85c-.65-4-.92-5.72-.92-5.72a2.69 2.69 0 00-2.05-2.2 2.6 2.6 0 00-3 1.07zm15.91 1.33a4.47 4.47 0 011.13.68 5.5 5.5 0 01.9 1.08v-.14a5.32 5.32 0 00-.13-3.11 8 8 0 00-2.27-3.37 8.55 8.55 0 00-2.11-1.48 11.26 11.26 0 00-2.63-1h-.05a10.55 10.55 0 00-2.74-.4 10.84 10.84 0 00-2.48.2c-4.86.87-5.48 4.51-5.48 4.51a4.74 4.74 0 012.48-.53 4 4 0 01.75.14 5.26 5.26 0 011.59.79l.22.19a14.4 14.4 0 011.16 1 4.38 4.38 0 015.55 1.49 14.55 14.55 0 011.47-.25h.19a6 6 0 012 .15l.4.13z"></path></svg>
                            <p className={classes.cardName}>Airdrops</p>
                            <p className={classes.cardContent}>Sign up for free DappRadar Airdrops</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 20.614 21"><path d="M14.808 20.8l-4.461-3.845c-.512-.428-.164-1.171.555-1.17l2.854.008-.025-8.282a1.494 1.494 0 011.591-1.375 1.516 1.516 0 011.6 1.384l.024 8.282 2.871.008c.7 0 1.072.747.562 1.174L15.94 20.8a.888.888 0 01-.563.2.9.9 0 01-.569-.2zm-9.53-5.93a1.513 1.513 0 01-1.6-1.383l-.025-8.3-2.855-.008c-.7 0-1.07-.747-.561-1.174L4.675.187a.877.877 0 011.117.017l4.46 3.845c.512.429.163 1.172-.554 1.17l-2.855-.008.025 8.283a1.491 1.491 0 01-1.584 1.373z"></path></svg>
                            <p className={classes.cardName}>Token Swap</p>
                            <p className={classes.cardContent}>Exchange your ERC20 tokens on multiple networks</p>
                        </div>
                        <div className={classes.card}>
                            <svg className={classes.cardLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 18.437 17.348" fill="#fff"><path data-name="Path 4940" d="M18.4 6.339a2.708 2.708 0 00-2.761-2.592c-4.336.028-8.672.01-13.008.01a1.519 1.519 0 01-.625-.076c-.173-.075-.362-.14-.364-.373s.181-.309.357-.377a1.915 1.915 0 01.7-.1h13.196c.1 0 .223-.023.226-.146a2.975 2.975 0 00-.38-2.182 1.809 1.809 0 00-1.76-.468c-2.06.229-4.116.486-6.175.724-1.985.23-3.971.448-5.956.676A1.977 1.977 0 00.011 3.507c0 3.676.026 7.352-.013 11.027a2.723 2.723 0 002.818 2.813c2.13-.022 4.261-.005 6.392-.006 2.181 0 4.361.006 6.542 0a2.623 2.623 0 002.621-2.295c.106-2.907.06-5.807.029-8.707zm-8.7 9.433v-1.046a4.193 4.193 0 10-3.332-1.66l.748-.739a3.138 3.138 0 112.58 1.35v-1.046a2.092 2.092 0 10-2.09-2.092 2.071 2.071 0 00.279 1.042l.779-.761a1.059 1.059 0 011.034-1.354 1.075 1.075 0 011.075 1.073 1.075 1.075 0 01-1.076 1.074 1.059 1.059 0 01-.3-.049l-2.7 2.634a.506.506 0 01-.082.065l-.024.013a.6.6 0 01-.066.034c-.012 0-.024.007-.037.011a.52.52 0 01-.059.017.136.136 0 01-.042 0h-.055a.526.526 0 01-.056-.006.14.14 0 00-.043 0 .557.557 0 01-.058-.018c-.013 0-.027-.007-.04-.013a.52.52 0 01-.057-.03l-.034-.019a.541.541 0 01-.054-.045.346.346 0 01-.028-.023 5.224 5.224 0 113.741 1.578z"></path></svg>
                            <p className={classes.cardName}>Portfolio</p>
                            <p className={classes.cardContent}>Track, analyze and manage your wallets</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.gridItem1}>
                </Grid>
                
            </Grid>
            
        </div>
    );
}
export default PlacePage;