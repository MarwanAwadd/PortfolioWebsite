import "./Styles.css";
import React from "react";
import Box from "@material-ui/core/Box";
import Rotate from "../../Sources/Rotate.png"

const SplashScreen = ({ enter, setEnter }) => {
    const [count, setCount] = React.useState(0);
    const [enterP, setEnterP] = React.useState(enter);


    const handleOpen = () => {
        setEnterP(true);
        setTimeout(() => {
            setEnter(true)
        }, 4000);
    }

    React.useEffect(() => {
        let lB = document.getElementById("leftBox");
        let rB = document.getElementById("rightBox");
        let b = document.getElementById("enterButton");
        let l = document.getElementById("logo");

        if (enterP) {
            lB.style.width = "0%";
            rB.style.width = "0%";
            lB.style.transitionDelay = "2s";
            rB.style.transitionDelay = "2s";

            b.style.opacity = "0";
            b.style.visibility = "hidden";
            b.style.transitionDelay = "0.6s"
            b.style.webkitTransitionDelay = "0.6s";

            l.style.animation = "shrink 0.5s linear"
            l.style.transform = "scale(0)";
            l.style.webkitTransform = "scale(0)";
        }
    })

    return (
        <div display='flex' style={{width: "100%", height: "99%", margin:"0px"}} >
            <img id="logo" src={Rotate} className="logo" />
            <button id="enterButton" className="enterButton" onClick={handleOpen}/>
            <Box id="leftBox" className="leftBox" />
            <Box id="rightBox" className="rightBox" />
        </div>
    );
};

export default SplashScreen;
