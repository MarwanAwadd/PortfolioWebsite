import React from "react";
import { useStyles } from "./Styles";
import Wave from 'react-wavify'
import TypeAnimation from 'react-type-animation';
import { Box, Icon } from "@material-ui/core";
import { ArrowDownward, AspectRatio } from "@material-ui/icons";
import { Link } from "react-scroll";

const HomePage = ({ navBarOffset }) => {
    const classes = useStyles()

    return (
        <Box id="homePage" style={{ width: "100vw", height: "100vh", backgroundColor: "#9AC3F3"}} justifyContent="center" alignItems="center" display="flex">
            <Wave fill='#EB9090' style={{left: "0" ,position: "absolute", bottom: 0, width: "100%", height: "60%" }}
                paused={false}
                options={{
                    height: 60,
                    amplitude: 60,
                    speed: 0.4,
                    points: 1
                }}
            />
            <TypeAnimation
                cursor={false}
                sequence={['Hello, My name is Marwan Awad and this is My Website :)', 2500]}
                className={classes.text}
                repeat="0"
            />
            <Link activeClass="active" to="aboutPage" spy={true} smooth={true} offset={-navBarOffset} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
                <Icon className={classes.downIcon}  >
                    <ArrowDownward fontSize="large" style={{color:"#FFF", width: "70%", AspectRatio: "1"}} />
                </Icon>
            </Link>
        </Box>
    )
}

export default HomePage;