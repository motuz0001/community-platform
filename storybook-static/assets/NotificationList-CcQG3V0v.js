import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{n as d}from"./emotion-styled.browser.esm-Dz2BNYeh.js";import{B as m}from"./Button-DeEOnrl-.js";import{N as f}from"./NotificationItem-B02XXnyj.js";import{a as p,C as x,T as u}from"./theme-ui-components.esm-DCiJ1mMX.js";const y=d(p)`
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 10px 30px 10px 30px;
  text-align: center;
  width: 100%;
  }
`,n=e=>{const{notifications:i,markAllRead:n,markAllNotified:a}=e,o=e.sx||{};return c.useEffect((()=>{i.length&&a()}),[]),t.jsx(x,{sx:{padding:2,maxHeight:310,overflowY:"auto",...o},children:i.length?t.jsxs(t.Fragment,{children:[t.jsx(y,{style:{textAlign:"center"},children:"Notifications"}),i.map(((e,i)=>t.jsx(f,{...e},i))),t.jsx(m,{type:"button",sx:{width:"100%",textAlign:"center",display:"flex",justifyContent:"center"},variant:"secondary","data-cy":"clear-notifications",onClick:()=>n&&n(),children:"Clear notifications"})]}):t.jsx(u,{sx:{display:"block",textAlign:"center"},"data-cy":"NotificationList: empty state",children:"Nada, no new notifications"})})};try{n.displayName="NotificationList",n.__docgenInfo={description:"",displayName:"NotificationList",props:{notifications:{defaultValue:null,description:"",name:"notifications",required:!0,type:{name:"UserNotificationItem[]"}},markAllRead:{defaultValue:null,description:"",name:"markAllRead",required:!0,type:{name:"() => void"}},markAllNotified:{defaultValue:null,description:"",name:"markAllNotified",required:!0,type:{name:"() => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{n as N};