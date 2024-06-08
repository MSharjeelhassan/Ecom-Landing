import axios from "axios";
import BAcards from "../components/BAcards";
import { useState } from "react";


const Products = ()=>{
const [apiData, setApiData]=useState<any>([]);
axios.get('https://fakestoreapi.com/products?authuser=0').then((res)=>{
setApiData([...res.data]);


}).catch((error)=>{
    console.log(error);
})

    return(
        <>
        


        <BAcards
        data={apiData}

        
        />
        </>
    )
}


export default Products;

