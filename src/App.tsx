import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

function App() {

    return (
        <>
            <Grid templateAreas={`"nav" "main"`}>
                <GridItem area="nav" bg="silver">
                    <NavBar/>
                </GridItem>
                <GridItem area="main" bg="gold">
                    <AboutMe/>
                    <Projects/>
                    <Skills/>
                    <Experience/>
                    <ContactMe/>
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
