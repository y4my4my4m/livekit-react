(this["webpackJsonplivekit-react-example"]=this["webpackJsonplivekit-react-example"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);n(65);var a=n(0),r=n.n(a),c=n(58),i=n.n(c),o=(n(70),n(29)),l=n(2),u=n(16),s=n(1),d=n(61),m=n.n(d),f=(n(100),n(60)),v=function(e){var t=e.track,n=e.isLocal,r=Object(a.useRef)();return Object(a.useEffect)((function(){if(!n)return r.current=t.attach(),t.sid&&r.current.setAttribute("data-audio-track-id",t.sid),function(){return t.detach().forEach((function(e){return e.remove()}))}}),[t,n]),null},k="_2WNzJ",h="_34YL4",p="_30KSQ",b="_1k1qr",E="_2kKks",g="_hRq5k",O=function(e){var t=e.label,n=e.disabled,a=e.onClick;return r.a.createElement("button",{disabled:n,className:g,onClick:a},t)};"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function S(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function j(e){var t=Object(a.useState)(!1),n=t[0],r=t[1],c=Object(a.useState)(!1),i=c[0],o=c[1],l=Object(a.useState)(),u=l[0],d=l[1],m=Object(a.useState)([]),f=m[0],v=m[1],k=Object(a.useState)([]),h=k[0],p=k[1],b=function(){v(Array.from(e.tracks.values())),p(Array.from(e.tracks.values()).filter((function(e){return void 0!==e.track})))};return Object(a.useEffect)((function(){var t=function(e){e.kind===s.Track.Kind.Audio&&r(!0)},n=function(e){e.kind===s.Track.Kind.Audio&&r(!1)},a=function(){e.metadata&&d(e.metadata)},c=function(){o(e.isSpeaking)};return e.on(s.ParticipantEvent.TrackMuted,t),e.on(s.ParticipantEvent.TrackUnmuted,n),e.on(s.ParticipantEvent.MetadataChanged,a),e.on(s.ParticipantEvent.IsSpeakingChanged,c),e.on(s.ParticipantEvent.TrackPublished,b),e.on(s.ParticipantEvent.TrackUnpublished,b),e.on(s.ParticipantEvent.TrackSubscribed,b),e.on(s.ParticipantEvent.TrackUnsubscribed,b),e.on("localtrackchanged",b),a(),c(),b(),e.audioTracks.forEach((function(e){r(e.isMuted)})),function(){e.off(s.ParticipantEvent.TrackMuted,t),e.off(s.ParticipantEvent.TrackUnmuted,n),e.off(s.ParticipantEvent.MetadataChanged,a),e.off(s.ParticipantEvent.IsSpeakingChanged,c),e.off(s.ParticipantEvent.TrackPublished,b),e.off(s.ParticipantEvent.TrackUnpublished,b),e.off(s.ParticipantEvent.TrackSubscribed,b),e.off(s.ParticipantEvent.TrackUnsubscribed,b),e.off("localtrackchanged",b)}}),[]),{isLocal:e instanceof s.LocalParticipant,isSpeaking:i,isMuted:n,publications:f,subscribedTracks:h,metadata:u,unpublishTrack:function(t){try{if(!(e instanceof s.LocalParticipant))throw new Error("could not unpublish, not a local participant");return e.unpublishTrack(t),e.emit("localtrackchanged"),Promise.resolve()}catch(n){return Promise.reject(n)}}}}var P=function(e){var t,n,a,c=e.room,i=e.onLeave,o=j(c.localParticipant),l=o.publications,u=o.isMuted,d=o.unpublishTrack,m=l.find((function(e){return e.kind===s.Track.Kind.Audio})),f=l.find((function(e){return e.kind===s.Track.Kind.Video&&"screen"!==e.trackName})),v=l.find((function(e){return e.kind===s.Track.Kind.Video&&"screen"===e.trackName}));return t=!m||u?r.a.createElement(O,{label:"Unmute",onClick:function(){try{var e=function(){if(!m)return Promise.resolve(Object(s.createLocalAudioTrack)()).then((function(e){c.localParticipant.publishTrack(e)}));m.unmute()}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}):r.a.createElement(O,{label:"Mute",onClick:function(){return m.mute()}}),n=null!==f&&void 0!==f&&f.track?r.a.createElement(O,{label:"Stop video",onClick:function(){return d(f.track)}}):r.a.createElement(O,{label:"Start video",onClick:function(){try{return Promise.resolve(Object(s.createLocalVideoTrack)()).then((function(e){c.localParticipant.publishTrack(e)}))}catch(e){return Promise.reject(e)}}}),a=null!==v&&void 0!==v&&v.track?r.a.createElement(O,{label:"Stop sharing",onClick:function(){return d(v.track)}}):r.a.createElement(O,{label:"Share screen",onClick:function(){try{var e=S((function(){return Promise.resolve(navigator.mediaDevices.getDisplayMedia({video:{width:s.VideoPresets.fhd.resolution.width,height:s.VideoPresets.fhd.resolution.height}})).then((function(e){c.localParticipant.publishTrack(e.getTracks()[0],{name:"screen",videoEncoding:{maxBitrate:3e6,maxFramerate:30}})}))}),(function(){}));return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}),r.a.createElement("div",{className:E},t,n,a,r.a.createElement(O,{label:"Leave",onClick:function(){c.disconnect(),i&&i(c)}}))},T=function(e){var t,n=e.track,c=e.isLocal,i=e.objectFit,o=e.className,l=e.width,u=e.height,s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=s.current;if(e)return e.muted=!0,n.attach(e),function(){n.detach(e)}}),[n,s]);var d="environment"!==(null===(t=n.mediaStreamTrack)||void 0===t?void 0:t.getSettings().facingMode),m={transform:c&&d?"rotateY(180deg)":"",width:l,height:u};return i&&(m.objectFit=i),r.a.createElement("video",{ref:s,className:null!=o?o:k,style:m})},y=function(e){var t,n,a,c,i=e.participant,o=e.width,l=e.height,u=e.aspectWidth,d=e.aspectHeight,f=e.displayName,k=e.showOverlay,E=e.onMouseOver,g=e.onMouseOut,O=e.onClick,S=j(i),P=S.isLocal;S.subscribedTracks.forEach((function(e){e.kind!==s.Track.Kind.Audio||a||(a=e.track),e.kind!==s.Track.Kind.Video||n||(n=e.track,c=e)}));var y,L={width:o,height:l},C="contain";return u&&d&&null!==(t=c)&&void 0!==t&&t.dimensions&&(u-d)*(c.dimensions.width-c.dimensions.height)>0&&(C="cover"),f||(f=i.identity,P&&(f+=" (You)")),y=n?r.a.createElement(T,{track:n,isLocal:P,objectFit:C,width:"100%",height:"100%"}):r.a.createElement("div",{className:p}),r.a.createElement("div",{className:h,style:L,onMouseOver:E,onMouseOut:g,onClick:O},a&&r.a.createElement(v,{track:a,isLocal:P}),u&&d&&r.a.createElement(m.a,{ratio:u/d},y),(!u||!d)&&y,k&&r.a.createElement("div",{className:b},f))},L="_2sm4e",C="_2VE66",N="_2kKDi",w="_gA0MQ",R="_1smc2",M=function(e){var t=e.roomState,n=e.participantRenderer,c=e.controlRenderer,i=e.onLeave,o=t.isConnecting,l=t.error,u=t.participants,d=t.room,m=Object(a.useState)(!1),f=m[0],v=m[1];if(l)return r.a.createElement("div",null,"error ",l.message);if(o)return r.a.createElement("div",null,"connecting");if(!d)return r.a.createElement("div",null,"room closed");if(0===u.length)return r.a.createElement("div",null,"no one is in the room");var k,h,p,b=null!=n?n:y,E=null!=c?c:P;return u.forEach((function(e){e instanceof s.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(k=e.track)}))})),k?(h=u,p=r.a.createElement(T,{track:k,isLocal:!1,height:"100%"})):(h=u.slice(1),p=r.a.createElement(b,{key:u[0].identity,participant:u[0],showOverlay:f,onMouseOver:function(){return v(!0)},onMouseOut:function(){return v(!1)}})),r.a.createElement("div",{className:L},r.a.createElement("div",{className:C},r.a.createElement("div",{className:N},p),r.a.createElement("div",{className:w},h.map((function(e){return r.a.createElement(b,{key:e.identity,participant:e,width:"100%",aspectWidth:16,aspectHeight:9,showOverlay:f,onMouseOver:function(){return v(!0)},onMouseOut:function(){return v(!1)}})})))),r.a.createElement("div",{className:R},r.a.createElement(E,{room:d,onLeave:i})))},A="_2zM8F",x="_9PXrI",V="_3MB5b",_=function(e){var t=e.roomState,n=e.participantRenderer,c=e.controlRenderer,i=e.onLeave,o=t.isConnecting,l=t.error,u=t.participants,d=t.room,m=Object(a.useState)(!1),f=m[0],v=m[1];if(l)return r.a.createElement("div",null,"error ",l.message);if(o)return r.a.createElement("div",null,"connecting");if(!d)return r.a.createElement("div",null,"room closed");if(0===u.length)return r.a.createElement("div",null,"no one is in the room");var k,h,p=null!=n?n:y,b=null!=c?c:P;return u.forEach((function(e){e instanceof s.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(k=e.track)}))})),h=k?r.a.createElement(T,{track:k,isLocal:!1,height:"100%"}):r.a.createElement(p,{key:u[0].identity,participant:u[0],showOverlay:f,width:"100%",height:"100%",onMouseOver:function(){return v(!0)},onMouseOut:function(){return v(!1)}}),r.a.createElement("div",{className:A},r.a.createElement("div",{className:x},h),r.a.createElement("div",{className:V},r.a.createElement(b,{room:d,onLeave:i})))},K=function(e){return Object(f.useMediaQuery)({query:"(max-width: 800px)"})?r.a.createElement(_,Object.assign({},e)):r.a.createElement(M,Object.assign({},e))};var U=function(e){var t,n=function(){var e=Object(a.useState)(),t=e[0],n=e[1],r=Object(a.useState)(!1),c=r[0],i=r[1],o=Object(a.useState)(),l=o[0],u=o[1],d=Object(a.useState)([]),m=d[0],f=d[1];return{connect:Object(a.useCallback)((function(e,t,a){try{return i(!0),Promise.resolve(S((function(){return Promise.resolve(Object(s.connect)(e,t,a)).then((function(e){n(e);var t=function(){return e.disconnect()},a=function(){var t=Array.from(e.participants.values()),n=[e.localParticipant];n.push.apply(n,t),function(e,t){if(e.sort((function(e,t){var n,a,r,c;if(e.isSpeaking&&t.isSpeaking)return t.audioLevel-e.audioLevel;if(e.isSpeaking!==t.isSpeaking)return e.isSpeaking?-1:1;if(e.lastSpokeAt!==t.lastSpokeAt){var i,o,l,u,s=null!=(i=null===(o=e.lastSpokeAt)||void 0===o?void 0:o.getTime())?i:0;return(null!=(l=null===(u=t.lastSpokeAt)||void 0===u?void 0:u.getTime())?l:0)-s}var d=e.videoTracks.size>0;return d!==t.videoTracks.size>0?d?-1:1:(null!=(n=null===(a=e.joinedAt)||void 0===a?void 0:a.getTime())?n:0)-(null!=(r=null===(c=t.joinedAt)||void 0===c?void 0:c.getTime())?r:0)})),t){var n=e.indexOf(t);n>=0&&(e.splice(n,1),e.length>0?e.splice(1,0,t):e.push(t))}}(n,e.localParticipant),f(n)};return e.once(s.RoomEvent.Disconnected,(function(){setTimeout((function(){return n(void 0)})),window.removeEventListener("beforeunload",t),e.off(s.RoomEvent.ParticipantConnected,a),e.off(s.RoomEvent.ParticipantDisconnected,a),e.off(s.RoomEvent.ActiveSpeakersChanged,a),e.off(s.RoomEvent.TrackSubscribed,a),e.off(s.RoomEvent.TrackUnsubscribed,a)})),e.on(s.RoomEvent.ParticipantConnected,a),e.on(s.RoomEvent.ParticipantDisconnected,a),e.on(s.RoomEvent.ActiveSpeakersChanged,a),e.on(s.RoomEvent.TrackSubscribed,a),e.on(s.RoomEvent.TrackUnsubscribed,a),i(!1),a(),window.addEventListener("beforeunload",t),e}))}),(function(e){i(!1),u(e)})))}catch(r){return Promise.reject(r)}}),[]),isConnecting:c,room:t,error:l,participants:m}}(),r=e.participantRenderer,c=e.controlRenderer,i=e.onLeave;return Object(a.useEffect)((function(){n.connect(e.url,e.token,e.connectOptions).then((function(t){t&&e.onConnected&&e.onConnected(t)}))}),[]),(null!=(t=e.stageRenderer)?t:K)({roomState:n,participantRenderer:r,controlRenderer:c,onLeave:i})},D=function(){var e=Object(a.useState)("ws://localhost:7880"),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),d=o[0],m=o[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),k=v[0],h=v[1],p=Object(a.useState)(!1),b=Object(u.a)(p,2),E=b[0],g=b[1],S=Object(a.useState)(!0),j=Object(u.a)(S,2),P=j[0],y=j[1],L=Object(a.useState)(!0),C=Object(u.a)(L,2),N=C[0],w=C[1],R=Object(a.useRef)(null),M=Object(a.useState)(),A=Object(u.a)(M,2),x=A[0],V=A[1],_=Object(l.f)();Object(a.useEffect)((function(){if(R.current&&x){var e=R.current;return x.attach(e),function(){x.detach(e),x.stop()}}}),[x,R]),Object(a.useEffect)((function(){w(!d||!n)}),[d,n]);Object(a.useEffect)((function(){Object(s.createLocalVideoTrack)().then((function(e){g(!0),V(e)}))}),[]);return r.a.createElement("div",{className:"prejoin"},r.a.createElement("main",null,r.a.createElement("h2",null,"LiveKit Video"),r.a.createElement("hr",null),r.a.createElement("div",{className:"entrySection"},r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"LiveKit URL"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"url",value:n,onChange:function(e){return c(e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Token"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"token",value:d,onChange:function(e){return m(e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"simulcast",checked:k,onChange:function(e){return h(e.target.checked)}}),r.a.createElement("label",null,"Simulcast"))),r.a.createElement("div",{className:"videoSection"},x&&r.a.createElement(T,{track:x,isLocal:!0})),r.a.createElement("div",{className:"controlSection"},r.a.createElement("div",null,r.a.createElement(O,{label:P?"Mute":"Unmute",onClick:function(){y(!P)}}),r.a.createElement(O,{label:x?"Disable Video":"Enable Video",onClick:function(){x?(x.stop(),g(!1),V(void 0)):Object(s.createLocalVideoTrack)().then((function(e){g(!0),V(e)}))}})),r.a.createElement("div",{className:"right"},r.a.createElement(O,{label:"Connect",disabled:N,onClick:function(){var e={url:n,token:d,videoEnabled:E?"1":"0",audioEnabled:P?"1":"0",simulcast:k?"1":"0"};_.push({pathname:"/room",search:"?"+new URLSearchParams(e).toString()})}})))))},I=n(11),F=n.n(I),q=n(63),z=function(){var e=Object(l.f)(),t=new URLSearchParams(Object(l.g)().search),n=t.get("url"),a=t.get("token");if(!n||!a)return r.a.createElement("div",null,"url and token are required");return r.a.createElement("div",{className:"roomContainer"},r.a.createElement("h2",null,"LiveKit Video"),r.a.createElement(U,{url:n,token:a,onConnected:function(e){return function(e,t){return B.apply(this,arguments)}(e,t)},onLeave:function(){e.push({pathname:"/"})}}))};function B(){return(B=Object(q.a)(F.a.mark((function e(t,n){var a,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("1"!==n.get("audioEnabled")){e.next=6;break}return e.next=3,Object(s.createLocalAudioTrack)();case 3:return a=e.sent,e.next=6,t.localParticipant.publishTrack(a);case 6:if("1"!==n.get("videoEnabled")){e.next=14;break}return r={name:"camera"},"1"===n.get("simulcast")&&(r.simulcast=!0),e.next=11,Object(s.createLocalVideoTrack)();case 11:return c=e.sent,e.next=14,t.localParticipant.publishTrack(c,r);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/room"},r.a.createElement(z,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(D,null)))))};i.a.render(r.a.createElement(J,null),document.getElementById("root"))},64:function(e,t,n){e.exports=n(108)},65:function(e,t,n){},70:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.15ae81c3.chunk.js.map