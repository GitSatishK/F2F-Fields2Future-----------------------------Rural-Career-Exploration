"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82453],{18655:function(e,t,n){n.d(t,{e:function(){return X}});var r=n(57460),i=n(6692),a=n(2281),s=n(52322),o=n(27149),l=n(91290),d=n(9066),u=n(59786),c=n(30676),v=n(45240),h=n(73378),m=n(57165),p=n(76825),g=n(38622),f=n(20005),x=n(13716),w=n(57116),b=n(62223),I=n(10488),k=n(25365),y=n(2784),S=n(98116),_=(0,S.ZL)()(e=>{var{palette:t,tokens:{spacing:n}}=e;return{link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,"&:focus-visible":{border:"".concat(n.xs," solid ").concat(t.primary.main),outline:0}},button:{all:"unset",position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,cursor:"pointer"}}}),j=(0,y.memo)(e=>{var t,{withLink:n=!0,inView:a,asset:o,gridItems:l,getRoutePathProps:d=I.r,itemIndex:S,openGridItemInNewTab:j=!1,withProductClickTracking:C=!0,gridItemLinkClassName:O=null,isCarouselItem:L,analyticsEventSection:E,analyticsEventListId:N,setClickedAsset:G=k.ZT}=e,{classes:A,cx:P}=_(),[R,M]=(0,w.KC)({asset:o,gridItems:l,getRoutePathProps:d,itemIndex:S}),T=(0,g.t)(),W=(0,f.w)(),{isGoodBot:F}=(0,m.N)(),z=(0,b.wU)(),[B,U]=(0,y.useState)(!1),{validateSearchTrackingId:Z}=(0,x.Y)()||{},V=a&&R?u.r:c.n,D=(0,p.f8)(o)&&(null===(t=o.displays["600W"])||void 0===t?void 0:t.src);return n?(0,s.jsx)(V,(0,i._)((0,r._)({className:P(A.link,O),href:R,target:j?"_blank":void 0,"data-automation":"AssetGrids_GridItemClickableArea_link"},V!==c.n&&{linkAs:M},D?{onMouseEnter:()=>U(!0),onMouseLeave:()=>U(!1)}:{}),{onClick:F?null:()=>{G({assetId:o.id}),Z&&Z(),C&&W((0,i._)((0,r._)({asset:o,gridItems:l,eventLabel:h.D7F},N?{listId:N}:{}),{pageSection:z})),E&&T({pageSection:E,eventLabel:h.LRD,clickTrackOptions:{mediaId:o.id}})},"aria-label":o.title||o.description,tabIndex:0,children:B&&(0,s.jsx)(v.E,{asset:o,isCarouselItem:L})})):null}),C=n(24813),O=n(91335),L=n(10998),E=n(59581),N=n(67081),G=n(71341),A=n(37091),P=()=>{var{analytics:e}=(0,b.yh)(),{getSearchContextFromAssets:t}=(0,x.Y)();return(0,y.useCallback)(n=>{var{asset:r,listId:i,position:a}=n,s=(0,A.qI)(r),o=(0,A.f_)(r),l=(0,A.Rz)(r);i&&e.assetViewed({list_id:i,position:a,search_context:t([r]),product_id:s,sku:s,brand:o||(0,A.jN)(r),product_line:l})},[e,t])},R=n(80772),M=n(40521),T=n(72031),W=n(5632),F=e=>{var{ref:t,assetId:n,inView:r}=e,{storedValue:i,setValue:a}=(0,M.X)("clicked-asset",""),s=(0,W.useRouter)(),o=(0,T.Rd)(s),l=(0,y.useCallback)(e=>{var{assetId:t}=e;o&&a(t)},[o,a]);return(0,y.useEffect)(()=>{if(o&&n===i&&!r){var e=t.current;e&&e.scrollIntoView({behavior:"smooth",block:"center"}),a("")}},[n,r,t,a,i,o]),{setClickedAsset:l}},z=n(45542),B=n(62301),U=n(42047),Z=n(80934),V=n(26351),D=e=>"string"==typeof e,H=e=>D(e)?e:Math.floor((e-1e-5)*1e3)/1e3,q=(0,S.ZL)()(e=>{var{palette:t,tokens:{color:n,spacing:r,zIndex:i}}=e;return{item:{display:"block",overflow:"hidden",position:"relative"},link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:i["2"],"&:focus-visible":{border:"".concat(r.xs," solid ").concat(t.primary.main),outline:0}},background:{backgroundColor:n.black},withAspectRatioSizing:{position:"absolute",width:"100%",height:"100%"},assetItemContainer:{width:"100%",height:"100%"},blankTemplateWrapper:{display:"flex",height:"100%"},assetItemSkeleton:{height:"100%"}}}),K=(e,t)=>{var n,{isLoading:r,isAssetFreeToDownload:i}=(0,R.a)({contributor:{id:e.contributorId}});return!r&&((null==t?void 0:null===(n=t.restrictions)||void 0===n?void 0:n.isOverlayRestricted)||i)},X=(0,y.memo)(e=>{var t,n,{asset:u,AssetItem:c,assetItemProps:v=k.FD,AssetOverlay:h=null,assetOverlayProps:m=k.FD,getRoutePathProps:p=I.r,gridItemClassName:g=null,gridItemLinkClassName:f=null,gridItems:x,height:w,isInfiniteGrid:b=!1,isPopperOpen:S=!1,itemIndex:_,licensingAssetId:A="",listId:R="",openGridItemInNewTab:M=!1,spacing:T=0,width:W,withFixedDimensions:D=!0,withSsr:X=!1,withItemBackground:Y=!1,withLink:J=!0,withProductClickTracking:$=!0,eagerAssetOverlayCount:Q=0,useCssGrid:ee,skeletonOnly:et,isCarouselItem:en,hideSimilarButton:er=!1,showInlineSimilarity:ei=!1,handleSimilarClick:ea=k.ZT,loading:es,gridSize:eo=d.hq.SIZE,gridStep:el=d.hq.STEP,isResponsiveCarouselItem:ed}=e,eu=(0,a._)(e,["asset","AssetItem","assetItemProps","AssetOverlay","assetOverlayProps","getRoutePathProps","gridItemClassName","gridItemLinkClassName","gridItems","height","isInfiniteGrid","isPopperOpen","itemIndex","licensingAssetId","listId","openGridItemInNewTab","spacing","width","withFixedDimensions","withSsr","withItemBackground","withLink","withProductClickTracking","eagerAssetOverlayCount","useCssGrid","skeletonOnly","isCarouselItem","hideSimilarButton","showInlineSimilarity","handleSimilarClick","loading","gridSize","gridStep","isResponsiveCarouselItem"]),{classes:ec,cx:ev}=q(),eh=P(),{isHovered:em,setIsHovered:ep,onMouseEnter:eg,onMouseLeave:ef,setIsOnMouseLeaveOverrideActive:ex}=(0,C.T)({asset:u}),[ew,eb]=(0,y.useState)(!0),[eI,ek]=(0,B.I)({triggerOnce:ee||!b,defaultIsVisible:_<Q}),{setClickedAsset:ey}=F({assetId:u.id,ref:ek,inView:eI}),{isIndiaRegion:eS}=(0,z.B)(),{isAssetLoaded:e_,setIsAssetLoaded:ej}=(0,C.t)({withSsr:X}),[eC,eO]=(0,y.useState)({height:H(w),width:H(W)});(0,U.L)(()=>{D&&!ee&&eO({height:w,width:W}),eI&&R&&eh({listId:R,position:_,asset:u}),!ee&&b&&eb(eI)},[w,W,D,ee,et,eh,eI,_,R,u,b]);var eL=(0,G.r8)(u,!0),eE=eo+el;if(eL.height!==eE){var eN=(eL.height-eE)/eL.height;eL.height=eE,eL.width-=eL.width*eN}var{classes:eG}=(0,Z.cK)(eL),eA=K(u,m),eP=(0,o.Z)("(min-width: ".concat(N.s,"px)"));return(0,s.jsx)("div",{role:"img","aria-label":"Asset ".concat(null!==(n=u.description)&&void 0!==n?n:"").trim(),"data-automation":"AssetGrids_GridItemContainer_div",onMouseEnter:eg,onMouseLeave:ef,ref:ek,style:(0,i._)((0,r._)({},D&&!ee&&eC,T&&{margin:"".concat(T,"px")}),{"--itemFlexBasis":(0,Z.OM)(0,eL,eo),"--itemFlexBasisLg":(0,Z.OM)(el,eL,eo),"--itemFlexBasisMd":(0,Z.OM)(2*el,eL,eo),"--itemFlexBasisSm":0===_&&eS?"100%":(0,Z.OM)(4*el,eL,eo),"--itemFlexGrow":(0,Z.kw)(eL)}),className:ev(ec.item,g,ee&&eG.item,Y&&e_&&ec.background),children:ew&&(0,s.jsxs)(s.Fragment,{children:[!et&&(0,s.jsx)(j,{asset:u,inView:eI,withLink:J,itemIndex:_,gridItems:x,getRoutePathProps:p,gridItemLinkClassName:f,openGridItemInNewTab:M,withProductClickTracking:$,analyticsEventListId:m.analyticsEventListId,analyticsEventSection:m.analyticsEventSection,isCarouselItem:en,setClickedAsset:ey}),(eI||_<Q)&&!eA&&!!h&&!et&&(0,s.jsx)(O.f.Provider,{value:{setIsHovered:ep,setIsOnMouseLeaveOverrideActive:ex,itemIndex:_,hideSimilarButton:er,handleSimilarClick:ea,showInlineSimilarity:ei,isAssetThin:(0,L.t)(u)},children:(0,s.jsx)(h,(0,r._)({listId:R,asset:u,gridItems:x,isHovered:em,isAssetLoaded:e_,licensingAssetId:A,width:W},m,eu))}),c&&(0,s.jsxs)(s.Fragment,{children:[!et&&(0,s.jsx)("div",{style:{"--assetItemContainerDisplay":(0,Z.wj)(eL)?"flex":null,"--assetItemContainerAlignItems":(0,Z.wj)(eL)?"center":null},className:ev(ee&&eG.assetItemContainer,ec.assetItemContainer,{[ec.withAspectRatioSizing]:!D}),children:(null==v?void 0:null===(t=v.holding)||void 0===t?void 0:t.isLoading)?(0,s.jsx)(l.Z,{variant:"rounded",className:ec.assetItemSkeleton}):(0,s.jsx)("div",{style:{"--letterboxingWrapperPadding":ee&&(0,Z.wj)(eL)?"".concat((0,Z.Px)(eL,eP),"%"):null},className:ev({[eG.letterboxingWrapper]:ee&&!(0,Z.wj)(eL),[eG.letterboxingWrapperWithPseudo]:ee&&(0,Z.wj)(eL),[ec.blankTemplateWrapper]:(null==u?void 0:u.type)===E.C_,[eG.responsiveCarouselWrapper]:ed}),children:(0,s.jsx)(c,(0,r._)({asset:u,gridItems:x,isHovered:S||em,onLoadHandler:ej,withSsr:X,itemIndex:_,useCssGrid:ee,containerRatio:(0,V.n3)({width:W,height:w}),loading:es},v,eu))})}),!D&&(0,s.jsx)("div",{style:{paddingBottom:W&&w&&"".concat(w/W*100,"%")}}),ee&&(0,s.jsx)("div",{style:{paddingBottom:"".concat((eL.height/(0,Z.hq)(eL)*100).toFixed(3),"%")}})]})]})})})},24813:function(e,t,n){n.d(t,{T:function(){return o},t:function(){return l}});var r=n(76825),i=n(54073),a=n.n(i),s=n(2784),o=e=>{var{asset:t}=e,[n,i]=(0,s.useState)(!1),o=(0,r.Am)(t),[l,d]=(0,s.useState)(!1),u=()=>i(!0),c=a()(u,200);return{isHovered:n,setIsHovered:i,onMouseEnter:o?c:u,onMouseLeave:()=>{o&&c.cancel(),l||i(!1)},setIsOnMouseLeaveOverrideActive:d}},l=e=>{var{withSsr:t}=e,[n,r]=(0,s.useState)(t);return{isAssetLoaded:n,setIsAssetLoaded:r}}},24029:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(52322),i=n(58488),a=n(94916),s=n(52850),o=n(11456),l={topPicksForYouTitle:"top_picks_for_you"},d=e=>{var{children:t}=e,{labels:n}=(0,o.D)({namespace:s.w7u,translationKeys:l});return(0,r.jsxs)(i.Z,{"data-automation":"Grid-Recommendation-Common-Carousel",flexBasis:"100%",mb:5,children:[(0,r.jsx)(a.Z,{mb:4,mt:4,component:"h3",variant:"h5",children:n.topPicksForYouTitle}),t]})}},51893:function(e,t,n){n.d(t,{P:function(){return o}});var r=n(52322),i=n(24029),a=n(38791),s=n(59021),o=()=>(0,r.jsx)(i.E,{children:(0,r.jsx)(s.N,{numOfSkeletonRows:a.MAX_CAROUSEL_ROWS,maxRows:a.MAX_CAROUSEL_ROWS,xs:a.SKELETON_COLUMNS.xs,sm:a.SKELETON_COLUMNS.sm,md:a.SKELETON_COLUMNS.md,xl:a.SKELETON_COLUMNS.xl})})},38791:function(e,t,n){n.r(t),n.d(t,{GridRecommendationCommonCarousel:function(){return y},MAX_CAROUSEL_ROWS:function(){return x},SKELETON_COLUMNS:function(){return w}});var r=n(57460),i=n(52322),a=n(18655),s=n(37439),o=n(29266),l=n(73378),d=e=>{var{assetOverlayProps:t,gridItems:n,index:r,item:d}=e;return(0,i.jsx)(a.e,{asset:d,AssetItem:s.L,assetItemProps:{withBackground:!0,withFullWidth:!0},AssetOverlay:o.y,assetOverlayProps:t,gridItems:n,itemIndex:r,isCarouselItem:!0,listId:l.e8j,height:"auto",width:"auto"})},u=n(24029),c=n(72086),v=n(45556),h=n(2882),m=n(12778),p=n(31271),g=n(62223),f=n(29193),x=1,w={xs:6,sm:4,md:3,xl:2.4},{breakpoints:{values:b}}=f.baseTheme,I=[{breakpoint:b.xs,show:2,navigate:2},{breakpoint:b.sm,show:3,navigate:3},{breakpoint:b.md,show:4,navigate:4},{breakpoint:b.lg,show:4,navigate:4},{breakpoint:b.xl,show:5,navigate:5}],k=e=>({navigation:{next:{section:e,label:"nextSlide"},previous:{section:e,label:"prevSlide"}}}),y=e=>{var{assets:t,analyticsLabel:n}=e,{fullAssetType:a}=(0,p.JI)(),{AddToCollectionViews:s,addToCollectionViewsHandler:o,addToCollectionViewsProps:l,isModalOpen:f,handleCloseModal:b}=(0,h.V)({initialAssetType:a}),y=k(n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.SignUpModal,{modalIsOpen:f,handleClose:b}),(0,i.jsx)(c.N,{analyticsEventLabel:n,assets:t,isGridReady:!0,position:1,listId:n}),(0,i.jsx)(g.Mp,{value:n,children:(0,i.jsxs)(u.E,{children:[(0,i.jsx)(v.s,{AssetItem:d,assetItemProps:{assetOverlayProps:{addToCollectionViewsHandler:o,showAssetTypeIcon:!0,analyticsEventListId:n,analyticsEventSection:n}},assets:t,maxRows:x,numOfSkeletonRows:x,withGridItemSpacing:!0,perPage:I,xs:w.xs,sm:w.sm,md:w.md,xl:w.xl,trackAnalytics:y}),(0,i.jsx)(s,(0,r._)({},l))]})})]})}},72086:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(52322),i=n(34450),a=n(62301),s=n(2784),o=e=>{var{analyticsEventLabel:t,assets:n,listId:o,isGridReady:l,position:d}=e,[u,c]=(0,a.I)({triggerOnce:!0}),v=(0,i.l)();return(0,s.useEffect)(()=>{l&&o&&u&&v({assets:n,listId:o,position:d,eventLabel:t})},[v,l,n,u,d,o,t]),(0,r.jsx)("div",{ref:c})}},82453:function(e,t,n){n.r(t),n.d(t,{MosaicAssetGrid:function(){return D}});var r=n(57460),i=n(6692),a=n(2281),s=n(52322),o=n(9066),l=n(85926),d=n(2784),u=e=>{var t,{assetIndex:n=0,gridRef:r}=e,i=null==r?void 0:null===(t=r.current)||void 0===t?void 0:t.getElementsByClassName("grid-item");if(i)for(var a=n;a<(null==i?void 0:i.length);a+=1){var s=i[a],o=i[a+1];if((null==s?void 0:s.offsetTop)!==(null==o?void 0:o.offsetTop))return a}return n},c=e=>{var{gridItems:t=[],gridRef:n}=e,[r,i]=(0,d.useState)(),[a,s]=(0,d.useState)(),[o,c]=(0,d.useState)(0),[v,h]=(0,d.useState)(!1);(0,d.useEffect)(()=>{h(!1)},[t]);var m=(0,d.useCallback)(e=>{var{assetIndex:r=0}=e,{asset:a}=t[r]||{};r===o?h(!v):h(!0),s(a),c(r),i(u({assetIndex:r,gridRef:n}))},[t,n,o,v]);return(0,d.useEffect)(()=>{var e;return v&&(e=()=>{var e;clearTimeout(e),h(!1),e=setTimeout(()=>{i(u({assetIndex:o,gridRef:n})),h(!0)},250)},window.addEventListener("resize",e)),()=>window.removeEventListener("resize",e)},[n,o,v]),(0,d.useEffect)(()=>{var e;return v&&(e=e=>{var{code:t}=e;t===l.hY&&h(!1)},document.addEventListener("keydown",e)),()=>document.removeEventListener("keydown",e)},[v]),{expandableSimilarPreviewInGridHandler:m,similarPreviewAsset:a,similarPreviewAssetIndex:o,similarPreviewIndex:r,setShowExpandableSimilarPreviewInGrid:h,showExpandableSimilarPreviewInGrid:v}},v=n(18655),h=n(51893),m=n(25237),p=n.n(m),g=p()(()=>n.e(18524).then(n.bind(n,99836)).then(e=>e.GridRecommendationCarousel),{loadableGenerated:{webpack:()=>[99836]},loading:()=>(0,s.jsx)(h.P,{})}),f=n(72086),x=n(11347),w=n(59021),b=n(79041),I=n(40191),k=e=>{var{targetRowHeight:t,rowIndex:n,maxRows:r}=e;return{width:0,height:t,index:n,assets:[],isLastRow:!!r&&n===r}},y=e=>{var{targetRowHeight:t,maxRows:n}=e;return e=>{var{rowIndex:r}=e;return k({targetRowHeight:t,rowIndex:r,maxRows:n})}},S=e=>{for(var{targetRowHeight:t,assets:n,gridWidth:i,maxRows:a}=e,s=y({targetRowHeight:t,maxRows:a}),o=s({rowIndex:1}),l=[],d=n.length-1,u=0;u<n.length;u+=1){var c=n[u],v=(0,b.id)({asset:c}),h=(0,I.fL)({height:t,aspect:v}),m=Math.min(h,i),p=i-o.width;if(o.width>0&&p<m*Math.min(1,t/m)){var g=o.index+1;if(l.push((0,r._)({},o)),a&&g>a)break;o=s({rowIndex:g})}o.assets.push(c),o.width+=h,o.aspect=(0,I.o1)(o),u===d&&(o.isLastRow=!0,l.push((0,r._)({},o)))}return l},_=e=>{var{isLastRow:t,width:n,finalRowWidth:r}=e;return!t||n>=.6*r},j=e=>{var{rows:t,gridWidth:n,spacing:r}=e;return t.reduce((e,t,i)=>{var{isLastRow:a,width:s,height:o,aspect:l,assets:d}=t,u=n-2*r*d.length,c=_({isLastRow:a,finalRowWidth:u,width:s})?(0,I.UP)({width:u,aspect:l}):o;return[...e,...d.map((e,t)=>{var n=(0,b.id)({asset:e});return{aspect:n,asset:e,columnIndex:t,rowHeight:c,rowIndex:i,width:(0,I.fL)({height:c,aspect:n})}})]},[])},C=e=>{var{assets:t,gridWidth:n,maxRows:r,spacing:i,targetRowHeight:a}=e;return(null==t?void 0:t.length)?j({rows:S({targetRowHeight:a,assets:t,gridWidth:n,maxRows:r}),gridWidth:n,spacing:i}):null},O=n(19563),L=e=>{var{assets:t,maxRows:n,isMobile:r,hasMaxWidth:i,hasMobileScroll:a,spacing:s,gridSizingOptions:l,useCssGrid:u}=e,c=(0,d.useRef)(null),{rowHeight:v,rowWidth:h}=(0,O.K)({containerEl:c,defaultHeight:o.R$,defaultRenderWidth:o.zU,gridSizingOptions:l,hasMaxWidth:i,spacing:s,useCssGrid:u}),m=r&&a?h*o.kl:h;return{gridItems:(0,d.useMemo)(()=>C({assets:t,gridWidth:m,maxRows:n,spacing:s,targetRowHeight:v}),[t,m,n,s,v]),containerEl:c,targetRowHeight:v,gridWidth:m}},E=n(32549),N=n(29266),G=n(35210),A=n(57165),P=n(93992),R=n(9208),M=n(15514),T=e=>{for(var t=0,n=3,r=0;r<e.length;r+=1){if((t+=e[r].aspect)>2.25&&t<3.45){n=r;break}if(t>2.25){n=Math.max(0,r-1);break}}return e.length>n?n:e.length},W=n(34450),F=n(26481),z=n(62301),B=n(23798),U=n(80934),Z=n(73428),V=p()(()=>n.e(69425).then(n.bind(n,69425)).then(e=>e.GridInlinePreview),{loadableGenerated:{webpack:()=>[69425]},ssr:!1}),D=e=>{var{AssetItem:t=E.k,AssetOverlay:n=N.y,assetOverlayProps:l={},assets:u,analyticsEventLabel:h="",classesProps:m={},gridSizingOptions:p=o.AW,hasMaxWidth:b=!1,hasMobileScroll:k=!1,licensingAssetId:y="",listId:S="",position:_=0,maxRows:j,numOfSkeletonRows:C=0,openGridItemInNewTab:O=!1,spacing:D=U.gP,withLoadingSkeletons:H=!1,hideGridUntilReady:q=!1,hideSimilarButton:K=!1,showInlineSimilarity:X=!1,root:Y=null,useCssGrid:J=!1,xs:$=12,sm:Q=6,md:ee=4,lg:et=3,xl:en=2,GridItemContainer:er=v.e,isCustomMobileGridWidth:ei=!1,children:ea,isInfiniteGrid:es,query:eo,keywords:el}=e,ed=(0,a._)(e,["AssetItem","AssetOverlay","assetOverlayProps","assets","analyticsEventLabel","classesProps","gridSizingOptions","hasMaxWidth","hasMobileScroll","licensingAssetId","listId","position","maxRows","numOfSkeletonRows","openGridItemInNewTab","spacing","withLoadingSkeletons","hideGridUntilReady","hideSimilarButton","showInlineSimilarity","root","useCssGrid","xs","sm","md","lg","xl","GridItemContainer","isCustomMobileGridWidth","children","isInfiniteGrid","query","keywords"]),{assets:eu=u,isDrawerOpen:ec,showRecommendationCarousel:ev}=(0,x.R)(),{classes:eh}=(0,U.rr)(),{classes:em,cx:ep}=(0,Z.J)(),eg=(0,G.c)(),{classes:ef}=(0,B.E)({mobileScrollBreakpoint:o.x_,backgroundColor:eg}),{isMobileServer:ex}=(0,P.n)(),ew=ex&&!J&&k?1:j,{isBrandSstk:eb}=(0,F.D)(),{isEligibleForFREN1413:eI}=(0,M.S)({assets:eu}),{containerEl:ek,gridItems:ey}=L({assets:eu,isMobile:ei?ex:null,hasMobileScroll:k,maxRows:ew,hasMaxWidth:b,spacing:D,gridSizingOptions:p,useCssGrid:J}),eS=eI?T(ey):0,[e_,ej]=(0,z.I)({triggerOnce:!0,rootMargin:"150%"}),[eC,eO,eL]=(0,z.I)({triggerOnce:!0,rootMargin:"100000px 100000px ".concat(ex?"110px":"210px"," 100000px"),root:Y}),[eE,eN,eG]=(0,z.I)({triggerOnce:!0,rootMargin:"100000px 100000px ".concat(ex?"110px":"210px"," 100000px"),root:Y}),eA=(0,d.useRef)(eu);eA.current===eu||es||(eL(!1),eG(!1),eA.current=eu);var{isGoodBot:eP}=(0,A.N)(),eR=ex?o.ub.MOBILE:o.ub.DESKTOP,{isGridEmpty:eM,isGridLoading:eT,isGridReady:eW}=(0,I.pb)(ey),eF=(0,W.l)(),[ez,eB]=(0,d.useState)(q?0:1),{classes:eU}=(0,U.cK)();(0,d.useEffect)(()=>{eW&&eB(1)},[eF,eW,eu,_,S,h]);var{expandableSimilarPreviewInGridHandler:eZ,similarPreviewAsset:eV,similarPreviewIndex:eD,similarPreviewAssetIndex:eH,setShowExpandableSimilarPreviewInGrid:eq,showExpandableSimilarPreviewInGrid:eK}=c({gridItems:ey,gridRef:ek});return eM?null:(0,s.jsxs)("div",{className:ep({[ef.mobileScrollWrapper]:k}),children:[(0,s.jsx)(f.N,{analyticsEventLabel:h,assets:eu,isGridReady:!0,position:_,listId:S}),(0,s.jsxs)("div",{className:ep(eh.gridContainer,em.root,{[ef.mobileScrollContent]:k,[em.filterDrawerOpen]:ec}),ref:ek,"data-automation":"AssetGrids_MosaicAssetGrid_div",style:{opacity:ez,"--customGridSpacing":"".concat(D,"px")},children:[eT&&(H||!!C)&&(0,s.jsx)(w.N,{"data-automation":"AssetGrids_MosaicAssetGrid_SkeletonGrid",maxRows:ew,numOfSkeletonRows:C,xs:$,sm:Q,md:ee,lg:et,xl:en,spacing:D,cardAspectRatio:ed.cardAspectRatio}),eW?ey.map((e,a)=>{var{rowHeight:o,asset:u,width:c}=e;return(0,s.jsxs)(d.Fragment,{children:[(0,s.jsx)(er,(0,i._)((0,r._)({AssetItem:t,AssetOverlay:n,assetOverlayProps:l,asset:u,gridItems:ey,height:o,handleSimilarClick:eZ,hideSimilarButton:K,showInlineSimilarity:X,listId:S,itemIndex:a,width:c,openGridItemInNewTab:O,spacing:D,gridItemClassName:ep({[em.sstkGridItem]:eb,[em.highlightedGridItem]:X&&a===eH&&eK},m.gridItem),licensingAssetId:y,withLoadingSkeletons:H,useCssGrid:J,eagerAssetOverlayCount:eP?ey.length:0,withSsr:eP,isCustomMobileGridWidth:ei,loading:(0,I.Y7)({deferAfterItemForUsers:eR,index:a,isCustomMobileGridWidth:ei}),skeletonOnly:!(eP||a<eR||a<2*eR&&eC||eE||!eR)},ed),{style:(0,i._)((0,r._)({},ed.style),{"--customGridSpacing":"".concat(D,"px")})})),a===eR&&(0,s.jsx)("div",{ref:eO}),a===2*eR&&(0,s.jsx)("div",{ref:eN}),eI&&a===eS&&(0,s.jsx)(R.k,{assets:eu,query:eo,relatedKeywords:el,spacing:D}),X&&a===eD&&eK&&(0,s.jsx)(V,{asset:eV,gridRef:ek,handlePreviewClose:()=>eq(!1),similarPreviewAssetIndex:eH,similarPreviewIndex:eD,totalCount:ey.length}),ev&&a===ey.length-1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:ej,className:J?ep(eU.item,eU.placeholder):"","data-automation":"MosaicAssetGridPlaceholder"}),e_&&(0,s.jsx)(g,{})]})]},"gridItem_".concat(u.id,"_").concat(a))}):null,(0,s.jsx)("div",{className:J?ep(eU.item,eU.placeholder):""}),ea]})]})}},11347:function(e,t,n){n.d(t,{R:function(){return a},V:function(){return i}});var r=n(2784),i=(0,r.createContext)({assets:void 0,experiments:void 0,imageType:void 0,isBrandSstk:void 0,isImageSrp:void 0,isLoggedInUser:!1,setThroughProvider:!1,isDrawerOpen:!1,showVisuallySimilarVideosOnConfirmationDrawer:!1,showRecommendationCarousel:void 0}),a=()=>(0,r.useContext)(i)},73428:function(e,t,n){n.d(t,{J:function(){return i}});var r=n(9066),i=(0,n(98116).ZL)()(e=>{var{breakpoints:t,palette:n,tokens:{color:i,radius:a,zIndex:s,animation:o}}=e;return{root:{display:"flex",flexWrap:"wrap",transition:"all ".concat(o.duration.fast," cubic-bezier(0, 0, 0.2, 1) .05s")},mobileScrollWrapper:{width:"100%",[t.down(r.x_)]:{display:"flex",width:"100%",overflowX:"auto",overflowY:"hidden",transform:"translateZ(0)"}},mobileScrollContent:{[t.down(r.x_)]:{"&&":{width:"auto"},flexWrap:"nowrap",display:"inline-flex","&:after":{content:'""',background:"\n          linear-gradient(\n            to left,\n            ".concat(n.background.default," 0,\n            transparent 100%\n          )"),position:"sticky",width:r.an,marginLeft:-r.an,top:0,bottom:0,right:0,pointerEvents:"none",zIndex:s["2"]}}},sstkGridItem:{borderRadius:a.m},highlightedGridItem:{boxShadow:"0px 0px 0px 3px ".concat(i.blue.azure),"& .similar-assets-button":{boxShadow:"0px 0px 0px 3px ".concat(i.blue.azure)}},filterDrawerOpen:{[t.up("md")]:{marginLeft:"".concat(r.Tv,"px"),width:"auto"}}}})},59021:function(e,t,n){n.d(t,{N:function(){return d}});var r=n(52322),i=n(69141),a=n(98343),s=n(57700),o=n(80934),l=n(38695),d=e=>{var{xs:t=12,sm:n=6,md:d=4,lg:u=3,xl:c=2,numOfSkeletonRows:v=2,maxRows:h,cardAspectRatio:m=s.Th,spacing:p=o.gP,withContainerSpacing:g=!1}=e,{classes:f,cx:x}=(0,o.rr)(),{itemsPerBreakpoint:w,gridItems:b}=(0,a.ub)({xs:t,sm:n,md:d,lg:u,xl:c,numOfSkeletonRows:v,maxRows:h,withLoadingSkeletons:!0}),{classes:{container:I}}=(0,o.eD)({itemsPerBreakpoint:w});return(0,r.jsx)(i.ZP,{className:x({[f.gridContainer]:g,[I]:w}),style:{"--customGridSpacing":"".concat(p,"px")},container:!0,children:b.map((e,a)=>(0,r.jsx)(i.ZP,{className:x(!g&&f.gridItem),style:{"--customGridSpacing":"".concat(p,"px")},xs:t,sm:n,md:d,lg:u,xl:c,item:!0,children:(0,r.jsx)(l.H,{cardAspectRatio:m})},"skeleton_grid_".concat(a)))})}},38695:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(52322),i=n(91290),a=n(57700),s=(0,n(98116).ZL)()((e,t)=>{var{cardAspectRatio:n}=t;return{skeleton:{paddingTop:"".concat(100*n,"%"),width:"100%"}}}),o=e=>{var{cardAspectRatio:t=a.Th}=e,{classes:n}=s({cardAspectRatio:t});return(0,r.jsx)(i.Z,{variant:"rectangular",className:n.skeleton,"data-automation":"SkeletonGridItem"})}},19563:function(e,t,n){n.d(t,{K:function(){return o}});var r=n(53974),i=n(2784),a=n(9066),s=n(40191),o=e=>{var{containerEl:t,defaultRenderWidth:n=a.zU,gridSizingOptions:o,defaultHeight:l,spacing:d,useCssGrid:u}=e,c=u?1:0,[v,h]=(0,i.useState)(c),{width:m}=(0,r.h)(t,250,c),p=m?Math.max(m-1,0):n;return!u&&Math.floor(Math.abs(p-v))>1&&h(p),{rowHeight:(0,i.useMemo)(()=>c||(0,s.yl)({width:v,gridSizingOptions:o,defaultHeight:l,spacing:d}),[l,c,o,v,d]),rowWidth:v}}},98343:function(e,t,n){n.d(t,{ub:function(){return o}});var r=n(2784),i=n(40191),a=e=>{var{xs:t,sm:n,md:a,lg:s,xl:o,maxRows:l}=e;return(0,r.useMemo)(()=>l?{xs:(0,i.Vr)(t,l),sm:(0,i.Vr)(n,l),md:(0,i.Vr)(a,l),lg:(0,i.Vr)(s,l),xl:(0,i.Vr)(o,l)}:null,[t,n,a,s,o,l])},s=e=>{var{assets:t=[],maxItems:n,fillCemetery:a,showSkeletonsOnLoad:s,isGridLoading:o}=e,l=n&&(o&&s||a);return(0,r.useMemo)(()=>{if(!l)return t;var e=(0,i.yt)({assets:t,maxItems:n}),r=n?t.slice(0,n):t;return e?[...r,...e]:r},[t,l,n])},o=e=>{var{assets:t,xs:n,sm:r,md:o,lg:l,xl:d,numOfSkeletonRows:u,maxRows:c,fillCemetery:v,withLoadingSkeletons:h,isLoading:m}=e,{isGridLoading:p}=(0,i.pb)(t),g=(p||m)&&u||c,f=a({xs:n,sm:r,md:o,lg:l,xl:d,maxRows:g}),x=s({assets:t,fillCemetery:v,isGridLoading:p||m,maxItems:g?null==f?void 0:f.xl:null,showSkeletonsOnLoad:!!h||!!u});return{itemsPerBreakpoint:f,gridItems:x}}},40191:function(e,t,n){n.d(t,{UP:function(){return a},V$:function(){return d},Vr:function(){return l},Y7:function(){return h},fL:function(){return i},o1:function(){return s},pb:function(){return o},yl:function(){return v},yt:function(){return c}});var r="skeleton",i=e=>{var{height:t,aspect:n}=e;return t*n},a=e=>{var{width:t,aspect:n}=e;return t/n},s=e=>{var{width:t,height:n}=e;return t/n},o=e=>{var t=!e,n=e&&!e.length;return{isGridLoading:t,isGridEmpty:n,isGridReady:!t&&!n}},l=(e,t)=>12/e*t,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.type===r},u=e=>[...Array(e)].map((e,t)=>({id:t,type:r})),c=function(){var{assets:e=[],maxItems:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t-e.length;return n>0?u(n):null},v=e=>{var{defaultHeight:t,gridSizingOptions:n,spacing:r,width:i}=e,a=null==n?void 0:n.find(e=>{var{containerWidth:t}=e;return i>=t});return((null==a?void 0:a.height)||t)-2*r},h=e=>{var{deferAfterItemForUsers:t,index:n,isCustomMobileGridWidth:r}=e;return n>t||r&&n>0?"lazy":"eager"}},37439:function(e,t,n){n.d(t,{L:function(){return v}});var r=n(57460),i=n(6692),a=n(2281),s=n(52322),o=n(25365),l=n(98116),d=n(32549),u=n(96157),c=(0,l.ZL)()((e,t)=>{var{objectFit:n}=t;return{img:{height:"100.5%",width:"100%",objectFit:n}}}),v=e=>{var{minHeight:t=null,withBackground:n=!1,cardAspectRatio:l,classesProps:v=o.FD,asset:h,withFullWidth:m,backgroundHeight:p=null,imageFitOrCover:g="cover"}=e,f=(0,a._)(e,["minHeight","withBackground","cardAspectRatio","classesProps","asset","withFullWidth","backgroundHeight","imageFitOrCover"]),{classes:x}=c({objectFit:g});return(0,s.jsx)(u.A,{asset:h,withFullWidth:m,minHeight:t,withBackground:n,cardAspectRatio:l,classesProps:v,backgroundHeight:p,children:(0,s.jsx)(d.k,(0,i._)((0,r._)({},f),{imgClassName:x.img,asset:h,withFullWidth:m,backgroundHeight:p}))})}},46515:function(e,t,n){n.d(t,{B:function(){return k}});var r=n(57460),i=n(6692),a=n(52322),s=n(25237),o=n.n(s),l=o()(()=>Promise.all([n.e(3764),n.e(81189),n.e(88449)]).then(n.bind(n,61117)).then(e=>e.AssetOverlayWrapper),{loadableGenerated:{webpack:()=>[61117]},ssr:!0}),d=o()(()=>Promise.all([n.e(81189),n.e(65531)]).then(n.bind(n,87604)).then(e=>e.ImageAssetOverlayWrapper),{loadableGenerated:{webpack:()=>[87604]},ssr:!0}),u=o()(()=>Promise.all([n.e(3764),n.e(81189),n.e(14315)]).then(n.bind(n,90139)).then(e=>e.TemplateAssetItemOverlay),{loadableGenerated:{webpack:()=>[90139]},ssr:!0}),c=n(45265),v=n(59581),h=n(76825),m=n(24138),p=n(26481),g=n(53076),f=o()(()=>Promise.all([n.e(81189),n.e(44878)]).then(n.bind(n,62679)).then(e=>e.EnterpriseAssetOverlayWrapper),{loadableGenerated:{webpack:()=>[62679]},ssr:!0}),x=o()(()=>Promise.all([n.e(3764),n.e(81189),n.e(95489)]).then(n.bind(n,4858)).then(e=>e.AssetItemOverlay),{loadableGenerated:{webpack:()=>[4858]},ssr:!0}),w=o()(()=>Promise.all([n.e(81189),n.e(31421)]).then(n.bind(n,54663)).then(e=>e.TrackOverlay),{loadableGenerated:{webpack:()=>[54663]},ssr:!0}),b=o()(()=>n.e(49151).then(n.bind(n,36529)).then(e=>e.CreateTemplateOverlay),{loadableGenerated:{webpack:()=>[36529]},ssr:!0}),I=e=>{var{asset:t}=e;switch((0,h._L)(t)){case v.tn:case v.xF:return(0,a.jsx)(w,(0,r._)({},e));case v.C_:case v.zo:return(0,a.jsx)(b,(0,r._)({},e));case v.k4:return(0,a.jsx)(d,(0,r._)({},e));case v.hv:return(0,a.jsx)(u,(0,r._)({},e));case v.Nk:return(0,a.jsx)(c.z,(0,r._)({},e));case v.gP:return(0,a.jsx)(l,(0,i._)((0,r._)({},e),{showPreview:!0}));default:return(0,a.jsx)(x,(0,r._)({},e))}},k=e=>{var{isBrandEnterprise:t}=(0,p.D)(),n=(0,g.B)(),{asset:i}=e;if(t){if(void 0===n)return null;if(n)return(0,m.t1)(i)?(0,a.jsx)(c.z,(0,r._)({},e)):i.type===v.zo?(0,a.jsx)(b,(0,r._)({},e)):(0,a.jsx)(f,(0,r._)({},e))}return(0,a.jsx)(I,(0,r._)({isUserLoggedIn:n},e))}},29266:function(e,t,n){n.d(t,{y:function(){return d}});var r=n(57460),i=n(2281),a=n(52322),s=n(59581),o=n(76825),l=n(46515),d=e=>{var{asset:t,isAssetLoaded:n}=e,d=(0,i._)(e,["asset","isAssetLoaded"]),u=(0,o.Tp)(t);if(!n&&u!==s.xF)return null;switch(u){case s.zo:case s.hv:case s.k4:case s.xF:case s.tn:case s.nX:case s.A7:case s.Nk:case s.pX:return(0,a.jsx)(l.B,(0,r._)({asset:t},d));default:return null}}},92329:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(25237),i=n.n(r)()(()=>n.e(41913).then(n.bind(n,41913)).then(e=>e.CarouselNavigation),{loadableGenerated:{webpack:()=>[41913]},ssr:!1})},45556:function(e,t,n){n.d(t,{s:function(){return k}});var r=n(57460),i=n(6692),a=n(52322),s=n(59021),o=n(40191),l=n(80934),d=n(25365),u=n(92329),c=n(28908),v=n(54073),h=n.n(v),m=n(2784),p=n(26609),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:230,t=window.innerWidth,[n,r]=(0,m.useState)(t);return(0,m.useEffect)(()=>{var t=()=>r(window.innerWidth);return window.addEventListener("resize",h()(t,e)),()=>{window.removeEventListener("resize",t)}},[t,!0,n,e]),n},f=e=>{var{windowWidth:t,perPage:n,perPageSSR:r}=e,[i,a]=(0,m.useState)(r);return(0,m.useEffect)(()=>{a([...n].sort((e,t)=>t.breakpoint-e.breakpoint).find(e=>{var{breakpoint:n}=e;return n<=t}))},[t,n]),i},x=e=>{var{assets:t,perPage:n,perPageSSR:r}=e,[i,a]=(0,m.useState)(0),[s,o]=(0,m.useState)(0),{show:l,navigate:d}=f({windowWidth:g(),perPage:n,perPageSSR:r}),u=100/l,c=t&&t.length-1,v=(c+1-l)*u,h=(0,p.kr)({itemIndex:s,maxIndex:c,translateX:i,maxTranslateAmount:v});return{itemWidthPercentage:u,isPrevDisabled:(0,p.kq)({itemIndex:s,translateX:i}),isNextDisabled:h,activeIndex:s,onPrevious:()=>{a(i-u*d),o(s-d)},onNext:()=>{a(i+u*d),o(s+d)},onCustomNavigation:e=>{if(e!==s){var t=u*e;e>s?a(t):a(0===t?0:t),o(e)}},showNavigation:(0,p.AW)({maxTranslateAmount:v}),translateX:i}},w=[{breakpoint:0,show:2,navigate:1},{breakpoint:600,show:3,navigate:1},{breakpoint:1024,show:4,navigate:1},{breakpoint:1280,show:4,navigate:1}],b={navigation:{next:{},previous:{}}},I={breakpoint:0,show:4,navigate:1},k=e=>{var{AssetItem:t,NavigationComponent:n=null,assetItemProps:v=d.FD,assets:h,hasTextBelowCards:m=!1,isVertical:p=!1,maxRows:g=3,numOfSkeletonRows:f=1,perPage:k=w,perPageSSR:y=I,trackAnalytics:S=b,withLoadingSkeletons:_=!0,withGridItemSpacing:j=!1,withOverlay:C=!0,xs:O=12,sm:L=6,md:E=4,xl:N=1}=e,{classes:G}=(0,l.rr)(),{classes:A,cx:P}=(0,c.t)(),{onNext:R,onPrevious:M,onCustomNavigation:T,activeIndex:W,isNextDisabled:F,isPrevDisabled:z,translateX:B,itemWidthPercentage:U,showNavigation:Z}=x({assets:h,perPage:k,perPageSSR:y}),V="".concat(U,"%"),{isGridEmpty:D,isGridLoading:H,isGridReady:q}=(0,o.pb)(h),K={onPrevious:M,onNext:R,trackAnalytics:S.navigation,isNextDisabled:F,isPrevDisabled:z};return D?null:(0,a.jsx)("div",{className:A.root,"data-automation":"Fixed-Carousel",children:(0,a.jsxs)("div",{className:P(G.gridContainer,A.container),style:{"--customGridSpacing":"".concat(l.gP,"px")},children:[H&&_&&(0,a.jsx)(s.N,{numOfSkeletonRows:f,maxRows:g,xs:O,sm:L,md:E,xl:N}),q&&(0,a.jsxs)(a.Fragment,{children:[Z&&!n&&(0,a.jsx)(u.U,(0,r._)({},K)),(0,a.jsx)("div",{className:A.carousel,style:{transform:"translateX(-".concat(B,"%)")},children:h.map((e,n)=>(0,a.jsx)("div",{className:P({[G.gridItem]:j}),style:{width:V,minWidth:V,"--customGridSpacing":"".concat(l.gP,"px")},children:(0,a.jsx)(t,(0,r._)({gridItems:h,index:n,item:e,isVertical:p,withOverlay:C,hasTextBelowCards:m},v))},"gridItem_".concat(e.id,"_").concat(n)))}),Z&&n&&(0,a.jsx)(n,(0,i._)((0,r._)({},K),{assets:h,activeIndex:W,onCustomNavigation:T}))]})]})})}},28908:function(e,t,n){n.d(t,{t:function(){return r}});var r=(0,n(98116).ZL)()(e=>{var{breakpoints:t,transitions:n}=e;return{root:{position:"relative"},container:{flexWrap:"wrap",overflow:"hidden",[t.down("md")]:{overflow:"auto"}},carousel:{display:"flex",transition:n.create("transform",{easing:n.easing.easeInOut,duration:n.duration.standard})}}})},26609:function(e,t,n){n.d(t,{AW:function(){return a},kq:function(){return i},kr:function(){return r}});var r=e=>{var{itemIndex:t,maxIndex:n,translateX:r,maxTranslateAmount:i}=e;return t>=n||r>=i},i=e=>{var{itemIndex:t,translateX:n}=e;return t<=0||n<=0},a=e=>{var{maxTranslateAmount:t}=e;return t>0}},45265:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(25237),i=n.n(r)()(()=>Promise.all([n.e(3764),n.e(81189),n.e(98318)]).then(n.bind(n,62326)).then(e=>e.GenerateAssetItemOverlay),{loadableGenerated:{webpack:()=>[62326]},ssr:!0})},45240:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(52322),i=n(58488),a=JSON.parse('{"productId":"2471210954516338071","name":"Guitar","signature_image":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","initialImage":"G03","sprites_300":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-300/atlas-300.jpg","sprites_600":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/atlas-600.jpg","displays":{"600W":{"src":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","width":600,"height":600}},"extensions":{"atlas":{"camera_type_code":"full_spinner"}},"atlas":{"camera_type_code":"full_spinner"}}'),s=n(16495),o=n(2784),l=(0,n(98116).ZL)()(e=>{var{palette:t}=e;return{canvasContainer:{width:"100%",position:"relative",outline:0,borderColor:t.border1Color,overflow:"hidden",display:"flex",justifyContent:"center"},canvas:{width:"100%",height:"100%"},canvasCarouselItem:{width:"56%",height:"auto"}}}),d=e=>{var t,{asset:n=a,className:d,resolution:u=600,isCarouselItem:c=!1}=e,{classes:v,cx:h}=l(),m=(0,o.useRef)(null),p=c?null==m?void 0:null===(t=m.current)||void 0===t?void 0:t.offsetParent:null;(0,s.k)({asset:n,canvasRef:m,autoRotate:!0,rotationControllerRef:p});var g=c?400:u,f=c?v.canvasCarouselItem:v.canvas;return(0,r.jsx)(i.Z,{className:h(v.canvasContainer,d),children:(0,r.jsx)("canvas",{ref:m,className:f,width:g,height:g})})}},34450:function(e,t,n){n.d(t,{l:function(){return d}});var r=n(57460),i=n(37091),a=n(76825),s=n(13716),o=n(62223),l=n(2784),d=()=>{var{analytics:e}=(0,o.yh)(),t=(0,o.wU)(),{getSearchContextFromAssets:n}=(0,s.Y)();return(0,l.useCallback)(s=>{var{assets:o,position:l,listId:d,eventLabel:u=""}=s;(null==o?void 0:o.length)&&e.productListViewed((0,r._)({list_id:d,position:l,products:o.map(e=>({product_id:(0,i.qI)(e),asset_type:(0,a.ZZ)(e),sku:(0,i.qI)(e)})),search_context:n(o)},t?{pageSection:t,eventLabel:u}:{}))},[e,n,t])}},53974:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(2281),i=n(94236),a=n(2784),s=n(42047),o={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON(){var{toJSON:e}=this;return(0,r._)(this,["toJSON"])}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,[r,l]=(0,a.useState)(o);return(0,s.L)(()=>{if(n)return()=>{};var r=new window.ResizeObserver((0,i.P)(e=>{var{0:t}=e,n=null==t?void 0:t.contentRect;n&&l(n)},t));return r.observe(e.current),()=>{r.disconnect(),r=null}},[t,l,e]),r}},40521:function(e,t,n){n.d(t,{X:function(){return s}});var r=n(90428),i=n(2784),a=(e,t)=>{var n=(0,r.HP)(e);return n?JSON.parse(n):t},s=(e,t)=>{var[n,s]=(0,i.useState)(a(e,t));return{storedValue:n,setValue:t=>{try{s(t),(0,r.fe)({storageKey:e,data:JSON.stringify(t)})}catch(e){var n,i;null===(i=window.NREUM)||void 0===i||null===(n=i.noticeError)||void 0===n||n.call(i,e,{message:"Error storing sessionStorage value"})}},updateValue:t=>{try{var i,a,o=t(n);s(o),(0,r.fe)({storageKey:e,data:JSON.stringify(o)})}catch(e){null===(a=window.NREUM)||void 0===a||null===(i=a.noticeError)||void 0===i||i.call(a,e,{message:"Error updating sessionStorage value"})}},removeItem:()=>{try{(0,r.gk)(e)}catch(e){var t,n;null===(n=window.NREUM)||void 0===n||null===(t=n.noticeError)||void 0===t||t.call(n,e,{message:"Error removing sessionStorage value"})}}}}},23798:function(e,t,n){n.d(t,{E:function(){return r}});var r=(0,n(98116).ZL)()((e,t)=>{var{breakpoints:n,tokens:{zIndex:r}}=e,{backgroundColor:i,mobileScrollBreakpoint:a="sm"}=t;return{mobileScrollWrapper:{width:"100%",display:"flex",flexWrap:"wrap",[n.down(a)]:{display:"flex",width:"100%",overflowX:"auto",overflowY:"hidden",transform:"translateZ(0)"}},mobileScrollContent:{[n.down(a)]:{"&&":{width:"auto"},flexWrap:"nowrap",display:"inline-flex","&:after":{content:'""',background:"\n          linear-gradient(\n            to left,\n            ".concat(i," 0,\n            transparent 100%\n          )"),position:"sticky",width:50,minWidth:50,marginLeft:-50,top:0,bottom:0,right:0,pointerEvents:"none",zIndex:r["2"]}}}}})},90428:function(e,t,n){n.d(t,{HP:function(){return i},fe:function(){return r},gk:function(){return a}});var r=e=>{var t,{storageKey:n,data:r}=e;try{window.sessionStorage.setItem(n,r),t=!0}catch(e){t=!1}return t},i=e=>window.sessionStorage.getItem(e),a=e=>{window.sessionStorage.removeItem(e)}}}]);
//# sourceMappingURL=82453-5a58aa20ca3e51bb.js.map