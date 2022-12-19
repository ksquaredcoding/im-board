import{_ as S,S as F,v as A,o as i,c,b as y,w as x,a as e,t as a,z as r,j as D,r as R,p as L,d as N}from"./index.21a7ce16.js";import{A as V}from"./AddToList.737ca940.js";const H={props:{boardGame:{type:F,required:!0}},setup(s){const n=A();return{badImg(t){t.target.src="https://s3-us-west-1.amazonaws.com/5cc.images/350x350/games/empty%20box.jpg"},route:n}},components:{AddToList:V}},l=s=>(L("data-v-5d73ea13"),s=s(),N(),s),O={key:0,class:"bg-transparent card my-2 elevation-3"},T=["src"],U={class:"card-body p-1 mt-2 bg-grey rounded"},J=["title"],K={class:"text-decoration-underline text-truncate text-dark"},M={class:"card-text d-flex justify-content-center",title:"Recommended Players"},Q=l(()=>e("i",{class:"mdi mdi-account"},null,-1)),W={class:"card-text d-flex justify-content-center",title:"Average User Rating"},X=l(()=>e("i",{class:"mdi mdi-star text-warning"},null,-1)),Y={class:"d-flex justify-content-center",title:"Price"},Z=l(()=>e("img",{src:"https://cdn-icons-png.flaticon.com/512/2178/2178616.png",alt:"",height:"15"},null,-1)),$={key:0,class:"d-flex justify-content-center discount",title:"Discounted Percent"},ee=l(()=>e("i",{class:"mdi mdi-percent"},null,-1)),te=l(()=>e("p",null,"off",-1)),ae={key:1},se=l(()=>e("div",{class:"spinner-border",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),oe=[se];function ne(s,n,t,_,E,q){var m,u,h,g,b;const f=R("router-link");return t.boardGame?(i(),c("div",O,[y(f,{class:"text-center",to:{name:"BoardGameDetails",params:{id:(m=t.boardGame)==null?void 0:m.id}}},{default:x(()=>{var d;return[e("img",{src:(d=t.boardGame)==null?void 0:d.coverImg,alt:"",class:"forcedImg rounded position-relative",onError:n[0]||(n[0]=(...v)=>_.badImg&&_.badImg(...v))},null,40,T)]}),_:1},8,["to"]),e("div",U,[e("span",{class:"text-center",title:(u=t.boardGame)==null?void 0:u.name},[y(f,{class:"text-center",to:{name:"BoardGameDetails",params:{id:(h=t.boardGame)==null?void 0:h.id}}},{default:x(()=>{var d;return[e("p",K,a((d=t.boardGame)==null?void 0:d.name),1)]}),_:1},8,["to"])],8,J),e("div",M,[Q,r(" "+a((g=t.boardGame)==null?void 0:g.players),1)]),e("div",W,[X,r(" "+a((b=t.boardGame)==null?void 0:b.average_user_rating.toFixed(2)),1)]),e("div",Y,[Z,r(" $"+a(t.boardGame.price),1)]),t.boardGame.discount*100>=45?(i(),c("div",$,[r(a((t.boardGame.discount*100).toFixed(0))+" ",1),ee,te])):D("",!0)])])):(i(),c("div",ae,oe))}const Ee=S(H,[["render",ne],["__scopeId","data-v-5d73ea13"]]);const de={props:{boardGame:{type:F,required:!0}},setup(s){return{route:A(),badImg(t){t.target.src="https://cd1.boardgamesmaker.com/images/site/promos/FI_8637.jpg"}}},components:{AddToList:V}},o=s=>(L("data-v-4b3649f7"),s=s(),N(),s),ie={key:0,class:"bg-transparent card my-4"},ce=["src"],re={class:"card-body p-1 mt-2 bg-grey rounded-bottom"},le={class:"text-center"},_e=["title"],me={class:"card-text d-flex justify-content-center align-items-center"},ue=["title"],he=o(()=>e("i",{class:"mdi mdi-account fs-5"},null,-1)),ge={class:"mb-0"},be=["title"],fe=o(()=>e("i",{class:"mdi mdi-clock fs-5"},null,-1)),ve={class:"mb-0"},ye=["title"],xe=o(()=>e("i",{class:"mdi mdi-star text-warning"},null,-1)),Ge={key:0,class:"d-flex justify-content-center"},pe=o(()=>e("img",{src:"https://cdn-icons-png.flaticon.com/512/2178/2178616.png",alt:"",height:"15"},null,-1)),Ie=["title"],ke=o(()=>e("small",{class:"revealOnHover animate__animated animate__fadeInLeft"},"rp",-1)),je={key:1,class:"d-flex justify-content-center align-items-center"},Be=o(()=>e("img",{src:"https://cdn-icons-png.flaticon.com/512/8634/8634777.png",alt:"",height:"40",width:"40"},null,-1)),Pe=o(()=>e("p",{class:"mb-0"},"Currently unavailable",-1)),we=[Be,Pe],Ce=o(()=>e("div",{class:"d-flex justify-content-center"},null,-1)),Se={key:2,class:"d-flex justify-content-center discount"},Fe=o(()=>e("small",null,"%off",-1)),Ae={key:1},De=o(()=>e("div",{class:"skeleton-load card"},null,-1)),Re=[De];function Le(s,n,t,_,E,q){var m,u,h,g,b,d,v,G,p,I,k,j,B,P,w;const f=R("router-link");return t.boardGame?(i(),c("div",ie,[y(f,{class:"text-center",to:{name:"BoardGameDetails",params:{id:(m=t.boardGame)==null?void 0:m.id}}},{default:x(()=>{var C;return[e("img",{src:(C=t.boardGame)==null?void 0:C.coverImg,alt:"",class:"forcedImg rounded position-relative p-2",onError:n[0]||(n[0]=(...z)=>_.badImg&&_.badImg(...z))},null,40,ce)]}),_:1},8,["to"]),e("div",re,[e("span",le,[e("h6",{class:"text-decoration-underline text-truncate",title:(u=t.boardGame)==null?void 0:u.name},a((h=t.boardGame)==null?void 0:h.name),9,_e)]),e("div",me,[e("div",{class:"player-Icon-And-Players d-flex justify-content-around align-items-center me-3",title:((g=t.boardGame)==null?void 0:g.players)+" recommended Players"},[he,e("p",ge,a((b=t.boardGame)==null?void 0:b.players),1)],8,ue),e("div",{class:"d-flex justify-content-around align-items-center",title:((d=t.boardGame)==null?void 0:d.playtime)+" minute average playtime"},[fe,e("p",ve,a((v=t.boardGame)==null?void 0:v.playtime),1)],8,be)]),e("div",{class:"card-text d-flex justify-content-center",title:((G=t.boardGame)==null?void 0:G.average_user_rating.toFixed(2))+" Average User Rating"},[xe,r(" "+a((p=t.boardGame)==null?void 0:p.average_user_rating.toFixed(2)),1)],8,ye),((I=t.boardGame)==null?void 0:I.price)>0?(i(),c("div",Ge,[pe,e("p",null,"$"+a((k=t.boardGame)==null?void 0:k.price),1),e("small",{class:"text-decoration-line-through ms-3 me-1 revealOnHover animate__animated animate__fadeInLeft",title:((j=t.boardGame)==null?void 0:j.retailPrice)+" Retail Price"},a((B=t.boardGame)==null?void 0:B.retailPrice),9,Ie),ke])):(i(),c("div",je,we)),Ce,((P=t.boardGame)==null?void 0:P.discount)>0?(i(),c("div",Se,[r(a((((w=t.boardGame)==null?void 0:w.discount)*100).toFixed(0))+" ",1),Fe])):D("",!0)])])):(i(),c("div",Ae,Re))}const qe=S(de,[["render",Le],["__scopeId","data-v-4b3649f7"]]);export{Ee as B,qe as a};
