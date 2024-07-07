import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {

    return (
        <>
            <Grid templateAreas={`"nav" "main"`}>
                <GridItem area="nav" bg="silver">
                    <NavBar/>
                </GridItem>
                <GridItem area="main" bg="gold">Main</GridItem>
            </Grid>
        </>
    );
}

export default App;
