import React from "react";
import { useStyles } from "./Styles";
import { Box, Grid, Typography } from "@material-ui/core"
import { Link } from 'react-scroll'

const NavBarPC = () => {
    const classes = useStyles()

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const navBarOffset = (10 * vh) / 100;

    return (
        <Grid container className={classes.nav} justifyContent="center" alignItems="center" direction="row" >
            <Grid item xs={4} sm={4} md={4} lg={4} justifyContent="center" alignItems="center" className={classes.navLogo} >
                <Link activeClass="active" to="homePage" spy={true} smooth={true} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
                    <Box display="flex" justifyContent="center" alignItems="center" style={{verticalAlign: "baseline"}} >Home</Box>
                </Link>
            </Grid>
            <Grid container xs={7} sm={7} md={7} lg={7} justifyContent="center" alignItems="center" direction="row" style={{ height: "100%" }}>
                <Grid item style={{ height: "100%" }} >
                    <Link activeClass="active" to="aboutPage" spy={true} smooth={true} offset={-navBarOffset} style={{ height: "100%", width: "100%" }}>
                        <Box display="flex" className={classes.navItemsAbout}>About Me</Box>
                    </Link>
                </Grid>
                <Grid item style={{ height: "100%" }} >
                    <Link activeClass="active" to="skillsPage" spy={true} smooth={true} offset={-navBarOffset} style={{ height: "100%", width: "100%" }}>
                        <Box display="flex" className={classes.navItemsSkills}>Skills</Box>
                    </Link>
                </Grid>
                <Grid item style={{ height: "100%" }} >
                    <Link activeClass="active" to="projectsPage" spy={true} smooth={true} offset={-navBarOffset} style={{ height: "100%", width: "100%" }}>
                        <Box display="flex" className={classes.navItemsProjects}>Projects</Box>
                    </Link>
                </Grid>
                <Grid item style={{ height: "100%" }} >
                    <Link activeClass="active" to="experiencePage" spy={true} smooth={true} offset={-navBarOffset} style={{ height: "100%", width: "100%" }}>
                        <Box display="flex" className={classes.navItemsExperience}>Experience</Box>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavBarPC;