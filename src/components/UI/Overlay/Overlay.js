import Modal from 'react-modal';
import { Button } from '../Button/CloseBtn/Button';
import bg from '../../../assets/images/banner.jpg';

const customStyles = {
    overlay: {
        backgroundColor: 'none',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        zIndex: 20
    },
    content: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        border: '1px solid #ccc',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        background: 'none',
        outline: 'none',
        padding: '1em'
    }
}

export const Overlay = (props) => {
    const { isOpen, close, component } = props

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}>
            {component}
            <Button clicked={close} />
        </Modal>
    )
}