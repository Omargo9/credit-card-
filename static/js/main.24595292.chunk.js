(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),s=t.n(l),r=(t(14),t(2)),i=t(3),m=t(5),o=t(4),u=t(6),d=(t(16),t(1)),h=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={value:"",name:"",date:""},e.changeNumber=e.changeNumber.bind(Object(d.a)(Object(d.a)(e))),e.changeName=e.changeName.bind(Object(d.a)(Object(d.a)(e))),e.changeDate=e.changeDate.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"changeNumber",value:function(e){e.target.value.length<17&&!isNaN(Number(e.target.value))&&this.setState({value:e.target.value})}},{key:"changeName",value:function(e){e.target.value.length<17&&isNaN(e.target.value)&&this.setState({name:e.target.value})}},{key:"changeDate",value:function(e){e.target.value.length<5&&!isNaN(e.target.value)&&this.setState({date:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Project"},c.a.createElement("div",{className:"Credit"},c.a.createElement("div",{className:"credit-card-text"},c.a.createElement("span",null," CREDIT CARD")),c.a.createElement("div",{className:"puce-logo"},c.a.createElement("img",{src:"http://jamesdelaney.ie/dev/chip.png"})),c.a.createElement("div",{className:"card-information"},c.a.createElement("div",{className:"logo-information"},c.a.createElement("div",{className:"master-number"},c.a.createElement("span",null,(this.state.value.slice(0,4)+" "+this.state.value.slice(4,8)+" "+this.state.value.slice(8,12)+" "+this.state.value.slice(12,16)).padEnd(18,"X"))),c.a.createElement("div",{className:"holder-card"},c.a.createElement("div",{className:"master-short-number"},c.a.createElement("span",null,"5257")),c.a.createElement("div",{className:"holder-card-text"},c.a.createElement("div",{className:"month-year"},c.a.createElement("span",null," MONTH/YEAR ")),c.a.createElement("div",{className:"holder-card-right"},c.a.createElement("div",{className:"valid"}," ",c.a.createElement("span",null," VALID THIRU")),c.a.createElement("div",{className:"date"},c.a.createElement("span",null,(this.state.date.slice(0,2)<13?this.state.date.slice(0,2):"12/"+this.state.date.slice(2,4)).padEnd(5,"-")))))),c.a.createElement("div",{className:"holder-card-text"},c.a.createElement("h1",null,this.state.name.padEnd(15,"*").toUpperCase()))),c.a.createElement("div",{className:"master-logo"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0S9gQ6Za6OyM5cS2tZoNC1ONHFDnWcPsPDTxSC5c4a8KYAj9DA"})))),c.a.createElement("div",{className:"inputs"},c.a.createElement("input",{placeholder:"CARD NUMBER",type:"text",value:this.state.value,onChange:this.changeNumber}),c.a.createElement("input",{placeholder:"YOUR NAME",type:"text",value:this.state.name,onChange:this.changeName}),c.a.createElement("input",{placeholder:"XX/YY",type:"text",value:this.state.date,onChange:this.changeDate})))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.24595292.chunk.js.map