import{j as c}from"./jsx-runtime-CexXSJP5.js";import{s as p}from"./icon-star-active-ClN6U5FF.js";import{u as f}from"./theme-ui-core.browser.esm-CIov4Ln1.js";import{I as y}from"./theme-ui-components.esm-DCiJ1mMX.js";const n=40,o=e=>{var a,l;const{theme:r}=f(),{size:i,useLowDetailVersion:t,sx:o}=e,s=e.profileType||"member",m=i||n,u=s.charAt(0).toUpperCase()+s.slice(1).replace(/-/g," ");return c.jsx(y,{loading:"lazy",className:"avatar","data-cy":`MemberBadge-${s}`,sx:{width:m,borderRadius:"50%",...o},width:m,height:m,title:u,src:(m>n&&!t?null==(a=r.badges[s])?void 0:a.normal:null==(l=r.badges[s])?void 0:l.lowDetail)||p})};try{o.displayName="MemberBadge",o.__docgenInfo={description:"",displayName:"MemberBadge",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},profileType:{defaultValue:null,description:"",name:"profileType",required:!1,type:{name:"enum",value:[{value:'"space"'},{value:'"member"'},{value:'"workspace"'},{value:'"machine-builder"'},{value:'"community-builder"'},{value:'"collection-point"'}]}},useLowDetailVersion:{defaultValue:null,description:"",name:"useLowDetailVersion",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}}}}}catch{}export{o as M};