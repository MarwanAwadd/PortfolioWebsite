import React from "react";
import { useStyles } from "./Styles";
import { Box, Icon, Grid, Zoom } from "@material-ui/core";
import Card from "./Card"
import usePreventBodyScroll from "./usePreventBodyScroll";
import { LeftArrow, RightArrow } from "./Arrows";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { GridList, GridListTile } from "@material-ui/core";
import useOnScreen from "../../../useOnScreen";

import CPlusPlusLogo from "../../../Sources/skillsLogos/c++logo.png";
import CLogo from "../../../Sources/skillsLogos/clogo.png";
import DotNetCoreLogo from "../../../Sources/skillsLogos/dotnetcorelogo.png";
import JavaLogo from "../../../Sources/skillsLogos/javalogo.png";
import MatlabLogo from "../../../Sources/skillsLogos/matlablogo.png";
import PythonLogo from "../../../Sources/skillsLogos/pythonlogo.png";
import RISCVLogo from "../../../Sources/skillsLogos/riscvlogo.png";
import VerilogLogo from "../../../Sources/skillsLogos/veriloglogo.png";

import CSharpLogo from "../../../Sources/skillsLogos/c#logo.png";
import CSSLogo from "../../../Sources/skillsLogos/csslogo.png";
import GitLogo from "../../../Sources/skillsLogos/gitlogo.png";
import HTMLLogo from "../../../Sources/skillsLogos/htmllogo.png";
import JavaScriptLogo from "../../../Sources/skillsLogos/javascriptlogo.png";
import MySQLLogo from "../../../Sources/skillsLogos/mysqllogo.png";
import NodeJSLogo from "../../../Sources/skillsLogos/nodejslogo.png";
import ReactLogo from "../../../Sources/skillsLogos/reactlogo.png";

import AndroidStudioLogo from "../../../Sources/skillsLogos/androidstudiologo.png";
import AngularLogo from "../../../Sources/skillsLogos/angularlogo.png";
import ComputerVisionLogo from "../../../Sources/skillsLogos/computervision.png";
import DartLogo from "../../../Sources/skillsLogos/dartlogo.png";
import DeepLearningLogo from "../../../Sources/skillsLogos/dllogo.png";
import FlutterLogo from "../../../Sources/skillsLogos/flutterlogo.png";
import OpenCVLogo from "../../../Sources/skillsLogos/opencvlogo.png";
import SwiftLogo from "../../../Sources/skillsLogos/swiftlogo.png";



const SkillsPage = () => {
    const classes = useStyles();
    var ref = React.createRef()
    var isVisible = useOnScreen(ref)

    const baseTime = 400;
    const timeDiff = 100;
    const timings = [];
    for (let i = 0; i < 10; i++) {
        let t = baseTime + (timeDiff * i);
        timings.push(t);
    }
    const row1 = [];
    row1.push({ name: "C++", logo: CPlusPlusLogo, time: timings[0] });
    row1.push({ name: "C", logo: CLogo, time: timings[1] });
    row1.push({ name: "Java", logo: JavaLogo, time: timings[2] });
    row1.push({ name: "Python", logo: PythonLogo, time: timings[3] });
    row1.push({ name: "C#", logo: CSharpLogo, time: timings[4] });
    row1.push({ name: "CSS", logo: CSSLogo, time: timings[5] });
    row1.push({ name: "RISC-V", logo: RISCVLogo, time: timings[6] });
    row1.push({ name: "System Verilog", logo: VerilogLogo, time: timings[7] });
    
    const row2 = [];
    row2.push({ name: "Matlab", logo: MatlabLogo, time: timings[1] });
    row2.push({ name: "Computer Vision", logo: ComputerVisionLogo, time: timings[2] });
    row2.push({ name: "Deep Learning", logo: DeepLearningLogo, time: timings[3] });
    row2.push({ name: "OpenCV", logo: OpenCVLogo, time: timings[4] });
    row2.push({ name: "MySQL", logo: MySQLLogo, time: timings[5] });
    row2.push({ name: "Git", logo: GitLogo, time: timings[6] });
    row2.push({ name: "NodeJS", logo: NodeJSLogo, time: timings[7] });
    row2.push({ name: "JavaScript", logo: JavaScriptLogo, time: timings[8] });

    const row3 = [];
    row3.push({ name: "HTML", logo: HTMLLogo, time: timings[2] });
    row3.push({ name: "ASP.NET Core", logo: DotNetCoreLogo, time: timings[3] });
    row3.push({ name: "ReactJS", logo: ReactLogo, time: timings[4] });
    row3.push({ name: "Android Studio", logo: AndroidStudioLogo, time: timings[5] });
    row3.push({ name: "Angular", logo: AngularLogo, time: timings[6] });
    row3.push({ name: "Dart", logo: DartLogo, time: timings[7] });
    row3.push({ name: "Flutter", logo: FlutterLogo, time: timings[8] });
    row3.push({ name: "Swift", logo: SwiftLogo, time: timings[9] });    
    
    return (
        <Box id="skillsPage" className={classes.page}>
            <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" style={{ width: "100%", height: "100%" }}>
                <Grid ref={ref} spacing={4} container direction="row" alignItems="center" className={classes.rowContainer}>
                {row1.map((item, index) => (
                    <Zoom in={isVisible} style={{ transitionDelay: item.time + 'ms' }}>
                        <Grid item style={{flexWrap: "nowrap", width: "calc(100% / 8)"}}>
                            <Card Name={item.name} Image={item.logo} LastIndex={index === 7}/>
                        </Grid>
                    </Zoom>
                ))}
                </Grid>
                <Grid spacing={4} container direction="row" alignItems="center" className={classes.rowContainer}>
                {row2.map((item, index) => (
                    <Zoom in={isVisible} style={{ transitionDelay: item.time + 'ms' }}>
                        <Grid item style={{flexWrap: "nowrap", width: "calc(100% / 8)"}}>
                            <Card Name={item.name} Image={item.logo} LastIndex={index === 7}/>
                        </Grid>
                    </Zoom>
                ))}
                </Grid>
                <Grid spacing={4} container direction="row" alignItems="center" className={classes.rowContainer}>
                {row3.map((item, index) => (
                    <Zoom in={isVisible} style={{ transitionDelay: item.time + 'ms' }}>
                        <Grid item style={{flexWrap: "nowrap", width: "calc(100% / 8)"}}>
                            <Card Name={item.name} Image={item.logo} LastIndex={index === 7}/>
                        </Grid>
                    </Zoom>
                ))}
                </Grid>
            </Grid>
        </Box>
    )
}

export default SkillsPage;