import{$c as l,Ec as g,Gd as y,Ib as m,Id as S,Kc as d,Kd as f,O as p,Rc as h,S as a,ba as u}from"./chunk-5P23WQD6.js";var k=(()=>{class i extends l{constructor(){super(...arguments),this.settingsSvc=a(f),this.settings=m(()=>this.computeItemsSettings(this.state(),this.settingsSvc.settings(),this.settingsSvc.dataset())),this.itemsModified=m(()=>{let s=this.state();return{belts:Object.keys(s).some(t=>s[t].beltId!=null),wagons:Object.keys(s).some(t=>s[t].wagonId!=null)}})}computeItemsSettings(s,t,o){let n={};for(let r of o.itemIds.map(c=>o.itemEntities[c])){let c=s[r.id],e=this.defaultBelt(r,t),v=this.defaultWagon(r,t),F=d(c?.beltId,e),O=d(c?.wagonId,v),I;r.stack&&(I=d(c?.stack,t.stack)),n[r.id]={beltId:F,defaultBeltId:e,wagonId:O,defaultWagonId:v,stack:I}}return n}defaultBelt(s,t){return s.stack?t.beltId:t.pipeId?t.pipeId:g.Pipe}defaultWagon(s,t){return s.stack?t.cargoWagonId:t.fluidWagonId}static{this.\u0275fac=(()=>{let s;return function(o){return(s||(s=u(i)))(o||i)}})()}static{this.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var j=(()=>{class i extends l{constructor(){super(...arguments),this.recipeSvc=a(S),this.settingsSvc=a(f),this.settings=m(()=>this.computeMachinesSettings(this.state(),this.settingsSvc.settings(),this.settingsSvc.dataset()))}computeMachinesSettings(s,t,o){let n={};for(let r of o.machineIds){let c=o.machineEntities[r],e=h(s[r]);c.type===y.Burner?(e.fuelOptions=this.recipeSvc.fuelOptions(c,t,o),e.defaultFuelId=this.recipeSvc.bestMatch(e.fuelOptions,t.fuelRankIds),e.fuelId=d(e?.fuelId,e.defaultFuelId)):delete e.fuelId,c.modules?(e.moduleOptions=this.recipeSvc.moduleOptions(c,t,o),e.modules=this.recipeSvc.hydrateModules(e.modules,e.moduleOptions,t.moduleRankIds,c.modules),e.beacons=this.recipeSvc.hydrateBeacons(e.beacons,t.beacons)):(delete e.modules,delete e.beacons),e.defaultOverclock=t.overclock,e.overclock=d(e.overclock,e.defaultOverclock),n[r]=e}return n}static{this.\u0275fac=(()=>{let s;return function(o){return(s||(s=u(i)))(o||i)}})()}static{this.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var X=(()=>{class i extends l{constructor(){super(...arguments),this.itemsSvc=a(k),this.machinesSvc=a(j),this.recipeSvc=a(S),this.settingsSvc=a(f),this.settings=m(()=>this.computeRecipesSettings(this.state(),this.machinesSvc.settings(),this.settingsSvc.settings(),this.settingsSvc.dataset())),this.adjustedDataset=m(()=>{let s=this.settings(),t=this.itemsSvc.settings(),o=this.settingsSvc.settings(),n=this.settingsSvc.dataset();return this.recipeSvc.adjustDataset(s,t,o,n)})}computeRecipesSettings(s,t,o,n){let r={};for(let c of n.recipeIds.map(e=>n.recipeEntities[e])){let e=h(s[c.id]);this.recipeSvc.computeRecipeSettings(e,c,t,o,n),r[c.id]=e}return r}static{this.\u0275fac=(()=>{let s;return function(o){return(s||(s=u(i)))(o||i)}})()}static{this.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{k as a,j as b,X as c};