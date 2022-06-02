var S=Object.defineProperty,h=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(r,e,t)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))x.call(e,t)&&p(r,t,e[t]);if(f)for(var t of f(e))y.call(e,t)&&p(r,t,e[t]);return r},u=(r,e)=>h(r,O(e));import{r as l,cp as m,g as N,gR as v}from"./GISSearch.b73a2371.js";import{u as a,s as J,v as b,y as g,O as z,b as B}from"./pixelUtils.9fff4c99.js";import{S as P,T as w}from"./RasterSymbolizer.39b5fa0c.js";import{y as D,G as k,D as T}from"./rasterProjectionHelper.2cc83b03.js";import{d as G,m as E,h as j}from"./dataUtils.bafd031e.js";import{f as M}from"./utils.34146b36.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";class U{convertVectorFieldData(e){const t=a.fromJSON(e.pixelBlock),s=G(t,e.type);return Promise.resolve(l(s)&&s.toJSON())}async decode(e){const t=await P(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.fromJSON(e.pixelBlock),e.extent=e.extent?m.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(l(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=w.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(l(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=J(a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=b(a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){var t;const s=e.srcPixelBlocks.map(c=>c?new a(c):null),o=g(s,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,n=o;return e.coefs&&(n=z(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=B(e.destDimension,e.gcsGrid),n=N(E(n,e.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:(t=n)==null?void 0:t.toJSON(),localNorthDirections:i}}async createStreamlinesMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:i}=await j(e.rendererSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:i.buffer},transferList:[o.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=m.fromJSON(e.projectedExtent),s=m.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new v({steps:e.datumTransformationSteps})),(e.includeGCSGrid||D(t.spatialReference,s.spatialReference,o))&&await k();const i=e.rasterTransform?M(e.rasterTransform):null;return T(u(d({},e),{projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i}))}}export{U as default};
