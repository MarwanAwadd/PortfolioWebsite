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

const Home = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(theme.breakpoints.down("sm"))
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [navClick, setNavClick] = React.useState(0);
    const [navBarOffset, setNavBarOffset] = React.useState(0);

    return (
        <div style={{ overflow: "hidden" }}>
            {!menuOpen &&
                <div>
                    <HomePage navBarOffset={navBarOffset}/>
                    <AboutPage/>
                    <SkillsPage/>
                    <ProjectsPage/>
                    <ExperiencePage/>
                </div>
            }
            {!smallScreen && !menuOpen && <NavBarPC setNavBarOffset={setNavBarOffset} navClick={navClick} setNavClick={setNavClick} />}
            {smallScreen && !menuOpen && <NavBarMobile setMenuOpen={setMenuOpen} />}
            {smallScreen && menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
        </div>
    )
}

export default Home;