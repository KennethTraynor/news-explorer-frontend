import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../images/logout.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';

function Navbar({ theme, onSigninPopupOpen, isNavMenuOpen, setNavMenuState, onNavMenuBackgroundClick, loggedIn, onSignOut }) {

    const currentUser = React.useContext(CurrentUserContext);

    const handleMenuButtonClick = () => {
        setNavMenuState(!isNavMenuOpen);
    }

    return (
        <nav className={'navbar' + (theme ? ' navbar_theme_' + theme : '')}>
            <div className='navbar__bar'>
                <div className='navbar__container'>
                    <p className='navbar__title'>NewsExplorer</p>
                    <ul className='navbar__nav-items'>
                        <li className='navbar__nav-item'>
                            <NavLink
                                exact
                                to='/'
                                activeClassName='navbar__link_active'
                                className='navbar__link navbar__link_type_home'
                            >Home</NavLink>
                        </li>
                        {
                            loggedIn &&
                            <li className='navbar__nav-item'>
                                <NavLink
                                    to='/saved-news'
                                    activeClassName='navbar__link_active'
                                    className='navbar__link navbar__link_type_articles'
                                >Saved articles</NavLink>
                            </li>
                        }

                        {
                            !loggedIn &&
                            <li className='navbar__nav-item navbar__nav-item_shrink'>
                                <button className='navbar__button navbar__button_type_signin' onClick={onSigninPopupOpen}>
                                    <span className='navbar__button-text'>Sign in</span>
                                </button>
                            </li>
                        }

                        {
                            loggedIn &&
                            <li className='navbar__nav-item navbar__nav-item_shrink'>
                                <button className='navbar__button navbar__button_type_name' onClick={onSignOut}>
                                    <span className='navbar__button-text navbar__button-text_type_name'>{currentUser.name}</span>
                                    <div src={logoutIcon} className='navbar__logout-icon' />
                                </button>
                            </li>
                        }
                    </ul>
                    <button className={'navbar__menu-button' + (isNavMenuOpen ? ' navbar__menu-button_open' : '')} onClick={handleMenuButtonClick}></button>
                </div>
            </div>
            <div className={'navbar__menu' + (isNavMenuOpen ? ' navbar__menu_open' : '')}>
                <div className='navbar__menu-overlay' onClick={onNavMenuBackgroundClick}></div>
                <div className='navbar__menu-container'>
                    <ul className='navbar__menu-list'>

                        <li className='navbar__menu-item'>
                            <div className='navbar__menu-links'>
                                <NavLink exact to='/' className='navbar__link navbar__link_type_home'>Home</NavLink>
                                {loggedIn && <NavLink to='/saved-news' className='navbar__link navbar__link_type_articles'>Saved articles</NavLink>}
                            </div>
                        </li>

                        {
                            !loggedIn &&
                            <li className='navbar__menu-item'>
                                <button className='navbar__button navbar__button_type_signin' onClick={onSigninPopupOpen}>
                                    <span className='navbar__button-text'>Sign in</span>
                                </button>
                            </li>
                        }

                        {
                            loggedIn &&
                            <li className='navbar__menu-item'>
                                <button className='navbar__button navbar__button_type_name' onClick={onSignOut}>
                                    <span className='navbar__button-text navbar__button-text_type_name'>{currentUser.name}</span>
                                    <div src={logoutIcon} className='navbar__logout-icon' />
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;