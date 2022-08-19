import React from "react";
import { useStyles } from "./Styles";
import { Box, Icon, Grid } from "@material-ui/core";
import Card from "./Card"
import usePreventBodyScroll from "./usePreventBodyScroll";
import { LeftArrow, RightArrow } from "./Arrows";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { GridList, GridListTile } from "@material-ui/core";

import CPlusPlusLogo from "../../../Sources/skillsLogos/row1logo/c++logo.png";
import CLogo from "../../../Sources/skillsLogos/row1logo/clogo.png";
import IllustratorLogo from "../../../Sources/skillsLogos/row1logo/illustrator.png";
import JavaLogo from "../../../Sources/skillsLogos/row1logo/javalogo.png";
import MatlabLogo from "../../../Sources/skillsLogos/row1logo/matlablogo.png";
import PythonLogo from "../../../Sources/skillsLogos/row1logo/pythonlogo.png";
import RISCVLogo from "../../../Sources/skillsLogos/row1logo/riscvlogo.png";
import VerilogLogo from "../../../Sources/skillsLogos/row1logo/veriloglogo.png";

import CSharpLogo from "../../../Sources/skillsLogos/row2logo/c#logo.png";
import CSSLogo from "../../../Sources/skillsLogos/row2logo/csslogo.png";
import GitLogo from "../../../Sources/skillsLogos/row2logo/gitlogo.png";
import HTMLLogo from "../../../Sources/skillsLogos/row2logo/htmllogo.png";
import JavaScriptLogo from "../../../Sources/skillsLogos/row2logo/javascriptlogo.png";
import MySQLLogo from "../../../Sources/skillsLogos/row2logo/mysqllogo.png";
import NodeJSLogo from "../../../Sources/skillsLogos/row2logo/nodejslogo.png";
import ReactLogo from "../../../Sources/skillsLogos/row2logo/reactlogo.png";

import AndroidStudioLogo from "../../../Sources/skillsLogos/row3logo/androidstudiologo.png";
import AngularLogo from "../../../Sources/skillsLogos/row3logo/angularlogo.png";
import ComputerVisionLogo from "../../../Sources/skillsLogos/row3logo/computervision.png";
import DartLogo from "../../../Sources/skillsLogos/row3logo/dartlogo.png";
import DeepLearningLogo from "../../../Sources/skillsLogos/row3logo/dllogo.png";
import FlutterLogo from "../../../Sources/skillsLogos/row3logo/flutterlogo.png";
import OpenCVLogo from "../../../Sources/skillsLogos/row3logo/opencvlogo.png";
import SwiftLogo from "../../../Sources/skillsLogos/row3logo/swiftlogo.png";



const SkillsPage = () => {
    const classes = useStyles();

    function onWheel(apiObj, ev) {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    const { disableScroll, enableScroll } = usePreventBodyScroll();

    const row1 = [];
    row1.push({ name: "C++", logo: CPlusPlusLogo });
    row1.push({ name: "C", logo: CLogo });
    row1.push({ name: "Adobe Illustrator", logo: IllustratorLogo });
    row1.push({ name: "Java", logo: JavaLogo });
    row1.push({ name: "Matlab", logo: MatlabLogo });
    row1.push({ name: "Python", logo: PythonLogo });
    row1.push({ name: "RISC-V", logo: RISCVLogo });
    row1.push({ name: "System Verilog", logo: VerilogLogo });
    const row2 = [];
    row2.push({ name: "C#", logo: CSharpLogo });
    row2.push({ name: "CSS", logo: CSSLogo });
    row2.push({ name: "Git", logo: GitLogo });
    row2.push({ name: "HTML", logo: HTMLLogo });
    row2.push({ name: "JavaScript", logo: JavaScriptLogo });
    row2.push({ name: "MySQL", logo: MySQLLogo });
    row2.push({ name: "NodeJS", logo: NodeJSLogo });
    row2.push({ name: "ReactJS", logo: ReactLogo });
    const row3 = [];
    row3.push({ name: "Android Studio", logo: AndroidStudioLogo });
    row3.push({ name: "Angular", logo: AngularLogo });
    row3.push({ name: "Computer Vision", logo: ComputerVisionLogo });
    row3.push({ name: "Deep Learning", logo: DeepLearningLogo });
    row3.push({ name: "Dart", logo: DartLogo });
    row3.push({ name: "Flutter", logo: FlutterLogo });
    row3.push({ name: "OpenCV", logo: OpenCVLogo });
    row3.push({ name: "Swift", logo: SwiftLogo });

    return (
        <Box id="skillsPage" className={classes.page}>
            <Grid container direction="column" display="flex" justifyContent="space-around" alignItems="center" style={{ width: "100%", height: "100%", padding: "2vw" }}>
                <Grid container direction="row" alignItems="center" className={classes.rowContainer}  >
                    <GridList cols={5} style={{flexWrap: "nowrap", transform: 'translateZ(0)'}}>
                        {row1.map((item) => (
                            <GridListTile style={{ justifyContent: "center", alignItems: "center", height: "inherit", overflowX: "auto" }}>
                                <Card Name={item.name} Image={item.logo} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid container direction="row" alignItems="center" className={classes.rowContainer}  >
                    <GridList cols={5} style={{flexWrap: "nowrap", transform: 'translateZ(0)'}}>
                        {row2.map((item) => (
                            <GridListTile style={{ justifyContent: "center", alignItems: "center", height: "inherit" }}>
                                <Card Name={item.name} Image={item.logo} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid container direction="row" alignItems="center" className={classes.rowContainer}  >
                    <GridList cols={5} style={{flexWrap: "nowrap", transform: 'translateZ(0)'}}>
                        {row3.map((item) => (
                            <GridListTile style={{ justifyContent: "center", alignItems: "center", height: "inherit" }}>
                                <Card Name={item.name} Image={item.logo} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SkillsPage;