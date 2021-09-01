import './Header.css';

function Header() {
    return (
        <header className="header">
                <div className="navbar"></div>
            <div className="header__container">
                <h1 className="header__title">What's going on in the world?</h1>
                <p className="header__caption">Find the latest news on any topic and save them in your personal account.</p>
                <div className="search-placeholder"></div>
            </div>
        </header>
    )
}

export default Header;