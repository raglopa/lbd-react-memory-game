"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/flip-react/index.html","7bdb05d6e0f209897d7de109c639107a"],["/flip-react/static/js/main.c8f4bf41.js","f5bd602cf7a42c1aff39ab218aadae31"],["/flip-react/static/media/angularjs.54a9a152.png","54a9a152112b26b03ef1e39ae20d31ef"],["/flip-react/static/media/css3.ce29017c.png","ce29017c1f9e2548dd140d177133dc4a"],["/flip-react/static/media/html5.e93e4d30.png","e93e4d304deef8d5775c235021520e7b"],["/flip-react/static/media/index.b453b9b4.scss","b453b9b49e98db1071bba3403e33e89e"],["/flip-react/static/media/javascript.03d471c6.png","03d471c6a43c17a3496228b5b43512e6"],["/flip-react/static/media/less.2606c154.png","2606c1541cc01c3527219e79cbfb3e33"],["/flip-react/static/media/nodejs.0c064d58.png","0c064d5866d3df56a0f41d1d8da2d07c"],["/flip-react/static/media/react.f32419c5.png","f32419c5d8e8f41fe05163832a6807a7"],["/flip-react/static/media/redux.bd5bdb20.png","bd5bdb20c5b8090c20bce2ae9b79b1b0"],["/flip-react/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/flip-react/static/media/style.06c806ea.scss","06c806eaa04dcb4d53a5a604309d3c6f"],["/flip-react/static/media/style.2a08b324.scss","2a08b3241d2fca3af1a76cf208b5cb3c"],["/flip-react/static/media/style.3be82b85.scss","3be82b85ca8f591a9a5a9a7e8ad20b34"],["/flip-react/static/media/style.d41d8cd9.scss","d41d8cd98f00b204e9800998ecf8427e"],["/flip-react/static/media/webpack.eea14409.png","eea1440934b78d8317f9ecba0b8e4403"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/flip-react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});