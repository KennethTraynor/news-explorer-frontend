import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../images/logout.svg';

function Navbar({ theme, onSigninPopupOpen, isNavMenuOpen, onNavMenuOpen, onNavMenuClose, onNavMenuBackgroundClick, loggedIn }) {

    const handleMenuButtonClick = () => {
        if (isNavMenuOpen) {
            onNavMenuClose();
        } else {
            onNavMenuOpen();
        }
    }

    return (
        <nav className={'navbar' + (theme ? ' navbar_theme_' + theme : '')}>
            <div className='navbar__bar'>
                <div className='navbar__container'>
                    <p className='navbar__title'>NewsExplorer</p>
                    <ul className='navbar__nav-items'>
                        <li className='navbar__nav-item'><NavLink exact to='/' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_home'>Home</NavLink></li>
                        <li className='navbar__nav-item'><NavLink to='/saved-news' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_articles'>Saved articles</NavLink></li>

                        {
                            !loggedIn &&
                            <li className='navbar__nav-item'>
                                <button className='navbar__user-state-button navbar__user-state-button_type_signin' onClick={onSigninPopupOpen}>Sign in</button>
                            </li>
                        }

                        {
                            loggedIn &&
                            <li className='navbar__nav-item'>
                                <button className='navbar__user-state-button navbar__user-state-button_type_name'>Username<div src={logoutIcon} className='navbar__logout-icon'></div></button>
                            </li>
                        }
                    </ul>
                    <button className={'navbar__menu-button' + (isNavMenuOpen ? ' navbar__menu-button_open' : '')} onClick={handleMenuButtonClick}></button>
                </div>
            </div>
            <div className={'navbar__menu' + (isNavMenuOpen ? ' navbar__menu_open' : '')}>
                <div className='navbar__menu-overlay' onClick={onNavMenuBackgroundClick}></div>
                <ul className='navbar__menu-container'>

                    <li className='navbar__nav-item'>
                        <div className='navbar__menu-links'>
                            <NavLink exact to='/' className='navbar__link navbar__link_type_home'>Home</NavLink>
                            <NavLink to='/saved-news' className='navbar__link navbar__link_type_articles'>Saved articles</NavLink>
                        </div>
                    </li>

                    {
                        !loggedIn &&
                        <li className='navbar__nav-item'>
                            <button className='navbar__user-state-button navbar__user-state-button_type_signin' onClick={onSigninPopupOpen}>Sign in</button>
                        </li>
                    }

                    {
                        loggedIn &&
                        <li className='navbar__nav-item'>
                            <button className='navbar__user-state-button navbar__user-state-button_type_name'>Username<div src={logoutIcon} className='navbar__logout-icon'></div></button>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;