import React from "react";

function NewsNavBar({setcategory}){

    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top mb-3">
  <div className="container-fluid " >
    <a className="navbar-brand " href="/"><span className="badge bg-light text-dark fs-4">NewsWave</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarNav">
      <ul className="navbar-nav ">
       
        <li className="nav-item ">
          <a href="#" className="nav-link text-light fw-medium fs-5" style={{cursor:"pointer"}} onClick={()=>setcategory("technology")} >Technology</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light fw-medium fs-5" style={{cursor:"pointer"}} onClick={()=>setcategory("business")} >Business</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light fw-medium fs-5" style={{cursor:"pointer"}} onClick={()=>setcategory("health")} >Health</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light fw-medium fs-5" style={{cursor:"pointer"}} onClick={()=>setcategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light fw-medium fs-5" style={{cursor:"pointer"}} onClick={()=>setcategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light fw-medium fs-5"style={{cursor:"pointer"}} onClick={()=>setcategory("entertainment")} >Entertainment</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default NewsNavBar