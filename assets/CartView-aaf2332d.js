import{_,g as h,L as w,h as v,r as a,o as p,c as b,a as t,d as s,n as g,t as o,i as y,v as q,w as k,e as C,p as j,k as L,b as I}from"./index-b5d0fd35.js";import{_ as S}from"./Quantity-2910a5a2.js";const $={data(){return{qtd:this.$route.query.qtd}},components:{Logo:h,Quantity:S,Line:w},methods:{increase(){this.qtd>0?this.qtd++:this.qtd=1},decrease(){this.qtd>1?this.qtd--:this.qtd=1}},computed:{getId(){return parseInt(this.$route.query.id)},items(){return v.find(n=>n.id===this.getId)},longText(){return this.items.title.length>18},subtotal(){return(this.qtd*this.items.price).toFixed(2)}}},c=n=>(j("data-v-4143e0af"),n=n(),L(),n),T={class:"w-full h-[779px] flex justify-center"},V={class:"w-[90%] h-full"},B={class:"flex h-[436px] items-center mt-[74px]"},N={class:"w-3/5 h-[400px]"},D=c(()=>t("span",{class:"text-[2rem]"},"Your Cart",-1)),E=c(()=>t("div",{class:"w-[90%] flex text-[1.5em] items-center"},[t("div",{class:"w-3/5 flex items-center"},[t("span",null,"Item")]),t("div",{class:"w-[34%] flex justify-between items-center"},[t("span",null,"Price"),t("span",null,"Quantity")])],-1)),Q={class:"w-[90%] text-[1.5em] flex h-[226.01px] items-center"},R={class:"w-3/5 flex items-center"},z={class:"w-2/5 flex justify-between items-center"},F={class:""},M={class:"flex w-[57%] h-[40.25px] rounded-[12px] items-center rounded-l-[12px] bg-slate-200"},P={class:"w-[90%] text-[1.5em] text-right"},U={class:"w-2/5 h-[400px] flex justify-center items-center bg-gray-300"},Y={class:"w-[92%] h-[361px]"},A=c(()=>t("div",{class:"text-[2rem] font-bold"},[t("span",null,"Summary (1 item)")],-1)),G={class:"w-full flex justify-between items-center text-[1.5rem] mt-[25px]"},H=c(()=>t("span",null,"Subtotal:",-1)),J=c(()=>t("div",{class:"w-full flex justify-between items-center text-[1.5rem] my-[26px]"},[t("span",null,"Shipping:"),t("span",null,"-")],-1)),K=c(()=>t("div",{class:"w-full flex justify-between items-center text-[1.5rem]"},[t("span",null,"Estimated Tax:"),t("span",null,"-")],-1)),O={class:"w-full flex justify-between items-center text-[1.5rem] font-bold mt-[10px]"},W=c(()=>t("span",null,"Total:",-1)),X={class:"h-[38px] items-center border-[1px] border-solid border-black text-[1.5rem] mt-[5px]"};function Z(n,l,m,x,r,e){const i=a("Line"),d=a("Logo"),f=a("RouterLink");return p(),b("div",T,[t("div",V,[t("div",B,[t("div",N,[D,s(i,{class:"w-[90%]"}),E,s(i,{class:"w-[90%]"}),t("div",Q,[t("div",R,[s(d,{class:"w-[34%] h-[149px]",url:e.items.url},null,8,["url"]),t("span",{class:g({simplifyText:e.longText})},o(e.items.title),3)]),t("div",z,[t("div",F,[t("span",null,"$"+o(e.items.price),1)]),t("div",M,[t("button",{onClick:l[0]||(l[0]=u=>e.decrease()),class:"w-1/4 flex justify-center items-center"},[s(d,{class:"h-[20.12px]",url:"https://cdn-icons-png.flaticon.com/512/56/56889.png"})]),y(t("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.qtd=u),type:"text",class:"w-1/2 h-full text-center border-[2px] border-solid border-slate-200"},null,512),[[q,r.qtd]]),t("button",{onClick:l[2]||(l[2]=u=>e.increase()),class:"w-1/4 flex justify-center items-center rounded-r-[12px] bg-slate-200"},[s(d,{class:"h-[20.12px]",url:"https://cdn-icons-png.flaticon.com/512/32/32339.png"})])])])]),s(i,{class:"w-[90%]"}),t("div",P,[t("span",null,"Subtotal: $"+o(e.subtotal),1)]),s(i,{class:"w-[90%]"})]),t("div",U,[t("div",Y,[A,t("div",G,[H,t("span",null,"$"+o(e.subtotal),1)]),J,K,s(i,{class:"mt-[35px]"}),t("div",O,[W,t("span",null,"$"+o(e.subtotal),1)]),t("div",X,[s(f,{to:{name:"checkout",query:{id:e.getId,qtd:this.qtd}},class:"w-full h-full bg-sky-500 text-white flex justify-center items-center"},{default:k(()=>[C("Checkout")]),_:1},8,["to"])])])])])])])}const tt=_($,[["render",Z],["__scopeId","data-v-4143e0af"]]),et={components:{Cart:tt}};function st(n,l,m,x,r,e){const i=a("Cart");return p(),I(i)}const it=_(et,[["render",st]]);export{it as default};
