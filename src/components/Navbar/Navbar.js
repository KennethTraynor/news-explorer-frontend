import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../images/logout.svg';

function Navbar({ theme, onSigninPopupOpen }) {
    return (
        <nav className={'navbar ' + (theme ? 'navbar_theme_' + theme : '')}>
            <div className='navbar__container'>
                <p className='navbar__title'>NewsExplorer</p>
                <ul className='navbar__links'>
                    <li className='navbar__link-item'><NavLink exact to='/' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_home'>Home</NavLink></li>
                    <li className='navbar__link-item'><NavLink to='/saved-news' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_articles'>Saved articles</NavLink></li>
                    <li className='navbar__link-item'>
                        <button className='navbar__user-state-button navbar__user-state-button_type_signin' onClick={onSigninPopupOpen}>Sign in</button>
                    </li>
                    <li className='navbar__link-item'>
                        <button className='navbar__user-state-button navbar__user-state-button_type_name'>Username<div src={logoutIcon} className='navbar__logout-icon'></div></button>
                    </li>
                </ul>
                <button className='navbar__menu-button'></button>
            </div>
        </nav>
    )
}

export default Navbar;