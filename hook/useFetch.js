// import { RAPID_API_KEY } from "@env";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    // =============================SetStateLogic================================
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // =============================RapidAPI SearchJobs===========================
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '1e9686389dmsh49926232acf028fp161c65jsn3163066d16f3',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
