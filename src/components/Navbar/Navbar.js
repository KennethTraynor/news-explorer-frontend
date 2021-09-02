import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoutIcon from '../../images/logout.svg';

function Navbar() {
    return (
        <footer className='navbar'>
            <div className='navbar__container'>
                <p className='navbar__title'>NewsExplorer</p>
                <ul className='navbar__links'>
                    <li className='navbar__link-item'><NavLink exact to='/' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_home'>Home</NavLink></li>
                    <li className='navbar__link-item'><NavLink to='/saved-news' activeClassName='navbar__link_active' className='navbar__link navbar__link_type_articles'>Saved Articles</NavLink></li>
                </ul>
                <button className='navbar__user-state-button navbar__user-state-button_type_signin'>
                    Sign in
                </button>
                <button className='navbar__user-state-button navbar__user-state-button_type_name'>
                    Elise
                    <img src={logoutIcon} alt='Logout' className='navbar__logout-icon'></img>
                </button>
            </div>
        </footer>
    )
}

export default Navbar;