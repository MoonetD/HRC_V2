var G=Object.defineProperty,q=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var M=(e,t,i)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))H.call(t,i)&&M(e,i,t[i]);if(L)for(var i of L(t))Q.call(t,i)&&M(e,i,t[i]);return e},g=(e,t)=>q(e,C(t));import{eJ as J,jH as Z,r as h,iX as X,iq as U,t as x,jI as W,jJ as Y,jK as ee,jL as te,jM as P,jN as ie,iM as re,eH as oe,eI as T,jO as se,Z as p,_ as y,aB as K,bJ as ne,a0 as R,cg as ae,dt as pe,iJ as le,jP as ce,b3 as ye,jQ as de,ch as ue,bz as me,C as he,e6 as fe,e7 as ge,e8 as ve,iz as we,e9 as Se,iN as $e,ed as _e,ak as Oe,cQ as je,dn as be,bA as Ie,aU as xe,e as $,dZ as Te,iR as Re}from"./GISSearch.b73a2371.js";import{_ as Ne}from"./index.8ac88fb7.js";import{i as Le}from"./originUtils.0f642d6d.js";import{A as Me,K as A}from"./SceneService.86bb29f6.js";import{s as Ue,l as Ae,u as Je,m as Pe}from"./I3SLayerDefinitions.009b133e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./resourceUtils.17d76049.js";function O(e){return N[Ke(e)]||Ve}function Ke(e){return e instanceof Blob?e.type:ze(e.url)}function ze(e){const t=J(e);return j[t]||z}const N={},z="text/plain",Ve=N[z],j={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in j)N[j[e]]=e;function b(e){const t=h(e)&&e.origins?e.origins:[void 0];return(i,r)=>{const s=De(e,i,r);for(const a of t){const n=Z(i,a,r);for(const o in s)n[o]=s[o]}}}function De(e,t,i){if(h(e)&&e.type==="resource")return Ee(e,t,i);switch(h(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:s}=se;return{read:r,write:s}}}}function Ee(e,t,i){const r=ie(t,i);return{type:String,read:(s,a,n)=>{const o=X(s,a,n);return r.type===String?o:typeof r.type=="function"?new r.type({url:o}):void 0},write:{writer(s,a,n,o){if(!o||!o.resources)return typeof s=="string"?void(a[n]=U(s,o)):void(a[n]=s.write({},o));const d=Ge(s),c=d?U(d,g(u({},o),{verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),W.NO):null,f=r.type!==String&&(!Le(this)||o&&o.origin&&this.originIdOf(i)>Y(o.origin));o&&o.portalItem&&h(c)&&!ee(c)?f?Fe(this,i,s,c,a,n,o,e):ke(c,a,n,o):o&&o.portalItem&&(x(c)||h(te(c))||P(c)||f)?V(this,i,s,c,a,n,o,e):a[n]=c}}}}function V(e,t,i,r,s,a,n,o){const d=re(),c=E(i,r,n),f=oe(T(o,"prefix"),d),k=`${f}.${O(c)}`,w=n.portalItem.resourceFromPath(k);P(r)&&n.resources.pendingOperations.push(Be(r).then(B=>{w.path=`${f}.${O(B)}`,s[a]=w.itemRelativeUrl}).catch(()=>{})),D(e,t,w,c,n.resources.toAdd),s[a]=w.itemRelativeUrl}function Fe(e,t,i,r,s,a,n,o){const d=n.portalItem.resourceFromPath(r),c=E(i,r,n);O(c)===J(d.path)?(D(e,t,d,c,n.resources.toUpdate),s[a]=r):V(e,t,i,r,s,a,n,o)}function ke(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}function D(e,t,i,r,s){s.push({resource:i,content:r,finish:a=>{qe(e,t,a)}})}function E(e,t,i){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}async function Be(e){const t=(await Ne(()=>import("./GISSearch.b73a2371.js").then(function(r){return r.lm}),["assets/GISSearch.b73a2371.js","assets/GISSearch.2dbd3ab5.css","assets/index.8ac88fb7.js","assets/index.140a46ab.css","assets/ProjectWeberRenew.dc78a7b0.js","assets/plugin-vue_export-helper.21dcd24c.js"])).default,{data:i}=await t(e,{responseType:"blob"});return i}function Ge(e){return x(e)?null:typeof e=="string"?e:e.url}function qe(e,t,i){typeof e[t]=="string"?e[t]=i.url:e[t].url=i.url}var I;let m=I=class extends ae{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!pe(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new le("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const s=new K;ce(e,s,r.layer.spatialReference),t[i]=s.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new I({geometry:ye(this.geometry),type:this.type})}};p([y({type:K}),b()],m.prototype,"geometry",void 0),p([ne(["web-scene","portal-item"],"geometry")],m.prototype,"writeGeometry",null),p([y({type:["clip","mask","replace"],nonNullable:!0}),b()],m.prototype,"type",void 0),m=I=p([R("esri.layers.support.SceneModification")],m);const _=m;var v;let S=v=class extends de(ue.ofType(_)){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}clone(){return new v({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const i of e)this.add(_.fromJSON(i,t))}static fromJSON(e,t){const i=new v;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:me(e),origin:"service"},s=await he(e,{responseType:"json",signal:T(i,"signal")}),a=t.toJSON(),n=[];for(const o of s.data)n.push(_.fromJSON(g(u({},o),{geometry:g(u({},o.geometry),{spatialReference:a})}),r));return new v({url:e,items:n})}};p([y({type:String})],S.prototype,"url",void 0),S=v=p([R("esri.layers.support.SceneModifications")],S);const F=S;let l=class extends Me(fe(ge(ve(we(Se($e(_e))))))){constructor(...e){super(...e),this.handles=new Oe,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(je(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,be))}normalizeCtorArgs(e,t){return typeof e=="string"?u({url:e},t):e}readModifications(e,t,i){this._modificationsSource={url:Ie(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=T(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){xe(i)}if(await this._fetchService(t),h(this._modificationsSource)){const i=await F.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",i,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!x(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(A.SAVE_AS,g(u({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(A.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new $("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new $("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new $("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};p([y({type:String,readOnly:!0})],l.prototype,"geometryType",void 0),p([y({type:["show","hide"]})],l.prototype,"listMode",void 0),p([y({type:["IntegratedMeshLayer"]})],l.prototype,"operationalLayerType",void 0),p([y({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),p([y({type:Ue,readOnly:!0})],l.prototype,"nodePages",void 0),p([y({type:[Ae],readOnly:!0})],l.prototype,"materialDefinitions",void 0),p([y({type:[Je],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0),p([y({type:[Pe],readOnly:!0})],l.prototype,"geometryDefinitions",void 0),p([y({readOnly:!0})],l.prototype,"serviceUpdateTimeStamp",void 0),p([y({type:F}),b({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],l.prototype,"modifications",void 0),p([Te(["web-scene","portal-item"],"modifications")],l.prototype,"readModifications",null),p([y(Re)],l.prototype,"elevationInfo",void 0),p([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),l=p([R("esri.layers.IntegratedMeshLayer")],l);const it=l;export{it as default};
