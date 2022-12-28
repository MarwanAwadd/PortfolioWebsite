import React from "react";
import { makeStyles, fade } from '@material-ui/core';
import { textAlign } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
    page: {
        backgroundColor: "#EFBC49",
        height: "90vh",
        width: "100vw",
    },

    rowContainer: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        width: "95%",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "24px"
    },

    cardMainContainerNorm: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transition: "ease 0.8s transform",
        zIndex: "500",
        '&:hover': {
            transform: "scale(1.4)",
            zIndex: "100000",
        },
        height: "90%",
    },

    cardMainContainerLast: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        transition: "ease 0.8s transform",
        zIndex: "500",
        '&:hover': {
            transform: "scale(1.4)",
            zIndex: "100000",
        },
        height: "90%",
    },

    skillCardContainer: {
        height: "100%",
        aspectRatio: "1",
        padding: "8px",
        borderRadius: "1vw",
        backgroundColor: "#4ABDAC",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",        
    },

    skillLogo: {
        width: "70%",
        aspectRatio: "1/1",
    },

    skillNameNorm: {
        minWidth: "0",
        zIndex: "100000",
        marginLeft: "-1vw",
        backgroundColor: "#fff9e7",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomRightRadius: "1vw",
        borderTopRightRadius: "1vw",
        transition: "min-width 0.3s ease-in-out, max-width 0.3s ease-in-out",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        paddingRight: "16px",
        paddingLeft: "16px",
        overflow: 'hidden',
        textAlign: "left"
    },

    skillNameLast: {
        minWidth: "0",
        zIndex: "100000",
        marginRight: "-1vw",
        backgroundColor: "#fff9e7",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomLeftRadius: "1vw",
        borderTopLeftRadius: "1vw",
        transition: "min-width 0.3s ease-in-out, max-width 0.3s ease-in-out",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        paddingRight: "16px",
        paddingLeft: "16px",
        overflow: 'hidden',
        textAlign: "left"
    },

    skillNameText: {
        fontSize: "20px",
        color: "black",
        fontFamily: "'Montserrat', sans-serif;",
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: "red",
        minWidth: "100%"
    },

}))