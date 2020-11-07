import { Checkbox } from '../UI/Checkbox/Checkbox';

export const CheckboxList = ({ data, handler, checked }) => {
    return (
        <ul>Choose camera:
            {data.map(item =>
                <li key={item.id}>
                    <Checkbox
                        id={item.id}
                        name={item.name}
                        changed={handler}
                        checked={checked} />
                </li>
            )}
        </ul>
    )
}