if (self.CavalryLogger) { CavalryLogger.start_js(["S\/AYfDy"]); }

__d("CometStickyView.react",["BaseViewportMarginsContext","CometContextualLayerAnchorRoot.react","CometRouteRenderType","HiddenSubtreePassiveContext","mergeRefs","react","stylex","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useEffect,l=b.useMemo,m=b.useRef,n=b.useState,o={sticky:{position:"lpgh02oy"}},p=((e=window.CSS)==null?void 0:e.supports)&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"));function a(a){var b=a.bottom,e=a.children,f=a.tagName;f=f===void 0?"div":f;var g=a.top,q=a.topOffset;a=a.xstyle;var r=j(c("HiddenSubtreePassiveContext")),s=d("CometRouteRenderType").useIsPushView(),t=j(c("BaseViewportMarginsContext")),u=q!=null?q+t.top:(q=g)!=null?q:s?16:76;t=n(b==null?u:null);g=t[0];var v=t[1],w=i(function(a){return b!=null&&v(Math.floor(Math.min(u,window.innerHeight-b-a)))},[b,u]),x=c("useResizeObserver")(function(a){var c=r.getCurrentState();c=c.hiddenOrBackgrounded;if(c)return;b!=null&&w(a.height)}),y=m(null);q=l(function(){return c("mergeRefs")(x,y)},[x]);k(function(){if(b!=null){var a=function(){var a=r.getCurrentState();a=a.hidden;if(a)return;a=y.current;if(a==null)return;w(a.getBoundingClientRect().height)};window.addEventListener("resize",a,{passive:!0});return function(){window.removeEventListener("resize",a,{passive:!0})}}},[b,r,w]);s=g!=null&&p?{top:g}:{};return h.jsx(f,{className:c("stylex")(a,o.sticky),ref:b!=null?q:null,style:s,children:h.jsx(c("CometContextualLayerAnchorRoot.react"),{children:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveMenu.react",["fbt","ix","CometLazyPopoverTrigger.react","CometPopoverLoadingState.react","JSResourceForInteraction","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("JSResourceForInteraction")("SearchCometInterestsDeepDiveReportMenuItem.react").__setRef("SearchCometInterestsDeepDiveMenu.react");function a(a){var b=a.hashtagID,e=a.location;return b==null?null:j.jsx(c("CometLazyPopoverTrigger.react"),{align:"end",fallback:j.jsx(c("CometPopoverLoadingState.react"),{}),popoverProps:{hashtagID:b},popoverResource:k,popoverType:"menu",position:"below",children:function(a,b){return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("484386"),16),label:h._(/*FBT_CALL*/"More"/*FBT_CALL*/),labelIsHidden:!0,onPress:function(){b()},ref:a,size:e==="bottomRow"?"medium":"large",type:"secondary"})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);