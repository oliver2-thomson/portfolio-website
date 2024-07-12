import {useState} from "react";
import {Button, Flex} from "@chakra-ui/react";

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
            {!buildUrl && <Button onClick={handleLoadProject}>Load Project</Button>}
            {buildUrl &&
                <Flex
                    width="100%"
                    height="0"
                    paddingTop="56.25%" /* 16:9 Aspect Ratio */
                    position="relative"
                    overflow="hidden"
                >
                    <iframe
                        src={buildUrl}
                        style={{
                            width: '200%', /* Double the width to scale down */
                            height: '200%', /* Double the height to scale down */
                            transform: 'scale(0.5)', /* Scale down to fit */
                            transformOrigin: '0 0',
                            border: 'none',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    ></iframe>
                </Flex>
            }
        </>
    );
};

export default ProjectViewer;