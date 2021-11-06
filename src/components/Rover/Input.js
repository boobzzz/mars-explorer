export const Input = ({ id, sols, value, handler }) => (
    <>
        <label htmlFor={`sol${id}`}>
            Sol 
            <i>(max. {sols})</i>
            :
        </label>
        <input
            type="text"
            id={`sol${id}`}
            onChange={handler}
            value={value}
            autoComplete="off"
        />
    </>
)