import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "53px",
        fontWeight: "bold"
    },
    cardGroup: {
        display: "flex",
        marginBottom: "50px"
    },
    card: {
        width: "250px",
        minHeight: "150px",
        paddingLeft: "14px",
        borderRadius: "7px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
        marginLeft: "18px",
        marginBottom: "18px",
        
    },
    cardLogo: {
        width: "40px",
        marginTop: "-12px"
    },
    cardContent: {
        fontWeight: "bold"
    },
    cardButton: {
        background: "#0e47e7",
        color: "white",
        padding: "8px",
        borderRadius: "6px",
        marginTop: "10px"
    }
    
  }));
  

function CommunityPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} style={{background: "rgb(245 245 247)", color: "black"}}>
                <Grid item xs={12} sm={0} md={2}>
                </Grid>
                <Grid item xs={12} sm={0} md={7}>
                    <p className={classes.title}>One World, <br />One Community</p>
                    <div className={classes.cardGroup}>
                        <div className={classes.card}>
                            <div className={classes.cardLogo}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
                            </div>
                            <div className={classes.cardContent}>engage and initiate proposals for governance</div>
                            <Button className={classes.cardButton}>Join Discord</Button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardLogo}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                            </div>
                            <div className={classes.cardContent}>follow us and be first for all the things</div>
                            <Button className={classes.cardButton}>FOLLOW TWITTER</Button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.cardLogo}>
                                <svg width={59} height={59} xmlns="http://www.w3.org/2000/svg"><g data-name="Group 11374"><path data-name="Icon awesome-github" d="M19.122 44.883c0 .231-.265.415-.6.415-.38.035-.645-.15-.645-.415 0-.231.265-.415.6-.415.346-.031.645.15.645.415zm-3.585-.519c-.081.231.15.5.5.565a.541.541 0 00.715-.231c.069-.231-.15-.5-.5-.6a.592.592 0 00-.714.267zm5.095-.2c-.334.081-.565.3-.53.565.035.231.334.38.68.3s.565-.3.53-.53-.346-.362-.68-.33zM28.217 0C12.229 0 0 12.137 0 28.124a28.9 28.9 0 0019.537 27.571c1.475.265 1.994-.645 1.994-1.395 0-.715-.035-4.657-.035-7.077 0 0-8.068 1.729-9.763-3.435 0 0-1.314-3.354-3.2-4.219 0 0-2.64-1.81.184-1.775a6.084 6.084 0 014.449 2.974c2.524 4.449 6.754 3.17 8.4 2.409a6.406 6.406 0 011.844-3.884c-6.443-.715-12.944-1.648-12.944-12.737a8.736 8.736 0 012.72-6.789 10.89 10.89 0 01.3-7.826c2.409-.749 7.953 3.112 7.953 3.112a27.23 27.23 0 0114.477 0s5.544-3.873 7.953-3.112a10.885 10.885 0 01.3 7.826c1.844 2.04 2.974 3.631 2.974 6.789 0 11.123-6.789 12.01-13.232 12.737 1.06.911 1.959 2.64 1.959 5.348 0 3.884-.035 8.691-.035 9.636 0 .749.53 1.66 1.994 1.395 11.527-3.827 19.342-14.765 19.342-27.548C57.171 12.137 44.2 0 28.217 0zM11.2 39.754c-.15.115-.115.38.081.6.184.184.45.265.6.115.15-.115.115-.38-.081-.6-.181-.184-.447-.265-.6-.115zm-1.245-.934c-.081.15.035.334.265.45a.343.343 0 00.5-.081c.081-.15-.035-.334-.265-.45-.231-.069-.416-.034-.496.081zm3.735 4.1c-.184.15-.115.5.15.715.265.265.6.3.749.115.15-.15.081-.5-.15-.715-.25-.261-.596-.298-.746-.111zm-1.314-1.694c-.184.115-.184.415 0 .68s.5.38.645.265a.526.526 0 000-.715c-.158-.261-.457-.376-.642-.227z" fill="#171515"></path></g></svg>
                            </div>
                            <div className={classes.cardContent}>contribute to the ecosystem</div>
                            <Button className={classes.cardButton}>OPEN GITHUB</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={0} md={3}>
                </Grid>
            </Grid>
            
        </div>
    );
}
export default CommunityPage;