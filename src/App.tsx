import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {

    return (
        <>
            <Grid templateAreas={`"nav" "main"`}>
                <GridItem area="nav" bg="silver">
                    <NavBar/>
                </GridItem>
                <GridItem area="main" bg="gold">
                    <AboutMe/>
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
