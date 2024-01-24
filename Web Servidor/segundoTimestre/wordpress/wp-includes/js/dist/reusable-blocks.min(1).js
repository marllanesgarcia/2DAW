/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ReusableBlocksMenuItems:function(){return I},store:function(){return m}});var n={};e.r(n),e.d(n,{__experimentalConvertBlockToStatic:function(){return s},__experimentalConvertBlocksToReusable:function(){return i},__experimentalDeleteReusableBlock:function(){return u},__experimentalSetEditingReusableBlock:function(){return p}});var r={};e.r(r),e.d(r,{__experimentalIsEditingReusableBlock:function(){return _}});var o=window.wp.data,l=window.wp.blockEditor,c=window.wp.blocks,a=window.wp.i18n;const s=e=>({registry:t})=>{const n=t.select(l.store).getBlock(e),r=t.select("core").getEditedEntityRecord("postType","wp_block",n.attributes.ref),o=(0,c.parse)("function"==typeof r.content?r.content(r):r.content);t.dispatch(l.store).replaceBlocks(n.clientId,o)},i=(e,t,n)=>async({registry:r,dispatch:o})=>{const s="unsynced"===n?{wp_pattern_sync_status:n}:void 0,i={title:t||(0,a.__)("Untitled pattern block"),content:(0,c.serialize)(r.select(l.store).getBlocksByClientId(e)),status:"publish",meta:s},u=await r.dispatch("core").saveEntityRecord("postType","wp_block",i);if("unsynced"===n)return;const p=(0,c.createBlock)("core/block",{ref:u.id});r.dispatch(l.store).replaceBlocks(e,p),o.__experimentalSetEditingReusableBlock(p.clientId,!0)},u=e=>async({registry:t})=>{if(!t.select("core").getEditedEntityRecord("postType","wp_block",e))return;const n=t.select(l.store).getBlocks().filter((t=>(0,c.isReusableBlock)(t)&&t.attributes.ref===e)).map((e=>e.clientId));n.length&&t.dispatch(l.store).removeBlocks(n),await t.dispatch("core").deleteEntityRecord("postType","wp_block",e)};function p(e,t){return{type:"SET_EDITING_REUSABLE_BLOCK",clientId:e,isEditing:t}}var d=(0,o.combineReducers)({isEditingReusableBlock:function(e={},t){return"SET_EDITING_REUSABLE_BLOCK"===t?.type?{...e,[t.clientId]:t.isEditing}:e}});function _(e,t){return e.isEditingReusableBlock[t]}const m=(0,o.createReduxStore)("core/reusable-blocks",{actions:n,reducer:d,selectors:r});(0,o.register)(m);var b=window.wp.element,k=window.wp.components,w=window.wp.primitives;var g=(0,b.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,b.createElement)(w.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"})),y=window.wp.notices,B=window.wp.coreData,E=window.wp.privateApis;const{unlock:v}=(0,E.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.","@wordpress/reusable-blocks");function f({clientIds:e,rootClientId:t,onClose:n}){const{useReusableBlocksRenameHint:r,ReusableBlocksRenameHint:s}=v(l.privateApis),i=r(),[u,p]=(0,b.useState)(void 0),[d,_]=(0,b.useState)(!1),[w,E]=(0,b.useState)(""),f=(0,o.useSelect)((n=>{var r;const{canUser:o}=n(B.store),{getBlocksByClientId:a,canInsertBlockType:s,getBlockRootClientId:i}=n(l.store),u=t||(e.length>0?i(e[0]):void 0),p=null!==(r=a(e))&&void 0!==r?r:[];return!(1===p.length&&p[0]&&(0,c.isReusableBlock)(p[0])&&!!n(B.store).getEntityRecord("postType","wp_block",p[0].attributes.ref))&&s("core/block",u)&&p.every((e=>!!e&&e.isValid&&(0,c.hasBlockSupport)(e.name,"reusable",!0)))&&!!o("create","blocks")}),[e,t]),{__experimentalConvertBlocksToReusable:h}=(0,o.useDispatch)(m),{createSuccessNotice:C,createErrorNotice:I}=(0,o.useDispatch)(y.store),R=(0,b.useCallback)((async function(t){try{await h(e,t,u),C(u?(0,a.sprintf)((0,a.__)("Unsynced pattern created: %s"),t):(0,a.sprintf)((0,a.__)("Synced pattern created: %s"),t),{type:"snackbar",id:"convert-to-reusable-block-success"})}catch(e){I(e.message,{type:"snackbar",id:"convert-to-reusable-block-error"})}}),[h,e,u,C,I]);return f?(0,b.createElement)(b.Fragment,null,(0,b.createElement)(k.MenuItem,{icon:g,onClick:()=>_(!0)},i?(0,a.__)("Create pattern/reusable block"):(0,a.__)("Create pattern")),d&&(0,b.createElement)(k.Modal,{title:(0,a.__)("Create pattern"),onRequestClose:()=>{_(!1),E("")},overlayClassName:"reusable-blocks-menu-items__convert-modal"},(0,b.createElement)("form",{onSubmit:e=>{e.preventDefault(),R(w),_(!1),E(""),n()}},(0,b.createElement)(k.__experimentalVStack,{spacing:"5"},(0,b.createElement)(s,null),(0,b.createElement)(k.TextControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Name"),value:w,onChange:E,placeholder:(0,a.__)("My pattern")}),(0,b.createElement)(k.ToggleControl,{label:(0,a.__)("Synced"),help:(0,a.__)("Editing the pattern will update it anywhere it is used."),checked:!u,onChange:()=>{p(u?void 0:"unsynced")}}),(0,b.createElement)(k.__experimentalHStack,{justify:"right"},(0,b.createElement)(k.Button,{variant:"tertiary",onClick:()=>{_(!1),E("")}},(0,a.__)("Cancel")),(0,b.createElement)(k.Button,{variant:"primary",type:"submit"},(0,a.__)("Create"))))))):null}var h=window.wp.url;var C=function({clientId:e}){const{canRemove:t,isVisible:n,innerBlockCount:r,managePatternsUrl:s}=(0,o.useSelect)((t=>{const{getBlock:n,canRemoveBlock:r,getBlockCount:o,getSettings:a}=t(l.store),{canUser:s}=t(B.store),i=n(e),u=a().__unstableIsBlockBasedTheme;return{canRemove:r(e),isVisible:!!i&&(0,c.isReusableBlock)(i)&&!!s("update","blocks",i.attributes.ref),innerBlockCount:o(e),managePatternsUrl:u&&s("read","templates")?(0,h.addQueryArgs)("site-editor.php",{path:"/patterns"}):(0,h.addQueryArgs)("edit.php",{post_type:"wp_block"})}}),[e]),{__experimentalConvertBlockToStatic:i}=(0,o.useDispatch)(m);return n?(0,b.createElement)(b.Fragment,null,(0,b.createElement)(k.MenuItem,{href:s},(0,a.__)("Manage patterns")),t&&(0,b.createElement)(k.MenuItem,{onClick:()=>i(e)},r>1?(0,a.__)("Detach patterns"):(0,a.__)("Detach pattern"))):null};function I({rootClientId:e}){return(0,b.createElement)(l.BlockSettingsMenuControls,null,(({onClose:t,selectedClientIds:n})=>(0,b.createElement)(b.Fragment,null,(0,b.createElement)(f,{clientIds:n,rootClientId:e,onClose:t}),1===n.length&&(0,b.createElement)(C,{clientId:n[0]}))))}(window.wp=window.wp||{}).reusableBlocks=t}();