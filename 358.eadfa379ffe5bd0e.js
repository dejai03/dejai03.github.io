"use strict";(self.webpackChunkDDE_FE=self.webpackChunkDDE_FE||[]).push([[358],{358:(A,u,i)=>{i.r(u),i.d(u,{SaleModule:()=>b});var g=i(9808),p=i(6671),_=i(6430),C=i(5861),s=i(9646),h=i(62),t=i(1223),M=i(6941),l=i(2382);function P(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",30)(1,"div",31),t._UZ(2,"img",32),t.qZA(),t.TgZ(3,"div",33)(4,"div")(5,"div",34)(6,"small")(7,"b"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",35)(10,"b"),t._uU(11),t.qZA()(),t.TgZ(12,"div")(13,"small"),t._uU(14),t.qZA()()()(),t.TgZ(15,"div",36),t._uU(16),t.qZA(),t.TgZ(17,"div",37),t._uU(18),t.qZA(),t.TgZ(19,"div",38)(20,"button",39),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw().addCart(a)}),t._uU(21,"CART"),t.qZA()()()}if(2&o){const n=r.$implicit;t.xp6(2),t.Q6J("src",n.src,t.LSH),t.xp6(6),t.Oqu(n.brand),t.xp6(3),t.Oqu(n.name),t.xp6(3),t.Oqu(n.category),t.xp6(2),t.Oqu(n.unit),t.xp6(2),t.hij("\u20b9",n.sellPrice,"")}}function O(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",30)(1,"div",40),t._UZ(2,"img",32),t.qZA(),t.TgZ(3,"div",41),t._uU(4),t.qZA(),t.TgZ(5,"div",42),t._uU(6),t.qZA(),t.TgZ(7,"div",43),t._uU(8),t.qZA(),t.TgZ(9,"div",44),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw().addQuantity(a)}),t.TgZ(10,"i",7),t._uU(11,"add"),t.qZA()(),t.TgZ(12,"div",45)(13,"input",46),t.NdJ("input",function(c){const d=t.CHM(n).$implicit;return t.oxw().insertQuantity(c,d)}),t.qZA()(),t.TgZ(14,"div",44),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw().removeQuantity(a)}),t.TgZ(15,"i",7),t._uU(16,"remove"),t.qZA()(),t.TgZ(17,"div",47),t._uU(18),t.qZA(),t.TgZ(19,"div",48),t.NdJ("click",function(){const a=t.CHM(n).index;return t.oxw().deleteCartItem(a)}),t.TgZ(20,"i",7),t._uU(21,"delete"),t.qZA()()()}if(2&o){const n=r.$implicit;t.xp6(2),t.Q6J("src",n.src,t.LSH),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.unit),t.xp6(2),t.hij("\u20b9",n.sellPrice,""),t.xp6(5),t.Q6J("value",n.quantity),t.xp6(5),t.hij("\u20b9",n.totalQuantityPrice,"")}}function f(o,r){1&o&&(t.TgZ(0,"div"),t._UZ(1,"pnf",49),t.qZA()),2&o&&(t.xp6(1),t.Q6J("msg","Please select items for cart.."))}function x(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",16)(1,"input",50),t.NdJ("ngModelChange",function(c){return t.CHM(n),t.oxw().paidAmount=c}),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngModel",n.paidAmount)}}const v=function(o){return{inactive:o}};let m=(()=>{class o{constructor(n,e){this.CS=n,this.notifier=e,this.cartProducts=Array(),this.grandTotal=0,this.billNo="1",this.paymentMethord="0",this.sellTo="",this.paidAmount=0,this.filterProduct=(0,s.of)([])}ngOnInit(){this.initFilter()}generateBillNo(){const n=new Date,e=n.getHours()*n.getDate()+n.getMilliseconds()+(n.getMonth()+1)+n.getMinutes()+n.getFullYear()+Math.random();return Math.floor(e).toString()}initFilter(){var n=this;return(0,C.Z)(function*(){yield n.CS.getProducts(),n.CS.products.subscribe(e=>{n.filterProduct=(0,s.of)(e)})})()}addCart(n){this.cartProducts.filter(e=>e.id==n.id).length>0?n.quantity++:this.cartProducts.push(n),this.calculateTotalQuantityPrice(n),this.calculateGrandTotal()}insertQuantity(n,e){const c=parseInt(n.target.value);e.quantity=c<1||isNaN(c)?1:e.totalStock>c?c:+e.totalStock,this.calculateTotalQuantityPrice(e),this.calculateGrandTotal()}addQuantity(n){n.quantity=n.inStock==n.quantity?n.quantity:+n.quantity+1,this.calculateTotalQuantityPrice(n),this.calculateGrandTotal()}removeQuantity(n){n.quantity=1==n.quantity?n.quantity:+n.quantity-1,this.calculateTotalQuantityPrice(n),this.calculateGrandTotal()}deleteCartItem(n){this.resetProduct(this.cartProducts[n]),this.cartProducts.splice(n,1),this.calculateGrandTotal()}calculateTotalQuantityPrice(n){n.totalQuantityPrice=n.sellPrice*n.quantity}calculateGrandTotal(){this.grandTotal=0,this.cartProducts.forEach(n=>{this.grandTotal=this.grandTotal+n.totalQuantityPrice})}resetProduct(n){n?(n.quantity=1,n.totalQuantityPrice=0):this.cartProducts.forEach(e=>{e.quantity=1,e.totalQuantityPrice=0})}searchByKey(n){const e=n.target.value.toUpperCase();this.CS.products.subscribe(c=>{this.filterProduct=(0,s.of)(c.filter(a=>a.name.toUpperCase().includes(e)||a.brand.toUpperCase().includes(e)||a.category.toUpperCase().includes(e)||a.unit.toUpperCase().includes(e)||a.sellPrice==e))})}newCart(){this.resetProduct(),this.cartProducts=[],this.paymentMethord="0",this.sellTo="",this.paidAmount=0}sell(){var n=this;return(0,C.Z)(function*(){const e=new Date;let c=new h.KM;c.dateOfSell=e,c.billNo=n.generateBillNo(),c.refID=n.generateBillNo(),c.productDetails=[],c.grandTotal=n.grandTotal,c.paymentMethord=n.paymentMethord,c.paidAmount="due"!=n.paymentMethord?n.grandTotal:+n.paidAmount,c.sellTo=n.sellTo.toUpperCase(),n.cartProducts.forEach(a=>{c.productDetails.push(a)}),yield n.CS.sellCart(JSON.parse(JSON.stringify(c))),n.notifier.notify("success","Cart Items Sold Successfully"),n.newCart()})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h.v_),t.Y36(M.lG))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sales-home"]],decls:60,vars:13,consts:[[1,"container","g-2-3","defailt-padding"],[1,"content"],[1,"search-content"],[1,"search-box","h-align"],[1,"control"],["type","text","placeholder","Search here...",3,"input"],[1,"center-align"],[1,"material-icons"],[1,"search-list"],["class","card",4,"ngFor","ngForOf"],[1,"cart-content"],[1,"heading"],[1,"cart-head"],[1,"cart-item-list"],[4,"ngIf"],[1,"total-summary"],[1,"controls"],["type","text","placeholder","Enter cart owner",3,"ngModel","ngModelChange"],[1,"filter"],[3,"ngModel","ngModelChange"],["selected","","value","0"],["value","cash"],["value","online"],["value","due"],["class","controls",4,"ngIf"],[1,"action"],[3,"click"],[3,"disabled","ngClass","click"],[1,"detail"],[1,"label"],[1,"card"],[1,"image","v-align"],["onerror","this.src='assets/images/icons/DDE-d.png';","alt","",3,"src"],[1,"name","v-align"],[1,"brand"],[1,"title"],[1,"unit","v-align"],[1,"price","v-align"],[1,"action","center-align"],[1,"center-align",3,"click"],[1,"image"],[1,"name"],[1,"unit"],[1,"price"],[1,"add",3,"click"],[1,"quantity"],["type","text","onkeypress","return event.charCode >= 48 && event.charCode <= 57",3,"value","input"],[1,"t-price"],[1,"delete",3,"click"],[3,"msg"],["type","text","onkeypress","return event.charCode >= 48 && event.charCode <= 57","placeholder","Total Paid",3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"input",5),t.NdJ("input",function(a){return e.searchByKey(a)}),t.qZA()(),t.TgZ(6,"div",6)(7,"i",7),t._uU(8,"search"),t.qZA()()(),t.TgZ(9,"div",8),t.YNc(10,P,22,6,"div",9),t.ALo(11,"async"),t._UZ(12,"br")(13,"br")(14,"br")(15,"br"),t.qZA()()(),t.TgZ(16,"div",1)(17,"div",10)(18,"div",11),t._uU(19,"Cart Items"),t.qZA(),t.TgZ(20,"div",12),t._UZ(21,"div"),t.TgZ(22,"div"),t._uU(23,"Name"),t.qZA(),t.TgZ(24,"div"),t._uU(25,"Unit"),t.qZA(),t.TgZ(26,"div"),t._uU(27,"Price"),t.qZA(),t.TgZ(28,"div"),t._uU(29,"Quantity"),t.qZA(),t.TgZ(30,"div"),t._uU(31,"Total"),t.qZA(),t._UZ(32,"div"),t.qZA(),t.TgZ(33,"div",13),t.YNc(34,O,22,6,"div",9),t.YNc(35,f,2,1,"div",14),t.qZA(),t.TgZ(36,"div",15)(37,"div",16)(38,"input",17),t.NdJ("ngModelChange",function(a){return e.sellTo=a}),t.qZA()(),t.TgZ(39,"div",18)(40,"select",19),t.NdJ("ngModelChange",function(a){return e.paymentMethord=a}),t.TgZ(41,"option",20),t._uU(42,"Payment Methord"),t.qZA(),t.TgZ(43,"option",21),t._uU(44,"Cash"),t.qZA(),t.TgZ(45,"option",22),t._uU(46,"Online"),t.qZA(),t.TgZ(47,"option",23),t._uU(48,"Due"),t.qZA()()(),t.YNc(49,x,2,1,"div",24),t.TgZ(50,"div",25)(51,"button",26),t.NdJ("click",function(){return e.newCart()}),t._uU(52,"NEW"),t.qZA(),t.TgZ(53,"button",27),t.NdJ("click",function(){return e.sell()}),t._uU(54,"SELL"),t.qZA()(),t.TgZ(55,"div",28)(56,"div",29),t._uU(57,"Total Amount : "),t.qZA(),t.TgZ(58,"div"),t._uU(59),t.qZA()()()()()()),2&n&&(t.xp6(10),t.Q6J("ngForOf",t.lcZ(11,9,e.filterProduct)),t.xp6(24),t.Q6J("ngForOf",e.cartProducts),t.xp6(1),t.Q6J("ngIf",0==e.cartProducts.length),t.xp6(3),t.Q6J("ngModel",e.sellTo),t.xp6(2),t.Q6J("ngModel",e.paymentMethord),t.xp6(9),t.Q6J("ngIf","due"==e.paymentMethord),t.xp6(4),t.Q6J("disabled",""==e.sellTo||0==e.cartProducts.length||"0"==e.paymentMethord)("ngClass",t.VKq(11,v,"0"==e.paymentMethord||""==e.sellTo||0==e.cartProducts.length)),t.xp6(6),t.hij("\u20b9",e.grandTotal,""))},directives:[g.sg,g.O5,_.r,l.Fj,l.JJ,l.On,l.EJ,l.YN,l.Kr,g.mk],pipes:[g.Ov],styles:[".container[_ngcontent-%COMP%]{height:94%;column-gap:8px}.content[_ngcontent-%COMP%]{height:87.5vh;border:1px solid #1976d23b;background:#9eb2c538}.search-content[_ngcontent-%COMP%]{height:100%}.search-box[_ngcontent-%COMP%]{padding:5px;background:#cac6c6b3;width:93%;border-radius:3px;border:1px solid #a5a3a3;margin:10px}.search-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{width:95%;margin-right:auto}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:calc(100% - 25px);height:30px;border:none;outline:none;border-radius:1px;font-size:20px;padding:0 10px;color:#4a4a4a;border-right:1px solid #a5a3a3}.search-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%]{font-size:28px;font-weight:600;color:#ee0404}.search-list[_ngcontent-%COMP%]{padding:0% 15px 0 10px;height:calc(100% - 50px);overflow:auto;margin-top:10px}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:grid;grid-template-columns:60px 2fr 1fr 1fr 50px;margin-bottom:5px;background:#dfdcdcb3;border-radius:5px;padding:5px 10px;grid-column-gap:10px;column-gap:10px;border:1px solid #2469ac78;border-left:5px solid #2469ac}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:60px;height:60px}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#1976d2}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#4a4a4a}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-weight:600;font-size:18px;color:gray}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:max-content;border:none;outline:none;background-color:#c40000e6;color:#fff;padding:5px 20px;font-weight:600;font-size:18px;border-radius:2px;cursor:pointer;transition:all .3s ease-in-out}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px;font-weight:400}.search-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f10000}.cart-content[_ngcontent-%COMP%]{padding:0 0 0 2%}.cart-content[_ngcontent-%COMP%]   .cart-item-list[_ngcontent-%COMP%]{height:calc(100vh - 231px);overflow:auto;padding-right:10px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-right:6%}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{margin-right:10px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100px;height:32px;outline:none;border:1px solid #b0adad;color:#4a4a4a;border-radius:2px;padding:0 10px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{margin-right:10px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:32px;outline:none;border:1px solid #b0adad;color:#4a4a4a;border-radius:2px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:6px 15px;margin-right:10px;color:#fff;border:none;outline:none;cursor:pointer;font-weight:600;font-size:15px;letter-spacing:1px;border-radius:2px}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(odd){background:#165da3}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(even){background:#9a0000}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#1976d2}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]{background:#bbbcbd!important}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:20px;font-weight:900;color:#1976d2}.cart-content[_ngcontent-%COMP%]   .total-summary[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-right:20px;color:#4a4a4a;font-weight:600;font-size:15px}.cart-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#f10000;font-weight:800;text-transform:uppercase;line-height:2}.cart-content[_ngcontent-%COMP%]   .cart-head[_ngcontent-%COMP%], .cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:grid;grid-column-gap:1px;column-gap:1px;text-align:center}.cart-content[_ngcontent-%COMP%]   .cart-head[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:#165da3;padding:4px 0;color:#fff;border:1px solid #1f63a5}.cart-content[_ngcontent-%COMP%]   .cart-head[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin-right:11px;grid-template-columns:60px 2fr 1fr 1fr 110px 1fr 40px}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(odd){background:#a4aff029;border:1px solid #8190f3}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(even){background:#f66a6a1f;border:1px solid #f24040c4}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{grid-template-columns:40px 2fr 1fr 1fr 30px 50px 30px 1fr 30px;padding:2px 10px;margin:2px 0;border-radius:2px}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:40px;width:40px}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;text-align:center}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], .cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .t-price[_ngcontent-%COMP%]{font-weight:800;color:#4a4a4a}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-weight:600}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{cursor:pointer}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff;background:#1976d2}.cart-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] > .material-icons[_ngcontent-%COMP%]{color:red}.no-item-in-cart[_ngcontent-%COMP%]{width:90%;height:85%;margin:5% auto auto;border:1px solid #1976d2;background:#a7c4e038;color:#4a4a4a;font-size:25px;font-weight:600;display:flex;justify-content:center;align-items:center}"]}),o})();const y=[{path:"",component:m},{path:"home",component:m},{path:"**",component:_.r}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(y)],p.Bz]}),o})();var Z=i(294);let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,l.u5,T,Z.I]]}),o})()}}]);