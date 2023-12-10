import SearchBar from "./components/SearchBar";
import { fetchImages } from "./api/api";



const App = () => {


    const termHandler = (term) => {
        const results = fetchImages(term)
    }
    return(
        <div>
            <SearchBar termHandler = {termHandler} />
        </div>
    )
}
export default App;