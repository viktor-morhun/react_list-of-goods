(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),o=a.n(r),c=a(5),i=a(3),l=a(4),u=a(7),m=a(6),d=(a(13),function(e){var t=e.goods;return s.a.createElement("ul",{className:"list"},t.map((function(e){return s.a.createElement("li",{key:e,className:"list__product"},e)})))}),h=["Juice","Carrot","Soy sauce","Ice cream","Apple","Bread","Tahini","Maple syrup","Jam","Garlic","Chewing gum","Soda"],p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={goodsList:h,isReversed:!1,isStarted:!1,sortBy:""},e.reset=function(){e.setState({goodsList:h,isReversed:!1,sortBy:""})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByLength=function(){e.setState({sortBy:"length"})},e.sortByName=function(){e.setState({sortBy:"name"})},e.start=function(){e.setState({isStarted:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.goodsList,a=e.isReversed,n=e.sortBy,r=e.isStarted,o=Object(c.a)(t).sort((function(e,t){switch(n){case"name":return e.localeCompare(t);case"length":return e[n]-t[n];default:return 0}}));return a&&o.reverse(),s.a.createElement("div",{className:"App"},r?s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"header__heading"},"Goods")),s.a.createElement("button",{onClick:this.reverse,type:"button",className:"button"},"Reverse"),s.a.createElement("button",{onClick:this.sortByName,type:"button",className:"button"},"Name"),s.a.createElement("button",{onClick:this.sortByLength,type:"button",className:"button"},"Length"),s.a.createElement("button",{onClick:this.reset,type:"button",className:"button"},"Reset"),s.a.createElement(d,{goods:o})):s.a.createElement("button",{onClick:this.start,type:"button",className:"bigRedButton"},"Start"))}}]),a}(s.a.Component);o.a.render(s.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.376fcfca.chunk.js.map