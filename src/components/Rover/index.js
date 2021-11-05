import { Header } from './Header';
import { RadioList } from './RadioList';
import { Input } from './Input';
import { Button } from '../UI/Button/RegularBtn/Button';
import { Overlay } from '../UI/Overlay/Overlay';
import { Gallery } from '../Gallery';
import { useState } from 'react';
import { useRadio } from './useRadio';
import { useInput } from './useInput';

import classes from '../../styles/Rover.module.css';

export const Rover = ({ rover }) => {
    const { id, name, max_sol, cameras } = rover
    const [ isOpen, setIsOpen ] = useState(false)
    const [ params, setParams ] = useState([])
    
    const radio = useRadio()
    const { radioValue, radioHandler } = radio
    
    const input = useInput()
    const { inputValue, inputHandler } = input
    
    const getParams = () => {
        setIsOpen(true)
        
        setParams({
            camera: radioValue.toLowerCase(),
            sol: inputValue
        })
    }

    const toggleOverlay = () => setIsOpen(false)

    return (
        <>
            <div className={classes.Rover}>
                <div className={classes.Header}>
                    <Header title={name} sols={max_sol} />
                </div>
                <div className={classes.Camera}>
                    <RadioList data={cameras} handler={radioHandler} />
                </div>
                <div className={classes.Sol}>
                    <Input id={id} sols={max_sol} value={inputValue} handler={inputHandler} />
                </div>
                <div className={classes.Button}>
                    <Button title="EXPLORE" clicked={getParams} />
                </div>
            </div>
            <Overlay
                isOpen={isOpen}
                close={toggleOverlay}
                component={<Gallery mission={name.toLowerCase()} params={params} />} />
        </>
    )
}