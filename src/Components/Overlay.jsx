import React, { Component } from "react";
import ReactDOM from 'react-dom';



const Overlay=(props)=>{
const {item,handler}=props
return (
<React.Fragment>
<button onClick={()=>handler()}> back</button>
  {item.map((items,index)=>(
    <div className="overlay-wrapper">
      <div className="flag">
        <img src={items.flag}/>
      </div>

      <div className="info">
        <h2>{items.name}</h2>
        <p> <strong>Population:</strong>{items.population}</p>
        <p> <strong>Region:</strong> {items.region}</p>

      <p> <strong>Sub-Region</strong> {items.subregion}</p>
        <p> <strong>Capital </strong>{items.capital}</p>
          <p> <strong>Top Level Domain: </strong>{items.topLevelDomain}</p>

        <p> <strong>currency </strong>{items.currencies}</p>
          <p> <strong>Language</strong>{items.language}</p>
      </div>


</div>





  ))}






   </React.Fragment>
)



}
export default Overlay
