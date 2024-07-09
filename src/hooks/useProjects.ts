import useRepos from "./useRepos.ts";

export interface Project {
    id: number;
    name: string;
    topics: string[];
    description: string | null;
}

// this hook filters from the results of the useRepos hook and only displays to the user the hooks that meet the criteria
const useProjects = () => {
    const {projects, isLoading, error} = useRepos();
    //filter for repos with the required tag here
    const filteredProjects = projects.filter(project => project.topics.includes('portfolio-display'));
    return {projects: filteredProjects, isLoading, error};
};

export default useProjects;