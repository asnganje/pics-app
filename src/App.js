import SearchBar from "./components/SearchBar";
import { fetchImages } from "./api/api";
import { useState } from "react";
import ImageList from "./components/ImageList";



const App = () => {

    const [images, setImages] = useState([])

    const termHandler = async (term) => {
        const results = await fetchImages(term)
        setImages(results)
    }
    return(
        <div className="flex flex-col justify-center items-center w-[90%] h-[90vh] mx-[5%] mt-5 shadow-xl bg-gray-300 border border-gray-300 rounded-md ">
            <SearchBar termHandler = {termHandler} />
            <ImageList images = {images}/>
        </div>
    )
}
export default App;