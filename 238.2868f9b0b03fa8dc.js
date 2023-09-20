"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[238],{1238:(Y,d,_)=>{_.r(d),_.d(d,{LandingComponent:()=>S});var r=_(6814),u=_(2572),v=_(1254),l=_(601),c=_(8528),C=_(7346),n=_(5879),g=_(4190),m=_(8345),L=_(4221),f=_(6223),h=_(5219),E=_(707),I=_(4532),M=_(8057),x=_(5359),O=_(3965),T=_(7680),Z=_(4480),A=_(315),P=_(9515),D=_(3689);function b(o,s){if(1&o&&(n.TgZ(0,"div",23)(1,"i",24),n.ALo(2,"iconSmClass"),n.qZA(),n.TgZ(3,"span",25),n._uU(4),n.ALo(5,"translate"),n.qZA()()),2&o){const e=s.ngIf;n.xp6(1),n.Tol(n.lcZ(2,3,e.icon)),n.xp6(3),n.Oqu(n.lcZ(5,5,e.label))}}function U(o,s){if(1&o&&n.YNc(0,b,6,7,"div",22),2&o){const e=n.oxw(2).ngIf,t=n.oxw();n.Q6J("ngIf",t.gameInfo[e.data.game])}}function y(o,s){if(1&o&&(n.TgZ(0,"div",23)(1,"i"),n.ALo(2,"iconSmClass"),n.qZA(),n.TgZ(3,"span",25),n._uU(4),n.ALo(5,"translate"),n.qZA()()),2&o){const e=s.ngIf;n.xp6(1),n.Tol(n.lcZ(2,3,e.icon)),n.xp6(3),n.Oqu(n.lcZ(5,5,e.label))}}function B(o,s){if(1&o&&n.YNc(0,y,6,7,"div",22),2&o){const e=s.$implicit,t=n.oxw(3);n.Q6J("ngIf",t.gameInfo[e.value])}}function R(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"p-dropdown",26),n.NdJ("onChange",function(a){n.CHM(e);const i=n.oxw(3);return n.KtG(i.setMod(a.value))}),n.qZA()}if(2&o){const e=n.oxw(2).ngIf;n.Q6J("filter",!0)("ngModel",e.settings.modId)("options",e.modOptions)}}function K(o,s){1&o&&n._UZ(0,"p-divider")}function J(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"span",27)(1,"span",28),n._UZ(2,"i",29),n.qZA(),n.TgZ(3,"p-dropdown",30),n.NdJ("onChange",function(a){n.CHM(e);const i=n.oxw(2).ngIf,p=n.oxw();return n.KtG(p.setState(i.preferences.states[i.data.game][a.value]))}),n.ALo(4,"translate"),n.qZA()()}if(2&o){const e=n.oxw(2).ngIf;n.xp6(3),n.Q6J("placeholder",n.lcZ(4,2,"landing.loadSavedState"))("options",e.savedStates)}}function w(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"button",31),n.NdJ("click",function(){n.CHM(e);const a=n.oxw(3);return n.KtG(a.router.navigateByUrl(a.BrowserUtility.routerState))}),n.ALo(1,"translate"),n.qZA()}2&o&&n.Q6J("label",n.lcZ(1,1,"landing.loadLastState"))}function W(o,s){if(1&o){const e=n.EpF();n.TgZ(0,"p-card")(1,"div",4)(2,"div",5),n._UZ(3,"img",6),n.qZA(),n._UZ(4,"div",7),n.ALo(5,"translate"),n.TgZ(6,"p-dropdown",8),n.NdJ("onChange",function(a){n.CHM(e);const i=n.oxw(2);return n.KtG(i.setGame(a.value))}),n.YNc(7,U,1,1,"ng-template",9),n.YNc(8,B,1,1,"ng-template",10),n.qZA(),n.YNc(9,R,1,3,"p-dropdown",11),n.TgZ(10,"button",12),n.NdJ("click",function(){n.CHM(e);const a=n.MAs(15),i=n.oxw().ngIf;return n.KtG(a.clickOpen(i.data,"item",i.itemIds))}),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"button",13),n.NdJ("click",function(){n.CHM(e);const a=n.MAs(18),i=n.oxw().ngIf;return n.KtG(a.clickOpen(i.data,"recipe",i.recipeIds))}),n.ALo(13,"translate"),n.qZA(),n.TgZ(14,"lab-picker",14,15),n.NdJ("selectId",function(a){n.CHM(e);const i=n.oxw(2);return n.KtG(i.selectItem(a))}),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"lab-picker",14,16),n.NdJ("selectId",function(a){n.CHM(e);const i=n.oxw(2);return n.KtG(i.selectRecipe(a))}),n.ALo(19,"translate"),n.qZA(),n.YNc(20,K,1,0,"p-divider",0),n.YNc(21,J,5,4,"span",17),n.YNc(22,w,2,3,"button",18),n._UZ(23,"p-divider")(24,"button",19),n.ALo(25,"translate"),n._UZ(26,"button",20),n.ALo(27,"translate"),n.TgZ(28,"p-checkbox",21),n.NdJ("onChange",function(a){n.CHM(e);const i=n.oxw(2);return n.KtG(i.setBypassLanding(a.checked))}),n.ALo(29,"translate"),n.qZA()()()}if(2&o){const e=n.oxw().ngIf,t=n.oxw();n.xp6(4),n.Q6J("innerHTML",n.lcZ(5,16,"landing.welcome"),n.oJD),n.xp6(2),n.Q6J("ngModel",e.data.game)("options",t.gameOptions),n.xp6(3),n.Q6J("ngIf",e.data.game===t.Game.Factorio),n.xp6(1),n.Q6J("label",n.lcZ(11,18,"landing.addItems")),n.xp6(2),n.Q6J("label",n.lcZ(13,20,"landing.addMachines")),n.xp6(2),n.Q6J("header",n.lcZ(16,22,"landing.selectAnItem")),n.xp6(3),n.Q6J("header",n.lcZ(19,24,"landing.selectARecipe")),n.xp6(3),n.Q6J("ngIf",e.savedStates.length||t.BrowserUtility.routerState),n.xp6(1),n.Q6J("ngIf",e.savedStates.length),n.xp6(1),n.Q6J("ngIf",t.BrowserUtility.routerState),n.xp6(2),n.Q6J("label",n.lcZ(25,26,"landing.help")),n.xp6(2),n.Q6J("label",n.lcZ(27,28,"landing.skip")),n.xp6(2),n.Q6J("binary",!0)("label",n.lcZ(29,30,"landing.bypass"))("ngModel",e.preferences.bypassLanding)}}function Q(o,s){if(1&o&&(n.ynx(0),n.YNc(1,W,30,32,"p-card",3),n.BQk()),2&o){const e=s.ngIf;n.oxw();const t=n.MAs(3);n.xp6(1),n.Q6J("ngIf",null!=e.mod)("ngIfElse",t)}}function N(o,s){1&o&&n._UZ(0,"p-progressSpinner")}let S=(()=>{var o;class s{constructor(t,a,i,p){this.router=t,this.contentSvc=a,this.store=i,this.routerSvc=p,this.vm$=(0,u.a)({itemIds:this.store.select(c.lx.U4),settings:this.store.select(c.Zr.Gw),modOptions:this.store.select(c.Zr.Ym),data:this.store.select(c.Zr.pY),mod:this.store.select(c.Zr.IK),recipeIds:this.store.select(c.Zr.eW),savedStates:this.store.select(c.Zr.D0),preferences:this.store.select(c.uP.eD)}),this.gameInfo=l.dL,this.gameOptions=l.oy,this.Game=l.lA,this.BrowserUtility=C.R7}selectItem(t){this.addItemObjective(t),this.router.navigate(["list"])}selectRecipe(t){this.addRecipeObjective(t),this.router.navigate(["list"])}setState(t){if(t){const a=this.routerSvc.getParams(t);this.router.navigate(["list"],{queryParams:a})}}setGame(t){this.setMod(l.dL[t].modId)}addItemObjective(t){this.addObjective({targetId:t,unit:l.iK.Items})}addRecipeObjective(t){this.addObjective({targetId:t,unit:l.iK.Machines})}setMod(t){this.store.dispatch(new c.Zr.Lr(t))}addObjective(t){this.store.dispatch(new c.VJ.OV(t))}setBypassLanding(t){this.store.dispatch(new c.uP.LX(t))}}return(o=s).\u0275fac=function(t){return new(t||o)(n.Y36(g.F0),n.Y36(m._s),n.Y36(L.yh),n.Y36(m.cw))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:6,vars:4,consts:[[4,"ngIf"],["spinner",""],[1,"position-absolute","bottom-0","mb-3"],[4,"ngIf","ngIfElse"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"ngModel","options","onChange"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","ngModel","options","onChange",4,"ngIf"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"label","click"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"label","click"],[3,"header","selectId"],["addItemPicker",""],["addRecipePicker",""],["class","p-inputgroup",4,"ngIf"],["pButton","","pRipple","","type","button","class","mt-2","icon","fa-solid fa-clock-rotate-left",3,"label","click",4,"ngIf"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"binary","label","ngModel","onChange"],["class","d-flex align-items-center",4,"ngIf"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"filter","ngModel","options","onChange"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"placeholder","options","onChange"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label","click"]],template:function(t,a){1&t&&(n.YNc(0,Q,2,2,"ng-container",0),n.ALo(1,"async"),n.YNc(2,N,1,0,"ng-template",null,1,n.W1O),n.TgZ(4,"span",2),n._uU(5),n.qZA()),2&t&&(n.Q6J("ngIf",n.lcZ(1,2,a.vm$)),n.xp6(5),n.Oqu(a.contentSvc.version))},dependencies:[r.ez,r.O5,r.Ov,v.o,f.JJ,f.On,h.jx,g.rH,E.Hq,I.Z,M.XZ,x.i,O.Lt,T.G,Z.H,A.q,P.X$,D.y],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0}),s})()}}]);