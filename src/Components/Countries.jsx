import React, { Component } from "react";
import ReactDOM from 'react-dom';





const Countries=(props)=>{
  const {countries,handler}=props;

return (
<React.Fragment>
  {countries.map((item,index)=>(
    <div className="country" key={index} onClick={ ()=>handler(item) } >
      <img src={item.flag}/>
      <div className="info-text">
      <h1> {item.name}</h1>
        <p><strong> Population:</strong>  {item.population}</p>
      <p><strong> Region:</strong>  {item.region}</p>
      <p> <strong> Capital:</strong>  {item.capital}</p>

    </div>
</div>
  ))}
</React.Fragment>

)

}


export default Countries
