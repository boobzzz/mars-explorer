import { useState, useEffect } from 'react';
import { fetchJSON } from '../../utils/api/fetch';
import { API_KEY, API_ENDPOINT } from '../../config/constants';

export const Homepage = () => {
    const [ images, setImages ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const { body } = await fetchJSON(`${API_ENDPOINT}?api_key=${API_KEY}`)
            console.log(body)
        }

        fetchApi()
    }, [])

    if (isLoading) <div>...loading</div>

    if (isError) <div>...error</div>

    return <div>Homepage</div>
}