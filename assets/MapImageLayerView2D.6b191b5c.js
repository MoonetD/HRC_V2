var E=Object.defineProperty,A=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))V.call(e,t)&&S(r,t,e[t]);if(P)for(var t of P(e))F.call(e,t)&&S(r,t,e[t]);return r},_=(r,e)=>A(r,M(e));import{Z as o,_ as m,cY as G,a0 as q,dN as R,e as L,r as g,dO as N,cw as O,d3 as T,s as D,dm as Q,j}from"./GISSearch.b73a2371.js";import{t as z}from"./BitmapContainer.45b58859.js";import{f as H,u as W}from"./LayerView.95538f08.js";import{r as k}from"./BaseGraphicContainer.438c4e75.js";import{n as Y}from"./HighlightGraphicContainer.446e0e3a.js";import{S as Z}from"./ExportStrategy.898cd4f1.js";import{s as B,a as J}from"./drapedUtils.82886101.js";import{t as K,d as X}from"./popupUtils.9bc51a64.js";import{i as ee}from"./RefreshableLayerView.8dc1308b.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./WGLContainer.ad96b13e.js";import"./enums.457e23f9.js";import"./pixelUtils.9fff4c99.js";import"./Container.e5cc492f.js";import"./VertexArrayObject.4ccd043a.js";import"./Texture.df7d53ef.js";import"./VertexElementDescriptor.0406f2d4.js";import"./enums.84480fc7.js";import"./Utils.e0214b13.js";import"./number.dc47462b.js";import"./ProgramTemplate.85782ebc.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";import"./CIMSymbolHelper.1040926f.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.66acda0b.js";import"./json.da51edc4.js";import"./FeatureContainer.2f011771.js";import"./TileContainer.9dcdd226.js";import"./visualVariablesUtils.65d2f75d.js";import"./visualVariablesUtils.54823ca9.js";import"./Matcher.4b2c4793.js";import"./tileUtils.fab497ef.js";import"./TileClipper.2c69e8d5.js";import"./Geometry.e891c191.js";import"./cimAnalyzer.74547477.js";import"./quantizationUtils.48cd94ed.js";import"./ExpandedCIM.d4661ffb.js";import"./schemaUtils.d3838579.js";import"./createSymbolSchema.4fe41dfb.js";import"./MD5.67d7a872.js";import"./util.837deeb3.js";import"./ComputedAttributeStorage.2a68a55c.js";import"./vec3f32.8179e08f.js";import"./Bitmap.2f3b8999.js";const te=r=>{let e=class extends r{initialize(){this.exportImageParameters=new R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,a){const{layer:h}=this;if(!t)return Promise.reject(new L("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:h}));const l=this.get("view.scale"),y=[],f=async i=>{const p=i.minScale===0||l<=i.minScale,s=i.maxScale===0||l>=i.maxScale;if(i.visible&&p&&s){if(i.sublayers)i.sublayers.forEach(f);else if(i.popupEnabled){const d=X(i,_(c({},a),{defaultPopupTemplateEnabled:!1}));g(d)&&y.unshift({sublayer:i,popupTemplate:d})}}},U=h.sublayers.toArray().reverse().map(f);await Promise.all(U);const $=y.map(async({sublayer:i,popupTemplate:p})=>{await i.load().catch(()=>{});const s=i.createQuery(),d=g(a)?a.event:null,v=B({renderer:i.renderer,event:d}),w=this.createFetchPopupFeaturesQueryGeometry(t,v);if(s.geometry=w,s.outFields=await K(i,p),this.layer.type==="map-image"&&"floors"in this.view){var x,I;const C=(x=this.view)==null||(I=x.floors)==null?void 0:I.clone(),u=N(C,i);g(u)&&(s.where=s.where?`(${s.where}) AND (${u})`:u)}const b=await this._loadArcadeModules(p);return b&&b.arcadeUtils.hasGeometryOperations(p)||(s.maxAllowableOffset=w.width/v),(await i.queryFeatures(s)).features});return(await O($)).reduce((i,p)=>p.value?[...i,...p.value]:i,[]).filter(i=>i!=null)}canResume(){var t;return!!super.canResume()&&((t=this.timeExtent)==null||!t.isEmpty)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(a=>a.type==="expression"))return T()}};return o([m()],e.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],e.prototype,"exportImageVersion",null),o([m()],e.prototype,"layer",void 0),o([m()],e.prototype,"suspended",void 0),o([m(G)],e.prototype,"timeExtent",void 0),e=o([q("esri.views.layers.MapImageLayerView")],e),e},re=D.getLogger("esri.views.2d.layers.MapImageLayerView2D");let n=class extends te(ee(H(W))){constructor(){super(...arguments),this._highlightGraphics=new Q}update(r){this.strategy.update(r).catch(e=>{j(e)||re.error(e)})}attach(){const{imageMaxWidth:r,imageMaxHeight:e,version:t}=this.layer,a=t>=10.3,h=t>=10;this._bitmapContainer=new z,this.container.addChild(this._bitmapContainer);const l=new k({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)});this.container.addChild(l.container),this.strategy=new Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:h,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(r,e){return this._highlightGraphics.add(r),{remove:()=>{this._highlightGraphics.remove(r)}}}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}createFetchPopupFeaturesQueryGeometry(r,e){return J(r,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,e,t,a){return this.layer.fetchImage(r,e,t,c({timeExtent:this.timeExtent,floors:this.view.floors},a))}};o([m()],n.prototype,"strategy",void 0),o([m()],n.prototype,"updating",void 0),n=o([q("esri.views.2d.layers.MapImageLayerView2D")],n);const rt=n;export{rt as default};