import React from "react";
import { useStyles } from "./Styles";
import { Grid, Icon } from "@material-ui/core"
import Menu from "@material-ui/icons/Menu"
import MobileMenu from "./MobileMenu";
import { MenuOpen } from "@material-ui/icons";

const NavBarMobile = ({ setMenuOpen }) => {
    const classes = useStyles()


    const openMobileMenu = () => {
        setMenuOpen(true);
        console.log("Menu On");

    }

    return (
            <Grid container className={classes.nav} display="flex" justifyContent="center" alignItems="center" direction="row" >
                <Grid item xs={6} sm={6} md={6} lg={6} display="flex" justifyContent="flex-start" alignItems="center" className={classes.navLogo}>Home</Grid>
                <Grid container xs={6} sm={6} md={6} lg={6} display="flex" justifyContent="flex-end" alignItems="center">
                    <Icon className={classes.menuIcon} onClick={openMobileMenu} color="#FFF" >
                        <Menu fontSize="large"/>
                    </Icon>
                </Grid>
            </Grid>
    )
}

export default NavBarMobile;