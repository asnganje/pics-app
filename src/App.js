import SearchBar from "./components/SearchBar";
import { fetchImages } from "./api/api";
import { useState } from "react";
import ImageList from "./components/ImageList";



const App = () => {

    const [images, setImages] = useState([])

    const termHandler = (term) => {
        const results = fetchImages(term)
        setImages(results)
    }
    return(
        <div>
            <SearchBar termHandler = {termHandler} />
            <ImageList images = {images}/>
        </div>
    )
}
export default App;