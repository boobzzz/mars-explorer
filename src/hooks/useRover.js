import { useState, useEffect } from 'react';
import { fetchJSON } from '../utils/api/fetch';
import { API_KEY, API_ENDPOINT } from '../constants/endpoints';

export const useRover = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    const getRovers = async () => {
        try {
            const { body } = await fetchJSON(`${API_ENDPOINT}?api_key=${API_KEY}`);
            setData(body.rovers);
        } catch (e) {
            setIsError(true);
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getRovers();
    }, []);

    return {data, isLoading, isError};
}