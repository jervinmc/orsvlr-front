if (self.CavalryLogger) { CavalryLogger.start_js(["TujgyHc"]); }

__d("CometModernHomeFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4187565284678280"}),null);
__d("CometModernHomeFeedQuery$Parameters",["CometModernHomeFeedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometModernHomeFeedQuery_facebookRelayOperation"),metadata:{},name:"CometModernHomeFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometClassicHomeLeftRailContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4633720553409109"}),null);
__d("CometClassicHomeLeftRailContainerQuery$Parameters",["CometClassicHomeLeftRailContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometClassicHomeLeftRailContainerQuery_facebookRelayOperation"),metadata:{},name:"CometClassicHomeLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHomeContactGroupsContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7416769995007115"}),null);
__d("CometHomeContactGroupsContainerQuery$Parameters",["CometHomeContactGroupsContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometHomeContactGroupsContainerQuery_facebookRelayOperation"),metadata:{},name:"CometHomeContactGroupsContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHomeContactsContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6756965757678137"}),null);
__d("CometHomeContactsContainerQuery$Parameters",["CometHomeContactsContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometHomeContactsContainerQuery_facebookRelayOperation"),metadata:{},name:"CometHomeContactsContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometRightSideHeaderCardsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4638473949569930"}),null);
__d("CometRightSideHeaderCardsQuery$Parameters",["CometRightSideHeaderCardsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometRightSideHeaderCardsQuery_facebookRelayOperation"),metadata:{},name:"CometRightSideHeaderCardsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedInlineComposerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4050599581690002"}),null);
__d("CometFeedInlineComposerQuery$Parameters",["CometFeedInlineComposerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedInlineComposerQuery_facebookRelayOperation"),metadata:{},name:"CometFeedInlineComposerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("VideoChatHomeContainerCometQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4260517400719454"}),null);
__d("VideoChatHomeContainerCometQuery$Parameters",["VideoChatHomeContainerCometQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("VideoChatHomeContainerCometQuery_facebookRelayOperation"),metadata:{},name:"VideoChatHomeContainerCometQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMegaphoneRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4752995958114576"}),null);
__d("CometMegaphoneRootQuery$Parameters",["CometMegaphoneRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMegaphoneRootQuery_facebookRelayOperation"),metadata:{},name:"CometMegaphoneRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesTrayRectangularRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6605555546183278"}),null);
__d("StoriesTrayRectangularRootQuery$Parameters",["StoriesTrayRectangularRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesTrayRectangularRootQuery_facebookRelayOperation"),metadata:{},name:"StoriesTrayRectangularRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometBookmarksRoot.entrypoint",["CometClassicHomeLeftRailContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{menuContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{numExploreBookmarks:c("gkx")("2029639")?10:9,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometBookmarksRoot.react").__setRef("CometBookmarksRoot.entrypoint")};g["default"]=a}),98);
__d("getCometFeedVariablesForSk",["WebConnectionClassServerGuess","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f){f===void 0&&(f=[]);var g=c("gkx")("869481"),h=b==="favorites"&&c("gkx")("1386487");a=a===10;return{RELAY_INCREMENTAL_DELIVERY:g,UFI2CommentsProvider_commentsKey:"CometModernHomeFeedQuery",connectionClass:c("WebConnectionClassServerGuess").connectionClass,feedbackSource:1,feedLocation:"NEWSFEED",feedStyle:a?"SEEN_FEED":h?"FAVORITES_FEED":"DEFAULT",orderby:h?[]:b==="h_chr"?["MOST_RECENT"]:["TOP_STORIES"],privacySelectorRenderLocation:"COMET_STREAM",recentVPVs:f,refreshMode:e?"MANUAL":null,renderLocation:"homepage_stream",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}g["default"]=a}),98);
__d("CometHomeRoot.entrypoint",["CometClassicHomeLeftRailContainerQuery$Parameters","CometFeedInlineComposerQuery$Parameters","CometHomeContactGroupsContainerQuery$Parameters","CometHomeContactsConfig","CometHomeContactsContainerQuery$Parameters","CometMegaphoneRootQuery$Parameters","CometModernHomeFeedQuery$Parameters","CometRightSideHeaderCardsQuery$Parameters","JSResourceForInteraction","StoriesTrayRectangularRootQuery$Parameters","VideoChatHomeContainerCometQuery$Parameters","WebPixelRatio","cr:1714513","getCometFeedVariablesForSk","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1714513");a={getPreloadProps:function(a){var b=a.routeParams.sk;a=a.routeProps.feedStyle;a=c("getCometFeedVariablesForSk")(a,b,!1);b=b==="favorites"&&c("gkx")("1386487")&&!c("gkx")("523");a={feedInlineComposerQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:c("CometFeedInlineComposerQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},feedQueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:c("CometModernHomeFeedQuery$Parameters"),variables:a},homeContactGroupsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},parameters:c("CometHomeContactGroupsContainerQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},homeContactsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},parameters:c("CometHomeContactsContainerQuery$Parameters"),variables:{numContactsToFetch:c("CometHomeContactsConfig").numContactsToFetch,scale:d("WebPixelRatio").get(),shouldEnableMWStoriesEntrypoint:c("gkx")("1148")}},leftRailContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"left_rail"},parameters:c("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{numExploreBookmarks:c("gkx")("2029639")?10:9,scale:d("WebPixelRatio").get()}},megaphoneQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:c("CometMegaphoneRootQuery$Parameters"),variables:{first:1,scale:d("WebPixelRatio").get()}},rightSideHeaderCardsQueryReference:{environmentProviderOptions:{ssrBoundary:"rhc"},options:{fetchPolicy:"network-only"},parameters:c("CometRightSideHeaderCardsQuery$Parameters"),variables:{refresh_num:0,scale:d("WebPixelRatio").get()}}};if(!b){var e,f;b=7;e=(e=c("qex")._("1288"))!=null?e:!1;f=(f=c("qex")._("1289"))!=null?f:!1;if(c("qex")._("1290"))f?b=e?5:6:b=e?10:12;else{b=c("qex")._("1291")||e?6:(f=c("qex")._("1292"))!=null?f:7}a=babelHelpers["extends"]({},a,{storiesTrayQueryReference:{environmentProviderOptions:{ssrBoundary:"stories"},parameters:c("StoriesTrayRectangularRootQuery$Parameters"),variables:{blur:d("WebPixelRatio").get()*10,bucketsToFetch:b,scale:d("WebPixelRatio").get(),shouldEnableActiveBadge:c("gkx")("5157"),shouldEnableLiveInStoriesDropdown:!1,shouldPrefetchProfilePic:c("gkx")("2029255")}}})}c("gkx")("1363069")&&(a=babelHelpers["extends"]({},a,{joinableVideoChatsQueryReference:{environmentProviderOptions:{ssrBoundary:"composer"},parameters:c("VideoChatHomeContainerCometQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}));return{queries:a}},root:c("JSResourceForInteraction")("CometHomeRoot.react").__setRef("CometHomeRoot.entrypoint")};e=a;g["default"]=e}),98);
__d("CometHomeRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";c("JSResourceForInteraction")("CometHomeRoot.react").__setRef("CometHomeRootBEOneAhead");a=null;g["default"]=a}),98);