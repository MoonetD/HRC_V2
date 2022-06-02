var c=Object.defineProperty;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))m.call(t,o)&&u(e,o,t[o]);return e};import{iy as S,iA as v,e7 as f,e8 as g,iz as b,e9 as C,ed as j,dY as G,r as _,aU as w,C as x,j0 as P,q as R,Z as s,_ as i,dZ as k,cp as F,iS as $,j1 as E,ec as M,a0 as L,eK as n,j2 as O,j3 as T,j4 as A,j5 as D}from"./GISSearch.b73a2371.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";const U=["atom","xml"],q={base:n,key:"type",typeMap:{"simple-line":O},errorContext:"symbol"},z={base:n,key:"type",typeMap:{"picture-marker":T,"simple-marker":A},errorContext:"symbol"},Z={base:n,key:"type",typeMap:{"simple-fill":D},errorContext:"symbol"};let r=class extends S(v(f(g(b(C(j)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return typeof e=="string"?d({url:e},t):e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(o=>{var l;const a=o.layerDefinition.drawingInfo.renderer.symbol;a&&a.type==="esriSFS"&&(l=a.outline)!=null&&l.style.includes("esriSFS")&&(a.outline.style="esriSLSSolid")}),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?G(this.url,U)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=_(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(w).then(()=>this._fetchService(t)).then(o=>{this.read(o,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const o=this.spatialReference,{data:l}=await x(R.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:P(o)?void 0:(t=o.wkid)!=null?t:JSON.stringify(o)},signal:e});return l}_hasGeometry(e){var t,o;return(t=(o=this.featureCollections)==null?void 0:o.some(l=>{var a,y;return((a=l.featureSet)==null?void 0:a.geometryType)===e&&((y=l.featureSet.features)==null?void 0:y.length)>0}))!=null&&t}};s([i()],r.prototype,"description",void 0),s([i()],r.prototype,"featureCollections",void 0),s([k("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),s([i({type:F,json:{name:"lookAtExtent"}})],r.prototype,"fullExtent",void 0),s([i($)],r.prototype,"id",void 0),s([i(E)],r.prototype,"legendEnabled",void 0),s([i({types:q,json:{write:!0}})],r.prototype,"lineSymbol",void 0),s([i({type:["show","hide"]})],r.prototype,"listMode",void 0),s([i({types:z,json:{write:!0}})],r.prototype,"pointSymbol",void 0),s([i({types:Z,json:{write:!0}})],r.prototype,"polygonSymbol",void 0),s([i({type:["GeoRSS"]})],r.prototype,"operationalLayerType",void 0),s([i(M)],r.prototype,"url",void 0),s([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],r.prototype,"title",null),s([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=s([L("esri.layers.GeoRSSLayer")],r);const B=r;export{B as default};