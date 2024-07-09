import useRepos from "./useRepos.ts";

export interface Project {
    id: number;
    name: string;
    topics: string[];
}

const useProjects = () => {
    const {projects, isLoading, error} = useRepos();
    //filter for repos with the required tag here
    const filteredProjects = projects.filter(project => project.topics.includes('portfolio-display'));
    return {projects: filteredProjects, isLoading, error};
};

export default useProjects;