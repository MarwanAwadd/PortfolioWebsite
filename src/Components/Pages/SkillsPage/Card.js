import React from "react";
import { useStyles } from "./Styles";
import { Box, Icon, Grid, Typography } from "@material-ui/core";

const Card = ({ Name, Image }) => {
    const classes = useStyles()

    return (
        <Grid container direction="column" display='flex' alignItems='center' justifyContent='space-around' className={classes.skillCardContainer}>
            <Grid container display='flex' alignItems='center' justifyContent='center'>
                <img src={Image} className={classes.skillLogo} />
            </Grid>
            <Grid container display='flex' alignItems='center' justifyContent='center'>
                <Typography className={classes.skillNameText}>{Name}</Typography>
            </Grid>
        </Grid>
    )
}

export default Card;