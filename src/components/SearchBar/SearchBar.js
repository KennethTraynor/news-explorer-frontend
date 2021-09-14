import React, { useEffect } from 'react';
import { useForm } from '../../utils/formControllers';
import './SearchBar.css';

function SearchBar({ handleSearchNews }) {

    const initialValues = { keyword: '' };

    const { values, setValues, handleChange } = useForm(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchNews({ keyword: values.keyword });
    };


    return (
        <div className='search-bar'>
            <form action='#' className='search-bar__form' onSubmit={handleSubmit}>
                <input className='search-bar__search-text' placeholder='Enter topic' value={values.searchQuery} name='keyword' onChange={handleChange}></input>
                <button className='search-bar__button' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;