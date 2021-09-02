import './Main.css';

import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <div className='main'>
            <Header/>
            <Preloader/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Main;