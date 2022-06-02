import{c5 as G,gT as c,r as q}from"./GISSearch.b73a2371.js";import{_ as J}from"./index.8ac88fb7.js";import"./vec4f64.a3e91e77.js";import"./ProjectWeberRenew.dc78a7b0.js";import"./plugin-vue_export-helper.21dcd24c.js";var L,D;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(D||(D={}));function K(){return T||(T=new Promise(e=>J(()=>import("./i3s.fce15eb5.js"),[]).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:Q,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>Promise.reject(e))),T}function Q(e){return G(`esri/libs/i3s/${e}`)}let T;var N,p,x,B,$;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(N||(N={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(p||(p={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(x||(x={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(B||(B={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}($||($={}));async function re(e){await g();const t=[e.geometryBuffer];return{result:k(e,t),transferList:t}}async function ie(e){var t;await g();const r=[e.geometryBuffer],{geometryBuffer:a}=e,i=a.byteLength,d=o._malloc(i),f=new Uint8Array(o.HEAPU8.buffer,d,i);f.set(new Uint8Array(a));const m=o.dracoDecompressPointCloudData(d,f.byteLength);if(o._free(d),m.error.length>0)throw`i3s.wasm: ${m.error}`;const y=((t=m.featureIds)==null?void 0:t.length)>0?c(m.featureIds):null,w=c(m.positions);return y&&r.push(y.buffer),r.push(w.buffer),{result:{positions:w,featureIds:y},transferList:r}}async function se(e){await g(),X(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ae(e){await g(),W(e)}async function fe(e){await g(),o.setLegacySchema(e.context,e.jsonSchema)}function ce(e){H(e)}let _,o;function W(e){const t=e.modifications,r=o._malloc(8*t.length),a=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function k(e,t){if(!o)return null;const{context:r,localOrigin:a,globalTrafo:i,mbs:d,obb:f,elevationOffset:m,geometryBuffer:y,geometryDescriptor:w,indexToVertexProjector:Y,vertexToRenderProjector:j}=e,A=o._malloc(y.byteLength),F=33,I=o._malloc(F*Float64Array.BYTES_PER_ELEMENT),R=new Uint8Array(o.HEAPU8.buffer,A,y.byteLength);R.set(new Uint8Array(y));const s=new Float64Array(o.HEAPU8.buffer,I,F);E(s,a);let l=s.byteOffset+3*s.BYTES_PER_ELEMENT,u=new Float64Array(s.buffer,l);E(u,i),l+=16*s.BYTES_PER_ELEMENT,u=new Float64Array(s.buffer,l),E(u,d),l+=4*s.BYTES_PER_ELEMENT,q(f)&&(u=new Float64Array(s.buffer,l),E(u,f.center),l+=3*s.BYTES_PER_ELEMENT,u=new Float64Array(s.buffer,l),E(u,f.halfSize),l+=3*s.BYTES_PER_ELEMENT,u=new Float64Array(s.buffer,l),E(u,f.quaternion));const M=w,V={isDraco:!1,isLegacy:!1,color:e.layouts.some(b=>b.some(h=>h.name==="color")),normal:e.needNormals&&e.layouts.some(b=>b.some(h=>h.name==="normalCompressed")),uv0:e.layouts.some(b=>b.some(h=>h.name==="uv0")),uvRegion:e.layouts.some(b=>b.some(h=>h.name==="uvRegion")),featureIndex:M.featureIndex},n=o.process(r,!!e.obb,A,R.byteLength,M,V,I,m,Y,j,e.normalReferenceFrame);if(o._free(I),o._free(A),n.error.length>0)throw`i3s.wasm: ${n.error}`;if(n.discarded)return null;const U=n.componentOffsets.length>0?c(n.componentOffsets):null,P=n.featureIds.length>0?c(n.featureIds):null,v=c(n.interleavedVertedData).buffer,S=n.indicesType===L.Int16?c(new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2)):c(new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4)),C=c(n.positions),O=n.positionIndicesType===L.Int16?c(new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2)):c(new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4)),z={layout:e.layouts[0],interleavedVertexData:v,indices:S,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:C,indices:O}};return P&&t.push(P.buffer),U&&t.push(U.buffer),t.push(v),t.push(S.buffer),t.push(C.buffer),t.push(O.buffer),{componentOffsets:U,featureIds:P,transformedGeometry:z,obb:n.obb}}function le(e){return e===0?p.Unmodified:e===1?p.PotentiallyModified:e===2?p.Culled:p.Unknown}function X(e){const{context:t,buffer:r}=e,a=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(o.HEAPU8.buffer,a,i),f=new Float64Array(r);d.set(f),o.filterOBBs(t,a,i),f.set(d),o._free(a)}function H(e){o&&o.destroy(e)}function E(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function g(){return o?Promise.resolve():(_||(_=K().then(e=>{o=e,_=null})),_)}const ue={transform:k,destroy:H};export{ce as destroyContext,ie as dracoDecompressPointCloudData,se as filterObbsForModifications,X as filterObbsForModificationsSync,g as initialize,le as interpretObbModificationResults,re as process,fe as setLegacySchema,ae as setModifications,W as setModificationsSync,ue as test};
