import {Project} from "../../hooks/useProjects.ts";
import {Card, CardBody, CardHeader, Text} from "@chakra-ui/react";

interface Props {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Text>{project.name}</Text>
                </CardHeader>
                <CardBody>
                    <Text>{project.description}</Text>
                </CardBody>
            </Card>
        </>
    );
};

export default ProjectCard;