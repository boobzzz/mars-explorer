import { useState, useEffect } from 'react';

export const useCheckbox = (obj) => {
    const [ isChecked, setIsChecked ] = useState([])

    useEffect(() => {
        setIsChecked(obj)
    }, [])
    
    const checkboxHandler = (e) => {
        let target = e.target
        
        setIsChecked(() => isChecked.map((item) =>
            item.id == target.id
            ? {...item, checked: !item.checked}
            : item
        ))
    }

    return { isChecked, checkboxHandler }
}