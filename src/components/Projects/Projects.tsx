import {Heading, Stack} from "@chakra-ui/react";

const Projects = () => {
    const longArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    return (
        <>
            <Stack align="center">
                <Heading>Projects</Heading>
                {longArray.map(() => <Heading>Content to fill page</Heading>)}
            </Stack>
        </>
    );
};

export default Projects;