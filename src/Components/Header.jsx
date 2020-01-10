import React, { Component } from "react";
import ReactDOM from 'react-dom';

const Header=(props)=>{
return (

<header>
<h2 className="header-text"> Where in the World? </h2>
<button  onClick={props.changeCss}> { props.bool ? "Light" : 'Dark' } </button>

</header>

)



}


export default Header
