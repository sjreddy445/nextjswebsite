(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4244],{96360:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return O}});var n=r(85893),a=r(74047),i=r(52700),o=r(4706),s=r(8127),u=r(44102),l=r(20775),f=r(26265),c=r(67294),p=r(58447),d=r(72),h=r(56373),g=r(20845),y=r(34679),v=r(15081),b=r(23945),m=r(32220),_=r(11163);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var x=function(e){(0,s.Z)(r,e);var t=k(r);function r(){var e;return(0,a.Z)(this,r),e=t.call(this),(0,f.Z)((0,o.Z)(e),"scrollWindow",(function(){window.scrollTo({top:200,left:0,behavior:"smooth"})})),e.state={activePage:0},e.handlePageChange=e.handlePageChange.bind((0,o.Z)(e)),e}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){(0,m.Z)("transparent-bg text-white"),this.scrollWindow()}},{key:"componentWillMount",value:function(){var e=this;this.handlePageChange(1);this.props.router.pathname;console.log("pathname",this.props),g.Z.get(this.props.router.query.slug+"/count").then((function(t){var r=t.data;e.setState(P(P({},e.state),{totalItem:r}))}))}},{key:"handlePageChange",value:function(e){var t=this;this.setState(P(P({},this.state),{},{activePage:e})),g.Z.get(this.props.router.query.slug,{params:{_limit:6,_start:6*(e-1),_sort:"created_at:desc"}}).then((function(e){var r=e.data;t.setState(P(P({},t.state),{resouceItem:r}))}))}},{key:"render",value:function(){var e=this,t=this.props.router.query.slug;return this.state.resouceItem?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:(0,n.jsx)(h.Z,{data:d.x})}),(0,n.jsxs)("div",{className:"mt-5 container-inner",children:[(0,n.jsxs)("h3",{children:["All ",this.props.router.query.slug]}),t.includes("blogs")&&(0,n.jsx)("div",{className:"row mt-4",children:this.state.resouceItem.map((function(t){return(0,n.jsx)(y.Z,P({blog:t},e.props),t.id)}))}),t.includes("podcast")&&(0,n.jsx)("div",{className:"row mt-4",children:this.state.resouceItem.map((function(t){return(0,n.jsx)(v.Z,P({podcast:t},e.props),t.id)}))}),t.includes("video")&&(0,n.jsx)("div",{className:"row mt-4",children:this.state.resouceItem.map((function(t){return(0,n.jsx)(b.Z,P({video:t},e.props),t.id)}))}),this.state.totalItem?(0,n.jsx)(p.Z,{itemClass:"page-item",linkClass:"page-link",activePage:this.state.activePage,itemsCountPerPage:6,totalItemsCount:this.state.totalItem,pageRangeDisplayed:5,onChange:this.handlePageChange.bind(this)}):""]})]}):(0,n.jsx)("p",{children:"Loading"})}}]),r}(c.Component),O=!0;t.default=(0,_.withRouter)(x)},96522:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-resource/[slug]",function(){return r(96360)}])},92778:function(e){function t(e,r){if(!(this instanceof t))return new t(e,r);this.per_page=e||25,this.length=r||10}e.exports=t,t.prototype.build=function(e,t){var r=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>r&&(t=r);var n=Math.max(1,t-Math.floor(this.length/2)),a=Math.min(r,t+Math.floor(this.length/2));a-n+1<this.length&&(t<r/2?a=Math.min(r,a+(this.length-(a-n))):n=Math.max(1,n-(this.length-(a-n)))),a-n+1>this.length&&(t>r/2?n++:a--);var i=this.per_page*(t-1);i<0&&(i=0);var o=this.per_page*t-1;return o<0&&(o=0),o>Math.max(e-1,0)&&(o=Math.max(e-1,0)),{total_pages:r,pages:Math.min(a-n+1,r),current_page:t,first_page:n,last_page:a,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<r,total_results:e,results:Math.min(o-i+1,e),first_result:i,last_result:o}}},49865:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(21318)),a=o(r(45697)),i=o(r(94184));function o(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){function t(){return l(this,t),c(this,p(t).apply(this,arguments))}var r,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(a=[{key:"handleClick",value:function(e){var t=this.props,r=t.isDisabled,n=t.pageNumber;e.preventDefault(),r||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,r=t.pageText,a=(t.pageNumber,t.activeClass),o=t.itemClass,s=t.linkClass,u=t.activeLinkClass,l=t.disabledClass,f=t.isActive,c=t.isDisabled,p=t.href,d=t.ariaLabel,g=(0,i.default)(o,(h(e={},a,f),h(e,l,c),e)),y=(0,i.default)(s,h({},u,f));return n.default.createElement("li",{className:g,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:y,href:p,"aria-label":d},r))}}])&&f(r.prototype,a),o&&f(r,o),t}(n.Component);t.default=g,h(g,"propTypes",{pageText:a.default.oneOfType([a.default.string,a.default.element]),pageNumber:a.default.number.isRequired,onClick:a.default.func.isRequired,isActive:a.default.bool.isRequired,isDisabled:a.default.bool,activeClass:a.default.string,activeLinkClass:a.default.string,itemClass:a.default.string,linkClass:a.default.string,disabledClass:a.default.string,href:a.default.string}),h(g,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},58447:function(e,t,r){"use strict";t.Z=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(21318)),a=u(r(45697)),i=u(r(92778)),o=u(r(49865)),s=u(r(94184));function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){function t(){return c(this,t),d(this,h(t).apply(this,arguments))}var r,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(a=[{key:"isFirstPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||r&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return!(t.hideNavigation||r&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return!(t.hideNavigation||r&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,r=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||r&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,r=t.itemsCountPerPage,a=t.pageRangeDisplayed,u=t.activePage,l=t.prevPageText,f=t.nextPageText,c=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,h=t.onChange,g=t.activeClass,y=t.itemClass,v=t.itemClassFirst,b=t.itemClassPrev,m=t.itemClassNext,_=t.itemClassLast,C=t.activeLinkClass,P=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),x=t.linkClassFirst,O=t.linkClassPrev,w=t.linkClassNext,j=t.linkClassLast,S=(t.hideFirstLastPages,t.getPageUrl),E=new i.default(r,a).build(d,u),N=E.first_page;N<=E.last_page;N++)e.push(n.default.createElement(o.default,{isActive:N===u,key:N,href:S(N),pageNumber:N,pageText:N+"",onClick:h,itemClass:y,linkClass:k,activeClass:g,activeLinkClass:C,ariaLabel:"Go to page number ".concat(N)}));return this.isPrevPageVisible(E.has_previous_page)&&e.unshift(n.default.createElement(o.default,{key:"prev"+E.previous_page,href:S(E.previous_page),pageNumber:E.previous_page,onClick:h,pageText:l,isDisabled:!E.has_previous_page,itemClass:(0,s.default)(y,b),linkClass:(0,s.default)(k,O),disabledClass:P,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(E.has_previous_page)&&e.unshift(n.default.createElement(o.default,{key:"first",href:S(1),pageNumber:1,onClick:h,pageText:c,isDisabled:!E.has_previous_page,itemClass:(0,s.default)(y,v),linkClass:(0,s.default)(k,x),disabledClass:P,ariaLabel:"Go to first page"})),this.isNextPageVisible(E.has_next_page)&&e.push(n.default.createElement(o.default,{key:"next"+E.next_page,href:S(E.next_page),pageNumber:E.next_page,onClick:h,pageText:f,isDisabled:!E.has_next_page,itemClass:(0,s.default)(y,m),linkClass:(0,s.default)(k,w),disabledClass:P,ariaLabel:"Go to next page"})),this.isLastPageVisible(E.has_next_page)&&e.push(n.default.createElement(o.default,{key:"last",href:S(E.total_pages),pageNumber:E.total_pages,onClick:h,pageText:p,isDisabled:E.current_page===E.total_pages,itemClass:(0,s.default)(y,_),linkClass:(0,s.default)(k,j),disabledClass:P,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&p(r.prototype,a),u&&p(r,u),t}(n.default.Component);t.Z=v,y(v,"propTypes",{totalItemsCount:a.default.number.isRequired,onChange:a.default.func.isRequired,activePage:a.default.number,itemsCountPerPage:a.default.number,pageRangeDisplayed:a.default.number,prevPageText:a.default.oneOfType([a.default.string,a.default.element]),nextPageText:a.default.oneOfType([a.default.string,a.default.element]),lastPageText:a.default.oneOfType([a.default.string,a.default.element]),firstPageText:a.default.oneOfType([a.default.string,a.default.element]),disabledClass:a.default.string,hideDisabled:a.default.bool,hideNavigation:a.default.bool,innerClass:a.default.string,itemClass:a.default.string,itemClassFirst:a.default.string,itemClassPrev:a.default.string,itemClassNext:a.default.string,itemClassLast:a.default.string,linkClass:a.default.string,activeClass:a.default.string,activeLinkClass:a.default.string,linkClassFirst:a.default.string,linkClassPrev:a.default.string,linkClassNext:a.default.string,linkClassLast:a.default.string,hideFirstLastPages:a.default.bool,getPageUrl:a.default.func}),y(v,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},79432:function(e,t,r){"use strict";var n=r(96086),a="function"===typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,f=a?Symbol.for("react.provider"):60109,c=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,y="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function C(){}function P(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=_.prototype;var k=P.prototype=new C;k.constructor=P,n(k,_.prototype),k.isPureReactComponent=!0;var x={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},o=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:i,type:e,key:o,ref:s,props:a,_owner:x.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g,N=[];function R(e,t,r,n){if(N.length){var a=N.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function D(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return r(n,e,""===t?"."+M(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+M(a=e[u],u);s+=D(a,l,r,n)}else if(null===e||"object"!==typeof e?l=null:l="function"===typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"===typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)s+=D(a=a.value,l=t+M(a,u++),r,n);else if("object"===a)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return s}function L(e,t,r){return null==e?0:D(e,"",t,r)}function M(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Z(e,n,r,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function Z(e,t,r,n,a){var i="";null!=r&&(i=(""+r).replace(E,"$&/")+"/"),L(e,I,t=R(t,i,n,a)),T(t)}var F={current:null};function q(){var e=F.current;if(null===e)throw Error(v(321));return e}var A={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return Z(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,$,t=R(null,null,t,r)),T(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return Z(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(v(143));return e}},t.Component=_,t.Fragment=s,t.Profiler=l,t.PureComponent=P,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(v(267,e));var a=n({},e.props),o=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)O.call(t,f)&&!w.hasOwnProperty(f)&&(a[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)a.children=r;else if(1<f){l=Array(f);for(var c=0;c<f;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:i,type:e.type,key:o,ref:s,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},21318:function(e,t,r){"use strict";e.exports=r(79432)}},function(e){e.O(0,[8523,4885,5675,5406,5920,8411,9337,9774,2888,179],(function(){return t=96522,e(e.s=t);var t}));var t=e.O();_N_E=t}]);