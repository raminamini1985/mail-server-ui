import{aU as c}from"./index-DRLfVU3l.js";function C(r,t){if(r==null)return{};var e=h(r,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(e[n]=r[n])}return e}function h(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}function m(){return m=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},m.apply(this,arguments)}function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,n)}return e}function a(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?d(Object(e),!0).forEach(function(n){b(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function b(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}const y={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},f=2;class w extends c.Component{constructor(t){super(t),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let e;this.props.breakpointCols&&this.props.breakpointCols.default?e=this.props.breakpointCols.default:e=parseInt(this.props.breakpointCols)||f,this.state={columnCount:e}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){const t=window&&window.innerWidth||1/0;let e=this.props.breakpointCols;typeof e!="object"&&(e={default:parseInt(e)||f});let n=1/0,o=e.default||f;for(let i in e){const s=parseInt(i);s>0&&t<=s&&s<n&&(n=s,o=e[i])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}itemsInColumns(){const t=this.state.columnCount,e=new Array(t),n=c.Children.toArray(this.props.children);for(let o=0;o<n.length;o++){const i=o%t;e[i]||(e[i]=[]),e[i].push(n[o])}return e}renderColumns(){const{column:t,columnAttrs:e={},columnClassName:n}=this.props,o=this.itemsInColumns(),i=`${100/o.length}%`;let s=n;s&&typeof s!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof s>"u"&&(s="my-masonry-grid_column"));const l=a(a(a({},t),e),{},{style:a(a({},e.style),{},{width:i}),className:s});return o.map((p,u)=>c.createElement("div",m({},l,{key:u}),p))}logDeprecated(t){console.error("[Masonry]",t)}render(){const t=this.props,{children:e,breakpointCols:n,columnClassName:o,columnAttrs:i,column:s,className:l}=t,p=C(t,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let u=l;return typeof l!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof l>"u"&&(u="my-masonry-grid")),c.createElement("div",m({},p,{className:u}),this.renderColumns())}}w.defaultProps=y;export{w as M};