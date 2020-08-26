import { useState, useEffect } from "react"

export const useFetch = ( url ) => {

    const initialState = {data:null, loading:true, error:null};

    const [state, setState] = useState(initialState);


    useEffect(() => {

        setState({data:null, loading:true, error:null});
       
        fetch(url)
        .then (res => res.json())
        .then (data => {
    
            setState({
                loading:false,
                error:null,
                data
            })
    
        })

    }, [url])

    return state;


}
