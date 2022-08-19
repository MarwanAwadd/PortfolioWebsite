import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    text: {
        display: "flex",
        fontSize: "80px",
        position: "absolute",
        height: "50vh",
        width: "70%",
        color: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto Mono'",
        fontWeight: theme.typography.fontWeightBold,
        verticalAlign: "center",
        userSelect: "none",

        [theme.breakpoints.down('md')]: {
            fontSize: "60px"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px"
        },
    },
    downIcon: {
        display: "flex",
        width: "4vw",
        height: "4vw",
        backgroundColor: "#9AC3F3",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "2vh",
        borderRadius: "50%",
        cursor: "pointer"
    },


}))