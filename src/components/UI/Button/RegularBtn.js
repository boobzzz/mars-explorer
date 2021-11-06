import classes from '../../../styles/RegularBtn.module.css';

export const RegularBtn = ({ title, clicked }) => (
    <button
        className={classes.Button}
        onClick={clicked}>
        {title}
    </button>
)