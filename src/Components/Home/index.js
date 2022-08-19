import React from "react";
// import { useStyles } from "./Styles";
import NavBarPC from "../NavBarPC";
import NavBarMobile from "../NavBarMobile";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import SkillsPage from "../Pages/SkillsPage";
import ProjectsPage from "../Pages/ProjectsPage"
import ExperiencePage from "../Pages/ExperiencePage"
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import MobileMenu from "../NavBarMobile/MobileMenu";

const gap = (
    <div style={{width: "100vw", height: "10vh", backgroundColor: "#D3D3D3"}} />
    );

const Home = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [navClick, setNavClick] = React.useState(0);

    return (
        <div style={{ overflow: "hidden" }}>
            {!menuOpen &&
                <div>
                    <HomePage/>
                    {gap}
                    <AboutPage/>
                    {gap}
                    <SkillsPage/>
                    {gap}
                    <ProjectsPage/>
                    {gap}
                    <ExperiencePage/>
                </div>
            }
            {!smallScreen && !menuOpen && <NavBarPC navClick={navClick} setNavClick={setNavClick} />}
            {smallScreen && !menuOpen && <NavBarMobile setMenuOpen={setMenuOpen} />}
            {smallScreen && menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
        </div>
    )
}

export default Home;