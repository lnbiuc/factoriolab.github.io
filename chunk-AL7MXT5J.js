import{$ as M,Ac as E,Ba as m,Bc as j,Bd as T,Cd as h,Ce as Z,De as ee,Ea as k,Fa as C,Jd as z,Je as te,Ka as l,Kd as N,La as s,Ma as u,Me as ie,Oa as x,Pa as f,Qa as p,Rc as A,Tb as O,Td as $,Ub as P,Wa as B,Wd as J,Xa as S,Xc as D,Ya as w,_ as b,ae as K,bc as I,be as Q,db as R,dd as F,ea as _,fa as g,g as y,he as W,id as U,jd as G,kb as d,lb as c,md as H,pa as V,pc as L,qd as q,qe as X,ra as a,xe as Y,za as v}from"./chunk-GWLOS4WS.js";function ne(i,r){if(i&1&&(l(0,"div",19),u(1,"i",20),d(2,"iconSmClass"),l(3,"span",21),S(4),d(5,"translate"),s()()),i&2){let e=r;a(),k(c(2,3,e.icon)),a(3),w(c(5,5,e.label))}}function oe(i,r){if(i&1&&v(0,ne,6,7,"div",19),i&2){let e,t=p(2);C((e=t.gameInfo[t.data().game])?0:-1,e)}}function ae(i,r){if(i&1&&(l(0,"div",19),u(1,"i"),d(2,"iconSmClass"),l(3,"span",21),S(4),d(5,"translate"),s()()),i&2){let e=r;a(),k(c(2,3,e.icon)),a(3),w(c(5,5,e.label))}}function re(i,r){if(i&1&&v(0,ae,6,7,"div",19),i&2){let e,t=r.$implicit,n=p(2);C((e=n.gameInfo[t.value])?0:-1,e)}}function le(i,r){if(i&1){let e=x();l(0,"p-dropdown",22),f("onChange",function(n){_(e);let o=p(2);return g(o.setMod(n.value))}),s()}if(i&2){let e=p(2);m("filter",!0)("autofocusFilter",!e.contentSvc.isMobile())("ngModel",e.settings().modId)("options",e.modOptions())}}function se(i,r){i&1&&u(0,"p-divider")}function pe(i,r){if(i&1){let e=x();l(0,"span",14)(1,"span",23),u(2,"i",24),s(),l(3,"p-dropdown",25),d(4,"translate"),f("onChange",function(n){_(e);let o=p(2);return g(o.setState(o.preferences().states[o.data().game][n.value]))}),s()()}if(i&2){let e=p(2);a(3),m("placeholder",c(4,2,"landing.loadSavedState"))("options",e.savedStates())}}function de(i,r){if(i&1){let e=x();l(0,"button",26),d(1,"translate"),f("click",function(){_(e);let n=p(2);return g(n.router.navigateByUrl(n.BrowserUtility.routerState))}),s()}i&2&&m("label",c(1,1,"landing.loadLastState"))}function ce(i,r){if(i&1){let e=x();l(0,"p-card")(1,"div",3)(2,"div",4),u(3,"img",5),s(),u(4,"div",6),d(5,"translate"),l(6,"p-dropdown",7),f("onChange",function(n){_(e);let o=p();return g(o.setGame(n.value))}),v(7,oe,1,1,"ng-template",8)(8,re,1,1,"ng-template",9),s(),v(9,le,1,4,"p-dropdown",10),l(10,"button",11),d(11,"translate"),f("click",function(){_(e);let n=B(15),o=p();return g(n.clickOpen("item",o.itemIds()))}),s(),l(12,"button",12),d(13,"translate"),f("click",function(){_(e);let n=B(18),o=p();return g(n.clickOpen("recipe",o.recipeIds()))}),s(),l(14,"lab-picker",13,0),d(16,"translate"),f("selectId",function(n){_(e);let o=p();return g(o.selectItem(n))}),s(),l(17,"lab-picker",13,1),d(19,"translate"),f("selectId",function(n){_(e);let o=p();return g(o.selectRecipe(n))}),s(),v(20,se,1,0,"p-divider")(21,pe,5,4,"span",14)(22,de,2,3,"button",15),u(23,"p-divider")(24,"button",16),d(25,"translate"),u(26,"button",17),d(27,"translate"),l(28,"p-checkbox",18),d(29,"translate"),f("onChange",function(n){_(e);let o=p();return g(o.setBypassLanding(n.checked))}),s()()()}if(i&2){let e=p();a(4),m("innerHTML",c(5,16,"landing.welcome"),V),a(2),m("ngModel",e.data().game)("options",e.gameOptions),a(3),C(e.data().game===e.Game.Factorio?9:-1),a(),m("label",c(11,18,"landing.addItems")),a(2),m("label",c(13,20,"landing.addMachines")),a(2),m("header",c(16,22,"landing.selectAnItem")),a(3),m("header",c(19,24,"landing.selectARecipe")),a(3),C(e.savedStates().length||e.BrowserUtility.routerState?20:-1),a(),C(e.savedStates().length?21:-1),a(),C(e.BrowserUtility.routerState?22:-1),a(2),m("label",c(25,26,"landing.help")),a(2),m("label",c(27,28,"landing.skip")),a(2),m("binary",!0)("label",c(29,30,"landing.bypass"))("ngModel",e.preferences().bypassLanding)}}function me(i,r){i&1&&u(0,"p-progressSpinner")}var Ae=(()=>{let r=class r{constructor(){this.router=b(E),this.contentSvc=b(H),this.store=b(A),this.routerSvc=b($),this.itemIds=this.store.selectSignal(z.getAvailableItems),this.settings=this.store.selectSignal(h.getSettings),this.modOptions=this.store.selectSignal(h.getModOptions),this.data=this.store.selectSignal(h.getDataset),this.mod=this.store.selectSignal(h.getMod),this.recipeIds=this.store.selectSignal(h.getAvailableRecipes),this.savedStates=this.store.selectSignal(h.getSavedStates),this.preferences=this.store.selectSignal(T.preferencesState),this.gameInfo=L,this.gameOptions=P,this.Game=O,this.BrowserUtility=q}selectItem(t){return y(this,null,function*(){yield this.router.navigate(["list"]),this.addItemObjective(t)})}selectRecipe(t){return y(this,null,function*(){yield this.router.navigate(["list"]),this.addRecipeObjective(t)})}setState(t){if(t){let n=this.routerSvc.getParams(t);this.router.navigate(["list"],{queryParams:n})}}setGame(t){this.setMod(L[t].modId)}addItemObjective(t){this.addObjective({targetId:t,unit:I.Items})}addRecipeObjective(t){this.addObjective({targetId:t,unit:I.Machines})}setMod(t){this.store.dispatch(new h.SetModAction(t))}addObjective(t){this.store.dispatch(new N.AddAction(t))}setBypassLanding(t){this.store.dispatch(new T.SetBypassLandingAction(t))}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=M({type:r,selectors:[["ng-component"]],standalone:!0,features:[R],decls:4,vars:2,consts:[["addItemPicker",""],["addRecipePicker",""],[1,"position-absolute","bottom-0","mb-3"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"onChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","autofocusFilter","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[3,"selectId","header"],[1,"p-inputgroup"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"onChange","binary","label","ngModel"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"onChange","filter","autofocusFilter","ngModel","options"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"onChange","placeholder","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"click","label"]],template:function(n,o){n&1&&(v(0,ce,30,32,"p-card")(1,me,1,0,"p-progressSpinner"),l(2,"span",2),S(3),s()),n&2&&(C(o.mod()!=null?0:1),a(3),w(o.contentSvc.version))},dependencies:[ie,U,G,F,j,K,Z,Q,ee,W,te,J,Y,D,X],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0});let i=r;return i})();export{Ae as LandingComponent};