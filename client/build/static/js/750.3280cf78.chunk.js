"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[750],{1004:function(n,e,t){t.d(e,{Z:function(){return w}});var r,i=t(9439),o=t(168),a=t(2791),c=t(9256),s=t(7976),l=t(8462),d=t(1281),u=t(5983),m=t(9100),h=t(1075),g=t(6276),p=t(9434),f=t(1646),x=t(3813),v=t(6495),b=t(184),j=c.zo.div(r||(r=(0,o.Z)(["\n    width:100%; \n    gap:3rem;\n    .post-data-box {\n        flex:4;\n        height:auto;\n        gap:10rem;\n    }\n\n    .sticky-box {\n        position:sticky;\n        top:90vh;\n        margin-bottom:2rem;\n    }\n\n    .image-data-box {\n        flex:6;\n        gap:3rem;\n        > img {\n            width:100%;\n            object-fit:cover;\n        }\n    }\n    "," {\n        flex-direction: column;\n        .image-data-box {\n            \n        }\n    }\n"])),f.Mq);function w(n){var e,t=n.detailData,r=n.type,o=n.isAdmin,c=n.updateHandler,f=(0,a.useState)(!1),w=(0,i.Z)(f,2),Z=w[0],y=w[1],N=(0,a.useState)(null),k=(0,i.Z)(N,2),$=k[0],P=k[1],z=(0,a.useState)(null),C=(0,i.Z)(z,2),S=C[0],I=C[1],D=(0,a.useState)(!1),F=(0,i.Z)(D,2),R=F[0],U=F[1],E=(0,a.useState)(!1),O=(0,i.Z)(E,2),H=O[0],A=O[1],q=(0,a.useState)(!1),G=(0,i.Z)(q,2),L=G[0],M=G[1],T=(0,a.useState)(!0),_=(0,i.Z)(T,2),B=_[0],X=_[1],Y=(0,p.v9)((function(n){return n.user}));return(0,a.useEffect)((function(){if(console.log(t),console.log(Y),!o&&Y.isLogin){for(var n=0;n<t.requestPeople.length;n++)if(Number(t.requestPeople[n])===Number(Y.userInfo.memeberId))return void U(!1);U(!0)}else U(!1)}),[]),(0,b.jsxs)(j,{className:"row",children:[H&&(0,b.jsx)(m.Z,{title:"\uc54c\ub9bc",body:L?"\ud504\ub85c\uc81d\ud2b8 \uc2e0\uccad\uc744 \ucde8\uc18c\ud558\uc600\uc2b5\ub2c8\ub2e4.":"\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",setIsOpen:A,confirmHandler:function(){return L?c:A}}),Z&&(0,b.jsx)(m.Z,{setIsOpen:y,confirmHandler:function(){return S&&function(n,e,t){var r={memeberId:n,projectId:e,projectCardId:t};g.Z.post("/projects/request",r).then((function(n){})).catch((function(n){}))}()},children:B?(0,b.jsx)(x.Z,{}):(0,b.jsx)(h.C,{isForSubmit:!0,selectedCard:S,setSelectedCard:I,cardList:$})}),(0,b.jsxs)("div",{className:"post-data-box col",children:[(0,b.jsx)(s.Z,{title:"\uac1c\ubc1c \uc5b8\uc5b4",component:(0,b.jsx)(l.Z,{text:t.lang,type:"project"})}),(0,b.jsx)(s.Z,{title:"\uac80\uc0c9 \ud0a4\uc6cc\ub4dc",component:1===t.tags.length&&""===t.tags[0]?(0,b.jsx)("p",{children:"\uac80\uc0c9 \ud0a4\uc6cc\ub4dc \uc5c6\uc74c"}):null===(e=t.tags)||void 0===e?void 0:e.map((function(n){return(0,b.jsx)(l.Z,{text:n,type:r},n)}))}),t.closedAt&&(0,b.jsx)(s.Z,{title:"\ud504\ub85c\uc81d\ud2b8 \ub9c8\uac10 \ub0a0\uc9dc",component:(0,b.jsx)("p",{children:"".concat((0,d.v)(t.createdAt)," ~ ").concat((0,d.v)(t.closedAt))})}),(0,b.jsx)(s.Z,{title:"project"===r?"\ud504\ub85c\uc81d\ud2b8 \uc124\uba85":"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc124\uba85",component:(0,b.jsx)("p",{children:t.body})}),t.description&&(0,b.jsx)(s.Z,{title:"\uc0c1\uc138 \uc694\uac15",component:(0,b.jsx)("p",{children:"".concat(t.description)})}),t.totalPeople&&(0,b.jsx)(s.Z,{title:"\ubaa8\uc9d1 \ud604\ud669",component:(0,b.jsx)("p",{children:"".concat(t.totalPeople,"\uba85 / ").concat(t.joinPeople?t.joinPeople.length:0,"\uba85")})}),"project"===r&&!o&&(0,b.jsx)("div",{className:"sticky-box",children:t.totalPeople!==t.joinPeople.length?(0,b.jsx)(u.wU,{$width:"100%",onClick:function(){var n,e;R?(e=null===(n=Y.userInfo)||void 0===n?void 0:n.memberId,y(!0),$?y(!0):(X(!0),g.Z.get("/projectcards/".concat(e)).then((function(n){console.log("\ud1b5\uc2e0\uc131\uacf5"),P(n.data),X(!1)})).catch((function(n){console.log("\ud1b5\uc2e0\uc2e4\ud328"),M(!1),X(!1)})))):function(n,e){g.Z.delete("/projects/cancle/".concat(n)).then((function(n){e(!0)})).catch((function(n){e(!1)}))}(t.projectId,L)},children:R?"\ud504\ub85c\uc81d\ud2b8 \uc2e0\uccad\ud558\uae30":"\ud504\ub85c\uc81d\ud2b8 \uc2e0\uccad \ucde8\uc18c\ud558\uae30"}):(0,b.jsx)(u.wU,{children:"\ud504\ub85c\uc81d\ud2b8 \ub9c8\uac10\ub40c"})})]}),(0,b.jsx)("div",{className:"image-data-box col",children:t.images.length?t.images.map((function(n,e){return(0,b.jsx)("img",{src:n,alt:"\uc774\ubbf8\uc9c0"},e)})):(0,b.jsx)(v.Z,{text:"\ub4f1\ub85d\ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",background:"var(--black-700)"})})]})}},5238:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o=t(168),a=(t(2791),t(9256)),c=t(4097),s=t(329),l=t(1281),d=t(6764),u=t(184),m=a.ZP.div(r||(r=(0,o.Z)(["\n    height : auto;\n    padding-bottom:1rem;\n    position:relative;\n\n    .project-detail {\n        font-size:3rem;\n        color:var(--black-400);\n        margin-bottom:1rem;\n    }\n\n    .project-detail-title {\n        font-size:3rem;\n        font-weight:var(--nanum-bold);\n        /* font-family:var(); */\n        color:var(--black-200);\n        margin-bottom:2rem;\n    }\n\n    > .row {\n        font-size:1.4rem;\n        gap:2rem;\n        align-items:center;\n    }\n\n    .author-wrapper {\n        padding:2px 5px;\n        justify-content:center;\n        align-items:center;\n        gap:1.5rem;\n        * {\n            cursor:pointer;\n        }\n\n        > img {\n            width:3rem;\n            height:3rem;\n            border-radius:50%;\n            object-fit:cover;\n        }\n        &:hover {\n            cursor:pointer;\n            opacity:0.4;\n        }\n    }\n\n    > svg {\n        position:absolute;\n        top:0;\n        right:0;\n        width:3rem;\n        height:3rem;\n        cursor:pointer;\n        > *:hover {\n            cursor:pointer;\n        }\n    }\n"]))),h=a.ZP.div(i||(i=(0,o.Z)(["\n    margin-top:1rem;\n    border-bottom : 3px solid var(--black-300);\n"])));function g(n){var e=n.type,t=void 0===e?"project":e,r=n.height,i=void 0===r?"15rem":r,o=n.detailData,a=(0,d.Z)(),g=a.toProfile;a.toProject,a.toPortfolio;return(0,u.jsxs)(m,{className:"col",$height:i,children:[(0,u.jsx)("h2",{className:"project-detail",children:"project"===t?"PROJECT":"PORTFOLIO"}),(0,u.jsx)("h1",{className:"project-detail-title",children:o.title}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"row author-wrapper",onClick:function(){return g(o.memberId)},children:[(0,u.jsx)("img",{src:o.userImgUrl?o.userImgUrl:c,alt:"\uc791\uc131\uc790\uc774\ubbf8\uc9c0"}),(0,u.jsx)("h3",{children:o.userName})]}),(0,u.jsx)("h3",{children:(0,l.v)(o.createdAt)}),(0,u.jsx)(s.Z,{likes:o.heartCount,size:"1.6rem"})]}),(0,u.jsx)(h,{})]})}},6495:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(168),o=(t(2791),t(9256)),a=(t(5433),t(184)),c=o.ZP.div(r||(r=(0,i.Z)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    width:",";\n    height:",";\n    > p {\n        font-size:","\n    }\n    background-color:",";\n"])),(function(n){return n.$width}),(function(n){return n.$height}),(function(n){return n.$fontSize}),(function(n){return n.$background||"none"}));function s(n){var e=n.text,t=n.width,r=void 0===t?"100%":t,i=n.height,o=void 0===i?"100%":i,s=n.fontSize,l=void 0===s?"1.6rem":s,d=n.background;return(0,a.jsx)(c,{$width:r,$height:o,$fontSize:l,$background:d,children:(0,a.jsx)("p",{children:e})})}},7976:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(168),o=(t(2791),t(9256)),a=t(184),c=o.ZP.div(r||(r=(0,i.Z)(["\n    width: 100%;\n    .textbox-title {\n        font-size:2rem;\n        margin-bottom:1rem;\n        font-weight: var(--nanum-semi-bold);\n    }\n\n    .row {\n        gap:1rem;\n    }\n\n    p {\n        line-height:2.2rem;\n        font-size:1.6rem;\n        overflow-wrap: break-word;\n        word-break: break-all;\n    }\n"])));function s(n){var e=n.title,t=n.component;return(0,a.jsxs)(c,{className:"col",children:[(0,a.jsx)("p",{className:"textbox-title",children:e}),(0,a.jsx)("div",{className:"row",children:t})]})}},1743:function(n,e,t){t.d(e,{Z:function(){return b}});var r,i,o,a,c,s=t(1413),l=t(5987),d=t(168),u=(t(2791),t(9256)),m=t(184),h=["label","error","name","width","height","color","fontSize","labelColor","borderColor","borderRadius","onChangeHandler","type"],g=u.zo.div(r||(r=(0,d.Z)(["\n  margin: 5px 0 5px 0;\n  div {\n    color: var(--error);\n    padding: 5px;\n  }\n"]))),p=u.zo.label(i||(i=(0,d.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n  background-color: transparent;\n"])),(function(n){return n.$labelColor?n.$labelColor:"var(--black-100)"})),f=u.zo.input(o||(o=(0,d.Z)(["\n  margin-top: 7px;\n  background: none;\n  border: 1px solid;\n  font-size: ",";\n  border-color: ",";\n  border-radius: ",";\n  width: ",";\n  height: ",";\n  color: ",";\n  padding: 13px;\n  font-size: ",";\n"])),(function(n){return n.$fontSize}),(function(n){return n.$borderColor?n.$borderColor:"var(--black-100)"}),(function(n){return n.$borderRadius?n.$borderRadius:"3px"}),(function(n){return n.$width}),(function(n){return n.$height}),(function(n){return n.$color?n.$color:"var(--black-100)"}),(function(n){return n.$fontSize?n.$fontSize:"1.5rem"})),x=u.zo.div(a||(a=(0,d.Z)(["\n  width: fit-content;\n  font-size: 1.5rem;\n  height: 1rem;\n  opacity: ",";\n"])),(function(n){return""===n.error?0:1})),v=u.zo.textarea(c||(c=(0,d.Z)(["\n  margin-top: 7px;\n  background: none;\n  border: 1px solid;\n  border-color: ",";\n  border-radius: ",";\n  font-size: ",";\n  width: ",";\n  min-height: ",";\n  color: ",";\n  padding: 8px 6px;\n  font-size: 1.5rem;\n  font-family: var(--nanum);\n"])),(function(n){return n.$borderColor?n.$borderColor:"var(--black-100)"}),(function(n){return n.$borderRadius?n.$borderRadius:"3px"}),(function(n){return n.$fontSize}),(function(n){return n.$width}),(function(n){return n.$height}),(function(n){return n.$color?n.$color:"var(--black-100)"}));function b(n){var e=n.label,t=n.error,r=n.name,i=n.width,o=n.height,a=n.color,c=n.fontSize,d=n.labelColor,u=n.borderColor,b=n.borderRadius,j=n.onChangeHandler,w=n.type,Z=(0,l.Z)(n,h);return(0,m.jsxs)(g,{className:"col",children:[(0,m.jsx)(p,{htmlFor:r,$labelColor:d,children:e}),"textarea"===w?(0,m.jsx)(v,(0,s.Z)({rows:1,$width:i,$height:o,$color:a,$fontSize:c,$borderColor:u,$borderRadius:b,onChange:j},Z)):(0,m.jsx)(f,(0,s.Z)({$width:i,$height:o,$color:a,$fontSize:c,$borderColor:u,$borderRadius:b,onChange:j,type:w},Z)),(0,m.jsx)(x,{$error:t,children:t})]})}},329:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i=t(3433),o=t(9439),a=t(168),c=t(2791),s=t(6355),l=t(9256),d=t(9100),u=t(6764),m=t(9434),h=t(184),g=l.zo.div(r||(r=(0,a.Z)(["\n  display: flex;\n  font-size: ",";\n  flex: 1;\n  gap: 0.5rem;\n  align-items: end;\n  svg {\n    cursor: pointer;\n  }\n  span {\n    font-weight: 900;\n  }\n"])),(function(n){return n.$size||"2rem"}));function p(n){var e=n.likes,t=n.size,r=(n.unLikePost,n.likePost,n.postId),a=(0,m.v9)((function(n){return n.user})),l=a.isLogin,p=(a.userInfo,(0,c.useState)([1,3,4,5,6,7,8,9,10])),f=(0,o.Z)(p,2),x=f[0],v=f[1],b=x.includes(+r),j=(0,c.useState)(!1),w=(0,o.Z)(j,2),Z=w[0],y=w[1],N=(0,u.Z)().toSignin;return(0,h.jsxs)(g,{$size:t,children:[Z&&(0,h.jsx)(d.Z,{setIsOpen:y,title:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",body:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmHandler:N}),(0,h.jsx)(s.BgW,{onClick:function(){l?v(b?function(n){return n.filter((function(n){return+n!==+r}))}:function(n){return[].concat((0,i.Z)(n),[+r])}):y(!0)},color:b?"#ff0000":"var(--black-100)"}),(0,h.jsx)("span",{children:e})]})}},9100:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(168),o=t(2791),a=t(9256),c=t(4164),s=t(1646),l=t(184),d=a.ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #0000007d;\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 500px;\n    background-color: #323232;\n    border-radius: 3px;\n    "," {\n      min-width: 200px;\n      width: 95%;\n    }\n    font-weight: var(--nanum-semi-bold);\n    animation: slideIn 0.3s ease;\n    h4 {\n      padding: 22px;\n      font-size: 1.8rem;\n    }\n    p {\n      font-size: 1.6rem;\n      padding: 22px;\n      color: var(--black-200);\n      line-height: 10px;\n    }\n    .button-wrapper {\n      display: flex;\n      justify-content: end;\n      margin-top: 15px;\n      padding: 8px;\n      button {\n        border-radius: 5px;\n        padding: 8px 15px;\n        &:hover {\n          background-color: var(--black-700);\n        }\n      }\n    }\n  }\n  .children {\n    padding: 2rem;\n  }\n  @keyframes slideIn {\n    0% {\n      transform: translateY(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n"])),s.ai);function u(n){var e=n.setIsOpen,t=n.type,r=void 0===t?"confirm":t,i=n.title,a=n.body,s=n.confirmHandler,u=n.cancelHandler,m=n.children;(0,o.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]);var h=function(){"confirm"===r&&e(!1)};return(0,c.createPortal)((0,l.jsx)(d,{onClick:h,children:(0,l.jsxs)("div",{className:"modal-content",onClick:function(n){return n.stopPropagation()},children:[m?(0,l.jsx)("div",{className:"children",children:m}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:i}),(0,l.jsx)("p",{children:a})]}),(0,l.jsxs)("div",{className:"button-wrapper",children:[(0,l.jsx)("button",{onClick:function(){s&&s(),h()},children:"\ud655\uc778"}),"confirm"===r&&(0,l.jsx)("button",{onClick:function(){u&&u(),h()},children:"\ucde8\uc18c"})]})]})}),document.getElementById("modal"))}},2889:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o=t(1413),a=t(5987),c=t(168),s=(t(2791),t(9256)),l=t(184),d=["width","height","fontSize","top","comPleteNum","proGressNum","error"],u=s.zo.div(r||(r=(0,c.Z)(["\n    position:relative;\n    width:",";\n    height:",";\n    background-color:var(--black-400);\n    display: flex;\n    > span {\n        position:absolute;\n        right:0rem;\n        font-size:",";\n        top:",";\n    }\n"])),(function(n){return n.$width}),(function(n){return n.$height}),(function(n){return n.$fontSize}),(function(n){return n.$top})),m=s.zo.div(i||(i=(0,c.Z)(["\n    width:","; \n    height:100%;\n    background-color:",";\n    transition: all 0.3s;\n"])),(function(n){return"".concat(Math.floor(n.$proGressNum<n.$comPleteNum?n.$proGressNum/n.$comPleteNum*100:100),"%")}),(function(n){return n.$error||n.$proGressNum>n.$comPleteNum?"var(--error)":"green"}));function h(n){var e=n.width,t=n.height,r=n.fontSize,i=void 0===r?"16px":r,c=n.top,s=void 0===c?"-1.4rem":c,h=n.comPleteNum,g=n.proGressNum,p=n.error,f=(0,a.Z)(n,d);return(0,l.jsxs)(u,(0,o.Z)((0,o.Z)({$width:e,$height:t,$fontSize:i,$top:s},f),{},{children:[(0,l.jsx)("span",{children:"".concat(g," / ").concat(h)}),(0,l.jsx)(m,{$comPleteNum:h,$proGressNum:g,$error:p})]}))}},8462:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(168),o=t(6764),a=t(9256),c=t(5222),s=t(184),l=a.zo.div(r||(r=(0,i.Z)(["\n  padding: ",";\n  font-size: ",";\n  font-weight: var(--nanum-semi-bold);\n  border: 1px solid var(--black-400);\n  border-radius: 5px;\n  display: inline;\n  transition: all.2s;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  &:hover {\n    background-color: white;\n    color: black;\n  }\n"])),(function(n){return n.$padding||"5px 7px"}),(function(n){return n.$padding||"1.4rem"}));function d(n){var e=n.text,t=n.type,r=n.size,i=n.padding,a=n.edit,d=(0,o.Z)().toSearch;return(0,s.jsx)(l,{$padding:i,$size:r,onClick:function(){!a&&d(e,t),(0,c.Z)()},children:e})}},3399:function(n,e,t){t.d(e,{Z:function(){return b},d:function(){return v}});var r,i,o=t(9439),a=t(168),c=t(2791),s=t(9256),l=(t(5983),t(1743)),d=t(2889),u=t(6276),m=t(9434),h=t(6764),g=t(4097),p=t(1281),f=t(184),x=s.ZP.div(r||(r=(0,a.Z)(["\n    min-width:35rem;\n    margin:2rem 0;\n    background-color:rgba(42,42,42, 0.8);\n    padding:2rem;\n    gap:1rem;\n    p {\n        font-size:1.6rem;\n    }\n    h3 {\n        font-size:1.2rem;\n    }\n    .button {\n        &:hover {\n            cursor: pointer;\n            opacity:0.5;\n        }\n    }\n    .row {\n        width:100%;\n        gap:1rem;\n        justify-content:end;\n        align-items:center;\n    }\n    .author-wrapper {\n        width:auto;\n        padding:2px;\n        justify-content:center;\n        align-items:center;\n        * {\n            cursor:pointer;\n        }\n\n        > img {\n            width:3rem;\n            height:3rem;\n            border-radius:50%;\n            object-fit:cover;\n        }\n        &:hover {\n            cursor:pointer;\n            opacity:0.4;\n        }\n    }\n"]))),v=s.ZP.div(i||(i=(0,a.Z)(["\n    width:100%;\n    height:2px;\n    border-radius:5px;\n    border:1.5px solid var(--black-100);\n    margin:1.3rem 0;\n"])));function b(n){var e,t=n.isAdmin,r=n.detailData,i=n.commentData,a=(0,h.Z)().toProfile,s=(0,c.useState)(i.body),b=(0,o.Z)(s,2),j=b[0],w=b[1],Z=(0,c.useState)(!1),y=(0,o.Z)(Z,2),N=y[0],k=y[1],$=(0,m.v9)((function(n){return n.user})),P=null===$||void 0===$||null===(e=$.userInfo)||void 0===e?void 0:e.id;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(x,{className:"col",$isEdit:N,children:[N?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{type:"textarea",defaultValue:i.body,onChangeHandler:function(n){return w(n.target.value)}}),(0,f.jsx)(d.Z,{top:"-1.7rem",width:"100%",height:"1rem",comPleteNum:200,proGressNum:j.length})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:i.body}),(0,f.jsx)(v,{})]}),(0,f.jsx)("div",{className:"row",children:N?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h3",{className:"button",onClick:function(){u.Z.post("/comments/".concat(r.id,"}"))},children:"\uc791\uc131"}),(0,f.jsx)("h3",{className:"button",onClick:function(){w(i.body),k(!1)},children:"\ucde8\uc18c"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"row author-wrapper",onClick:function(){return a(i.id)},children:[(0,f.jsx)("img",{src:0===i.img.length?g:i.img,alt:"\uc791\uc131\uc790\uc774\ubbf8\uc9c0"}),(0,f.jsx)("h3",{children:i.userName})]}),(0,f.jsx)("h3",{children:(0,p.v)(i.created_At)}),r.author.id===P||(0,f.jsx)("h3",{className:"button",onClick:function(){return k(!0)},children:"\uc218\uc815"}),t||r.author.id===P||(0,f.jsx)("h3",{className:"button",onClick:function(){u.Z.delete("/comments/".concat(r.id,"}"))},children:"\uc0ad\uc81c"})]})})]})})}},1075:function(n,e,t){t.d(e,{Z:function(){return N},C:function(){return k}});var r,i,o,a,c=t(168),s=t(2791),l=t(9256),d=t(9439),u=t(4097),m=t(8462),h=t(6764),g=t(184),p=l.ZP.div(r||(r=(0,c.Z)(["\n    width:100%;\n    padding:2rem;\n    background-color:rgba(50,50,50,0.8);\n    .image-name-container {\n        flex:1.3;\n        margin-right:3rem;\n        justify-content:center;\n        align-items:center;\n        > * {\n            cursor: pointer;\n        }\n        \n        > img {\n            margin-bottom:1rem;\n            border-radius:50%;      \n            width:100%;\n            height:auto;\n            object-fit:cover;    \n        }\n        \n        &:hover {\n            cursor: pointer;\n            opacity:0.4;\n        }\n    }\n    .data-box {\n        flex:8;\n        align-items:start;\n        justify-content:center;\n        gap:0.5rem;\n    }\n    .tag-box {\n        margin-left:0.5rem;\n        gap:0.5rem;\n    }\n    .see-more-box {\n        margin-left:auto;\n    }\n    span {\n        font-size:1.5rem;\n        font-weight:var(--nanum-normal);\n    }\n    .button {\n        &:hover {\n            cursor: pointer;\n            opacity:0.5;\n        }\n    }\n    .accept-reject-box {\n        margin:1rem;\n        gap:1rem;\n    }\n    .tag-container {\n        gap:1rem;\n    }\n"]))),f=l.ZP.div(i||(i=(0,c.Z)(["\n    width:100%;\n    /* background-color:white; */\n    height:",";\n    overflow:hidden;\n    border: 1px solid var(--black-300);\n    margin-top:2rem;\n    > span {\n        padding:1rem;\n    }\n"])),(function(n){return n.$isOn?"10rem":"0"}));function x(n){var e=n.cardData,t=(0,s.useState)(!1),r=(0,d.Z)(t,2),i=r[0],o=r[1],a=(0,h.Z)().toProfile;return(0,g.jsxs)(p,{className:"col",children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("div",{className:"image-name-container col",onClick:function(){return a(e.memberId)},children:[(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.img?u:e.img,alt:"\uc2e0\uccad\uc790\uc774\ubbf8\uc9c0"}),(0,g.jsx)("span",{children:null===e||void 0===e?void 0:e.userName})]}),(0,g.jsxs)("div",{className:"data-box col",children:[(0,g.jsx)("span",{children:"\uc774\uba54\uc77c : ".concat(null===e||void 0===e?void 0:e.email)}),(0,g.jsx)("span",{children:"\uc7ac\uc9c1 \uc0c1\ud0dc : ".concat(null!==e&&void 0!==e&&e.working?"\uc7ac\uc9c1 \uc911":"\uad6c\uc9c1 \uc911")}),(0,g.jsxs)("span",{className:"tag-container row",children:["\uad00\uc2ec \uae30\uc220 :",e.tag.map((function(n,e){return(0,g.jsx)(m.Z,{text:n,size:"1.2rem",padding:"0.4rem",type:"project"},e)}))]}),(0,g.jsx)("span",{children:"\uc5f0\ub77d\ucc98 : ".concat(null===e||void 0===e?void 0:e.tell)}),(0,g.jsx)("span",{className:"see-more-box button",onClick:function(){o(!i)},children:i?"\ub2eb\uae30":"\ub354\ubcf4\uae30"})]})]}),(0,g.jsx)(f,{className:"row",$isOn:i,children:(0,g.jsx)("span",{children:null===e||void 0===e?void 0:e.aboutMe})}),(0,g.jsxs)("div",{className:"row accept-reject-box",children:[(0,g.jsx)("span",{className:"button",children:"\uc218\ub77d"}),(0,g.jsx)("span",{className:"button",children:"\uac70\uc808"})]})]})}var v=l.ZP.div(o||(o=(0,c.Z)(["\n    width:100%;\n    padding:1rem;\n    height:300px;\n    background-color:rgba(30,30,30,0.8);\n    opacity:",";\n    position:relative;\n    > .row {\n        gap:5%;\n    }\n    .image-container {\n        flex:2;\n        overflow:hidden;\n        justify-content:center;\n        align-items:center;\n        > img {\n            margin-bottom:1rem;\n            border-radius:50%;      \n            width:100%;\n            height:auto;\n            object-fit:cover;    \n        }\n    }\n    .data-box {\n        flex:8;\n        align-items:start;\n        justify-content:center;\n        gap:0.5rem;\n    }\n    .tag-box {\n        margin-left:0.5rem;\n        gap:0.5rem;\n    }\n    .see-more-box {\n        margin-left:auto;\n    }\n    span {\n        font-size:1.5rem !important;\n        font-weight:var(--nanum-normal);\n    }\n    .accept-reject-box {\n        margin:1rem;\n        gap:1rem;\n    }\n    &:hover{\n        cursor: pointer;\n        opacity:0.5;\n    }\n    &:hover * {\n        pointer-events: none; \n    }\n    .display-selected {\n        position:absolute;\n        top:50%;\n        left:50%;\n        transform:translate(-50%,-50%);\n        font-size:3rem;\n        font-weight: var(--nanum-bold);\n    }\n"])),(function(n){return n.$selectedCard?"0.5":"1"})),b=l.ZP.div(a||(a=(0,c.Z)(["\n    width:100%;\n    /* background-color:white; */\n    height: 100%;\n    border: 1px solid var(--black-300);\n    margin-top:2rem;\n    padding:1rem;\n"])));function j(n){var e=n.cardData,t=n.idx,r=n.selectedCard,i=n.setSelectedCard;return(0,g.jsxs)(v,{$selectedCard:r,className:"col",onClick:function(){return i(t)},children:[r&&(0,g.jsx)("span",{className:"display-selected",children:"\uce74\ub4dc \uc120\ud0dd\ub428"}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("div",{className:"image-container col",children:[(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.img?e.img:u,alt:"\uc2e0\uccad\uc790\uc774\ubbf8\uc9c0"}),(0,g.jsx)("span",{children:null===e||void 0===e?void 0:e.userName})]}),(0,g.jsxs)("div",{className:"data-box col",children:[(0,g.jsx)("span",{children:"\uc774\uba54\uc77c : ".concat(null===e||void 0===e?void 0:e.email)}),(0,g.jsx)("span",{children:"\uc7ac\uc9c1 \uc0c1\ud0dc : ".concat(null!==e&&void 0!==e&&e.working?"\uc7ac\uc9c1 \uc911":"\uad6c\uc9c1 \uc911")}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("span",{children:"\uad00\uc2ec \uae30\uc220 : "}),(0,g.jsx)("div",{className:"tag-box row",children:e.tag.map((function(n,e){return(0,g.jsx)(m.Z,{text:n,size:"1.2rem",padding:"0.4rem",type:"project"},e)}))})]}),(0,g.jsx)("span",{children:"\uc5f0\ub77d\ucc98 : ".concat(null===e||void 0===e?void 0:e.tell)})]})]}),(0,g.jsx)(b,{children:(0,g.jsx)("span",{children:e.aboutMe})})]})}var w,Z=t(1646),y=t(6495),N=l.ZP.div(w||(w=(0,c.Z)(["\n    width:",";\n    gap:2rem;\n    overflow:auto;\n    div {\n        border-radius:5px;\n    }\n    "," {\n        flex-direction: column;\n    }\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    height:auto;   \n    max-height:700px;\n"])),(function(n){return n.$isForSubmit?"60vw":"100%"}),Z.gv);function k(n){var e=n.cardList,t=n.isForSubmit,r=void 0!==t&&t,i=n.selectedCard,o=n.setSelectedCard;return(0,g.jsx)(N,{className:r?"row":"col",$isForSubmit:r,children:0!==e.length?e.map((function(n,e){return(0,g.jsx)(s.Fragment,{children:r?(0,g.jsx)(j,{cardData:n,idx:e,selectedCard:i===e,setSelectedCard:o}):(0,g.jsx)(x,{cardData:n})},e)})):(0,g.jsx)(y.Z,{height:"500px",text:"\ud504\ub85c\uc81d\ud2b8 \uce74\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})}},3813:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o=t(168),a=(t(2791),t(9256)),c=t(2833),s=t(1075),l=t(184),d=(0,a.ZP)(s.Z)(r||(r=(0,o.Z)(["\n    min-height:700px;\n"]))),u=a.ZP.div(i||(i=(0,o.Z)(["\n    width:100%;\n    padding:2rem;\n    background-color:rgba(50,50,50,0.8);\n    .image-name-container {\n        flex:1.3;\n        > span:nth-child(1) {\n            border-radius:50%;\n        }\n        margin-right:3rem;\n        gap:1rem;\n        align-items:center;\n    }\n    .data-box {\n        flex:8;\n        align-items:start;\n        justify-content:center;\n        gap:0.5rem;\n        > :last-child {\n            margin-left:auto;\n        }\n    }\n"]))),m=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,t=[],r=0;r<n;r++)t.push((0,l.jsxs)(u,{className:"row",children:[(0,l.jsxs)("div",{className:"image-name-container col",children:[(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"8.2rem",height:"8.2rem",animation:"wave"}),(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"70%",height:e,animation:"wave"})]}),(0,l.jsxs)("div",{className:"data-box col",children:[(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"30%",height:e,animation:"wave"}),(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"25%",height:e,animation:"wave"}),(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"35%",height:e,animation:"wave"}),(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"30%",height:e,animation:"wave"}),(0,l.jsx)(c.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"10%",height:e,animation:"wave"})]})]},r));return t};function h(){return(0,l.jsx)(d,{className:"col",children:m(5,20)})}},4750:function(n,e,t){t.r(e),t.d(e,{StyleDetailContainer:function(){return W},StyleDetailWrapper:function(){return Y},default:function(){return K}});var r,i=t(1413),o=t(9439),a=t(168),c=t(2791),s=t(9256),l=t(2665),d=t(5238),u=t(1004),m=t(5983),h=t(9434),g=t(1075),p=t(4097),f=(t(8462),t(6764)),x=t(184),v=s.ZP.div(r||(r=(0,a.Z)(["\n    width:100%;\n    padding:2rem;\n    background-color:rgba(50,50,50,0.8);\n\n    .author-wrapper {\n        padding:2px 5px;\n        justify-content:start;\n        align-items:center;\n        gap:1.5rem;\n        * {\n            cursor:pointer;\n        }\n\n        > img {\n            width:10rem;\n            height:10rem;\n            border-radius:50%;\n            object-fit:cover;\n        }\n        &:hover {\n            cursor:pointer;\n            opacity:0.4;\n        }\n\n        p {\n            font-size:1.6rem;\n        }\n    }\n"])));function b(n){var e=n.cardData,t=(0,f.Z)().toProfile;return(0,x.jsx)(v,{children:(0,x.jsxs)("div",{className:"col author-wrapper",onClick:function(){return t(e.id)},children:[(0,x.jsx)("img",{src:0===(null===e||void 0===e?void 0:e.imgUrl.length)?p:e.imgUrl,alt:"\uc2e0\uccad\uc790\uc774\ubbf8\uc9c0"}),(0,x.jsx)("p",{children:null===e||void 0===e?void 0:e.userName})]})})}var j,w=t(3399),Z=t(6495),y=s.ZP.div(j||(j=(0,a.Z)(["\n    width:100%;\n    overflow:auto;\n    gap:2rem;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n"])));function N(n){var e=n.joinPeople;return(0,x.jsx)(y,{className:"col",children:0!==e.length?e.map((function(n,e){return(0,x.jsx)(b,{cardData:n},e)})):(0,x.jsx)(Z.Z,{text:"\ucc38\uac00\uc790 \uc5c6\uc74c",height:"500px"})})}var k,$,P=t(9100),z=t(6276),C=t(1646),S=t(2833),I=t(7976),D=s.ZP.div(k||(k=(0,a.Z)(["\n    height : auto;\n    padding-bottom:1rem;\n    gap:1.5rem;\n"]))),F=s.ZP.div($||($=(0,a.Z)(["\n    width:100%; \n    .post-data-box {\n        flex:4;\n        height:auto;\n        gap:10rem;\n    }\n\n    .sticky-box {\n        position:sticky;\n        top:90vh;\n        margin-bottom:2rem;\n    }\n\n    .image-data-box {\n        padding-left:3rem;\n        flex:6;\n        gap:3rem;\n        > img {\n            width:100%;\n            object-fit:cover;\n        }\n    }\n    "," {\n        flex-direction: column;\n        .image-data-box {\n            padding-left:0; \n        }\n    }\n"])),C.Mq);function R(n){var e=n.type,t=void 0===e?"project":e;return(0,x.jsxs)(W,{children:[(0,x.jsxs)(D,{className:"col",children:[(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"12%",height:30,animation:"wave"}),(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"100%",height:30,animation:"wave"}),(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"25%",height:30,animation:"wave"})]}),(0,x.jsx)(w.d,{}),(0,x.jsxs)(F,{className:"row",children:[(0,x.jsx)("div",{className:"post-data-box col",children:{project:[{title:{width:"20%"},body:{width:"12%",height:26}},{title:{width:"25%"},body:{width:"70%",height:26}},{title:{width:"25%"},body:{width:"65%",height:26}},{title:{width:"35%"},body:{width:"100%",height:300}}],portfolio:[{title:{width:"20%"},body:{width:"10%",height:26}},{title:{width:"25%"},body:{width:"70%",height:26}},{title:{width:"35%"},body:{width:"65%",height:100}}]}[t].map((function(n,e){return(0,x.jsx)(I.Z,{title:(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:n.title.width,height:22,animation:"wave"},e),component:(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:n.body.width,height:n.body.height,animation:"wave"},e)},e)}))}),(0,x.jsx)("div",{className:"image-data-box",children:(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"100%",height:400,animation:"wave"})})]})]})}var U,E,O=t(3813),H=(0,s.ZP)(g.Z)(U||(U=(0,a.Z)(["\n    min-height:700px;\n"]))),A=s.ZP.div(E||(E=(0,a.Z)(["\n    width:100%;\n    padding:2rem;\n    background-color:rgba(50,50,50,0.8);\n    justify-content:center;\n    align-items:center;\n    .image-name-container {\n      > span:nth-child(1) {\n          border-radius:50%;\n      }\n      gap:1rem;\n      justify-content:center;\n      align-items:center;\n    }\n"]))),q=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,t=[],r=0;r<n;r++)t.push((0,x.jsx)(A,{className:"row",children:(0,x.jsxs)("div",{className:"image-name-container col",children:[(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"8.2rem",height:"8.2rem",animation:"wave"}),(0,x.jsx)(S.Z,{sx:{bgcolor:"grey.700"},variant:"rectangular",width:"70%",height:e,animation:"wave"})]})},r));return t};function G(){return(0,x.jsx)(H,{className:"col",children:q(5,20)})}var L,M,T,_,B=t(7689),X=t(977),Y=(0,s.ZP)(l.Z)(L||(L=(0,a.Z)(["\n  padding-top:6rem;\n  * {\n    border-radius: 6px;\n    transition:all 0.2s;\n  }\n"]))),W=s.ZP.div(M||(M=(0,a.Z)(["\n  width:100%;\n  background-color:rgba(0,0,0,0.3);\n  border-radius:10px;\n  padding:4rem;\n  margin-bottom:2rem;\n\n  .join-people {\n    flex:4;\n    overflow:auto;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .request-people {\n    flex:6;\n    overflow:auto;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .vertical-line {\n    margin:0 3rem;\n    height:auto;\n    border:3px solid var(--black-300);\n    border-radius:10px;\n  }\n\n  .status {\n    height:600px;\n    overflow:auto;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n  }\n\n  "," {\n    .status {\n      flex-direction:column;\n    }\n    .vertical-line {\n      margin:3rem 0;\n    }\n  }\n\n"])),C.gv),J=s.ZP.div(T||(T=(0,a.Z)(["\n    flex:",";\n    > h2 {\n      font-size:1.6rem;\n      margin-bottom:1rem;\n    }\n"])),(function(n){return n.$flex})),Q=s.ZP.div(_||(_=(0,a.Z)(["\n  width:100%;\n  justify-content:end;\n  gap:2rem;\n  margin-bottom:1rem;\n"]))),V=(String(new Date),String(new Date),String(new Date),{joinPeople:[{memberId:1,imgUrl:"",userName:"\ud14c\uc2a4\ud130"},{memberId:2,imgUrl:"",userName:"\ubc14\ucc28\uc11c"}],requestPeople:[]});function K(){var n=(0,B.s0)(),e=(0,c.useState)(!1),t=(0,o.Z)(e,2),r=(t[0],t[1]),a=(0,c.useState)(!1),s=(0,o.Z)(a,2),l=s[0],p=s[1],v=(0,c.useState)({}),b=(0,o.Z)(v,2),j=b[0],w=b[1],Z=(0,c.useState)([]),y=(0,o.Z)(Z,2),k=y[0],$=y[1],C=(0,c.useState)(!1),S=(0,o.Z)(C,2),I=S[0],D=S[1],F=(0,c.useState)(!0),U=(0,o.Z)(F,2),E=U[0],H=U[1],A=(0,c.useState)(!0),q=(0,o.Z)(A,2),L=q[0],M=q[1],T=(0,c.useState)(!0),_=(0,o.Z)(T,2),K=_[0],nn=_[1],en=(0,c.useState)(!1),tn=(0,o.Z)(en,2),rn=tn[0],on=tn[1],an=(0,f.Z)(),cn=an.toProjectEdit,sn=an.toProject,ln=(0,h.v9)((function(n){return n.user})),dn=(0,B.UO)().projectId,un=[{title:E?"\ud504\ub85c\uc81d\ud2b8 \uc870\ud68c":"\ud604\ud669 \uc870\ud68c",handler:function(){mn(),H(!E)}},{title:"\uc218\uc815",handler:function(){cn(j.projectId)}},{title:"\uc0ad\uc81c",handler:function(){on(!rn)}}],mn=function(){nn(!0),setTimeout((function(){nn(!1),$((0,i.Z)({},V))}),1e3)};return(0,c.useEffect)((function(){M(!0),z.Z.get("/projects/".concat(dn)).then((function(n){console.log((0,X.X)(n.data)),M(!1),w((0,X.X)(n.data))})).catch((function(e){"ERR_BAD_REQUEST"===e.code?n("/404"):"ERR_BAD_RESPONSE"===e.code&&(console.log(e.code),D(!0),on(!0))}))}),[]),(0,c.useEffect)((function(){var n;(null===(n=ln.userInfo)||void 0===n?void 0:n.memberId)===(null===j||void 0===j?void 0:j.memberId)?p(!0):p(!1)}),[j]),(0,x.jsxs)(Y,{children:[rn&&(0,x.jsx)(P.Z,{setIsOpen:on,title:I?"\ud1b5\uc2e0 \uc5d0\ub7ec":"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",body:I?"\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.":"\uc0ad\uc81c\ub41c \ub0b4\uc6a9\uc740 \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",confirmHandler:I?function(){}:function(){return n=dn,D(!1),void z.Z.delete("/projects/".concat(n)).then((function(n){sn()})).catch((function(n){D(!0)}));var n}}),L?(0,x.jsx)(R,{}):(0,x.jsxs)(W,{className:"col",children:[(0,x.jsx)(d.Z,{detailData:j,type:"project"}),l&&(0,x.jsx)(Q,{className:"row",children:un.map((function(n,e){return(0,x.jsx)(m.wU,{$fontSize:"1.6rem",onClick:n.handler,children:n.title},e)}))}),l&&!E?(0,x.jsxs)("div",{className:"row status",children:[(0,x.jsxs)(J,{className:"col",$flex:4,children:[(0,x.jsx)("h2",{className:"status-title",children:"\ucc38\uac00\uc790 \ud604\ud669"}),K?(0,x.jsx)(G,{}):(0,x.jsx)(N,{joinPeople:k.joinPeople})]}),(0,x.jsx)("div",{className:"vertical-line"}),(0,x.jsxs)(J,{className:"col",$flex:6,children:[(0,x.jsx)("h2",{className:"status-title",children:"\uc2e0\uccad\uc790 \ud604\ud669"}),K?(0,x.jsx)(O.Z,{}):(0,x.jsx)(g.C,{cardList:k.requestPeople})]})]}):(0,x.jsx)(u.Z,{detailData:j,type:"project",isAdmin:l,updateHandler:function(){r((function(n){return!n}))}})]})]})}},1281:function(n,e,t){function r(n){var e=new Date(n);e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes()}t.d(e,{v:function(){return r}})},5222:function(n,e,t){function r(n){var e={top:0,left:0,behavior:n?"smooth":"auto"};window.scrollTo(e)}t.d(e,{Z:function(){return r}})},977:function(n,e,t){t.d(e,{X:function(){return i}});var r=t(1413),i=function(n,e){var t=(0,r.Z)({},n);for(var i in n)if("images"===i){for(var o=[],a=0;a<n[i].length;a++)o.push(n[i][a].imageUrl);t[i]=o,t.imageFile=new FormData,t.imageUrls=[]}else"projectTitleImage"===i&&(t[i]=[n[i].imageUrl],t.titleImageFile=new FormData,t.titleImageUrl="");return t}}}]);
//# sourceMappingURL=750.3280cf78.chunk.js.map