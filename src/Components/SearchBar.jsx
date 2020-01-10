import React, { Component } from "react";
import ReactDOM from 'react-dom';


const SearchBar=(props)=>{
return (
  <div className='search'>
<input className="searchbar" type='text' placeholder="Search for a Country" onChange={props.change} />
<select className="search-filter" onChange={props.changeFilter}>
  <option disabled selected >Select your option</option>
<option value='Africa'>Africa</option>
<option value='Americas'>America</option>
<option value='Asia'>Asia</option>
<option value='Europe'>Europe</option>
</select>
</div>
)


}

export default SearchBar
