import useData from "./useData.ts";

const useContents = (
    repoContentsUrl: string,
    contentPath: string = ''
) => {
    const endpoint = repoContentsUrl.replace('{+path}', contentPath);
    const {data, isLoading, error} = useData<never>(endpoint);

    return {content: data, isLoading, error};

};

export default useContents;