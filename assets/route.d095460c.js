var K=Object.defineProperty,Q=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var Z=(s,t,i)=>t in s?K(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,T=(s,t)=>{for(var i in t||(t={}))W.call(t,i)&&Z(s,i,t[i]);if(O)for(var i of O(t))_.call(t,i)&&Z(s,i,t[i]);return s},I=(s,t)=>Q(s,V(t));import{Z as a,_ as f,dc as k,ck as $,a0 as C,cg as J,dZ as L,dE as z,cj as G,C as H,r as q}from"./GISSearch.b73a2371.js";import{a as U,i as j,u as X,f as Y,d as ee,o as te}from"./NAMessage.ba4db950.js";import{c as re}from"./DirectionsFeatureSet.b55ca167.js";let g=class extends J{constructor(s){super(s),this.directionLines=null,this.directionPoints=null,this.directions=null,this.route=null,this.routeName=null,this.stops=null}};a([f({type:k,json:{write:!0}})],g.prototype,"directionLines",void 0),a([f({type:k,json:{write:!0}})],g.prototype,"directionPoints",void 0),a([f({type:re,json:{write:!0}})],g.prototype,"directions",void 0),a([f({type:$,json:{write:!0}})],g.prototype,"route",void 0),a([f({type:String,json:{write:!0}})],g.prototype,"routeName",void 0),a([f({type:[$],json:{write:!0}})],g.prototype,"stops",void 0),g=a([C("esri.rest.support.RouteResult")],g);const se=g;function x(s){return s&&k.fromJSON(s).features.map(t=>t)}let c=class extends J{constructor(s){super(s),this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(s,t){return x(t.barriers)}readPolylineBarriers(s){return x(s)}readPolygonBarriers(s){return x(s)}};a([f({type:[U]})],c.prototype,"messages",void 0),a([f({type:[$]})],c.prototype,"pointBarriers",void 0),a([L("pointBarriers",["barriers"])],c.prototype,"readPointBarriers",null),a([f({type:[$]})],c.prototype,"polylineBarriers",void 0),a([L("polylineBarriers")],c.prototype,"readPolylineBarriers",null),a([f({type:[$]})],c.prototype,"polygonBarriers",void 0),a([L("polygonBarriers")],c.prototype,"readPolygonBarriers",null),a([f({type:[se]})],c.prototype,"routeResults",void 0),c=a([C("esri.rest.support.RouteSolveResult")],c);const oe=c,ie=te({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:s=>s.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function S(s){return(s==null?void 0:s.declaredClass)==="esri.rest.support.FeatureSet"}async function ce(s,t,i){const A=[],v=[],d={},e={},B=z(s),{path:m}=B;S(t.stops)&&j(t.stops.features,v,"stops.features",d),S(t.pointBarriers)&&j(t.pointBarriers.features,v,"pointBarriers.features",d),S(t.polylineBarriers)&&j(t.polylineBarriers.features,v,"polylineBarriers.features",d),S(t.polygonBarriers)&&j(t.polygonBarriers.features,v,"polygonBarriers.features",d);const w=await G(v);for(const l in d){const h=d[l];A.push(l),e[l]=w.slice(h[0],h[1])}if(X(e,A)){let l=null;try{l=await Y(m,t.apiKey,i)}catch{}l&&!l.hasZ&&ee(e,A)}for(const l in e)e[l].forEach((h,E)=>{t.get(l)[E].geometry=h});const N=I(T({},i),{query:I(T(T({},B.query),ie.toQueryParams(t)),{f:"json"})}),y=m.endsWith("/solve")?m:`${m}/solve`,{data:P}=await H(y,N);return ae(P)}function ae(s){var t,i,A,v,d;const e=new Map,{directionLines:B,directionPoints:m,directions:w,routes:N,stops:y,barriers:P,polygonBarriers:l,polylineBarriers:h,messages:E}=s,D=(t=(i=(A=(v=N==null?void 0:N.spatialReference)!=null?v:y==null?void 0:y.spatialReference)!=null?A:P==null?void 0:P.spatialReference)!=null?i:l==null?void 0:l.spatialReference)!=null?t:h==null?void 0:h.spatialReference;N==null||N.features.forEach(r=>{const o=r.attributes.Name,u=r.attributes.ObjectID;e.has(o)?(e.get(o).route=r,e.get(o).routeId=u):e.set(o,{route:r,routeId:u,routeName:o}),q(r.geometry)&&(r.geometry.spatialReference=D)}),w==null||w.forEach(r=>{const o=r.routeName;e.has(o)?e.get(o).directions=r:e.set(o,{routeName:o,directions:r})}),y==null||y.features.forEach(r=>{var o;const u=(o=r.attributes.RouteName)!=null?o:null;e.has(u)?e.get(u).stops?e.get(u).stops.push(r):e.get(u).stops=[r]:e.set(u,{stops:[r],routeName:u}),q(r.geometry)&&(r.geometry.spatialReference=D)});const M=(d=y==null?void 0:y.features.every(r=>r.attributes.RouteName==null))==null||d;if((y==null?void 0:y.features.length)>0&&M){const r=Array.from(e.keys())[0];e.get(r).stops=e.get(null).stops,e.delete(null)}B==null||B.features.forEach(r=>{var o;const u=r.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionLines)e.get(n).directionLines.features.push(r);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.get(n).directionLines={features:[r],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.set(n,{routeName:n,directionLines:{features:[r],fieldAliases:p,geometryType:R,spatialReference:b}})}}),m==null||m.features.forEach(r=>{var o;const u=r.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionPoints)e.get(n).directionPoints.features.push(r);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.get(n).directionPoints={features:[r],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.set(n,{routeName:n,directionPoints:{features:[r],fieldAliases:p,geometryType:R,spatialReference:b}})}});const F=Array.from(e.values());return oe.fromJSON({routeResults:F,barriers:P,polygonBarriers:l,polylineBarriers:h,messages:E})}export{ce as p};
