import React from 'react';
import { useForm } from '../../utils/formControllers';
import './SearchBar.css';

function SearchBar({ onSearchNews }) {

    const initialValues = { keyword: '' };

    const { values, handleChange } = useForm(initialValues);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchNews({ keyword: values.keyword });
    };

    return (
        <div className='search-bar'>
            <form action='#' className='search-bar__form' onSubmit={handleSubmit}>
                <input className='search-bar__search-text' placeholder='Enter topic' value={values.keyword} name='keyword' onChange={handleChange}></input>
                <button className='search-bar__button' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;