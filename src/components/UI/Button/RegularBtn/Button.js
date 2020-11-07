import classes from './Button.module.css';

export const Button = ({ title, clicked }) => {
    return (
        <button
            className={classes.Button}
            onClick={clicked}>
            {title}
        </button>
    ) 
}