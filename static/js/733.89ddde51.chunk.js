"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{7733:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(9434),a=t(4808),u="ContactFilter_label__qRVzC",i="ContactFilter_input__8mWOi",c=t(3329);function o(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.filter}));return(0,c.jsxs)("label",{className:u,children:["Find contacts by name",(0,c.jsx)("input",{type:"text",className:i,value:e,onChange:function(e){return n((0,a.ut)(e.target.value))}})]})}var s="NOT_FOUND";var l=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?l:r,u=t.maxSize,i=void 0===u?1:u,c=t.resultEqualityCheck,o=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),f=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(o):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return s}return{get:r,put:function(e,a){r(e)===s&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,o);function p(){var e=f.get(arguments);if(e===s){if(e=n.apply(null,arguments),c){var t=f.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var u,i=0,c={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(c=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var s=c,l=s.memoizeOptions,f=void 0===l?t:l,m=Array.isArray(f)?f:[f],d=p(r),v=n.apply(void 0,[function(){return i++,o.apply(null,arguments)}].concat(m)),h=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return u=v.apply(null,n)}));return Object.assign(h,{resultFunc:o,memoizedResultFunc:v,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var d=m(f),v=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},y=d([v,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=t(3634),b="ContactForm_form__dhl+T",_="ContactForm_lable__W7bCm",g="ContactForm_input__Bl93P",j=t(1864);function C(){var n=(0,r.I0)(),e=(0,r.v9)(v);return(0,c.jsxs)("form",{className:b,onSubmit:function(t){t.preventDefault();var r={name:t.currentTarget.elements.name.value,number:t.currentTarget.elements.number.value};if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return alert("A contact ".concat(r.name," is already in contacts."));n((0,x.uK)(r)),t.currentTarget.reset()},children:[(0,c.jsx)("label",{className:_,children:"Name"}),(0,c.jsx)("input",{className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces",required:!0}),(0,c.jsx)("label",{className:_,children:"Number"}),(0,c.jsx)("input",{className:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,c.jsx)(j.Z,{variant:"outlined",type:"submit",children:"Add contact"})]})}var w=t(2791),k="ContactList_contactList__UFVCg",N="ContactList_contactItem__ppNQ5";function F(){var n=(0,r.v9)(y),e=(0,r.I0)();(0,w.useEffect)((function(){e((0,x.yF)())}),[e]);var t=(0,r.v9)(h);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:k,children:t?(0,c.jsx)("p",{children:"Loading..."}):n.map((function(n){return(0,c.jsxs)("li",{className:N,children:[(0,c.jsxs)("span",{children:[n.name,": ",n.number]}),(0,c.jsx)(j.Z,{variant:"outlined",type:"button",onClick:function(){return t=n.id,void e((0,x.GK)(t));var t},children:"Delete"})]},n.id)}))})})}function A(){var n=(0,r.I0)(),e=(0,r.v9)(h);return(0,w.useEffect)((function(){n((0,x.yF)())}),[n]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Phonebook"}),(0,c.jsx)(C,{}),(0,c.jsx)("h1",{children:"Contacts"}),(0,c.jsx)(o,{}),e&&(0,c.jsx)("p",{children:"In process..."}),(0,c.jsx)(F,{})]})}}}]);
//# sourceMappingURL=733.89ddde51.chunk.js.map