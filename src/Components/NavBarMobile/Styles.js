import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: "#EB9090",
        height: "10vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0px",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        boxShadow: "0px -20px 15px -20px grey inset",
        [theme.breakpoints.down('sm')]: {
            transition: "all 0.8s ease-in-out",
        }
    },
    navLogo: {
        justifySelf: "flex-start",
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        color: "#FFF",
        fontFamily: 'Nunito, sans-serif',
        width: "fit-content",
        cursor: "pointer",
        transition: "color 0.25s ease-in-out",

        '&:hover': {
            color: "#9AC3F3",
        },
    },
    menuIcon: {
        position: "absolute",
        width: "6vw",
        height: "6vw",     
        cursor: "pointer",
        transition: "color 0.2s ease-in-out",
        color: "#FFF",
        '&:hover': {
            color: "#9AC3F3",
        }
    },
    mobileMenu: {
        backgroundColor: "#EB9090",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        paddingLeft: "5vw",
        paddingRight: "5vw",
        transition: "all 0.8s ease-in-out",
    },
    navItems: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "1.8rem",
        display: "flex",
        height: "9.7vh",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Nunito'",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        '&:hover': {
            color: "#9AC3F3",
        }
    },
    backIcon: {
        width: "6vw",
        height: "6vw",
        position: "absolute",        
        cursor: "pointer",
        top: "0",
        left: "0",
        margin: "3vw",
        transition: "color 0.2s ease-in-out",
        color: "#FFF",
        '&:hover': {
            color: "#9AC3F3",
        }
    },
}))