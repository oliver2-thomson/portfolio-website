import {useEffect, useState} from "react";
import username from "../../data/username.ts";
import apiClient from "../../services/api-client.ts";
import {Heading} from "@chakra-ui/react";

// type Repo {
//
// }

const ProjectList = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //let allRepos = [];
        let response;
        let page = 1;

        do {
            response = apiClient.get(`https://api.github.com/users/${username}/repos`, {
                params: {
                    per_page: 100,
                    page: page
                }
            });
            console.log(response);
            //allRepos = allRepos.concat(response.data);
            page++;
        } while (page === 1);//response.data.length === 100);

        // setRepos(allRepos);
        setLoading(false);
        // console.log(repos);
    }, []);

    return (
        <Heading>Rendering</Heading>
    );
};

export default ProjectList;