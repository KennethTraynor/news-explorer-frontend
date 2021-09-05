import './Popup.css';

function Popup() {
    return (
        <div className='popup popup_opened'>
            <div className='popup__container'>
                <button className='popup__close-button' aria-label='close' name='close' type='button'></button>
                <h2 className='popup__title'>Sign up</h2>
                <form className='popup__form'>
                    
                    <div className='popup__field'>
                        <label className='popup__input-label'>Email</label>
                        <input className='popup__input' placeholder='Enter email' type='email' ></input>
                        <span className='popup__error popup__error_type_input'>Invalid email address</span>
                    </div>

                    <div className='popup__field'>
                        <label className='popup__input-label'>Password</label>
                        <input className='popup__input' placeholder='Enter password' type='password' ></input>
                        <span className='popup__error popup__error_type_input'>Invalid password</span>
                    </div>

                    <div className='popup__field'>
                        <label className='popup__input-label'>Username</label>
                        <input className='popup__input' placeholder='Enter your username' type='text' ></input>
                        <span className='popup__error popup__error_type_input'>Invalid username</span>
                    </div>

                    <span className='popup__error popup__error_type_form'>This username is not available</span>
                    <button className='popup__submit-button' type='submit'>Sign up</button>
                </form>
                <p className='popup__subtext'>or <a href='/' class='popup__subtext_link'>Sign in</a></p>
            </div>
        </div>
    )
}

export default Popup;