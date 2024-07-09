import useRepos from "./useRepos.ts";

export interface Project {
    id: number;
    name: string;
}

const useProjects = () => {
    const repos = useRepos();
    //filter for repos with the required tag here
    return repos;
};

export default useProjects;