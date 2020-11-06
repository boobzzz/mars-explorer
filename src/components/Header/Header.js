import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <a href="" className={classes.Logo}>
                <img src={logo} alt=""/>
            </a>
            <span></span>
            <a href="" className={classes.Sublogo}>
                <div>mars</div>
                <div>explorer</div>
            </a>
        </header>
    )
}
