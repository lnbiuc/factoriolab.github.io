"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[592],{4352:(T,m,n)=>{n.d(m,{F:()=>Q});var c=n(7328),g=n(2572),_=n(7398),d=n(8528),t=n(5879),i=n(4221),h=n(6814),b=n(6223),y=n(5219),x=n(4190),Z=n(707),A=n(4055),P=n(4480),u=n(1764),v=n(9515);let I=(()=>{class a{constructor(e,o){this.pTable=e,this.translateSvc=o}ngOnInit(){this.pTable.styleClass="p-datatable-sm",this.pTable.rows=10,this.pTable.rowsPerPageOptions=[10,25,50,100,250],this.pTable.showCurrentPageReport=!0,this.pTable.currentPageReportTemplate=this.translateSvc.instant("data.currentPageReportTemplate")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.iA,2),t.Y36(v.sK))},a.\u0275dir=t.lG2({type:a,selectors:[["","labPagedTable",""]]}),a})();var L=n(3689);function E(a,l){1&a&&(t.TgZ(0,"th",8)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"p-sortIcon",9),t.qZA()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"data.category")))}function M(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"p-multiSelect",13),t.NdJ("onChange",function(s){const p=t.CHM(e).filterCallback;return t.KtG(p(s.value))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.qZA()}if(2&a){const e=l.$implicit,o=t.oxw(4).ngIf;t.Q6J("ngModel",e)("options",o.options.categories)("maxSelectedLabels",1)("selectedItemsLabel",t.lcZ(1,5,"data.selectedLabel"))("placeholder",t.lcZ(2,7,"data.any"))}}function D(a,l){1&a&&(t.TgZ(0,"th")(1,"p-columnFilter",11),t.YNc(2,M,3,9,"ng-template",12),t.qZA()())}function O(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"th"),t._UZ(2,"p-columnFilter",10),t.qZA(),t.YNc(3,D,3,0,"th",7),t.qZA()),2&a){const e=t.oxw(2).ngIf;t.xp6(3),t.Q6J("ngIf","category"!==e.type)}}function S(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"th",4)(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"p-sortIcon",5),t.qZA(),t.YNc(6,E,5,3,"th",6),t.qZA(),t.YNc(7,O,4,1,"tr",7)),2&a){const e=t.oxw().ngIf;t.xp6(3),t.Oqu(t.lcZ(4,3,"data.name")),t.xp6(3),t.Q6J("ngIf","category"!==e.type),t.xp6(1),t.Q6J("ngIf",e.value.length>10)}}function J(a,l){if(1&a&&(t.TgZ(0,"a",14),t._UZ(1,"button",15),t.ALo(2,"iconSmClass"),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.Q6J("routerLink","/data/categories/"+e.category.id),t.xp6(1),t.Q6J("label",e.category.name)("icon",t.xi3(2,3,e.category.id,"category"))}}function U(a,l){if(1&a&&(t.TgZ(0,"td"),t.YNc(1,J,3,6,"a",16),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.category)}}function $(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"a",14),t._UZ(3,"button",15),t.ALo(4,"iconSmClass"),t.qZA()(),t.YNc(5,U,2,1,"td",7),t.qZA()),2&a){const e=l.$implicit,o=t.oxw().ngIf;t.xp6(2),t.Q6J("routerLink",o.route+e.id),t.xp6(1),t.Q6J("label",e.name)("icon",t.xi3(4,4,e.id,o.type)),t.xp6(2),t.Q6J("ngIf","category"!==o.type)}}const R=function(){return["category.id"]};function F(a,l){if(1&a&&(t.TgZ(0,"p-table",1),t.YNc(1,S,8,5,"ng-template",2),t.YNc(2,$,6,7,"ng-template",3),t.qZA()),2&a){const e=l.ngIf;t.Q6J("value",e.value)("paginator",e.value.length>10)("globalFilterFields",t.DdM(3,R))}}let Q=(()=>{class a{set ids(e){this.ids$.next(e)}set type(e){this.type$.next(e)}constructor(e){this.store=e,this.useRelativePath=!1,this.ids$=new c.t,this.type$=new c.t,this.vm$=(0,g.a)([this.ids$,this.type$,this.store.select(d.Zr.FW),this.store.select(d.Zr.pY)]).pipe((0,_.U)(([o,s,r,p])=>({type:s,value:this.getValue(o,s,p),route:this.getCollectionRoute(s),options:r})))}getCollectionRoute(e){if(this.useRelativePath)return"";switch(e){case"category":return"/data/categories/";case"item":return"/data/items/";case"recipe":return"/data/recipes/"}}getValue(e,o,s){if(null==e)return[];let r;switch(o){case"category":r=s.categoryEntities;break;case"item":r=s.itemEntities;break;case"recipe":r=s.recipeEntities}return e.filter(p=>r[p]).map(p=>{const f=r[p],C={id:f.id,name:f.name};return"category"!==o&&(C.category=s.categoryEntities[f.category]),C})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["lab-collection-table"]],inputs:{ids:"ids",type:"type",useRelativePath:"useRelativePath"},decls:2,vars:3,consts:[["labPagedTable","",3,"value","paginator","globalFilterFields",4,"ngIf"],["labPagedTable","",3,"value","paginator","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","category.name",4,"ngIf"],[4,"ngIf"],["pSortableColumn","category.name"],["field","category.name"],["type","text","field","name","matchMode","contains"],["field","category.id","matchMode","in"],["pTemplate","filter"],["appendTo","body",3,"ngModel","options","maxSelectedLabels","selectedItemsLabel","placeholder","onChange"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label","icon"],["queryParamsHandling","preserve",3,"routerLink",4,"ngIf"]],template:function(e,o){1&e&&(t.YNc(0,F,3,4,"p-table",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.vm$))},dependencies:[h.O5,b.JJ,b.On,y.jx,x.rH,Z.Hq,A.NU,P.H,u.iA,u.lQ,u.fz,u.xl,I,h.Ov,v.X$,L.y],styles:["th[_ngcontent-%COMP%]{width:50%}"],changeDetection:0}),a})()},7636:(T,m,n)=>{n.d(m,{r:()=>t});var c=n(6814),g=n(1254),_=n(5879);n(4352);let t=(()=>{class i{}return i.\u0275fac=function(b){return new(b||i)},i.\u0275mod=_.oAB({type:i}),i.\u0275inj=_.cJS({imports:[c.ez,g.o]}),i})()},7927:(T,m,n)=>{n.d(m,{J:()=>g});var c=n(7398);class g{constructor(d,t){this.route=d,this.translateSvc=t,this.id$=this.route.params.pipe((0,c.U)(i=>i.id)),this.detail$=this.route.data.pipe((0,c.U)(i=>i)),this.parent$=this.detail$.pipe((0,c.U)(i=>({label:this.translateSvc.instant(i.collectionLabel??"none"),routerLink:"..",queryParamsHandling:"preserve"})))}}}}]);