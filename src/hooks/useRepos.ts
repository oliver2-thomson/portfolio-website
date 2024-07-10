import username from "../data/username.ts";
import useData from "./useData.ts";
import {Project} from "./useProjects.ts";


//this hook will return every repo from the GitHub API
const useRepos = () => {
    const {data, isLoading, error} = useData<Project>(
        `/users/${username}/repos`,
        {
            params: {
                per_page: 100,
                page: 1
            }
        });

    return {repos: data, isLoading, error};
};

export default useRepos;