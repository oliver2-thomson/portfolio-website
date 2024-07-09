import {useEffect, useState} from "react";
import username from "../../data/username.ts";
import apiClient from "../../services/api-client.ts";
import {Heading, Stack} from "@chakra-ui/react";
import {CanceledError} from "axios";

interface Project {
    name: string;
}

interface FetchResponse<Project> {
    count: number;
    data: Project[];
}

const ProjectList = () => {
    const [repos, setRepos] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            //get the first 100 repos from the user - I am assuming there will never be >100 repos but for the sake of generality I should come back and make this iterable
            .get<FetchResponse<Project>>(`https://api.github.com/users/${username}/repos`, {
                signal: controller.signal,
                params: {
                    per_page: 100,
                    page: 1
                }
            })
            .then(res => {
                    console.log(res.data);
                    setRepos(res.data);
                    setLoading(false); // this line must be repeated because .finally() is not supported for some reason
                }
            )
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Stack>
                {repos.map(repo => <Heading>{repo.name}</Heading>)}

            </Stack>
        </>
    );
};

export default ProjectList;