import React from "react";
import { useStyles } from "./Styles";
import { Box, Icon } from "@material-ui/core";
import KeyboardDownArrow from "@material-ui/icons/KeyboardArrowDownTwoTone"

const ExperiencePage = () => {
    const classes = useStyles()

    return (
        <Box id="experiencePage" className={classes.page}>Experience Page
        </Box>
    ) 
}

export default ExperiencePage;