import {useState} from "react";

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
            <button onClick={handleLoadProject}>Load Project</button>
            {buildUrl && <iframe src={buildUrl} width="100%" height="500px"></iframe>}
        </>
    );
};

export default ProjectViewer;