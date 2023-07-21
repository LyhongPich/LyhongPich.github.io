import{_ as h,h as b,r as _,o as m,c as y,a as e,d as o,w as a,e as d,i as r,m as c,t as p,l as x,b as g}from"./index-8453b18a.js";const w={data(){return{selectedValue:"UPS Ground"}},computed:{getId(){return parseInt(this.$route.params.id)},getQtd(){return parseInt(this.$route.params.qtd)},items(){return b.find(u=>u.id===this.getId)},priceShipping(){if(this.selectedValue=="UPS Ground")return 2.2;if(this.selectedValue=="UPS 3-day")return 5.5;if(this.selectedValue=="UPS 2-day")return 9.2;if(this.selectedValue=="UPS Next-day")return 12.5},subtotal(){return this.getQtd*this.items.price},total(){return this.subtotal+this.priceShipping+1.4}}},S={class:"w-full h-[779px] flex justify-center"},V={class:"w-[90%] h-full"},U={class:"flex h-[452px] items-center mt-[55px]"},P={class:"w-3/5 h-full"},k={class:"w-[90%]"},j={class:"flex items-center text-[1.125rem]"},I=x('<div class="mt-[19px]"><div class="h-0 border-2 border-solid border-black"></div></div><div class="flex justify-between items-center my-[25px]"><div class="flex text-[1.25rem]"><span class="font-bold">Shipping Address</span><span> #20, 150, Phnom Penh, Cambodia</span></div><span class="text-blue-500 underline text-[1rem]">Edit</span></div><div class=""><div class="h-0 border-2 border-solid border-black"></div></div><div class="text-[1.5rem] mt-[25px]"><span>Shipping Method</span></div>',4),$={class:"flex h-[24px] justify-between items-center text-[1.25rem] mt-[26px]"},C={class:""},N=e("span",null,"UPS Ground",-1),Q=e("span",null,"$2.20",-1),q={class:"flex h-[24px] justify-between items-center text-[1.25rem] mt-[15px]"},D={class:""},G=e("span",null,"UPS 3 Day Select",-1),A=e("span",null,"$5.50",-1),B={class:"flex h-[24px] justify-between items-center text-[1.25rem] my-[15px]"},R={class:""},E=e("span",null,"UPS 2nd Day Air",-1),M=e("span",null,"$9.20",-1),T={class:"flex h-[24px] justify-between items-center text-[1.25rem]"},L={class:""},z=e("span",null,"UPS Next Day Air",-1),F=e("span",null,"$12.50",-1),H=e("div",{class:"mt-[25px]"},[e("div",{class:"h-0 border-2 border-solid border-black"})],-1),J={class:"h-[34px] text-[1.125rem] flex justify-between items-center mt-[22px]"},K={class:"w-2/5 h-full flex justify-center bg-gray-300"},O={class:"w-[92%] h-[383px] my-[15px]"},W=e("div",{class:"text-[2rem] font-bold"},[e("span",null,"Summary (1 item)")],-1),X={class:"w-full flex justify-between items-center text-[1.5rem] mt-[25px]"},Y=e("span",null,"Subtotal:",-1),Z={class:"w-full flex justify-between items-center text-[1.5rem] my-[26px]"},ee=e("span",null,"Shipping:",-1),te=x('<div class="w-full flex justify-between items-center text-[1.5rem]"><span>Estimated Tax:</span><span>$1.40</span></div><div class="w-full text-[1.5rem] mt-[26px]"><span>Gift code</span></div><div class="w-full h-[43px] flex justify-between text-[1rem] items-center mt-[17px]"><input type="text" class="w-[47%] h-full border-2 border-solid border-black pl-[2%]"><button class="w-[28%] h-full bg-sky-500 text-white">Apply</button></div><div class="w-full mt-[18px]"><div class="h-0 border-2 border-solid border-black"></div></div>',4),se={class:"w-full flex justify-between items-center text-[1.5rem] font-bold mt-[10px]"},le=e("span",null,"Total:",-1);function ie(u,s,f,v,l,t){const i=_("RouterLink");return m(),y("div",S,[e("div",V,[e("div",U,[e("div",P,[e("div",k,[e("div",j,[o(i,{to:`/cart/product=${t.getId}/quantity=${t.getQtd}`},{default:a(()=>[d("Cart")]),_:1},8,["to"]),d("  >  "),o(i,{to:`/checkout/product=${t.getId}/quantity=${t.getQtd}`},{default:a(()=>[d("Customer Information")]),_:1},8,["to"]),d("  >  "),o(i,{to:""},{default:a(()=>[d("Shipping")]),_:1})]),I,e("div",$,[e("div",C,[r(e("input",{type:"radio","onUpdate:modelValue":s[0]||(s[0]=n=>l.selectedValue=n),name:"shipping",value:"UPS Ground",class:"mr-[5px]"},null,512),[[c,l.selectedValue]]),N]),Q]),e("div",q,[e("div",D,[r(e("input",{type:"radio","onUpdate:modelValue":s[1]||(s[1]=n=>l.selectedValue=n),name:"shipping",value:"UPS 3-day",class:"mr-[5px]"},null,512),[[c,l.selectedValue]]),G]),A]),e("div",B,[e("div",R,[r(e("input",{type:"radio","onUpdate:modelValue":s[2]||(s[2]=n=>l.selectedValue=n),name:"shipping",value:"UPS 2-day",class:"mr-[5px]"},null,512),[[c,l.selectedValue]]),E]),M]),e("div",T,[e("div",L,[r(e("input",{type:"radio","onUpdate:modelValue":s[3]||(s[3]=n=>l.selectedValue=n),name:"shipping",value:"UPS Next-day",class:"mr-[5px]"},null,512),[[c,l.selectedValue]]),z]),F]),H,e("div",J,[o(i,{class:"h-full flex items-center",to:`/checkout/product=${t.getId}/quantity=${t.getQtd}`},{default:a(()=>[d("< Return to Customer Information")]),_:1},8,["to"]),o(i,{class:"w-[35%] h-full border-2 border-solid border-black flex justify-center items-center bg-sky-500 text-white",to:`/shipping/product=${t.getId}/quantity=${t.getQtd}`},{default:a(()=>[d("Continue to Payment Method")]),_:1},8,["to"])])])]),e("div",K,[e("div",O,[W,e("div",X,[Y,e("span",null,"$"+p(t.subtotal),1)]),e("div",Z,[ee,e("span",null,"$"+p(t.priceShipping),1)]),te,e("div",se,[le,e("span",null,"$"+p(t.total),1)])])])])])])}const ne=h(w,[["render",ie]]),de={components:{Shipping:ne}};function oe(u,s,f,v,l,t){const i=_("Shipping");return m(),g(i)}const re=h(de,[["render",oe]]);export{re as default};
