import { useState, useEffect, useCallback } from 'react';
import { fetchJSON } from '../utils/api/fetch';
import { API_ENDPOINT, API_KEY } from '../constants/endpoints';
import queryString from 'query-string';

export const useImages = (mission, params) => {
    const [ page, setPage ] = useState(1);
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    let queryParams = {...params, page: page};
    let url = `${API_ENDPOINT}/${mission}/photos?${queryString.stringify(queryParams)}&api_key=${API_KEY}`;

    const loadMore = () => setPage(page + 1);

    const getImages = useCallback(async () => {
        setIsLoading(true);

        try {
            const { body } = await fetchJSON(url);
            setData([...data, ...body.photos]);
        } catch (e) {
            setIsError(true);
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }, [data, url]);

    useEffect(() => {
        getImages();
    }, [page]);

    return { data, isLoading, isError, loadMore };
}