import { useState } from 'react';

export const useInput = () => {
    const [ inputValue, setInputValue ] = useState('')

    const inputHandler = (e) => {
        let value = e.target.value

        setInputValue(value)
    }

    return { inputValue, inputHandler }
}