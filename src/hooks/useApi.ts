import axios from "axios";
import { useEffect, useState } from "react";

type Repository = {
    id: number
    name: string
    description: string
    price: number
    photo: string
}

type CountList = {
    count: number;
    products: Array <Repository>;
}


export function useApi<T = unknown>(url: string) {
    const [listProducts, setlistProducts]  = useState<T | CountList>()
    const [isRunning, setIsRunning] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() =>  {
        axios.get(url)
        .then(response => {
            setlistProducts(response.data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() =>  {
            setIsRunning(false)
        })
    }, [])

    return {  listProducts, isRunning, error }
}

//     baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1'
