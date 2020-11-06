import { useState, useEffect } from 'react';
import { fetchJSON } from '../../utils/api/fetch';
import { API_KEY, API_ENDPOINT } from '../../config/constants';

export const useRovers = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isError, setIsError ] = useState(false)

    useEffect(() => {
        const getRovers = async () => {
            const { body } = await fetchJSON(`${API_ENDPOINT}?api_key=${API_KEY}`)
            console.log(body.rovers);
            setData(body.rovers)
            if (body.status === 404) setIsError(true)
            setIsLoading(false)
        }

        getRovers()
    }, [])

    return {data, isLoading, isError}
}