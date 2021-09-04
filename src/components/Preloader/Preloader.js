import './Preloader.css';

function Preloader() {
    return (
        <div className='preloader'>
            <i className='preloader__graphic'></i>
            <p className='preloader__text'>Searching for news...</p>
        </div>
    )
}

export default Preloader;