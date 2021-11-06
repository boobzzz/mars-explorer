import { RiCloseCircleLine } from "react-icons/ri";
import classes from '../../../styles/CloseBtn.module.css';

export const CloseBtn = ({ clicked }) => (
    <button
        className={classes.Button}
        onClick={clicked}>
        <RiCloseCircleLine />
    </button>
)