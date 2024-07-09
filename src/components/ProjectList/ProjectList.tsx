import {Heading, Spinner, Stack, Text} from "@chakra-ui/react";
import useProjects from "../../hooks/useProjects.ts";

const ProjectList = () => {
    const {projects, isLoading, error} = useProjects();

    if (error) return <Text color="red">{error}</Text>;

    return (
        <>
            {isLoading && <Spinner/>}
            <Stack>
                {projects.map(project => <Heading key={project.id}>{project.name}</Heading>)}
            </Stack>
        </>
    );
};

export default ProjectList;