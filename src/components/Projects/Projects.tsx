import {Heading, Stack} from "@chakra-ui/react";
import ProjectList from "../ProjectList";
import ProjectViewer from "../ProjectViewer";

const Projects = () => {

    return (
        <>
            <Stack align="center">
                <Heading>Projects</Heading>
                <ProjectList/>
                <ProjectViewer address={'https://oliver2-thomson.github.io/iframe-test/'}/>
            </Stack>
        </>
    );
};

export default Projects;