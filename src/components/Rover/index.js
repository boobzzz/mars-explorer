import { useState } from 'react';
import { useCheckbox } from './useCheckbox';
import { useInput } from './useInput';

import { Header } from './Header';
import { CheckboxList } from './CheckboxList';
import { Input } from './Input';
import { Button } from '../UI/Button/RegularBtn/Button';
import { Overlay } from '../UI/Overlay/Overlay';
import { Gallery } from '../Gallery/Gallery';
import classes from './Rover.module.css';

export const Rover = ({ rover }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { id, name, max_sol, cameras } = rover
    const checkboxes = useCheckbox(cameras)
    const { isChecked, checkboxHandler } = checkboxes
    const input = useInput()
    const { value, inputHandler } = input
    
    const getParams = () => {
        setIsOpen(true)

        return [...isChecked, {sol: value}]
    }

    const toggleOverlay = () => setIsOpen(false)

    return (
        <div className={classes.Rover}>
            <div className={classes.Header}>
                <Header title={name} sols={max_sol} />
            </div>
            <div className={classes.Camera}>
                <CheckboxList data={cameras} handler={checkboxHandler} checked={isChecked.checked} />
            </div>
            <div className={classes.Sol}>
                <Input id={id} sols={max_sol} value={value} handler={inputHandler} />
            </div>
            <div className={classes.Button}>
                <Button title="EXPLORE" clicked={getParams} />
            </div>
            <Overlay
                isOpen={isOpen}
                close={toggleOverlay}
                component={<Gallery />} />
        </div>
    )
}