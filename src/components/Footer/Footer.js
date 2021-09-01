import './Footer.css';
import githubIcon from '../../images/github.svg';
import facebookIcon from '../../images/fb.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
                <ul className='footer__links'>
                    <li className='footer__link-item'><a href='#home' className='footer__link footer__link_type_home'>Home</a></li>
                    <li className='footer__link-item'><a href='#practicum' className='footer__link footer__link_type_practicum'>Practicum by Yandex</a></li>
                </ul>
                <ul className='footer__icon-links'>
                    <li className='footer__icon-item'><a href='#github' className='footer__icon'><img src={githubIcon} alt="Github"></img></a></li>
                    <li className='footer__icon-item'><a href="#facebook" className='footer_icon'><img src={facebookIcon} alt="Facebook"></img></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;