import React from "react";
import { useStyles } from "./Styles";
import { Box, Icon } from "@material-ui/core";
import KeyboardDownArrow from "@material-ui/icons/KeyboardArrowDownTwoTone"

const ProjectsPage = () => {
    const classes = useStyles()

    return (
        <Box id="projectsPage" className={classes.page}>Projects Page
        </Box>
    ) 
}

export default ProjectsPage;