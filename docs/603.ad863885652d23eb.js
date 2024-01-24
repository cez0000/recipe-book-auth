"use strict";(self.webpackChunkRecipeBookAuth=self.webpackChunkRecipeBookAuth||[]).push([[603],{9603:(y,p,o)=>{o.r(p),o.d(p,{ShoppingListModule:()=>Z});var r=o(95),l=o(2895),g=o(6208),t=o(4946),u=o(600),h=o(9002),m=o(6814),f=o(2391);const v=["f"];function b(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onDelete())}),t._uU(1,"Delete"),t.qZA()}}let S=(()=>{class n{constructor(e){this.slService=e,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(e=>{this.editedItemIndex=e,this.editMode=!0,this.editedItem=this.slService.getIngredient(e),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(e){const i=e.value,s=new f.o(i.name,i.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,s):this.slService.addIngredient(s),this.editMode=!1,e.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(u._))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-edit"]],viewQuery:function(i,s){if(1&i&&t.Gf(v,5),2&i){let c;t.iGM(c=t.CRH())&&(s.slForm=c.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",2,"margin-right","5px",3,"disabled"],["class","btn btn-danger","type","button","style","margin-right: 5px;",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",2,"margin-right","5px",3,"click"]],template:function(i,s){if(1&i){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(c);const _=t.MAs(3);return t.KtG(s.onSubmit(_))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,b,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return s.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&i){const c=t.MAs(3);t.xp6(15),t.Q6J("disabled",!c.valid),t.xp6(1),t.Oqu(s.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",s.editMode)}},dependencies:[m.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.c5,r.On,r.F]})}return n})();function C(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const c=t.CHM(e).index,d=t.oxw();return t.KtG(d.onEditItem(c))}),t._uU(1),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(1),t.AsE(" ",e.name," (",e.amount,") ")}}let I=(()=>{class n{constructor(e,i){this.slService=e,this.loggingService=i}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(e=>{this.ingredients=e}),this.loggingService.printLog("hello shoping list")}onEditItem(e){this.slService.startedEditing.next(e)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(u._),t.Y36(h.e))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,C,2,2,"a",3),t.qZA()()()),2&i&&(t.xp6(5),t.Q6J("ngForOf",s.ingredients))},dependencies:[m.sg,S]})}return n})(),Z=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[g.m,r.u5,l.Bz.forChild([{path:"",component:I}]),l.Bz]})}return n})()}}]);