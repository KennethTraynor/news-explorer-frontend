import './Main.css';

import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <div className='main'>
            <Header />
            <SearchResults />
            <Preloader />
            <NoResults />
            <About />
            <Footer />
        </div>
    )
}

export default Main;