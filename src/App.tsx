import {Grid, GridItem} from "@chakra-ui/react";

function App() {

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area='nav' bg='silver'>Nav</GridItem>
        <GridItem area='main' bg='gold'>Main</GridItem>
      </Grid>
    </>
  )
}

export default App
