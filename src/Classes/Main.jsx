import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Countries from '../Components/Countries'
import Overlay from '../Components/Overlay'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'




class Main extends Component {

  constructor(props) {
    super(props);
this.state={
data:[],
overlay:[],
displayOverLay:false,
searchText:"",
darkLight:false
}


}

async componentDidMount() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => this.setState({ data,filterData:data }));
}



handler=(item)=>{
  this.setState({
    overlay:[{
        name:item.name,
        population:item.population,
        region:item.region,
        subregion:item.subregion,
        capital:item.capital,
        topLevelDomain:item.topLevelDomain,
        flag:item.flag,
        currencies:item.currencies.code,
        languages:item.languages
      }],
      displayOverLay:true

})

}

closeOverLay=()=>{

this.setState({
displayOverLay:false

})

}

change=(e)=>{
console.log(e.target.value)



}

changeRegion=(e)=>{
  let filterRegion = this.state.filterData.filter(item => item.region.includes(e.target.value));
  if(filterRegion.length >0){

  this.setState({

  data:filterRegion

  })
  }


}
// searchImage=(e)=>{
//   const search = e.target.value;
//   const postsFound=Data.filter(post => post.description.includes(e.target.value))
// if(postsFound.length>0){
//   this.setState({
//     gallery:postsFound
//   })
// }
// }

changeFilter=(e)=>{
  console.log(e.target.value)
let x = this.state.filterData.filter(item => item.region.includes(e.target.value));
if(x.length>0){
this.setState({

data:x

})

}


}
changeCss=()=>{
  this.setState({
darkLight:!this.state.darkLight,



  })
}

  render() {

const style={
  display:'none'
}

const dark={
  background:'black',
  color:'#fff'
}

    return (
      <div id="wrapper" style={this.state.darkLight?{background:'black',color:'#fff'} :{background:'hsl(0, 0%, 98%)'}}  >
      <div className='container'>
      <Header changeCss={this.changeCss} bool={this.state.darkLight}/>
        <SearchBar change={this.test} changeFilter={this.test}/>
            <div className='main'style={this.state.displayOverLay ?{display:'none'}  : {color:'block'}}>

            <Countries countries={this.state.data} handler={this.handler}/>

            </div>

<div className="over" style={this.state.displayOverLay ?{display:'block'}  : {color:'none'}}>
        <Overlay item={this.state.overlay}handler={this.closeOverLay} boo={this.state.displayOverLay} />
</div>
      </div>
      </div>

    )

 }


}

export default Main;
