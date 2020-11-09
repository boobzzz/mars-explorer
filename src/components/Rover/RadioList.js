import { RadioBtn } from '../UI/RadioBtn/RadioBtn';

export const RadioList = ({ data, handler }) => {
    return (
        <div onChange={handler}>Choose camera:
            {data.map(item =>
                <RadioBtn
                    key={item.id}
                    group="camera"
                    id={item.id}
                    name={item.name} />
            )}
        </div>
    )
}