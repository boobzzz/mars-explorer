import { useState } from 'react';

export const useInput = () => {
    const [ value, setValue ] = useState('')

    const inputHandler = (e) => {
        let value = e.target.value

        setValue(value)
    }

    return { value, inputHandler }
}