import { useState } from 'react';

export const useRadio = () => {
    const [ radioValue, setRadioValue ] = useState('');
    
    const radioHandler = (e) => {
        let value = e.target.value;
        
        setRadioValue(value);
    }

    return { radioValue, radioHandler };
}