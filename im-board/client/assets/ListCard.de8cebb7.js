import{_ as p,s as h,m as _,o as s,u as x,w as g,a as t,t as r,c as n,n as b,r as v,B as G,v as I,x as k,P as l,y as L,b as C,j as m,p as w,d as S}from"./index.21a7ce16.js";const B={props:{group:{type:h,required:!0}},setup(o){return{setActiveGroup(){let a=_.groups.find(e=>e.groupId==o.group.groupId);_.activeGroup=a}}}},j={class:"card-img-overlay text-shadow d-flex flex-column justify-content-between"},M={class:"card-title p-1 text-center rounded-1"},F={class:"card-title text-center p-1 rounded-1"},N={class:"card-text"},A={key:0},P={key:1};function R(o,a,e,i,f,y){var c;const u=v("router-link");return s(),x(u,{to:{name:"Group",params:{id:(c=e.group)==null?void 0:c.groupId}}},{default:g(()=>{var d;return[t("div",{class:"card text-bg-dark my-2 elevation-3 groupCard mx-3 mx-md-2",style:b({backgroundImage:`url(${e.group.group.coverImg})`})},[t("div",j,[t("h3",M,r((d=e.group)==null?void 0:d.group.name),1),t("div",F,[t("div",N,"Owner: "+r(e.group.group.creator.name),1),e.group.group.groupMemberIds.length==1?(s(),n("div",A,r(e.group.group.groupMemberIds.length)+" Member ",1)):(s(),n("div",P,r(e.group.group.groupMemberIds.length)+" Members",1))])])],4)]}),_:1},8,["to"])}const X=p(B,[["render",R],["__scopeId","data-v-832baa06"]]);const V={props:{boardGameList:{type:G,required:!0}},setup(o){const a=I();return{account:k(()=>_.account),route:a,async removeGameFromList(){try{if(!await l.confirm("remove from this list?"))return;await L.removeGameFromList(o.boardGameList.listId)}catch(e){console.error("[RemoveGame]",e),l.error(e)}}}}},q=o=>(w("data-v-4ca3aa04"),o=o(),S(),o),D={class:"hi"},$={class:"card elevation-4 my-2"},z=["src"],E={class:"card-body p-1 bg-dark rounded-bottom"},O={class:"card-title d-flex justify-content-center"},U=q(()=>t("div",{class:"card-text d-flex justify-content-center"}," Categories: ",-1)),H={class:"card-text d-flex justify-content-center"},J={class:"card-text d-flex justify-content-center"},K={key:0};function Q(o,a,e,i,f,y){var c,d;const u=v("router-link");return s(),n("div",D,[t("div",$,[C(u,{class:"text-center",to:{name:"BoardGameDetails",params:{id:(c=e.boardGameList)==null?void 0:c.gameId}}},{default:g(()=>[t("img",{src:e.boardGameList.imgUrl,class:"forcedImg rounded img-fluid"},null,8,z)]),_:1},8,["to"]),t("div",E,[t("p",O,[t("h4",null,r((d=e.boardGameList)==null?void 0:d.boardGameName),1)]),U,t("div",H," Players: "+r(e.boardGameList.players),1),t("div",J," Rating:"+r(e.boardGameList.rating.toFixed(2)),1),i.route.name=="Account"?(s(),n("div",K,[i.account.id==e.boardGameList.accountId?(s(),n("i",{key:0,class:"mdi mdi-close text-danger selectable rounded-3 fs-3",title:"remove game from list",onClick:a[0]||(a[0]=T=>i.removeGameFromList())})):m("",!0)])):m("",!0)])])])}const Y=p(V,[["render",Q],["__scopeId","data-v-4ca3aa04"]]);export{X as G,Y as L};
