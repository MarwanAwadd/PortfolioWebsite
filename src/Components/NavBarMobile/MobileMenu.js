import React from "react";
import { useStyles } from "./Styles.js";
import { Grid, Icon } from "@material-ui/core"
import ArrowBack from "@material-ui/icons/ArrowBack"
import { Link } from 'react-scroll'

const MobileMenu = ({ setMenuOpen }) => {
    const classes = useStyles();

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const navBarOffset = (10 * vh) / 100;

    const closeMobileMenu = () => {
        setMenuOpen(false);
        console.log("Menu Off");
    }
    return (
        <>

            <Grid container className={classes.mobileMenu} display="flex" justifyContent="center" alignItems="center" direction="column">
                <Grid item className={classes.navItems}>
                    <Link to="aboutPage" spy={true} smooth={true} offset={-navBarOffset}>About Me</Link>
                </Grid>
                <Grid item className={classes.navItems}>
                    <Link to="skillsPage" spy={true} smooth={true} offset={-navBarOffset}>Skills</Link>
                </Grid>
                <Grid item className={classes.navItems}>
                    <Link to="projectsPage" spy={true} smooth={true} offset={-navBarOffset}>Projects</Link>
                </Grid>
                <Grid item className={classes.navItems}>
                    <Link to="experiencePage" spy={true} smooth={true} offset={-navBarOffset}>Experience</Link>
                </Grid>
                <Icon onClick={closeMobileMenu} className={classes.backIcon}>
                    <ArrowBack fontSize="large" />
                </Icon>


            </Grid>
        </>

    )
}

export default MobileMenu;