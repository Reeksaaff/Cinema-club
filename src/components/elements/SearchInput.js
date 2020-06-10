import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome'
import { SearchInputStyles, SearchInputContent } from '../styles/StyledSearchInput'
import PropTypes from 'prop-types'

const SearchInput = ({ callback }) => {
    const [state, setState] = useState('')
    const timeOut = useRef(null)
    const TypeToSearch = e => {
        const { value } = e.target;
        clearTimeout(timeOut.current)
        setState(value);
        timeOut.current = setTimeout(() => {
            callback(value);
        }, 600);
    }
    return (
        <SearchInputStyles>
            <SearchInputContent>
                <FontAwesome className="fa-search" name="search" />
                <input type="text" placeholder="Type to search..." onChange={TypeToSearch} value={state} />
            </SearchInputContent>
        </SearchInputStyles>
    )
}

SearchInput.propTypes = {
    callback: PropTypes.func
}

export default SearchInput;