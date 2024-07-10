import useRepos from "./useRepos.ts";

export interface Project {
    id: number;
    name: string;
    topics: string[];
    description: string | null;
    html_url: string;
    contents_url: string;
}

// this hook filters from the results of the useRepos hook and only displays to the user the hooks that meet the criteria
const useProjects = () => {
    const {repos, isLoading, error} = useRepos();
    //filter for repos with the required tag here
    const filteredProjects = repos.filter(repo => repo.topics.includes('portfolio-display'));
    return {projects: filteredProjects, isLoading, error};
};

export default useProjects;