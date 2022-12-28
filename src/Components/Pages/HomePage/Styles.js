import React from "react";
import { makeStyles, fade } from '@material-ui/core';
import { hover } from "@testing-library/user-event/dist/hover";

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
        width: "40px",
        height: "40px",
        backgroundColor: "#9AC3F3",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "2vh",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        transition: "0.5s transform ease-in-out",
        '&:hover': {
            transform: "scale(1.2)",
        },
    },


}))