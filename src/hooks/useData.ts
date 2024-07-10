import {AxiosRequestConfig, CanceledError} from "axios";
import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: unknown[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<T[]>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(res => {
                console.log(res.data);
                setData(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return {data, error, isLoading};
};

export default useData;