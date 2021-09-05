import './Main.css';

import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

function Main() {
    return (
        <main className='main'>
            <Header />
            <SearchResults />
            <Preloader />
            <NoResults />
            <About />
            <Footer />
            {/* <Popup /> */}
        </main>
    )
}

export default Main;