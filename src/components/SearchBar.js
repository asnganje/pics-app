import { useState } from "react";

const SearchBar = ({termHandler}) => {

    const [term, setTerm] = useState('')
    const changeHandler = (e) => {
        setTerm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        termHandler(term)
        setTerm('')
    }

    return(
        <form onSubmit={submitHandler} className="flex space-x-5 font-mono text-white font-bold text-2xl mb-10 bg-blue-400 p-6 rounded-md shadow-lg">
            <label>Enter a search term</label>
            <input
            className="border rounded-md text-gray-950 font-normal p-3 cursor-text" 
            type="text"
            placeholder="Enter text"
            value={term}
            onChange={changeHandler}
            />
        </form>
    )
}

export default SearchBar;