(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),s=t.n(r),l=(t(22),t(8)),u=(t(4),t(1));var i=function(e){return Object(u.jsx)("div",{className:"Display",children:e.value})},o=t(42);var j=function(e){var a={margin:"20px",opacity:e.value===e.maxValue?"0.5":""},t={margin:"20px",opacity:0===e.value?"0.5":""};return Object(u.jsxs)("div",{className:"Buttons",children:[Object(u.jsx)(o.a,{onClick:e.increasingTheValue,variant:"contained",color:"primary",style:a,children:"inc"}),Object(u.jsx)(o.a,{onClick:e.resetValue,variant:"contained",color:"primary",style:t,children:"reset"})]})};var x=function(e){return Object(u.jsxs)("div",{className:"Counter",children:[Object(u.jsx)(i,{value:e.value}),Object(u.jsx)(j,{increasingTheValue:e.increasingTheValue,resetValue:e.resetValue,maxValue:e.maxValue,value:e.value})]})};var v=function(e){var a={margin:"20px",opacity:e.maxValue<=e.startValue?"0.5":""};return Object(u.jsx)("div",{className:"Buttons",children:Object(u.jsx)(o.a,{onClick:e.changeCounter,variant:"contained",color:"primary",style:a,children:"set"})})};var d=function(e){var a={padding:"5px",width:"120px",border:"solid 2px #75d4f5",borderRadius:"6px"};return Object(u.jsxs)("div",{className:"Settings",children:[Object(u.jsxs)("div",{className:"SetValues",children:[Object(u.jsxs)("div",{className:"Value",children:[Object(u.jsx)("span",{children:"max value:"}),Object(u.jsx)("input",{type:"number",style:a,value:e.maxValue,onChange:function(a){var t=a.currentTarget.value;e.setMaxValue(+t)}})]}),Object(u.jsxs)("div",{className:"Value",children:[Object(u.jsx)("span",{children:"start value:"}),Object(u.jsx)("input",{type:"number",style:a,value:e.startValue,onChange:function(a){var t=a.currentTarget.value;e.setStartValue(+t)}})]})]}),Object(u.jsx)(v,{changeCounter:e.changeCounter,maxValue:e.maxValue,startValue:e.startValue})]})};var b=function(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(0),v=Object(l.a)(j,2),b=v[0],m=v[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("value"),a=localStorage.getItem("maxValue"),t=localStorage.getItem("startValue");a&&e&&t&&(c(JSON.parse(e)),o(JSON.parse(a)),m(JSON.parse(t)))}),[]),Object(n.useEffect)((function(){localStorage.setItem("value",JSON.stringify(t)),localStorage.setItem("maxValue",JSON.stringify(i)),localStorage.setItem("startValue",JSON.stringify(b))}),[t,i,b]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{setValue:c,maxValue:i,setMaxValue:o,startValue:b,setStartValue:m,changeCounter:function(){b<i&&c(b)}}),Object(u.jsx)(x,{value:t,increasingTheValue:function(){t<i&&c(t+1)},resetValue:function(){c(0)},maxValue:i})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()},4:function(e,a,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.391f722c.chunk.js.map