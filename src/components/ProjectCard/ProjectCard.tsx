import {Project} from "../../hooks/useProjects.ts";
import {Card, CardBody, CardFooter, CardHeader, Heading, IconButton, Text} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";
import useContents from "../../hooks/useContents.ts";
import ProjectViewer from "../ProjectViewer";

interface Props {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
    //get the details of the README file
    const {content} = useContents(project.contents_url, 'README.md');
    console.log(content);

    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>{project.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{project.description}</Text>
                    {project.topics.includes('iframe-compatible') &&
                        <ProjectViewer address={`https://oliver2-thomson.github.io/${project.name}/`}/>}
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