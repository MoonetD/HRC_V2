import{Z as t,_ as o,a0 as p}from"./GISSearch.b73a2371.js";import a from"./FeatureLayerView2D.b01fc1d0.js";import"./index.8ac88fb7.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./enums.84480fc7.js";import"./LayerView.95538f08.js";import"./Container.e5cc492f.js";import"./schemaUtils.d3838579.js";import"./Utils.e0214b13.js";import"./number.dc47462b.js";import"./enums.457e23f9.js";import"./Texture.df7d53ef.js";import"./VertexElementDescriptor.0406f2d4.js";import"./visualVariablesUtils.54823ca9.js";import"./createSymbolSchema.4fe41dfb.js";import"./MaterialKey.9859c524.js";import"./alignmentUtils.03ee467b.js";import"./CIMSymbolHelper.1040926f.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./cimAnalyzer.74547477.js";import"./quantizationUtils.48cd94ed.js";import"./ExpandedCIM.d4661ffb.js";import"./MD5.67d7a872.js";import"./util.837deeb3.js";import"./popupUtils.9bc51a64.js";import"./RefreshableLayerView.8dc1308b.js";const s=e=>{let r=class extends e{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([o()],r.prototype,"layer",void 0),t([o({readOnly:!0})],r.prototype,"availableFields",null),r=t([p("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends s(a){supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}};i=t([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const q=i;export{q as default};