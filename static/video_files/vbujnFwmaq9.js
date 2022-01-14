if (self.CavalryLogger) { CavalryLogger.start_js(["PGkyRwg"]); }

__d("CometFRXQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4949128078441816"}),null);
__d("CometFRXQuery$Parameters",["CometFRXQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFRXQuery_facebookRelayOperation"),metadata:{},name:"CometFRXQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWChatAudioRecorderStreamSetup.bs",["MWChatAudioLog.bs","Promise","RTCUtils.bs","bs_caml_js_exceptions","bs_caml_obj","bs_caml_option","bs_curry","promiseDone"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){var g=function(a){return b("RTCUtils.bs").getUserMedia({video:!1,audio:!0}).then(function(a){return b("Promise").resolve(b("bs_caml_option").some(a))})["catch"](function(a){a=b("bs_caml_js_exceptions").caml_as_js_exn(a);var c=0;a!==void 0&&b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(a).name,"NotAllowedError")?(b("bs_curry")._1(e,function(a){return 2}),b("bs_curry")._1(f,void 0),b("MWChatAudioLog.bs").logBrowserDenyAccess(void 0)):c=1;c===1&&(b("bs_curry")._1(e,function(a){return 3}),b("MWChatAudioLog.bs").logBrowserDenyAccess(void 0));b("MWChatAudioLog.bs").logBrowserDenyAccess(void 0);return b("Promise").resolve(void 0)})},h=function(f){if(c.current){a.contents=b("bs_caml_option").some(f);b("bs_curry")._1(e,function(a){return 1});b("bs_curry")._1(d,void 0);return b("MWChatAudioLog.bs").logBrowserAllowAccess(void 0)}else return b("RTCUtils.bs").stopMediaStream(f)};g=g(void 0).then(function(a){a!==void 0?h(b("bs_caml_option").valFromOption(a)):b("bs_curry")._1(f,void 0);return b("Promise").resolve(void 0)});b("promiseDone")(g,void 0,void 0);g=a.contents;if(g!==void 0)return b("RTCUtils.bs").stopMediaStream(b("bs_caml_option").valFromOption(g))}f.setupStream=a}),null);
__d("FocusGroup.bs",["FocusGroup.react"],(function(a,b,c,d,e,f){"use strict";function a(a){a=b("FocusGroup.react").createFocusGroup(a.query);var c=a[1];a=a[0];var d={make:a},e={make:c};return{group:a,item:c,Group:d,Item:e}}f.Make=a}),null);
__d("MWChatMessageBothOrientationFocusGroup.bs",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.bs","focusScopeQueries","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");c=b("focusScopeQueries").tabbableScopeQuery;d=b("FocusGroup.bs").Make({query:c});e={key:b("CometKeys").UP};c={key:b("CometKeys").DOWN};var j={key:b("CometKeys").LEFT},k={key:b("CometKeys").RIGHT},l=[{command:e,description:g._(/*FBT_CALL*/"Previous item"/*FBT_CALL*/),handler:function(a){}},{command:c,description:g._(/*FBT_CALL*/"Next item"/*FBT_CALL*/),handler:function(a){}},{command:j,description:g._(/*FBT_CALL*/"Next item"/*FBT_CALL*/),handler:function(a){}},{command:k,description:g._(/*FBT_CALL*/"Previous item"/*FBT_CALL*/),handler:function(a){}}];function a(a){a=a.children;return i.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:l,xstyle:!1,children:a})}var m,n;g=a;f.Group_=d;f.Group=m;f.Item=n;f.keyUp=e;f.keyDown=c;f.keyLeft=j;f.keyRight=k;f.commandConfigs=l;f.keyCommands=g}),null);
__d("MWLSMessageReportingToken.bs",["bs_int64","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){return h.useMemo(function(){return window.btoa("message_thread:"+b("bs_int64").to_string(a.a)+":"+a.e)},[a.e])}f.useHook=a}),null);
__d("MWV2ForwardMenuItem.bs",["fbt","MWMenuItem.react","MWV2UseMessageForwardAction.bs","ReQL.bs","ReQLSubscription.bs","ReQLTable","ReStore.bs","bs_curry","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function j(a,c){return b("ReQLSubscription.bs").useFirstExn(i.useMemo(function(){return b("ReQL.bs").getKeyRange(b("ReQLTable").table(a,"threads").asc,{hd:c.a,tl:0})},[a,JSON.stringify(c.a)]))}function a(a){a=a.message;var c=b("ReStore.bs").useHook(void 0);c=j(c,a);var d=b("MWV2UseMessageForwardAction.bs").useHook(c,a);c=g._(/*FBT_CALL*/"Forward"/*FBT_CALL*/);return i.jsx(b("MWMenuItem.react"),{"aria-label":c,primaryText:c,onClick:function(a){return b("bs_curry")._1(d,void 0)},testid:"messenger_contextual_actions_forward_button"})}c=a;f.make=c}),null);
__d("MWV2RemoveMenuItem.bs",["fbt","CometLazyDialogTrigger.react","JSResourceForInteraction","LsTargetType.bs","MWMenuItem.react","MWV2LogMessageClick.bs","bs_curry","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){var c=a.onClose,d=a.message,e=g._(/*FBT_CALL*/"Remove Message"/*FBT_CALL*/);return i.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResourceForInteraction")("MWV2RemoveMessageDialog",{name:"MWV2RemoveMessageDialog","class":"fluid"}).__setRef("MWV2RemoveMenuItem.bs"),dialogProps:{message:d,onClose:c},children:function(a,c){return i.jsx(b("MWMenuItem.react"),{"aria-label":e,primaryText:g._(/*FBT_CALL*/"Remove"/*FBT_CALL*/),onClick:function(c){b("MWV2LogMessageClick.bs").log(d,b("LsTargetType.bs").removeButton,void 0,void 0);return b("bs_curry")._1(a,void 0)},ref:c,testid:"messenger_contextual_actions_remove_button"})}})}c=a;f.make=c}),null);
__d("MWV2ReplyMenuItem.bs",["fbt","MWMenuItem.react","MWV2ReplyContext.bs","bs_curry","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){var c=a.message;a=g._(/*FBT_CALL*/"Reply"/*FBT_CALL*/);var d=i.useContext(b("MWV2ReplyContext.bs").context),e=d.setReply;return i.jsx(b("MWMenuItem.react"),{"aria-label":a,primaryText:a,onClick:function(a){return b("bs_curry")._2(e,{messageId:c.e,timestampMs:c.b,sendStatusV2:c.l,offlineThreadingId:c.f},c.a)},testid:"messenger_contextual_actions_reply_button"})}c=a;f.make=c}),null);
__d("LSReportMessageInCommunityChannel",["LSIssueNewError","LSIssueNewTaskAndGetTaskID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(a){return c.sb(c.db.table(115).fetch(),[["b","DESC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[0]=!1:(b=a.item,d[0]=b.c)})},function(a){return d[0]===!0?(d[7]=c.localizeV2([0,2285622730],f),d[8]=c.localizeV2([0,1919524925],f),c.sp(b("LSIssueNewError"),f,[0,1545093],d[7],d[8])):c.resolve()},function(e){return d[2]=new c.Map(),d[2].set("thread_key",a[0]),d[2].set("message_id",a[1]),c.i64.gt([0,0],[0,0])?d[3]=c.i64.add(c.i64.of_float(Date.now()),[0,0]):d[3]=[0,0],d[4]=d[2].get("thread_key"),d[2],d[5]=c.toJSON(d[2]),c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(d[4]),[0,374],d[5],f,f,[0,0],f).then(function(a){return a=a,d[6]=a[0],a})},function(a){return e[0]=d[6]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("MWV2ReportMessageMenuItem.bs",["fbt","LS.bs","LSReportMessageInCommunityChannel","LSTransaction.bs","MWMenuItem.react","ReStore.bs","bs_curry","bs_int64","cometPushToast","promiseDone","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");c={button:{paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b"}};function a(a){var c=a.message,d=b("ReStore.bs").useHook(void 0),e=i.useCallback(function(a){b("promiseDone")(b("LSTransaction.bs").run(d,function(a){a=b("bs_curry")._1(b("LS.bs").make,a);return b("LSReportMessageInCommunityChannel")(c.a,c.e,a)},"readWrite"),function(a){b("cometPushToast").cometPushSimpleToast(g._(/*FBT_CALL*/"You've reported a message to the group admins."/*FBT_CALL*/))},void 0)},[d,c.e,b("bs_int64").to_string(c.a)]);a=b("useCometConfirmationDialog")();var f=a[0],h=i.useCallback(function(a){return b("bs_curry")._3(f,{body:g._(/*FBT_CALL*/"If you report this message, it will be sent to group admins for review."/*FBT_CALL*/),cancel:g._(/*FBT_CALL*/"Cancel"/*FBT_CALL*/),confirm:g._(/*FBT_CALL*/"Report"/*FBT_CALL*/),title:g._(/*FBT_CALL*/"Report message to group admins?"/*FBT_CALL*/)},function(a){return b("bs_curry")._1(e,void 0)},function(a){})},[f,e]);a=g._(/*FBT_CALL*/"Report to Group Admins"/*FBT_CALL*/);return i.jsx(b("MWMenuItem.react"),{"aria-label":a,primaryText:a,onClick:function(a){return b("bs_curry")._1(h,void 0)},testid:"messenger_contextual_actions_report_button"})}d=a;f.styles=c;f.make=d}),null);
__d("CometFRX.entrypoint",["CometFRXQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.conformed_interface_override,e=a.entryPoint,f=a.id,g=a.location;a=a.responsible_id;return{queries:{frx:{parameters:c("CometFRXQuery$Parameters"),variables:{input:{conformed_interface_override:b,entry_point:e,id:f,location:g,responsible_id:a},scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometFRX.react").__setRef("CometFRX.entrypoint")};g["default"]=a}),98);
__d("MWV2ReportMessageToFBMenuItem.bs",["fbt","CometEntryPointDialogTrigger.react","CometFRX.entrypoint","FRXEntryPoint","MWLSMessageReportingToken.bs","MWMenuItem.react","NFXStoryLocation","bs_curry","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){a=a.message;var c=g._(/*FBT_CALL*/"Report to Facebook"/*FBT_CALL*/);a=b("MWLSMessageReportingToken.bs").useHook(a);a={entryPoint:b("FRXEntryPoint").REPORT_LONG_PRESS,id:a,location:b("NFXStoryLocation").MESSENGER_COMMUNITY_MESSAGING_GROUP_THREAD_DETAILS};return i.jsx(b("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:b("CometFRX.entrypoint"),otherProps:void 0,preloadParams:a,children:function(a){return i.jsx(b("MWMenuItem.react"),{"aria-label":c,primaryText:c,onClick:function(c){return b("bs_curry")._1(a,void 0)}})}})}c=a;f.make=c}),null);
__d("MWV2ContextualActionsMenu.bs",["fbt","CometPopover.react","MWChatMessageBothOrientationFocusGroup.bs","MWMenu.react","MWV2ForwardMenuItem.bs","MWV2RemoveMenuItem.bs","MWV2ReplyMenuItem.bs","MWV2ReportMessageMenuItem.bs","MWV2ReportMessageToFBMenuItem.bs","bs_caml_option","focusScopeQueries","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){var c=a.onClose,d=a.showForwardActionInContextualMenu,e=a.showReplyActionInContextualMenu,f=a.showUnsendInContextualMenu,h=a.showReportCommunityMessageToAdmin,j=a.showReportCommunityMessageToFacebook,k=a.message;a=a.extraActions;a=a!==void 0?b("bs_caml_option").valFromOption(a):null;var l=g._(/*FBT_CALL*/"More actions"/*FBT_CALL*/);return i.jsx(b("CometPopover.react"),{withArrow:!0,autoFocus:!0,children:i.jsx(b("MWChatMessageBothOrientationFocusGroup.bs").keyCommands,{children:i.jsx(b("MWChatMessageBothOrientationFocusGroup.bs").Group_.Group.make,{children:i.jsxs(b("MWMenu.react"),{children:[f?i.jsx(b("MWV2RemoveMenuItem.bs").make,{onClose:c,message:k}):null,d?i.jsx(b("MWV2ForwardMenuItem.bs").make,{message:k}):null,e?i.jsx(b("MWV2ReplyMenuItem.bs").make,{message:k}):null,h?i.jsx(b("MWV2ReportMessageMenuItem.bs").make,{message:k}):null,j?i.jsx(b("MWV2ReportMessageToFBMenuItem.bs").make,{message:k}):null,a],label:l,size:"full"}),orientation:"both",tabScopeQuery:b("focusScopeQueries").tabbableScopeQuery,allowModifiers:!0,preventScrollOnFocus:!1})})})}c=a;f.make=c}),null);
__d("MWV2ContextualActionsMenu.re",["MWV2ContextualActionsMenu.bs"],(function(a,b,c,d,e,f){a=b("MWV2ContextualActionsMenu.bs").make;f.make=a}),null);
__d("MWV2ContextualActionsMenuDeferred.react",["MWV2ContextualActionsMenu.re"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("MWV2ContextualActionsMenu.re").make}),98);
__d("MessengerWellbeingRestrictFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("474");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_failed",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictFailedFalcoEvent.bs",["MessengerWellbeingRestrictFailedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictFailedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingRestrictSucceededFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("480");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_succeeded",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictSucceededFalcoEvent.bs",["MessengerWellbeingRestrictSucceededFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingRestrictTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("481");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_tapped",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictTappedFalcoEvent.bs",["MessengerWellbeingRestrictTappedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictTappedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("482");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_failed",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictFailedFalcoEvent.bs",["MessengerWellbeingUnrestrictFailedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictSucceededFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("483");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_succeeded",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictSucceededFalcoEvent.bs",["MessengerWellbeingUnrestrictSucceededFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("484");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_tapped",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictTappedFalcoEvent.bs",["MessengerWellbeingUnrestrictTappedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("LsMessageClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743853");c=b("FalcoLoggerInternal").create("ls_message_click",a);e.exports=c}),null);
__d("MessageRequestsInfoBannerShownFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("258");c=b("FalcoLoggerInternal").create("message_requests_info_banner_shown",a);e.exports=c}),null);
__d("MessageRequestsThreadActionConfirmedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("259");c=b("FalcoLoggerInternal").create("message_requests_thread_action_confirmed",a);e.exports=c}),null);
__d("MessageRequestsThreadActionTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("260");c=b("FalcoLoggerInternal").create("message_requests_thread_action_tapped",a);e.exports=c}),null);
__d("MessageRequestsThreadDenialOptionsTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("261");c=b("FalcoLoggerInternal").create("message_requests_thread_denial_options_tapped",a);e.exports=c}),null);