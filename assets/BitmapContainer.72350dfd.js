import{b as s,w as t}from"./WGLContainer.a7b47613.js";import{I as a}from"./Utils.84cdda90.js";class p extends s{get requiresDedicatedFBO(){return this.children.some(e=>e.blendFunction==="additive")}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap",brushes:[t.bitmap],target:()=>this.children,drawPhase:a.MAP});return[...super.prepareRenderPasses(e),r]}}export{p as t};