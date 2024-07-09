import {Heading, Spinner, Stack, Text} from "@chakra-ui/react";
import useProjects from "../../hooks/useProjects.ts";
import ProjectCard from "../ProjectCard";

const ProjectList = () => {
    // I may want to store all projects locally on first load and filter from a locally stored list but this may be an over-optimisation
    const {projects, isLoading, error} = useProjects();

    if (error) return <Text color="red">{error}</Text>;

    return (
        <>
            {isLoading && <Spinner/>}
            <Stack>
                {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
            </Stack>
        </>
    );
};

export default ProjectList;