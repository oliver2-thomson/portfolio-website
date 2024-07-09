import {Heading, Stack} from "@chakra-ui/react";
import useProjects from "../../hooks/useProjects.ts";

const ProjectList = () => {
    const {projects, isLoading, error} = useProjects();

    return (
        <>
            <Stack>
                {projects.map(project => <Heading key={project.id}>{project.name}</Heading>)}

            </Stack>
        </>
    );
};

export default ProjectList;