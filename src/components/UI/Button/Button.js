import classes from './Button.module.css';

export const Button = (props) => {
    const { title, clicked } = props

    return (
        <button
            className={classes.Button}
            onClick={clicked}>
            {title}
        </button>
    ) 
}