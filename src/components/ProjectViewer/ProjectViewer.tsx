import {useState} from "react";
import {Flex} from "@chakra-ui/react";

interface Props {
    address: string;
}

const ProjectViewer = ({address}: Props) => {
    const [buildUrl, setBuildUrl] = useState<string | null>(null);

    const handleLoadProject = () => {
        setBuildUrl(address);
    };

    return (
        <>
            {!buildUrl && <button onClick={handleLoadProject}>Load Project</button>}
            {buildUrl &&
                <Flex width="100%" height="100%">
                    <iframe src={buildUrl} width="100%" height="100%"></iframe>
                </Flex>
            }
        </>
    );
};

export default ProjectViewer;