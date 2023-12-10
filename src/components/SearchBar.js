import { useState } from "react";

const SearchBar = ({termHandler}) => {

    const [term, setTerm] = useState('')
    const changeHandler = (e) => {
        setTerm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        termHandler(term)
    }

    return(
        <form onSubmit={submitHandler}>
            <label>Enter a search term</label>
            <input 
            type="text"
            value={term}
            onChange={changeHandler}
            />
        </form>
    )
}

export default SearchBar;