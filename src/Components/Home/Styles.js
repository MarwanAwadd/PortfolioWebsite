import React from "react";
import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    waveParent : {
        height : '80%',
        width : '100%',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
    waveChild : {
        flex : 1,
        transform : [ { scaleX : 0.5 } ],
        backgroundColor : 'yellow',
        alignItems : 'center',
        justifyContent : 'center'
    },

    
}))