import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import username from "../data/username.ts";
import {CanceledError} from "axios";
import {Project} from "./useProjects.ts";

//this hook will return every repo from the GitHub API
const useRepos = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            //get the first 100 repos from the user - I am assuming there will never be >100 repos but for the sake of generality I should come back and make this iterable
            .get(`https://api.github.com/users/${username}/repos`, {
                signal: controller.signal,
                params: {
                    per_page: 100,
                    page: 1
                }
            })
            .then(res => {
                    console.log(res.data);
                    setProjects(res.data);
                    setIsLoading(false); // this line must be repeated because .finally() is not supported for some reason
                }
            )
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
    }, []);
    return {projects, isLoading, error};
};

export default useRepos;