import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: "#000",
        height: "10vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0px",
        // boxShadow: "0px -20px 15px -20px grey inset",
        userSelect: "none",
        [theme.breakpoints.down('sm')]: {
            transition: "all 0.8s ease",
        }
    },

    navLogo: {
        justifySelf: "flex-start",
        fontSize: "34px",
        display: "flex",
        alignItems: "center",
        fontWeight: theme.typography.fontWeightBold,
        color: "#FFF",
        fontFamily: 'Montserrat',
        width: "fit-content",
        height: "100%",
        cursor: "pointer",
        transition: "color 0.25s ease-in-out",
        '&:hover': {
            color: "#9AC3F3",
        },
    },

    navItems: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "16px",
        height: "96%",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "0.3vh solid transparent",
        userSelect: "none",
        '&:hover': {
            borderBottom: "0.4vh solid #9AC3F3",
            borderStyle: "groove",
            color: "#9AC3F3",
            boxShadow: "0px -17px 15px -17px #9AC3F3 inset",
        }
    },

    navItemsAbout: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "16px",
        height: "96%",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "0.3vh solid transparent",
        userSelect: "none",
        '&:hover': {
            borderBottom: "0.4vh solid #9AC3F3",
            borderStyle: "groove",
            color: "#EB9090",
            boxShadow: "0px -17px 15px -17px #9AC3F3 inset",
        }
    },

    navItemsSkills: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "16px",
        height: "96%",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "0.3vh solid transparent",
        userSelect: "none",
        '&:hover': {
            borderBottom: "0.4vh solid #4ABDAC",
            borderStyle: "groove",
            color: "#EFBC49",
            boxShadow: "0px -17px 15px -17px #4ABDAC inset",
        }
    },

    navItemsProjects: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "16px",
        height: "96%",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "0.3vh solid transparent",
        userSelect: "none",
        '&:hover': {
            borderBottom: "0.4vh solid #88D317",
            borderStyle: "groove",
            color: "#b362aa",
            boxShadow: "0px -17px 15px -17px #88D317 inset",
        }
    },

    navItemsExperience: {
        justifySelf: "flex-start",
        cursor: "pointer",
        fontSize: "16px",
        height: "96%",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#FFF",
        transition: "color 0.2s ease-in-out",
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "0.3vh solid transparent",
        userSelect: "none",
        '&:hover': {
            borderBottom: "0.4vh solid #AB9353",
            borderStyle: "groove",
            color: "#57662A",
            boxShadow: "0px -17px 15px -17px #AB9353 inset",
        }
    },

}))