import{r as o,ck as d,ch as u,K as p,cZ as f,t as w,Z as _,a0 as y}from"./GISSearch.9df35164.js";import{f as V,u as v}from"./LayerView.f42db4c4.js";import{i as c}from"./GraphicContainer.cdb71a55.js";import{r as g}from"./BaseGraphicContainer.739822b1.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Container.70584248.js";import"./Utils.84cdda90.js";import"./enums.84480fc7.js";import"./number.dc47462b.js";import"./enums.457e23f9.js";import"./Texture.4f2b846f.js";import"./VertexElementDescriptor.0406f2d4.js";import"./CIMSymbolHelper.1af40bea.js";import"./BidiEngine.b9926823.js";import"./alignmentUtils.03ee467b.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.fbb0a594.js";import"./json.da51edc4.js";import"./VertexArrayObject.61e2646f.js";import"./FeatureContainer.d84bf091.js";import"./TileContainer.63ca271e.js";import"./WGLContainer.a7b47613.js";import"./pixelUtils.4fe8b03c.js";import"./ProgramTemplate.3d484ad5.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9a296ace.js";import"./earcut.91e104de.js";import"./visualVariablesUtils.1b971d6a.js";import"./visualVariablesUtils.142de5b6.js";import"./Matcher.fc71ab3e.js";import"./tileUtils.98353ba9.js";import"./TileClipper.d0e9cb99.js";import"./Geometry.e891c191.js";import"./cimAnalyzer.f7c6007c.js";import"./quantizationUtils.4b4d3537.js";import"./ExpandedCIM.fbe66b15.js";import"./schemaUtils.ab969108.js";import"./createSymbolSchema.2db3aa3b.js";import"./MD5.67d7a872.js";import"./util.99649586.js";import"./ComputedAttributeStorage.ad4fab6d.js";import"./vec3f32.8179e08f.js";const m="sublayers",n="layerView",C=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends V(v){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){const e=Array.from(this.graphicsViews(),async r=>{const h=await r.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const s=this._graphicsViewsFeatureCollectionMap.get(r);for(const a of h)!a.popupTemplate&&s.popupTemplate&&(a.popupTemplate=s.popupTemplate)}return h});return(await Promise.all(e)).flat()}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof d?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):u.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):C}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const h=new c(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const s=new g({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([p(r,"visible",a=>s.container.visible=a),p(s,"updating",()=>this.notifyChange("updating"))],n)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(f(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),m)}detach(){this._destroyGraphicsViews(),this.handles.remove(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),w(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const h=new c(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const s=new g({view:t,graphics:r.graphics,requestUpdateCallback:e,container:h});this.handles.add([r.on("graphic-update",s.graphicUpdateHandler),p(r,"visible",a=>s.container.visible=a),p(s,"updating",()=>this.notifyChange("updating"))],n),this.container.addChild(s.container),i.push(s)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([y("esri.views.2d.layers.MapNotesLayerView2D")],l);const ui=l;export{ui as default};