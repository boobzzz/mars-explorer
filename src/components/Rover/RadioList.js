import { RadioBtn } from '../UI/RadioBtn/RadioBtn';

export const RadioList = ({ data, handler }) => (
    <>
        <span>Choose camera:</span>
        <div onChange={handler}>
            {data.map(item =>
                <RadioBtn
                    key={item.id}
                    group="camera"
                    id={item.id}
                    name={item.name} />
            )}
        </div>
    </>
)