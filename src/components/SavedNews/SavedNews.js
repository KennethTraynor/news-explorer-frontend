import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


function SavedNews() {
    return (
        <div className='saved-news'>
            <div className='saved-news__container'>
                <Navbar theme='dark' />
                <SavedNewsHeader />
                <div className="saved-news__cards-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card /> 
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SavedNews;