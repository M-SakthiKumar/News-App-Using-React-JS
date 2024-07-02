import React from "react";
import News from './Assets/news.png'
function NewsItem({title, description, src, url}){
     return(
        <>
        <div className="card bg-light text-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"395px"}}>
  <img src={src?src:News} style={{height:"200px", width:"375px", }} className="card-img-top " alt="Image not found"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,109):"News is a report of a current event. it is information about something that has just happened"}.....</p>
    <a href={url} className="btn btn-danger">Read More</a>
  </div>
</div>
        
        </>
     )
}
export default NewsItem