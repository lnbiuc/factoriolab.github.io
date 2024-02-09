"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[592],{3299:(y,_,a)=>{a.d(_,{F:()=>K});var t=a(5879),g=a(4221),m=a(7328),c=a(2572),f=a(7398),d=a(8528),i=a(6814),u=a(6223),b=a(5219),T=a(4190),Z=a(707),A=a(4055),M=a(4480),h=a(1764),x=a(9515);let E=(()=>{var e;class o{constructor(){this.translateSvc=(0,t.f3M)(x.sK),this.pTable=(0,t.f3M)(h.iA,{self:!0})}ngOnInit(){this.pTable.styleClass="p-datatable-sm",this.pTable.rows=10,this.pTable.rowsPerPageOptions=[10,25,50,100,250],this.pTable.showCurrentPageReport=!0,this.pTable.currentPageReportTemplate=this.translateSvc.instant("data.currentPageReportTemplate")}}return(e=o).\u0275fac=function(l){return new(l||e)},e.\u0275dir=t.lG2({type:e,selectors:[["","labPagedTable",""]]}),o})();var I=a(3689);function L(e,o){1&e&&(t.TgZ(0,"th",8)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"p-sortIcon",9),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"data.category")))}function D(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"p-multiSelect",13),t.NdJ("onChange",function(s){const r=t.CHM(n).filterCallback;return t.KtG(r(s.value))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.qZA()}if(2&e){const n=o.$implicit,l=t.oxw(4).ngIf;t.Q6J("ngModel",n)("options",l.options.categories)("maxSelectedLabels",1)("selectedItemsLabel",t.lcZ(1,5,"data.selectedLabel"))("placeholder",t.lcZ(2,7,"data.any"))}}function O(e,o){1&e&&(t.TgZ(0,"th")(1,"p-columnFilter",11),t.YNc(2,D,3,9,"ng-template",12),t.qZA()())}function U(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"th"),t._UZ(2,"p-columnFilter",10),t.qZA(),t.YNc(3,O,3,0,"th",7),t.qZA()),2&e){const n=t.oxw(2).ngIf;t.xp6(3),t.Q6J("ngIf","category"!==n.type)}}function R(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"th",4)(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"p-sortIcon",5),t.qZA(),t.YNc(6,L,5,3,"th",6),t.qZA(),t.YNc(7,U,4,1,"tr",7)),2&e){const n=t.oxw().ngIf;t.xp6(3),t.Oqu(t.lcZ(4,3,"data.name")),t.xp6(3),t.Q6J("ngIf","category"!==n.type),t.xp6(1),t.Q6J("ngIf",n.value.length>10)}}function S(e,o){if(1&e&&(t.TgZ(0,"a",14),t._UZ(1,"button",15),t.ALo(2,"iconSmClass"),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.Q6J("routerLink","/data/categories/"+n.category.id),t.xp6(1),t.Q6J("label",n.category.name)("icon",t.xi3(2,3,n.category.id,"category"))}}function J(e,o){if(1&e&&(t.TgZ(0,"td"),t.YNc(1,S,3,6,"a",16),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.category)}}function $(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td")(2,"a",14),t._UZ(3,"button",15),t.ALo(4,"iconSmClass"),t.qZA()(),t.YNc(5,J,2,1,"td",7),t.qZA()),2&e){const n=o.$implicit,l=t.oxw().ngIf;t.xp6(2),t.Q6J("routerLink",l.route+n.id),t.xp6(1),t.Q6J("label",n.name)("icon",t.xi3(4,4,n.id,l.type)),t.xp6(2),t.Q6J("ngIf","category"!==l.type)}}const F=function(){return["category.id"]};function Q(e,o){if(1&e&&(t.TgZ(0,"p-table",1),t.YNc(1,R,8,5,"ng-template",2),t.YNc(2,$,6,7,"ng-template",3),t.qZA()),2&e){const n=o.ngIf;t.Q6J("value",n.value)("paginator",n.value.length>10)("globalFilterFields",t.DdM(3,F))}}let K=(()=>{var e;class o{constructor(){this.store=(0,t.f3M)(g.yh),this.useRelativePath=!1,this.ids$=new m.t,this.type$=new m.t,this.vm$=(0,c.a)([this.ids$,this.type$,this.store.select(d.Zr.FW),this.store.select(d.Zr.pY)]).pipe((0,f.U)(([l,s,p,r])=>({type:s,value:this.getValue(l,s,r),route:this.getCollectionRoute(s),options:p})))}set ids(l){this.ids$.next(l)}set type(l){this.type$.next(l)}getCollectionRoute(l){if(this.useRelativePath)return"";switch(l){case"category":return"/data/categories/";case"item":return"/data/items/";case"recipe":return"/data/recipes/"}}getValue(l,s,p){if(null==l)return[];let r;switch(s){case"category":r=p.categoryEntities;break;case"item":r=p.itemEntities;break;case"recipe":r=p.recipeEntities}return l.filter(v=>r[v]).map(v=>{const C=r[v],P={id:C.id,name:C.name};return"category"!==s&&(P.category=p.categoryEntities[C.category]),P})}}return(e=o).\u0275fac=function(l){return new(l||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["lab-collection-table"]],inputs:{ids:"ids",type:"type",useRelativePath:"useRelativePath"},decls:2,vars:3,consts:[["labPagedTable","",3,"value","paginator","globalFilterFields",4,"ngIf"],["labPagedTable","",3,"value","paginator","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","category.name",4,"ngIf"],[4,"ngIf"],["pSortableColumn","category.name"],["field","category.name"],["type","text","field","name","matchMode","contains"],["field","category.id","matchMode","in"],["pTemplate","filter"],["appendTo","body",3,"ngModel","options","maxSelectedLabels","selectedItemsLabel","placeholder","onChange"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label","icon"],["queryParamsHandling","preserve",3,"routerLink",4,"ngIf"]],template:function(l,s){1&l&&(t.YNc(0,Q,3,4,"p-table",0),t.ALo(1,"async")),2&l&&t.Q6J("ngIf",t.lcZ(1,1,s.vm$))},dependencies:[i.O5,u.JJ,u.On,b.jx,T.rH,Z.Hq,A.NU,M.H,h.iA,h.lQ,h.fz,h.xl,E,i.Ov,x.X$,I.y],styles:["th[_ngcontent-%COMP%]{width:50%}"],changeDetection:0}),o})()},7636:(y,_,a)=>{a.d(_,{r:()=>d});var t=a(6814),g=a(1254),m=a(6538),c=a(5879);a(3299);let d=(()=>{var i;class u{}return(i=u).\u0275fac=function(T){return new(T||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[t.ez,g.o,m.S]}),u})()},7927:(y,_,a)=>{a.d(_,{J:()=>f});var t=a(5879),g=a(4190),m=a(9515),c=a(7398);class f{constructor(){this.route=(0,t.f3M)(g.gz),this.translateSvc=(0,t.f3M)(m.sK),this.id$=this.route.params.pipe((0,c.U)(i=>i.id)),this.detail$=this.route.data.pipe((0,c.U)(i=>i)),this.parent$=this.detail$.pipe((0,c.U)(i=>({label:this.translateSvc.instant(i.collectionLabel??"none"),routerLink:"..",queryParamsHandling:"preserve"})))}}}}]);