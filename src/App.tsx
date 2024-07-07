import {Box, Flex} from "@chakra-ui/react";
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
            <Flex height="100vh">
                <Box
                    // positioning for the box around the navbar - change later
                    position="fixed"
                    left="5vw"
                    top="20vh"
                    height="60vh"
                    width="20vw"
                >
                    <NavBar onSelectPage={(page) => setSelectedPage(page)}/>
                </Box>
                <Box
                    //This doesnt seem like the best way to do this
                    backgroundColor="gold"
                    marginLeft="30vw"
                    flex="1"
                    overflow="auto"
                >
                    {selectedPage === 0 && <AboutMe/>}
                    {selectedPage === 1 && <Projects/>}
                    {selectedPage === 2 && <Skills/>}
                    {selectedPage === 3 && <Experience/>}
                    {selectedPage === 4 && <ContactMe/>}
                </Box>
            </Flex>
        </>
    );
}

export default App;
