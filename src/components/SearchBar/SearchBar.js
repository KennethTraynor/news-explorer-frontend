import React from 'react';
import { useForm } from '../../utils/formControllers';
import './SearchBar.css';

function SearchBar({ onSearchNews }) {

    // Retreives previous successful search keyword
    const getPreviousKeyword = () => {
        if (localStorage.getItem('previous-results')) {
            return JSON.parse(localStorage.getItem('previous-results')).searchKeyword;
        }
    }

    // Sets search form initial values
    const initialValues = { keyword: getPreviousKeyword() || '' };

    // Initialize form
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