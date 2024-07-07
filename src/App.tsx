import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import {useState} from "react";

function App() {
    const [selectedPage, setSelectedPage] = useState(0);

    return (
        <>
            <Grid templateAreas={`"nav main"`}>
                <GridItem area="nav" bg="silver">
                    <NavBar onSelectPage={(page) => setSelectedPage(page)}/>
                </GridItem>
                <GridItem area="main" bg="gold">
                    {selectedPage === 0 && <AboutMe/>}
                    {selectedPage === 1 && <Projects/>}
                    {selectedPage === 2 && <Skills/>}
                    {selectedPage === 3 && <Experience/>}
                    {selectedPage === 4 && <ContactMe/>}
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
