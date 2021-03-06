import logo from '../../assets/images/logo.png';

import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <a href="#/" className={classes.Logo}>
                <div className={classes.LogoImg}>
                    <img src={logo} alt=""/>
                </div>
                <span></span>
                <div className={classes.Sublogo}>
                    <div>mars</div>
                    <div>explorer</div>
                </div>
            </a>
        </header>
    )
}
