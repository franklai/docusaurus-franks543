"use strict";(self.webpackChunkdocusaurus_franks543=self.webpackChunkdocusaurus_franks543||[]).push([[920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(5861),r=n(7757),c=n.n(r),u=n(7294),s=n(2263),l=n(4161),o=n(2859),i=n(9960),m=n(6775),h=n(412);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,s.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(22),d=n(8202),_=n(2539),E=n(726),g=n(1073),v=n(311),S=n(1029);function w(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var y="searchQueryInput_5r-w",k="searchResultItem_18XW",I="searchResultItemPath_TjRL",b="searchResultItemSummary_5qSX";function C(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,s=t.metadata,l=0===a,o=2===a,m=(l?n.b:r.b).slice(),h=o?n.s:n.t;return l||m.push(r.t),u.createElement("article",{className:k},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,c):(0,E.o)(h,(0,g.m)(s,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:I},m.join(" \u203a ")),o&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,g.m)(s,"t"),c,100)}}))}var R=function(){var e=(0,s.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],_=(0,u.useState)(),E=_[0],g=_[1],k=(0,u.useState)(),I=k[0],b=k[1],R=(0,u.useMemo)((function(){return m?w(S.Iz.search_results_for,{keyword:m}):S.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){r(m),E&&(m?E(m,(function(e){b(e)})):b(void 0))}),[m,E]);var Z=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(l.Z,{title:R},u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,R),u.createElement("input",{type:"search",name:"q",className:y,"aria-label":"Search",onChange:Z,value:m,autoComplete:"off",autoFocus:!0}),!E&&m&&u.createElement("div",null,u.createElement(v.Z,null)),I&&(I.length>0?u.createElement("p",null,w(1===I.length?S.Iz.count_documents_found:S.Iz.count_documents_found_plural,{count:I.length})):u.createElement("p",null,S.Iz.no_documents_were_found)),u.createElement("section",null,I&&I.map((function(e){return u.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);