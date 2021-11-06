import RingLoader from 'react-spinners/RingLoader';

import classes from '../../../styles/Loader.module.css';

export const Loader = ({ size, color, loading }) => (
    <div className={classes.Loader}>
        <RingLoader size={size} color={color} loading={loading} />
    </div>
)