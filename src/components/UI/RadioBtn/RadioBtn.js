import classes from '../../../styles/RadioBtn.module.css';

export const RadioBtn = (props) => {
    const { group, id, name } = props

    return (
        <div className={classes.Radio}>
            <input
                type="radio"
                id={id}
                name={group}
                value={name}/>
            <label htmlFor={id}>{name}
                <span className={classes.RadioCustom}></span>
            </label>
        </div>
    )
}