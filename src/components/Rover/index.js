import { RiArrowUpCircleLine } from "react-icons/ri";
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { Button } from '../UI/Button/Button';
import { useCheckbox } from './useCheckbox';
import { useInput } from './useInput';

import classes from './Rover.module.css';

export const Rover = ({ rover }) => {
    const { id, name, max_sol, cameras } = rover
    const checkboxes = useCheckbox(cameras)
    const { isChecked, checkboxHandler } = checkboxes
    const input = useInput()
    const { value, inputHandler } = input
    
    const getParams = () => {
        return [...isChecked, {sol: value}]
    }

    return (
        <div className={classes.Rover}>
            <div className={classes.RoverLabel}>
                <div>
                    <span>{name}</span>
                    <span>{`${max_sol} sols on mars`}</span>
                </div>
                <div className={classes.Arrow}>
                    <RiArrowUpCircleLine />
                </div>
            </div>
            <div className={classes.Camera}>
                <ul>Choose camera:
                    {cameras.map(camera =>
                        <li key={camera.id}>
                            <Checkbox
                                id={camera.id}
                                name={camera.name}
                                changed={checkboxHandler}
                                checked={isChecked.checked} />
                        </li>
                    )}
                </ul>
            </div>
            <div className={classes.Sol}>
                <label htmlFor={`sol${id}`}>Sol <i>(Max. {max_sol})</i>:</label>
                <input type="text" id={`sol${id}`} onChange={inputHandler} value={value}/>
            </div>
            <div className={classes.Button}>
                <Button title="EXPLORE" clicked={getParams} />
            </div>
        </div>
    )
}