export const Input = ({ id, sols, value, handler }) => {
    return (
        <>
            <label htmlFor={`sol${id}`}>Sol <i>(Max. {sols})</i>:</label>
            <input type="text" id={`sol${id}`} onChange={handler} value={value}/>
        </>
    )
}