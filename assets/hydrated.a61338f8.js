import{a8 as n,aB as c,cH as h,cG as m,cp as x}from"./GISSearch.9df35164.js";import"./index.ec19e11e.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";const V={convertToGEGeometry:p,exportPoint:g,exportPolygon:u,exportPolyline:l,exportMultipoint:M,exportExtent:f};function p(t,e){if(e==null)return null;let a="cache"in e?e.cache._geVersion:void 0;return a==null&&(a=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=a)),a}function g(t,e,a){const o=t.hasZ(e),r=t.hasM(e),i=new n({x:t.getPointX(e),y:t.getPointY(e),spatialReference:a});return o&&(i.z=t.getPointZ(e)),r&&(i.m=t.getPointM(e)),i.cache._geVersion=e,i}function u(t,e,a){const o=new c({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function l(t,e,a){const o=new h({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function M(t,e,a){const o=new m({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:a});return o.cache._geVersion=e,o}function f(t,e,a){const o=t.hasZ(e),r=t.hasM(e),i=new x({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:a});if(o){const s=t.getZExtent(e);i.zmin=s.vmin,i.zmax=s.vmax}if(r){const s=t.getMExtent(e);i.mmin=s.vmin,i.mmax=s.vmax}return i.cache._geVersion=e,i}export{V as hydratedAdapter};