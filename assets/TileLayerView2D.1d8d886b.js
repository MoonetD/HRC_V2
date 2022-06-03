var q=Object.defineProperty,Q=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(e,t,i)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))S.call(t,i)&&d(e,i,t[i]);if(y)for(var i of y(t))F.call(t,i)&&d(e,i,t[i]);return e},_=(e,t)=>Q(e,b(t));import{Z as p,_ as f,a0 as T,e as g,cw as U,r as P,cJ as x,cK as C,cL as L,cM as R,bm as k,j as m,bp as v,s as z}from"./GISSearch.9df35164.js";import{r as E,o as I,n as V}from"./imageUtils.84118c2c.js";import{f as $,u as j}from"./LayerView.f42db4c4.js";import{i as A}from"./RefreshableLayerView.2b6339e4.js";import{s as G,a as B}from"./drapedUtils.57def9b5.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./BitmapTileContainer.7277d307.js";import"./Bitmap.3d471db2.js";import"./Container.70584248.js";import"./enums.457e23f9.js";import"./Texture.4f2b846f.js";import"./TileContainer.63ca271e.js";import"./Utils.84cdda90.js";import"./enums.84480fc7.js";import"./number.dc47462b.js";import"./VertexElementDescriptor.0406f2d4.js";import"./WGLContainer.a7b47613.js";import"./pixelUtils.4fe8b03c.js";import"./VertexArrayObject.61e2646f.js";import"./ProgramTemplate.3d484ad5.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.9a296ace.js";import"./alignmentUtils.03ee467b.js";import"./earcut.91e104de.js";const D=e=>{let t=class extends e{async fetchPopupFeatures(i,a){const{layer:l}=this;if(!i)return Promise.reject(new g("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l}));if(l.type!=="tile")return Promise.reject(new g("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type}));const h=this.get("view.scale"),o=l.allSublayers.toArray().filter(s=>{const r=s.minScale===0||h<=s.minScale,n=s.maxScale===0||h>=s.maxScale;return s.popupTemplate&&s.popupEnabled&&s.visible&&r&&n});return U(o.map(async s=>{const r=s.createQuery(),n=P(a)?a.event:null,c=G({renderer:s.renderer,event:n});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(i,c),r.outFields=await s.popupTemplate.getRequiredFields(),(await s.queryFeatures(r)).features})).then(s=>[].concat(...s.map(r=>r.value).filter(Boolean)))}};return p([f()],t.prototype,"layer",void 0),t=p([T("esri.layers.mixins.TileLayerView")],t),t},J=[0,0];let u=class extends D(A(E($(j)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new x(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new C({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new L({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(R(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return k((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return B(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e,t;return(e=(t=this._fetchQueue)==null?void 0:t.updating)!=null&&e}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(J,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:l=0}=t;if(!i)try{return await this._fetchImage(e,a)}catch(s){if(!m(s)&&!this.resampling)return I(this._tileInfoView.tileInfo.size);if(l<3){const r=this._tileInfoView.getTileParentId(e.id);if(r){const n=new v(r),c=await this.fetchTile(n,_(w({},t),{resamplingLevel:l+1}));return V(this._tileInfoView,c,n,e)}}throw s}const h=new v(0,0,0,0);let o;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:a}),h.level!==e.level&&!this.resampling)return I(this._tileInfoView.tileInfo.size);o=await this._fetchImage(h,a)}catch(s){if(m(s))throw s;o=await this._fetchImage(e,a)}return this.resampling?V(this._tileInfoView,o,h,e):o}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){m(t)||z.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};p([f()],u.prototype,"_fetchQueue",void 0),p([f()],u.prototype,"resampling",null),u=p([T("esri.views.2d.layers.TileLayerView2D")],u);const ve=u;export{ve as default};