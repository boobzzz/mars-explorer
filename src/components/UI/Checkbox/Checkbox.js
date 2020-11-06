import classes from './Checkbox.module.css';

export const Checkbox = (props) => {
    const { id, name, changed, checked } = props

    return (
        <div className={classes.Checkbox}>
            <input
                type="checkbox"
                id={id}
                onChange={changed}
                checked={checked}/>
            <label htmlFor={id}>{name}
                <span className={classes.CheckboxCustom}></span>
            </label>
        </div>
    )
}