import {useEffect , useState} from "react"
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export function useFetch(url){

    const [ data, setData] = useState(null)

    useEffect( ()=> {

        api.get(url)
        .then( response => {
            setData(response.data)
        })

    },[])

    return { data }
}