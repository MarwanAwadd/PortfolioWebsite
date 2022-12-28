import React, { useRef } from "react";
import { useStyles } from "./Styles";
import { Grid, Typography, Zoom} from "@material-ui/core";

const Card = ({ Name, Image, LastIndex }) => {
    const classes = useStyles()
    const [isHovering, setIsHovering] = React.useState(false);
    const [showText, setShowText] = React.useState(false);
    const handleMouseOver = () => {
        console.log(LastIndex)
        setIsHovering(true);
        setTimeout(() => {
            if(!isHovering){
                let h  = document.getElementById("logo").clientHeight;
                document.getElementById("name").style.height = h.toString() + 'px';
                document.getElementById("name").style.minWidth = '80%';
                setShowText(true);
            }
        }, 800);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
        setShowText(false);
        document.getElementById("name").style.height = "0px";
        document.getElementById("name").style.minWidth = "0px";
    };

    let cardClass = LastIndex ? classes.cardMainContainerLast: classes.cardMainContainerNorm;
    let nameClass = LastIndex ? classes.skillNameLast: classes.skillNameNorm;
    return (
        <div onMouseLeave={() => handleMouseOut()} className={cardClass} >
            {isHovering && LastIndex &&
            <div id="name" className={nameClass}>
                {showText && <Typography className={classes.skillNameText}>{ Name }</Typography>}
            </div>
            }
            <Grid container id="logo" onMouseEnter={() => handleMouseOver()} direction="column" display='flex' alignItems='center' justifyContent='space-around' className={classes.skillCardContainer}>
                <Grid container display='flex' alignItems='center' justifyContent='center'>
                    <img src={Image} alt={Name} className={classes.skillLogo} />
                </Grid>
            </Grid>
            {isHovering && !LastIndex &&
            <div id="name" className={nameClass}>
                {showText && <Typography className={classes.skillNameText}>{ Name }</Typography>}
            </div>
            }
        </div>
    )
}

export default Card;