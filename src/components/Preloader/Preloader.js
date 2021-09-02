import './Preloader.css';

function Preloader() {
    return (
        <section className='preloader'>
            <i className='preloader__graphic'></i>
            <p className='preloader__text'>Searching for news...</p>
        </section>
    )
}

export default Preloader;