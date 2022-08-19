import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    page: {
        backgroundColor: "#EFBC49",
        height: "90vh",
        width: "100vw",
    },

    rowContainer: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        width: "80%",
        height: "25vh",
        backgroundColor: "#EFBC49",
        boxShadow: "0 9px 0px 0px #EFBC49 inset, 0 -9px 0px 0px #EFBC49 inset, 12px 0 15px -4px rgba(31, 73, 125, 0.8) inset, -12px 0 15px -4px rgba(31, 73, 125, 0.8) inset",
        borderRadius: "0.4vw",

    },

    skillCardContainer: {
        width: "70%",
        height: "100%",
        padding: "0.2vw",
        borderRadius: "1vw",
        backgroundColor: "#4ABDAC",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    skillLogo: {
        width: "70%",
        aspectRatio: "1/1",
    },

    skillNameText: {
        fontSize: "20px",
        color: "white",
        alignItems: "center",
        justifyContent: "space-around",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightMedium,
    },

}))