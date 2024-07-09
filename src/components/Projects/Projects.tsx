import {Heading, Stack} from "@chakra-ui/react";
import ProjectList from "../ProjectList";

const Projects = () => {

    return (
        <>
            <Stack align="center">
                <Heading>Projects</Heading>
                <ProjectList/>
            </Stack>
        </>
    );
};

export default Projects;