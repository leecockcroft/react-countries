(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r),o=(a(14),a(3)),i=a.n(o),s=a(4),u=a(5),m=a(7),g=a(6),h=a(8),p=function(e){var t=e.countries,a=e.handler;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{className:"country",key:t,onClick:function(){return a(e)}},l.a.createElement("img",{src:e.flag,alt:e.flag}),l.a.createElement("div",{className:"info-text"},l.a.createElement("h1",null," ",e.name),l.a.createElement("p",null,l.a.createElement("strong",null," Population:"),"  ",e.population),l.a.createElement("p",null,l.a.createElement("strong",null," Region:"),"  ",e.region),l.a.createElement("p",null," ",l.a.createElement("strong",null," Capital:"),"  ",e.capital)))})))},d=function(e){var t=e.item,a=e.handler;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return a()}}," back"),t.map((function(e,a){return l.a.createElement("div",{className:"overlay-wrapper"},l.a.createElement("div",{className:"flag"},l.a.createElement("img",{src:e.flag,alt:t.flag})),l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Population:"),e.population),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Region:")," ",e.region),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Sub-Region")," ",e.subregion),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Capital "),e.capital),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Top Level Domain: "),e.topLevelDomain),l.a.createElement("p",null," ",l.a.createElement("strong",null,"currency "),e.currencies),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Language"),e.language)))})))},E=function(e){return l.a.createElement("header",null,l.a.createElement("h2",{className:"header-text"}," Where in the World? "),l.a.createElement("button",{onClick:e.changeCss}," ",e.bool?"Light":"Dark"," "))},f=function(e){return l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"searchbar",type:"text",placeholder:"Search for a Country",onChange:e.change}),l.a.createElement("select",{className:"search-filter",onChange:e.changeFilter},l.a.createElement("option",{disabled:!0,selected:!0},"Select your option"),l.a.createElement("option",{value:"Africa"},"Africa"),l.a.createElement("option",{value:"Americas"},"America"),l.a.createElement("option",{value:"Asia"},"Asia"),l.a.createElement("option",{value:"Europe"},"Europe")))},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handler=function(e){a.setState({overlay:[{name:e.name,population:e.population,region:e.region,subregion:e.subregion,capital:e.capital,topLevelDomain:e.topLevelDomain,flag:e.flag,currencies:e.currencies.code,languages:e.languages}],displayOverLay:!0})},a.closeOverLay=function(){a.setState({displayOverLay:!1})},a.change=function(e){console.log(e.target.value)},a.changeRegion=function(e){var t=a.state.filterData.filter((function(t){return t.region.includes(e.target.value)}));t.length>0&&a.setState({data:t})},a.changeFilter=function(e){console.log(e.target.value);var t=a.state.filterData.filter((function(t){return t.region.includes(e.target.value)}));t.length>0&&a.setState({data:t})},a.changeCss=function(){a.setState({darkLight:!a.state.darkLight})},a.state={data:[],overlay:[],displayOverLay:!1,searchText:"",darkLight:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,filterData:t})}));case 1:case"end":return t.stop()}}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"wrapper",style:this.state.darkLight?{background:"black",color:"#fff"}:{background:"hsl(0, 0%, 98%)"}},l.a.createElement("div",{className:"container"},l.a.createElement(E,{changeCss:this.changeCss,bool:this.state.darkLight}),l.a.createElement(f,{change:this.changeFilter,changeFilter:this.changeFilter}),l.a.createElement("div",{className:"main",style:this.state.displayOverLay?{display:"none"}:{color:"block"}},l.a.createElement(p,{countries:this.state.data,handler:this.handler})),l.a.createElement("div",{className:"over",style:this.state.displayOverLay?{display:"block"}:{color:"none"}},l.a.createElement(d,{item:this.state.overlay,handler:this.closeOverLay,boo:this.state.displayOverLay}))))}}]),t}(n.Component);a(16);var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b9678e57.chunk.js.map