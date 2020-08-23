import {useState, useEffect} from 'react'
import API_KEY from './keys';

const CONTEXT_KEY ="c7ead2d9a5cb8c25c" //dari cse.google.com alamat lengkap ada di searchPage.js

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() =>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }

        fetchData();

    }, [term]) //term in here is whatever you type in google search input or data layer variable
    
    return {data}
};

export default useGoogleSearch
