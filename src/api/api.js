import axios from "axios"

export const fetchImages = async (term) => {
    const url = "https://api.unsplash.com/search/photos"

            try{
                const response = await axios.get(url, {
                    headers: {
                        Authorization: 'Client-ID qj9URWt00W-zPNZ5cOFRZ7Dn4aPQSOhenQah6mmMbzA'
                    },
                    params: {
                        query: term
                    }
                })
                console.log(response.data.results)
                return response.data.results;
            }
            catch(error) {
                console.log(error.message)
            }
}