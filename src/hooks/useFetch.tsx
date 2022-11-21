import axios from "axios";
import { useEffect, useState } from "react";

function useFetch<T>(url: string): T | undefined{
    const [data, setData] = useState<T>();

    useEffect(()=>{
        (async function () {
            try{
                const res = await axios.get(url)
                setData(res.data)
            } catch(e){
                console.error(e);
            } 
        })()
    }, [url]);
    return data;
}
export default useFetch;