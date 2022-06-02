import{fl as ar,dp as ir,fu as sr,Z as A,_ as T,a0 as lr,cg as fr,a3 as x,A as cr,fv as ur,fw as pr,fx as yr,fy as J,fz as G,fA as M,fB as w,fC as gr,fD as V,fE as hr,a8 as mr,r as z,fF as Ar,fG as Tr,fH as B,s as $r,fI as Pr,fJ as dr,fK as Fr,fL as U,fM as k,fN as W,fO as Er,fi as Mr,t as h,fP as C,fQ as K,fR as vr,fS as Rr,fT as _r,fU as xr}from"./GISSearch.b73a2371.js";import{I as D,v as wr,P as Cr,e as Q,a as Z}from"./quat.65fc175c.js";import{e as $,a as F,b as Nr,c as Or,f as P,o as X}from"./vec33.9f4eafd3.js";import{T as p,i as u}from"./BufferView.1e32fae3.js";function E(r=Lr){return[r[0],r[1],r[2],r[3]]}function lt(r,t,e=E()){return ar(e,r),e[3]=t,e}function ft(r,t,e=E()){return D(v,r,j(r)),D(H,t,j(t)),wr(v,H,v),br(e,sr(Cr(e,v)))}function ct(r){return r}function j(r){return ir(r[3])}function br(r,t){return r[3]=t,r}const Lr=[0,0,1,0],v=Q(),H=Q();E();var S;let g=S=class extends fr{constructor(r){super(r),this.origin=x(),this.translation=x(),this.rotation=E(),this.scale=cr(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return ur(r,this.scale),pr(r,r,j(this.rotation),this.rotation),yr(r,r,this.translation),r}get localMatrixInverse(){return J($(),this.localMatrix)}applyLocal(r,t){return G(t,r,this.localMatrix)}applyLocalInverse(r,t){return G(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),f=$();return w(t,this.origin,f,l),gr(f,f,this.localMatrix),F(o,n,f),V(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;hr(a,Nr)?Or(o,n):F(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new mr({x:t,y:e,z:o,spatialReference:r})}equals(r){return z(r)&&this.geographic===r.geographic&&Ar(this.origin,r.origin)&&Tr(this.localMatrix,r.localMatrix)}clone(){const r={origin:B(this.origin),translation:B(this.translation),rotation:E(this.rotation),scale:B(this.scale),geographic:this.geographic};return new S(r)}};A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),A([T({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),A([T()],g.prototype,"localMatrix",null),A([T()],g.prototype,"localMatrixInverse",null),g=S=A([lr("esri.geometry.support.MeshTransform")],g);const Br=g;function N(r,t){var e;return r.isGeographic||r.isWebMercator&&((e=t==null?void 0:t.geographic)==null||e)}const O=$r.getLogger("esri.geometry.support.meshUtils.normalProjection");function zr(r,t,e,o,n){return L(o)?(b(m.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(O.error("Cannot convert spatial reference to PCPF"),n)}function jr(r,t,e,o,n){return L(o)?(b(m.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(O.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return V(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return V(r,M(e),0,t,e,0,r.length/3),t}function Ir(r,t,e){if(h(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return F(n,o,e),t}function Vr(r,t,e){if(h(r))return t;C(c,e);const o=u.fromTypedArray(r),n=u.fromTypedArray(t);return P(n,o,c),K(c)||X(n,n),t}function qr(r,t,e){if(h(r))return t;C(c,e);const o=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(P(n,o,c),K(c)||X(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Gr(r,t,e,o,n){if(!L(o))return O.error("Cannot convert spatial reference to PCPF"),n;b(m.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Ur(r,t,e,o,n){if(!L(o))return O.error("Cannot convert to spatial reference from PCPF"),n;b(m.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function b(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(rr(n))for(let f=0;f<i;f++)o.getVec(f,R),t.getVec(f,y),w(l,R,_,l),U(c,_),r===m.FROM_PCPF&&k(c,c),W(y,y,c),a.setVec(f,y);else for(let f=0;f<i;f++){o.getVec(f,R),t.getVec(f,y),w(l,R,_,l),U(c,_);const d=Er(e.get(f,1));let s=Math.cos(d);r===m.TO_PCPF&&(s=1/s),c[0]*=s,c[1]*=s,c[2]*=s,c[3]*=s,c[4]*=s,c[5]*=s,r===m.FROM_PCPF&&k(c,c),W(y,y,c),Mr(y,y),a.setVec(f,y)}return a}function L(r){return rr(r)||kr(r)}function rr(r){return r.isWGS84||Pr(r)||dr(r)||Fr(r)}function kr(r){return r.isWebMercator}var m;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const R=x(),y=x(),_=$(),c=Z();function tr(r,t,e){return N(t.spatialReference,e)?Jr(r,t,e):Hr(r,t,e)}function Wr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(h(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return tr({position:Ir(o,new Float64Array(o.length),i),normal:z(n)?Vr(n,new Float32Array(n.length),i):null,tangent:z(a)?qr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function ut(r,t,e){if(e!=null&&e.useTransform){var o;const{position:n,normal:a,tangent:i}=r;return{vertexAttributes:{position:n,normal:a,tangent:i},transform:new Br({origin:[t.x,t.y,(o=t.z)!=null?o:0],geographic:N(t.spatialReference,e)})}}return{vertexAttributes:tr(r,t,e),transform:null}}function Dr(r,t,e){return N(t.spatialReference,e)?er(r,t,e):Y(r,t,e)}function pt(r,t,e,o){if(h(t))return Dr(r,e,o);const n=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?Y(n,e,o):N(e.spatialReference,o)?er(n,e,o):Y(n,e,o)}function Hr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:d}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*f+a,o[s+1]=n[s+1]*f+i,o[s+2]=n[s+2]*d+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Jr(r,t,e){const o=t.spatialReference,n=nr(t,e,I),a=new Float64Array(r.position.length),i=Kr(r.position,n,o,a),l=C(or,n);return{position:i,normal:Qr(i,a,r.normal,l,o),tangent:Zr(i,a,r.tangent,l,o)}}function Kr(r,t,e,o){F(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Yr(o,n,e)}function Qr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);return P(u.fromTypedArray(a),u.fromTypedArray(e),o),jr(a,r,t,n,a),a}function Zr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);P(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Ur(a,r,t,n,a),a}function Y(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:d}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/f,o[s+1]=(n[s+1]-i)/f,o[s+2]=(n[s+2]-l)/d;return{position:o,normal:r.normal,tangent:r.tangent}}function er(r,t,e){const o=t.spatialReference;nr(t,e,I);const n=J(et,I),a=new Float64Array(r.position.length),i=Xr(r.position,o,n,a),l=C(or,n);return{position:i,normal:rt(r.normal,r.position,a,o,l),tangent:tt(r.tangent,r.position,a,o,l)}}function nr(r,t,e){w(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=q(t?t.unit:null,r.spatialReference);return vr(e,e,[o,o,n]),e}function Xr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return F(l,a,e),i}function rt(r,t,e,o,n){if(h(r))return null;const a=zr(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a);return P(i,i,n),a}function tt(r,t,e,o,n){if(h(r))return null;const a=Gr(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return P(i,i,n),a}function q(r,t){if(h(r))return nt;const e=t.isGeographic?1:Rr(t),o=t.isGeographic?1:_r(t),n=xr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const I=$(),et=$(),or=Z(),nt={horizontal:1,vertical:1};export{Ur as L,Dr as M,Yr as O,pt as P,Wr as _,Sr as a,ut as b,E as c,j as d,lt as e,Br as f,jr as h,zr as j,Gr as k,ct as l,ft as q,N as r,tr as x};
