import './Footer.css';
import githubIcon from '../../images/github.svg';
import facebookIcon from '../../images/fb.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
                <nav className='footer__nav-section'>
                    <ul className='footer__links'>
                        <li className='footer__link-item'><a href='/' target='_self' className='footer__link footer__link_type_home'>Home</a></li>
                        <li className='footer__link-item'><a href='https://practicum.yandex.com/' rel='noreferrer' target='_blank' className='footer__link footer__link_type_practicum'>Practicum by Yandex</a></li>
                    </ul>
                    <ul className='footer__icon-links'>
                        <li className='footer__icon-item'><a href='https://github.com/' rel='noreferrer' target='_blank' className='footer__icon'><img src={githubIcon} alt="Github" /></a></li>
                        <li className='footer__icon-item'><a href='https://facebook.com/' rel='noreferrer' target='_blank' className='footer__icon'><img src={facebookIcon} alt="Facebook" /></a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;