
import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        //fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yqaE98tuZdzNQ0sF5Oybia1tukNASdYJTAO9XilP`)
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);        
    },[currency])
    console.log(data);    
    return data;
}

export default useCurrencyInfo;