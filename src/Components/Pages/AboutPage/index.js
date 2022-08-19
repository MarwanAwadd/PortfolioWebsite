import React from "react";
import { useStyles } from "./Styles";
import { Grid, Icon, Typography, Zoom, Box } from "@material-ui/core";
import useOnScreen from "../../../useOnScreen";
import AUCLogo from "../../../Sources/auclogo.png";
import GithubLogo from "../../../Sources/githublogo.png";
import LinkedinLogo from "../../../Sources/linkedinlogo.png";
import DocumentLogo from "../../../Sources/document.png";
import ResumePDF from "../../../Sources/Resume_1.pdf"

const AboutPage = () => {
    const classes = useStyles()

    const aboutMe = "My name is Marwan Awad, a software engineer based in Cairo, Egypt. I'm a recently graduated BSc Computer Engineer from AUC. Throughout my last 2 years I discovered a passion for software engineering when projects became more practical and less theoretical. This was especially true for computer vision as that was the basis for my thesis project. But my interests go beyond my major too as I also had a hand in activities with entities unrelated to my field whether its in volunteer work or in leadership workshops which I was responsible for. Following my thesis project, I'd like for my technical work to have an impact on society as working as a software engineer with no clear purpose in mind to me feels like I've given up on my values to better my surroundings so I'd like to be able to contribute with the experience I have yet to gain in the technical field along with my own learning.";
    const ref = React.useRef()
    const isVisible = useOnScreen(ref)

    return (
        <div display="flex" ref={ref} className={classes.page}>
            <Grid container id="aboutPage" direction="row" display="flex" justifyContent="space-around" alignItems="center" style={{ width: "100%", height: "100%", padding: "2vw" }}>
                <Grid container xs={12} sm={12} md={4} lg={4} display="flex" direction="row" justifyContent="center" alignItems="center" className={classes.leftBlock}>
                    <Zoom in={isVisible} style={{ transitionDelay: '1000ms' }}>
                        <Box container display="flex" alignItems="center" justifyContent="center" className={classes.imageContainer} spacing={2}>
                        </Box>
                    </Zoom>
                </Grid>
                <Grid container xs={12} sm={12} md={7} lg={7} display="flex" alignItems="center" justifyContent="center" className={classes.rightBlock}>
                    <Grid container xs={12} sm={12} md={12} lg={12} display="flex" alignItems="center" justifyContent="center" className={classes.gridContainerAUC}>
                        <Zoom in={isVisible} style={{ transitionDelay: '1200ms' }}>
                            <Box container display="flex" alignItems="center" justifyContent="center" className={classes.aboutMeTextBox}>
                                <Typography className={classes.aboutMeText}>{aboutMe}</Typography>
                            </Box>
                        </Zoom>
                    </Grid>
                    <Grid container xs={8} sm={8} md={8} lg={8} display="flex" direction="row" alignItems="center" justifyContent="space-around">
                        <Grid container xs={2} sm={2} md={2} lg={2} display="flex" alignItems="center" justifyContent="center" className={classes.gridContainer}>
                            <Zoom in={isVisible} style={{ transitionDelay: '1500ms' }}>
                                <a href="https://github.com/MarwanAwadd" target="_blank" className={classes.socialContainer}>
                                    <img src={GithubLogo} className={classes.socialsLogo} alt="AUC Logo" />
                                </a>
                            </Zoom>
                        </Grid>
                        <Grid container xs={2} sm={2} md={2} lg={2} display="flex" alignItems="center" justifyContent="center" className={classes.gridContainer}>
                            <Zoom in={isVisible} style={{ transitionDelay: '1500ms' }}>
                                <a href="https://www.linkedin.com/in/marwan-awad-b6685b1b9/" target="_blank" className={classes.socialContainer}>
                                    <img src={LinkedinLogo} className={classes.socialsLogo} alt="AUC Logo" />
                                </a>
                            </Zoom>
                        </Grid>
                        <Grid container xs={2} sm={2} md={2} lg={2} display="flex" alignItems="center" justifyContent="center" className={classes.gridContainer}>
                            <Zoom in={isVisible} style={{ transitionDelay: '1500ms' }}>
                                <a href={ResumePDF} download="Resume_1" className={classes.socialContainer}>
                                    <img src={DocumentLogo} className={classes.socialsLogo} alt="AUC Logo" />
                                </a>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default AboutPage;