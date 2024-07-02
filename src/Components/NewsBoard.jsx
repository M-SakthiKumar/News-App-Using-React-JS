import React, { useState,useEffect } from "react";
import NewsItem from "./Newsitems";

function NewsBoard({category}){
    const[Articles,setArticels]=useState([])
    useEffect(()=>{
        let api_key="5ffdcd3baa1f405da3f357f841888487"
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`
        fetch(url)
        .then((res)=>res.json())
        .then((Data)=>setArticels(Data.articles))

    },[category])

    return(
        <>
        <h2 className=" text-center ">Latest <span className="badge bg-danger">News</span></h2>
        {Articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />

        })}
        </>
    )
}
export default NewsBoard