var V=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var p=(e,i,r)=>i in e?V(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,b=(e,i)=>{for(var r in i||(i={}))g.call(i,r)&&p(e,r,i[r]);if(y)for(var r of y(i))_.call(i,r)&&p(e,r,i[r]);return e},u=(e,i)=>m(e,f(i));import{Z as o,_ as h,dk as L,a0 as v,ch as O,cO as F}from"./GISSearch.9df35164.js";import{b as C}from"./WGLContainer.a7b47613.js";import{L as E}from"./enums.457e23f9.js";import{u as R,f as x}from"./LayerView.f42db4c4.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./pixelUtils.4fe8b03c.js";import"./Container.70584248.js";import"./VertexArrayObject.61e2646f.js";import"./Texture.4f2b846f.js";import"./VertexElementDescriptor.0406f2d4.js";import"./enums.84480fc7.js";import"./Utils.84cdda90.js";import"./number.dc47462b.js";import"./ProgramTemplate.3d484ad5.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9a296ace.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";class H extends C{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(i){const r=this.createRenderParams(i),{context:t,painter:s,profiler:n}=r;this._prevFBO=t.getBoundFramebufferObject(),n.recordContainerStart(this.name);const d=this._getFbo(r),w=s.getRenderTarget();t.bindFramebuffer(d),s.setRenderTarget(d),t.setDepthWriteEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1);for(const l of this.children)l.beforeRender(i);for(const l of this.children)l.processRender(r);for(const l of this.children)l.afterRender(i);s.setRenderTarget(w),s.releaseFbo(d),t.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),t.setStencilTestEnabled(!1),t.setStencilWriteMask(0),s.blitTexture(t,d.colorTexture,E.NEAREST),s.compositeLayer(r,this.computedOpacity),n.recordContainerEnd()}createRenderParams(i){return u(b({},super.createRenderParams(i)),{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}_getFbo(i){const{context:r,painter:t}=i,{width:s,height:n}=r.getViewport();return t.acquireFbo(s,n)}}let a=class extends R{constructor(e){super(e),this.type="group",this.layerViews=new O}initialize(){this.handles.add([this.layerViews.on("change",e=>this._layerViewsChangeHandler(e)),this.layer.watch("visibilityMode",()=>this._visibilityModeHandler(),!0),this.watch("visible",()=>this._visibleHandler(),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(e){this._set("layerViews",F(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,i)=>e+i.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(e=>e.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(e=>e._isOverridden("visible"))}_findLayerViewForLayer(e){return e&&this.layerViews.find(i=>i.layer===e)}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find(i=>{const r=this._findLayerViewForLayer(i);return r&&r.visible});return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(i=>{i.visible=i===e}))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(t=>t.watch("visible",s=>this._layerViewVisibleHandler(s,t),!0)).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let r=null;i&&i.visible&&(r=i),this._enforceVisibility(r)}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const i=this.visible;this.layerViews.forEach(r=>{r.visible=i});break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&((e=this.layer)==null?void 0:e.visibilityMode)==="inherited"&&this._enforceVisibility()}};o([h({cast:L})],a.prototype,"layerViews",null),o([h({readOnly:!0})],a.prototype,"updatingProgress",null),o([h()],a.prototype,"view",void 0),a=o([v("esri.views.layers.GroupLayerView")],a);const M=a;let c=class extends x(M){constructor(){super(...arguments),this.container=new H}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,i)=>this.container.addChildAt(e.container,i))}};c=o([v("esri.views.2d.layers.GroupLayerView2D")],c);const ie=c;export{ie as default};