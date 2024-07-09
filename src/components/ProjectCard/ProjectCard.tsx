import {Project} from "../../hooks/useProjects.ts";
import {Card, CardBody, CardFooter, CardHeader, Heading, IconButton, Text} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";

interface Props {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>{project.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{project.description}</Text>
                </CardBody>
                <CardFooter>
                    <a
                        href={project.html_url}
                        target="_blank"
                    >
                        <IconButton
                            aria-label="Project on GitHub"
                            icon={<FaGithub/>}
                            variant="ghost"
                            fontSize="30px"
                            size="lg"
                        />
                    </a>
                </CardFooter>
            </Card>
        </>
    );
};

export default ProjectCard;