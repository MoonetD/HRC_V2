import{q as s,e as l,by as c,ia as u,ev as m}from"./GISSearch.9df35164.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";async function g(e=null,o){var n,t;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let i;i="portal"in e?e.portal||c.getDefault():e,await i.load({signal:o});const r=(n=i.helperServices)==null||(t=n.geometry)==null?void 0:t.url;if(!r)throw new l("internal:geometry-service-url-not-configured");return r}async function w(e,o,n=null,t){const i=await g(n,t),r=new u;r.geometries=[e],r.outSpatialReference=o;const a=await m(i,r,{signal:t});if(a&&Array.isArray(a)&&a.length===1)return a[0];throw new l("internal:geometry-service-projection-failed")}export{g as getGeometryServiceURL,w as projectGeometry};