"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/lbd-react-memory-game/index.html","e4073cd94b127b8fb34ca8e9ab997419"],["/lbd-react-memory-game/static/css/main.d302aed8.css","f939ae27eef8a48f9a0735fe0f22efcd"],["/lbd-react-memory-game/static/js/main.b2e30aba.js","5c8a4a1ab22fa325a3272373c3c96f60"],["/lbd-react-memory-game/static/media/angularjs.54a9a152.png","54a9a152112b26b03ef1e39ae20d31ef"],["/lbd-react-memory-game/static/media/css3.ce29017c.png","ce29017c1f9e2548dd140d177133dc4a"],["/lbd-react-memory-game/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/lbd-react-memory-game/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/lbd-react-memory-game/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lbd-react-memory-game/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/lbd-react-memory-game/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/lbd-react-memory-game/static/media/html5.e93e4d30.png","e93e4d304deef8d5775c235021520e7b"],["/lbd-react-memory-game/static/media/javascript.03d471c6.png","03d471c6a43c17a3496228b5b43512e6"],["/lbd-react-memory-game/static/media/less.2606c154.png","2606c1541cc01c3527219e79cbfb3e33"],["/lbd-react-memory-game/static/media/nodejs.0c064d58.png","0c064d5866d3df56a0f41d1d8da2d07c"],["/lbd-react-memory-game/static/media/react.f32419c5.png","f32419c5d8e8f41fe05163832a6807a7"],["/lbd-react-memory-game/static/media/redux.bd5bdb20.png","bd5bdb20c5b8090c20bce2ae9b79b1b0"],["/lbd-react-memory-game/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/lbd-react-memory-game/static/media/webpack.eea14409.png","eea1440934b78d8317f9ecba0b8e4403"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/lbd-react-memory-game/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});