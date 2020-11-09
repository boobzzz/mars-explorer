import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { fetchJSON } from '../../utils/api/fetch';
import { API_ENDPOINT, API_KEY } from '../../config/constants';

export const useImages = (mission, params) => {
    const [ page, setPage ] = useState(1)
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isError, setIsError ] = useState(false)

    let queryParams = {...params, page: page}
    let url = `${API_ENDPOINT}/${mission}/photos?${queryString.stringify(queryParams)}&api_key=${API_KEY}`

    const loadMore = () => setPage(page + 1)

    useEffect(() => {
        const getImages = async () => {
            try {
                const { body } = await fetchJSON(url)
                setData([...data, ...body.photos])
            } catch (e) {
                setIsError(true)
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }

        getImages()
    }, [url, page])

    return { data, isLoading, isError, loadMore }
}