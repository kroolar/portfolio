"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[695],{"./src/components/section/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories}),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/avatar/index.tsx");var box1=__webpack_require__("./src/components/box/index.tsx");__webpack_require__("./src/components/button/index.tsx"),__webpack_require__("./src/components/icon/index.tsx"),__webpack_require__("./src/components/link/index.tsx"),__webpack_require__("./src/components/tag/index.tsx");var components_text=__webpack_require__("./src/components/text/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");try{section.displayName="section",section.__docgenInfo={description:"",displayName:"section",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/section/index.tsx#section"]={docgenInfo:section.__docgenInfo,name:"section",path:"src/components/section/index.tsx#section"})}catch(__react_docgen_typescript_loader_error){}let index_stories={title:"Section",component:_ref=>{let{title,className="",children}=_ref;return(0,jsx_runtime.jsxs)(box1.c,{className:"section ".concat(className),children:[(0,jsx_runtime.jsx)(components_text.c,{className:"section__text mb-2",id:title,text:title,size:"lg"}),children]})}},Primary={args:{title:"Section",className:"",children:(0,jsx_runtime.jsx)("div",{className:"text-stone-400",children:"CONTENT"})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Section",\n    className: "",\n    children: <div className="text-stone-400">CONTENT</div>\n  }\n}',...Primary.parameters?.docs?.source}}};let __namedExportsOrder=["Primary"]},"./src/components/avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{className="",render=!0,size="md"}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{className:"avatar avatar--".concat(size," ").concat(className),src:"avatar.png"}):null};try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/avatar/index.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"src/components/avatar/index.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{children,className="",render=!0}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"box ".concat(className),children:children}):null};try{box.displayName="box",box.__docgenInfo={description:"",displayName:"box",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/box/index.tsx#box"]={docgenInfo:box.__docgenInfo,name:"box",path:"src/components/box/index.tsx#box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{brightness="md",children,className="",href,render=!0,size="md",text:text1,weight="md"}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{className:"\n        button\n        button--".concat(size,"\n        brightness-").concat(brightness,"\n        weight-").concat(weight,"\n        ").concat(className,"\n      "),href:href,children:text1||children}):null};try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{brightness:{defaultValue:{value:"md"},description:"",name:"brightness",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/button/index.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{brightness="md",className="",icon:icon1="help_center",render=!0,size="md",type="outlined",weight="md"}=_ref;if(render)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i",{className:"\n      icon\n      icon--".concat(size,"\n      brightness-").concat(brightness,"\n      weight-").concat(weight,"\n      material-icons-").concat(type,"\n      ").concat(className,"\n    "),children:icon1})};try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{brightness:{defaultValue:{value:"md"},description:"",name:"brightness",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"help_center"},description:"",name:"icon",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"outlined"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"sharp"'}]}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icon/index.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/icon/index.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{brightness="md",className="",href,render=!0,size="md",text:text1,weight="md"}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:href,className:"\n        link\n        link--".concat(size,"\n        brightness-").concat(brightness,"\n        weight-").concat(weight,"\n        ").concat(className,"\n      "),children:text1}):null};try{link.displayName="link",link.__docgenInfo={description:"",displayName:"link",props:{brightness:{defaultValue:{value:"md"},description:"",name:"brightness",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/link/index.tsx#link"]={docgenInfo:link.__docgenInfo,name:"link",path:"src/components/link/index.tsx#link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{brightness="md",className="",render=!0,size="md",text:text1,weight="md"}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"\n        tag\n        tag--".concat(size,"\n        brightness-").concat(brightness,"\n        weight-").concat(weight,"\n        ").concat(className,"\n      "),children:text1}):null};try{tag.displayName="tag",tag.__docgenInfo={description:"",displayName:"tag",props:{brightness:{defaultValue:{value:"md"},description:"",name:"brightness",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tag/index.tsx#tag"]={docgenInfo:tag.__docgenInfo,name:"tag",path:"src/components/tag/index.tsx#tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{align="start",brightness="md",children,className="",id,render=!0,size="md",text:text1,weight="md"}=_ref;return render?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"\n        text\n        text-".concat(align,"\n        text--").concat(size,"\n        brightness-").concat(brightness,"\n        weight-").concat(weight,"\n        ").concat(className,"\n      "),id:id,children:text1||children}):null};try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{align:{defaultValue:{value:"start"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'}]}},brightness:{defaultValue:{value:"md"},description:"",name:"brightness",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},render:{defaultValue:{value:"true"},description:"",name:"render",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},weight:{defaultValue:{value:"md"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/index.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"src/components/text/index.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),m=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-section-index-stories.bccba20b.iframe.bundle.js.map