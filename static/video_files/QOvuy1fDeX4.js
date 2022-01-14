if (self.CavalryLogger) { CavalryLogger.start_js(["+slt4QI"]); }

__d("RoomsNullStateDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5042973005720772"}),null);
__d("RoomsNullStateDialogQuery$Parameters",["RoomsNullStateDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("RoomsNullStateDialogQuery_facebookRelayOperation"),metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["viewer","joinable_video_chats","published_self_room_cards"]}]},name:"RoomsNullStateDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("RoomsSelfLobbyDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4400036766673674"}),null);
__d("RoomsSelfLobbyDialogQuery$Parameters",["RoomsSelfLobbyDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("RoomsSelfLobbyDialogQuery_facebookRelayOperation"),metadata:{},name:"RoomsSelfLobbyDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("RoomFriendWithoutRoomTileCardCollapsed_fbts.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomFriendWithoutRoomTileCardCollapsed_fbts",selections:[{alias:"say_hi_button",args:[{kind:"Literal",name:"type",value:"SAY_HI_BUTTON_LABEL"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:'joinable_video_chats_string(type:"SAY_HI_BUTTON_LABEL")'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomFriendWithoutRoomTileCardCollapsed_user$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"RoomFriendWithoutRoomTileCardCollapsed_user$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}]};e.exports=a}),null);
__d("RoomFriendWithoutRoomTileCardCollapsed_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"RoomFriendWithoutRoomTileCardCollapsed_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useRoomsPresense_user"},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useRoomsPresense_room.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRoomsPresense_room",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_owner_in_call",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"link_owner",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a}),null);
__d("useRoomsPresense_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRoomsPresense_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomsTrayVariantContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={initialScrollToIndex:void 0,setInitialScrollToIndex:function(){},setVariant:function(){},variant:"collapsed"};c=a.createContext(b);g["default"]=c}),98);
__d("RoomsNullStateDialog.entrypoint",["JSResourceForInteraction","RoomsNullStateDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.userID;return{queries:{queryReference:{options:{},parameters:c("RoomsNullStateDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),userID:a}}}}},root:c("JSResourceForInteraction")("RoomsNullStateDialog.react").__setRef("RoomsNullStateDialog.entrypoint")};g["default"]=a}),98);
__d("RoomsSelfLobbyDialog.entrypoint",["JSResourceForInteraction","RoomsSelfLobbyDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b;return{queries:{queryReference:{options:{fetchPolicy:"store-or-network"},parameters:c("RoomsSelfLobbyDialogQuery$Parameters"),variables:{linkHash:(b=a.linkHash)!=null?b:(b=a.routeProps)==null?void 0:b.link_hash,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("RoomsSelfLobbyDialog.react").__setRef("RoomsSelfLobbyDialog.entrypoint")};g["default"]=a}),98);
__d("VideoChatLoggingDataContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a(null);g["default"]=b}),98);
__d("VideoChatLogging",["VideoChatLoggingDataContext","react","recoverableViolation","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useMemo,l=c("requireDeferred")("RoomCardImpressionFalcoEvent").__setRef("VideoChatLogging"),m=c("requireDeferred")("RoomCardTapFalcoEvent").__setRef("VideoChatLogging"),n=c("requireDeferred")("RoomCreateTapFalcoEvent").__setRef("VideoChatLogging"),o=c("requireDeferred")("RoomCreationFlowStartFalcoEvent").__setRef("VideoChatLogging"),p=c("requireDeferred")("RoomCreationFlowSuccessFalcoEvent").__setRef("VideoChatLogging"),q=c("requireDeferred")("RoomEmptyCardSheetImpressionFalcoEvent").__setRef("VideoChatLogging"),r=c("requireDeferred")("RoomGroupRoomListViewImpressionFalcoEvent").__setRef("VideoChatLogging"),s=c("requireDeferred")("RoomGroupRoomListViewItemTapFalcoEvent").__setRef("VideoChatLogging"),t=c("requireDeferred")("RoomGroupRoomRhcImpressionFalcoEvent").__setRef("VideoChatLogging"),u=c("requireDeferred")("RoomInterestTapFalcoEvent").__setRef("VideoChatLogging"),v=c("requireDeferred")("RoomJoinTapFalcoEvent").__setRef("VideoChatLogging"),w=c("requireDeferred")("RoomLobbySheetImpressionFalcoEvent").__setRef("VideoChatLogging"),x=c("requireDeferred")("RoomMessageTapFalcoEvent").__setRef("VideoChatLogging"),y=c("requireDeferred")("RoomPromotionUnitImpressionFalcoEvent").__setRef("VideoChatLogging"),z=c("requireDeferred")("RoomPromotionUnitTapFalcoEvent").__setRef("VideoChatLogging"),A=c("requireDeferred")("RoomSelfCardButtonTapFalcoEvent").__setRef("VideoChatLogging"),B=c("requireDeferred")("RoomSelfCardTapFalcoEvent").__setRef("VideoChatLogging"),C=c("requireDeferred")("RoomSettingSheetImpressionFalcoEvent").__setRef("VideoChatLogging"),D=c("requireDeferred")("RoomTrayImpressionFalcoEvent").__setRef("VideoChatLogging"),E=c("requireDeferred")("RoomUpdateTapFalcoEvent").__setRef("VideoChatLogging"),F={};function a(){var a=j(c("VideoChatLoggingDataContext")),b=function(b){y.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{source:(a=d.source)!=null?a:void 0,surface:(a=d.surface)!=null?a:void 0}})})},d=i(function(a){z.onReady(function(b){b.log(function(){return{button_type:a==null?void 0:a.button_type,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},[]),e=i(function(b){v.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,room_url:d.room_url,session_ids:(a=d.session_ids)!=null?a:F,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),f=function(a){t.onReady(function(b){var d=a==null?void 0:a.room_container_id;if(d==null){c("recoverableViolation")("roomContainerID should not be null while logging Groups RHC Impression","groups_comet");return}b.log(function(){return{list_video_call_link_ids:a==null?void 0:a.list_video_call_link_ids,room_container_id:d,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},g=function(a){r.onReady(function(b){var d=a==null?void 0:a.room_container_id;if(d==null){c("recoverableViolation")("roomContainerID should not be null while logging Groups Rooms Tab\n          List View Impression","groups_comet");return}b.log(function(){return{list_video_call_link_ids:a==null?void 0:a.list_video_call_link_ids,room_container_id:d,source:a==null?void 0:a.source,surface:a==null?void 0:a.surface}})})},h=i(function(b){s.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{num_room_participants:(a=d.num_room_participants)!=null?a:0,room_container_id:d.room_container_id,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),k=i(function(b){l.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:(a=d.num_room_participants)!=null?a:0,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),G=i(function(b){n.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),H=i(function(b){o.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),I=i(function(b){p.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),J=i(function(b){E.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),K=i(function(b){m.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),L=i(function(b){u.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),M=i(function(b){var c=babelHelpers["extends"]({},a,b);A.onReady(function(a){a.log(function(){var a;return{button_type:c.button_type,card_tray_index:c.card_tray_index,session_ids:(a=c.session_ids)!=null?a:{},sheet_type:c.sheet_type,source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type}})})},[a]),N=i(function(b){q.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),O=i(function(b){var c=babelHelpers["extends"]({},a,b);A.onReady(function(a){a.log(function(){var a;return{button_type:c.button_type,card_tray_index:c.card_tray_index,num_room_participants:c.num_room_participants,session_ids:(a=c.session_ids)!=null?a:{},sheet_type:c.sheet_type,source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type,video_call_link_id:c.video_call_link_id}})})},[a]),P=i(function(b){var c=babelHelpers["extends"]({},a,b);B.onReady(function(a){a.log(function(){var a;return{card_tray_index:c.card_tray_index,num_room_participants:c.num_room_participants,session_ids:(a=c.session_ids)!=null?a:{},source:c.source,surface:c.surface,tray_ui_type:c.tray_ui_type,video_call_link_id:c.video_call_link_id}})})},[a]),Q=i(function(b){C.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,room_type:d.room_type,session_ids:(a=d.session_ids)!=null?a:{},sheet_type:d.sheet_type,source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),R=i(function(b){w.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{card_tray_index:d.card_tray_index,num_room_participants:d.num_room_participants,room_container_id:d.room_container_id,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type,video_call_link_id:d.video_call_link_id}})})},[a]),S=i(function(b){D.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{num_rooms:d.num_rooms,session_ids:(a=d.session_ids)!=null?a:{},source:d.source,surface:d.surface,tray_ui_type:d.tray_ui_type}})})},[a]),T=i(function(b){x.onReady(function(c){var d=babelHelpers["extends"]({},a,b);c.log(function(){var a;return{button_type:d.button_type,card_tray_index:d.card_tray_index,session_ids:(a=d.session_ids)!=null?a:F,source:d.source,surface:d.surface,video_call_link_id:d.video_call_link_id}})})},[a]),U=function(a,b){var d=function(){b(a)};return c("useSinglePartialViewImpression")({onImpressionStart:d})};return{defaultData:a,logGroupsRHCImpression:f,logGroupsRoomsItemTap:h,logGroupsRoomsTabListImpression:g,logPromotionUnitImpression:b,logPromotionUnitTap:d,logRoomCardImpression:k,logRoomCardTap:K,logRoomCreateTap:G,logRoomCreationFlowStart:H,logRoomCreationFlowSuccess:I,logRoomEmptyCardButtonTap:M,logRoomEmptyCardSheetImpression:N,logRoomInterestTap:L,logRoomJoinTap:e,logRoomLobbySheetImpression:R,logRoomMessageButtonTap:T,logRoomSelfCardButtonTap:O,logRoomSelfCardTap:P,logRoomSheetImpression:Q,logRoomsTrayImpression:S,logRoomUpdateTap:J,useVideoChatImpressionLogging:U}}function b(a,b){return function(d){var e=j(c("VideoChatLoggingDataContext")),f=b&&b(d),g=k(function(){return babelHelpers["extends"]({},e,f)},[e,f]);return h.jsx(c("VideoChatLoggingDataContext").Provider,{value:g,children:h.jsx(a,babelHelpers["extends"]({},d))})}}g.useVideoChatLogging=a;g.withVideoChatLoggingProvider=b}),98);
__d("RoomsCollapsedTileContent.react",["ix","CometTooltip.react","IconSource","TetraIcon.react","TetraProfilePhoto.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){var d=a.addOn,e=a.isSelfTile;e=e===void 0?!1:e;var f=a.ownerName,g=a.profileURI;a=a.tooltipAction;d=i.jsx(c("TetraProfilePhoto.react"),{addOn:(d=d)!=null?d:void 0,shape:"circle",size:40,source:{uri:g}});if(e){g=new(c("IconSource"))("FB",h("482648"),20);return i.jsxs("div",{className:"q676j6op taijpn5t qypqp5cg j83agx80 rq0escxv spb7xbtv bkmhp75w emlxlaya s45kfl79 snggw924 czabki66 hx37s9t6 qjs0y65x bp9cbjyn",children:[d,i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb k77z8yql qs9ysxi8 arfg74bv n00je7tq d6rk862h"}),i.jsx("div",{className:"pmk7jnqg",children:i.jsx(c("TetraIcon.react"),{color:"white",icon:g,size:24})})]})}e=i.jsx("div",{className:"taijpn5t j83agx80 bp9cbjyn",children:a});return i.jsx(c("CometTooltip.react"),{headline:f,tooltip:e,children:i.jsx("div",{ref:b,children:d})})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("RoomsEnumType",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({CREATION:"creation",ROOMS_SETTING:"rooms_setting",TRAY:"tray"});c=b("$InternalEnum")({CREATE:"create",SELF_LOBBY:"self_lobby"});d=b("$InternalEnum")({CREATE:"create"});f.DialogSource=a;f.NullStateDialogActions=c;f.RoomsDialogActions=d}),66);
__d("useRoomsNullStateDialog",["CometRelay","JSResourceForInteraction","RoomsEnumType","RoomsNullStateDialog.entrypoint","RoomsSelfLobbyDialog.entrypoint","VideoChatLogging","react","useCometEntryPointDialog","useCometLazyDialog","useCometRelayEntrypointContextualEnvironmentProvider","useRoomsCreateDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef,i=c("JSResourceForInteraction")("RoomsSelfLobbyDialogContainer.react").__setRef("useRoomsNullStateDialog");function a(a){var b,e=c("useCometRelayEntrypointContextualEnvironmentProvider")(),f=h(null);b=c("useCometEntryPointDialog")(c("RoomsNullStateDialog.entrypoint"),{userID:(b=a)!=null?b:""},"button");var g=b[0],j=b[1],k=b[2];b=b[3];var l=c("useRoomsCreateDialog")(),m=l.showDialog;l=c("useCometLazyDialog")(i);var n=l[0];l=d("VideoChatLogging").useVideoChatLogging();var o=l.defaultData,p=l.logRoomCardTap;l=function(){var b,f=babelHelpers["extends"]({},o,{link_owner_id:(b=a)!=null?b:void 0,source:"empty_friend_room_card",video_call_link_id:void 0});p(f);g({loggingData:f},function(b,g){if(b===d("RoomsEnumType").NullStateDialogActions.CREATE)m({initialInvitedFriends:a==null?void 0:[a],loggingData:f});else if(b===d("RoomsEnumType").NullStateDialogActions.SELF_LOBBY&&g!=null){b=d("CometRelay").loadEntryPoint(e,c("RoomsSelfLobbyDialog.entrypoint"),{linkHash:g});n({initialEntryPoint:b,loggingData:f},void 0)}},"comet.rooms.sayhi")};return{dialogTriggerRef:f,onHoverInPrerenderer:j,onHoverOutPrerenderer:k,onPressInPrerenderer:b,showDialogWithLogging:l}}g["default"]=a}),98);
__d("useSafeState",["createCancelableFunction","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef,j=b.useState;function a(a){a=j(a);var b=a[0];a=a[1];var d=i(c("createCancelableFunction")(a));h(function(){var a=d.current;return function(){a.cancel()}},[]);return[b,d.current]}g["default"]=a}),98);
__d("useRoomsPresense",["CometRelay","SubscriptionsHandler","cr:1424586","react","useRoomsPresense_room.graphql","useRoomsPresense_user.graphql","useSafeState"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react").useEffect,k=2,l=h!==void 0?h:h=b("useRoomsPresense_room.graphql");function m(a,c,d){a==null&&c(!1);if(b("cr:1424586")!=null){var e=b("cr:1424586").onReady(function(b){c(b.get(a)===k)});d.addSubscriptions(e)}}function n(a,c){if(b("cr:1424586")){var d=b("cr:1424586").onReady(function(b){a.addSubscriptions(b.subscribe("change",function(){c()}))});a.addSubscriptions(d)}}function o(a){var b=c("useSafeState")(!1),d=b[0],e=b[1];j(function(){var b=new(c("SubscriptionsHandler"))();m(a,e,b);n(b,function(){return m(a,e,b)});return function(){return b.release()}},[e,a]);return d}function a(a){a=d("CometRelay").useFragment(l,a);var b=a==null?void 0:a.link_owner,c=o(b==null?void 0:b.id);return(a==null?void 0:a.is_owner_in_call)===!0||(b==null?void 0:b.availability)==="ACTIVE"||c}var p=i!==void 0?i:i=b("useRoomsPresense_user.graphql");function e(a){a=d("CometRelay").useFragment(p,a);var b=o(a==null?void 0:a.id);return(a==null?void 0:a.availability)==="ACTIVE"||b}g.useRoomsPresense=a;g.useRoomsUserPresense=e}),98);
__d("RoomFriendWithoutRoomTileCardCollapsed.react",["fbt","CometPressable.react","CometRelay","GraphQLGender","RoomFriendWithoutRoomTileCardCollapsed_fbts.graphql","RoomFriendWithoutRoomTileCardCollapsed_user.graphql","RoomsCollapsedTileContent.react","RoomsTrayVariantContext","react","useRoomsNullStateDialog","useRoomsPresense"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react"),l=d("react").useContext,m={pressable:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"qypqp5cg",position:"l9j0dhe7",width:"q676j6op"}},n=i!==void 0?i:i=b("RoomFriendWithoutRoomTileCardCollapsed_user.graphql"),o=j!==void 0?j:j=b("RoomFriendWithoutRoomTileCardCollapsed_fbts.graphql");function a(a){var b=a.cardIndex,e=a.fbtsRef;a=a.roomCardRef;a=d("CometRelay").useFragment(n,a);e=d("CometRelay").useFragment(o,e);var f=a==null?void 0:a.id,g=d("useRoomsPresense").useRoomsUserPresense(a),i=l(c("RoomsTrayVariantContext")),j=i.setInitialScrollToIndex,p=i.setVariant;i=(e=e==null?void 0:(i=e.say_hi_button)==null?void 0:i.text)!=null?e:"Say Hi";e=a==null?void 0:a.id;e=c("useRoomsNullStateDialog")(e);var q=e.onHoverInPrerenderer,r=e.onHoverOutPrerenderer,s=e.onPressInPrerenderer,t=e.showDialogWithLogging;if(a==null||f==null||a.name==null||((e=a.profile_picture)==null?void 0:e.uri)==null)return null;f=a.name;e=a.gender;a=(a=a.profile_picture)==null?void 0:a.uri;g=k.jsx(c("RoomsCollapsedTileContent.react"),{addOn:g?{type:"availabilityBadge"}:null,ownerName:f,profileURI:a,tooltipAction:i});return k.jsx(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/{"*":"{owner name} friend room tile"}/*FBT_CALL*/,[h._name("owner name",f,new(c("GraphQLGender"))(e).toIntlVariationsEnum())]),onHoverIn:q,onHoverOut:r,onPress:function(){t(),j&&j(b),p("expanded")},onPressIn:s,role:"button",testid:void 0,xstyle:m.pressable,children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);