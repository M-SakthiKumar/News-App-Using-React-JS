import React, { useState } from "react";
import NewsNavBar from "./newsnavbar";
import NewsBoard from "./NewsBoard";
import NewsFooter from "./NewsFooter";

function NewsMain(){
    const[category,setcategory]=useState("general")

    return(
        <>
        <NewsNavBar setcategory={setcategory} />
        <NewsBoard category={category}/>
        <NewsFooter setcategoryfooter={setcategory}/>
       
        </>
    )
}

export default NewsMain