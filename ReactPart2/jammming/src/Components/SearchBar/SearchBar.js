import React, {useState, useCallback} from "react";

import "./SearchBar.css"

const SearchBar = (props) => {
    const [term, setTerm] = useState("")

    const handleTermChnage = useCallback((event) => {
        setTerm(event.target.value)
    }, [])

    const search = useCallback(() => {
        props.onSearch(term)
    }, [props.onSearch, term])

    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" onChange={handleTermChnage} />
            <button className="SearchButton" onClick={search}>
                Search
            </button>
        </div>
    )
}

export default SearchBar;