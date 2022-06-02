var x=Object.defineProperty,$=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,i,o)=>i in t?x(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,p=(t,i)=>{for(var o in i||(i={}))R.call(i,o)&&h(t,o,i[o]);if(c)for(var o of c(i))F.call(i,o)&&h(t,o,i[o]);return t},m=(t,i)=>$(t,T(i));import{Z as e,_ as s,a0 as S,cg as O,s as k,j8 as P,iy as N,j9 as D,iz as E,iA as _,e6 as L,e7 as U,e8 as A,e9 as C,j7 as J,ed as G,aT as I,e as d,r as z,aU as V,ja as f,kd as Z,jC as q,dj as M,iE as W,d1 as B,C as H,jb as Q,cx as X,iF as Y,jc as K,cp as ee,gZ as g,jd as te,je as ie,jf as re,j1 as se,gO as v,kh as oe,ki as ae,iH as ne,dh as le,jh as pe,iG as de,dZ as b,ji as ye,ec as ue,kj as ce,kk as he,iI as me}from"./GISSearch.b73a2371.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";var u;let n=u=class extends O{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new u({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([s({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=u=e([S("esri.layers.support.PurgeOptions")],n);const j=n,fe=k.getLogger("esri.layers.StreamLayer"),w=me();let r=class extends P(N(D(E(_(L(U(A(C(J(G)))))))))){constructor(...t){super(...t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new j,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(t,i){return typeof t=="string"?p({url:t},i):t}load(t){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=z(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},t).catch(V).then(()=>this._fetchService(i))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(t){f(t,this.fieldsIndex),this._set("renderer",t)}readRenderer(t,i,o){const a=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(a){const l=Z(a,i,o)||void 0;return l||fe.error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:o}),l}if(i.defaultSymbol)return i.types&&i.types.length?new q({defaultSymbol:y(i.defaultSymbol,i,o),field:i.typeIdField,uniqueValueInfos:i.types.map(l=>({id:l.id,symbol:y(l.symbol,l,o)}))}):new M({symbol:y(i.defaultSymbol,i,o)})}createPopupTemplate(t){return W(this,t)}createQuery(){const t=new B;return t.returnGeometry=!0,t.outFields=["*"],t.where=this.definitionExpression||"1=1",t}getFieldDomain(t,i){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===t&&(o=a.domain),!!o)),o}getField(t){return this.fieldsIndex.get(t)}serviceSupportsSpatialReference(t){return!0}async _fetchService(t){var i;if(this.webSocketUrl){var o;if((o=this.timeInfo)==null||!o.trackIdField)throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await H(this.parsedUrl.path,{query:p(p({f:"json"},this.customParameters),this.parsedUrl.query),responseType:"json",signal:t});this.sourceJSON=a}return this.sourceJSON=m(p({},(i=this.sourceJSON)!=null?i:{}),{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),Q(this.timeInfo,this.fieldsIndex),X(this,{origin:"service"})}};e([s({type:String})],r.prototype,"copyright",void 0),e([s({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),e([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],r.prototype,"definitionExpression",void 0),e([s({type:String})],r.prototype,"displayField",void 0),e([s({type:Y})],r.prototype,"elevationInfo",void 0),e([s(K)],r.prototype,"featureReduction",void 0),e([s(w.fields)],r.prototype,"fields",void 0),e([s(w.fieldsIndex)],r.prototype,"fieldsIndex",void 0),e([s({type:ee})],r.prototype,"geometryDefinition",void 0),e([s({type:g.apiValues,json:{read:{reader:g.read}}})],r.prototype,"geometryType",void 0),e([s(te)],r.prototype,"labelsVisible",void 0),e([s({type:[ie],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:re},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],r.prototype,"labelingInfo",void 0),e([s(se)],r.prototype,"legendEnabled",void 0),e([s({type:["show","hide"]})],r.prototype,"listMode",void 0),e([s({type:v})],r.prototype,"maxReconnectionAttempts",void 0),e([s({type:v})],r.prototype,"maxReconnectionInterval",void 0),e([s(oe)],r.prototype,"maxScale",void 0),e([s(ae)],r.prototype,"minScale",void 0),e([s({type:String})],r.prototype,"objectIdField",void 0),e([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],r.prototype,"operationalLayerType",void 0),e([s(ne)],r.prototype,"popupEnabled",void 0),e([s({type:le,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),e([s({type:j})],r.prototype,"purgeOptions",void 0),e([s({types:pe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:de,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",null),e([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],r.prototype,"readRenderer",null),e([s(ye)],r.prototype,"screenSizePerspectiveEnabled",void 0),e([s()],r.prototype,"sourceJSON",void 0),e([s({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],r.prototype,"spatialReference",void 0),e([s({json:{read:!1}})],r.prototype,"type",void 0),e([s(ue)],r.prototype,"url",void 0),e([s({type:Number})],r.prototype,"updateInterval",void 0),e([s({type:String})],r.prototype,"webSocketUrl",void 0),r=e([S("esri.layers.StreamLayer")],r);const y=ce({types:he}),Ie=r;export{Ie as default};
