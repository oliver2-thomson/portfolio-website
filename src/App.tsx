import {Box} from "@chakra-ui/react";
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

            <Box
                // positioning for the box around the navbar - change later
                position="fixed"
                left="20px"
                top="20px"
                height="300px"
                width="200px"
            >
                <NavBar onSelectPage={(page) => setSelectedPage(page)}/>
            </Box>
            <Box backgroundColor="gold">
                {selectedPage === 0 && <AboutMe/>}
                {selectedPage === 1 && <Projects/>}
                {selectedPage === 2 && <Skills/>}
                {selectedPage === 3 && <Experience/>}
                {selectedPage === 4 && <ContactMe/>}
            </Box>


        </>
    );
}

export default App;
