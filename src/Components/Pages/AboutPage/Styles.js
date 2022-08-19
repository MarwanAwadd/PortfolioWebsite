import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    page: {
        height: "90vh",
        width: "100vw",
        backgroundColor: "#EB9090",
    },
    leftBlock: {
        display: "flex",
        aspectRatio: "1/1",
        backgroundColor: "#9AC3F3",
        borderRadius: "50%",
        padding: "2vw",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        [theme.breakpoints.down('sm')]: {
            height: "30%",
        }
    },
    rightBlock: {
        height: "80%",
        backgroundColor: "#9AC3F3",
        borderRadius: "2vw",
        padding: "3vw",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        [theme.breakpoints.down('sm')]: {
            height: "50%",
        }
    },
    imageContainer: {
        width: "100%",
        aspectRatio: "1/1",
        backgroundColor: "#9AC3F3",
        padding: "0.5vw",
        borderRadius: "50%",
        transitionDelay: '800ms',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        [theme.breakpoints.down('sm')]: {
            width: "15vw",
        }
    },
    aboutMeTextBox: {
        width: "90%",
        borderRadius: "1.5vw",
        backgroundColor: "#fff9e7",
        padding: "1.2vw",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "0.5vw",
        overflow: "overlay",
        [theme.breakpoints.down('sm')]: {
            padding: "1vw",
            borderRadius: "3vw",
            height: "15vh",
        }
    },
    aboutMeText: {
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
        color: "#000",
        fontSize: "18px",
        userSelect: "none",
        justifySelf: "flex-start",
        textAlign: "center",
        
    },
    gridContainerAUC : {
        transition: "ease 0.8s all",

        '&:hover': {
            transform: "scale(1.05)",
        },
    },
    uniImageContainer: {
        backgroundColor: "#fff9e7",
        overflow: "overlay",
        borderRadius: "1.5vw",
        padding: "2vw",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        cursor: "pointer",
    },
    uniImage: {
        width: "100%",
        aspectRatio: "918/127",
        overflow: "hidden",
    },
    gridContainer : {
        transition: "ease 0.8s all",

        '&:hover': {
            transform: "scale(1.2)",
        },
    },
    socialContainer: {
        display: "flex",
        backgroundColor: "#fff9e7",
        width: "30%",
        aspectRatio: "1/1",
        padding: "1.5vw",
        borderRadius: "1.5vw",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        cursor: "pointer",
        
    },
    socialsLogo: {
        width: "100%",
        aspectRatio: "1/1"
    },

}))