"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{33145:function(e,t,r){r.d(t,{default:function(){return i.a}});var n=r(48461),i=r.n(n)},65878:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(60917),i=r(52140),o=r(57437),a=i._(r(2265)),l=n._(r(54887)),u=n._(r(38293)),s=r(55346),d=r(90128),c=r(62589);r(31765);let f=r(25523),p=n._(r(5084)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:u,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:x,sizesInput:S,onLoad:j,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(f),loading:m,width:u,height:l,decoding:s,"data-nimg":v?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,p,b,_,w,y,S))},[r,p,b,_,w,C,y,S,t]),onLoad:e=>{g(e.currentTarget,p,b,_,w,y,S)},onError:e=>{x(!0),"empty"!==p&&w(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:u}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(u);(0,a.useEffect)(()=>{h.current=u},[u]);let[b,_]=(0,a.useState)(!1),[w,x]=(0,a.useState)(!1),{props:S,meta:j}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:x,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},91436:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(60917)._(r(2265)).default.createContext({})},23964:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},55346:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(31765);let n=r(96496),i=r(90128);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,u,s,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:_,overrideSrc:w,onLoad:x,onLoadingComplete:S,placeholder:j="empty",blurDataURL:C,fetchPriority:P,decoding:k="async",layout:O,objectFit:E,objectPosition:I,lazyBoundary:z,lazyRoot:R,...M}=e,{imgConf:N,showAltText:A,blurComplete:D,defaultLoader:L}=t,T=N||i.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=M.loader||L;delete M.loader,delete M.srcSet;let G="__next_img_default"in F;if(G){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let U="",B=a(y),W=a(v);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,C=C||e.blurDataURL,U=e.src,!b){if(B||W){if(B&&!W){let t=B/e.width;W=Math.round(e.height*t)}else if(!B&&W){let t=W/e.height;B=Math.round(e.width*t)}}else B=e.width,W=e.height}}let H=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,H=!1),l.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let V=a(h),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:I}:{},A?{}:{color:"transparent"},_),Y=D||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:u,blurHeight:s,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+j+'")',Z=Y?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[d]})}}({config:l,src:d,unoptimized:f,width:B,quality:V,sizes:c,loader:F});return{props:{...M,loading:H?"lazy":m,fetchPriority:P,width:B,height:W,decoding:k,className:g,style:{...q,...Z},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:b}}}},38293:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(60917),i=r(52140),o=r(57437),a=i._(r(2265)),l=n._(r(17421)),u=r(91436),s=r(48701),d=r(23964);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(31765);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(s.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96496:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,u=i?40*i:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},62589:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(60917)._(r(2265)),i=r(90128),o=n.default.createContext(i.imageConfigDefault)},90128:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},48461:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let n=r(60917),i=r(55346),o=r(65878),a=n._(r(5084));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=o.Image},5084:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},17421:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},99193:function(e,t,r){r.d(t,{Circle:function(){return o}});var n=r(57437),i=r(50584);let o=(0,r(44109).forwardRef)(function(e,t){let{size:r,...o}=e;return(0,n.jsx)(i.Square,{size:r,ref:t,borderRadius:"9999px",...o})});o.displayName="Circle"},50584:function(e,t,r){r.d(t,{Square:function(){return o}});var n=r(57437),i=r(21183);let o=(0,r(44109).forwardRef)(function(e,t){let{size:r,centerContent:o=!0,...a}=e;return(0,n.jsx)(i.Box,{ref:t,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});o.displayName="Square"},5641:function(e,t,r){r.d(t,{CardBody:function(){return u}});var n=r(57437),i=r(24377),o=r(74743),a=r(44109),l=r(81284);let u=(0,a.forwardRef)(function(e,t){let{className:r,...a}=e,u=(0,o.useCardStyles)();return(0,n.jsx)(l.chakra.div,{ref:t,className:(0,i.cx)("chakra-card__body",r),__css:u.body,...a})})},74743:function(e,t,r){r.d(t,{Y:function(){return n},useCardStyles:function(){return i}});let[n,i]=(0,r(30391).createStylesContext)("Card")},23324:function(e,t,r){r.d(t,{CardHeader:function(){return u}});var n=r(57437),i=r(24377),o=r(74743),a=r(44109),l=r(81284);let u=(0,a.forwardRef)(function(e,t){let{className:r,...a}=e,u=(0,o.useCardStyles)();return(0,n.jsx)(l.chakra.div,{ref:t,className:(0,i.cx)("chakra-card__header",r),__css:u.header,...a})})},42789:function(e,t,r){r.d(t,{Card:function(){return d}});var n=r(57437),i=r(22223),o=r(24377),a=r(74743),l=r(44109),u=r(11535),s=r(81284);let d=(0,l.forwardRef)(function(e,t){let{className:r,children:l,direction:d="column",justify:c,align:f,...p}=(0,i.L)(e),m=(0,u.useMultiStyleConfig)("Card",e);return(0,n.jsx)(s.chakra.div,{ref:t,className:(0,o.cx)("chakra-card",r),__css:{display:"flex",flexDirection:d,justifyContent:c,alignItems:f,position:"relative",minWidth:0,wordWrap:"break-word",...m.container},...p,children:(0,n.jsx)(a.Y,{value:m,children:l})})})},76723:function(e,t,r){r.d(t,{GridItem:function(){return s}});var n=r(57437),i=r(80171),o=r(29456),a=r(44109),l=r(81284);function u(e){return(0,i.XQ)(e,e=>"auto"===e?"auto":"span ".concat(e,"/span ").concat(e))}let s=(0,a.forwardRef)(function(e,t){let{area:r,colSpan:i,colStart:a,colEnd:s,rowEnd:d,rowSpan:c,rowStart:f,...p}=e,m=(0,o.o)({gridArea:r,gridColumn:u(i),gridRow:u(c),gridColumnStart:a,gridColumnEnd:s,gridRowStart:f,gridRowEnd:d});return(0,n.jsx)(l.chakra.div,{ref:t,__css:m,...p})});s.displayName="GridItem"},49611:function(e,t,r){r.d(t,{Image:function(){return s}});var n=r(57437),i=r(10635),o=r(58230),a=r(52925),l=r(44109),u=r(81284);let s=(0,l.forwardRef)(function(e,t){let{fallbackSrc:r,fallback:l,src:s,srcSet:d,align:c,fit:f,loading:p,ignoreFallback:m,crossOrigin:g,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:y,...v}=e,b=void 0!==r||void 0!==l,_=null!=p||m||!b,w=(0,a.useImage)({...e,crossOrigin:g,ignoreFallback:_}),x=(0,a.z)(w,h),S={ref:t,objectFit:f,objectPosition:c,..._?v:(0,i.C)(v,["onError","onLoad"])};return x?l||(0,n.jsx)(u.chakra.img,{as:o.Z,className:"chakra-image__placeholder",src:r,...S}):(0,n.jsx)(u.chakra.img,{as:o.Z,src:s,srcSet:d,crossOrigin:g,loading:p,referrerPolicy:y,className:"chakra-image",...S})});s.displayName="Image"},58230:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(57437);let i=(0,r(44109).forwardRef)(function(e,t){let{htmlWidth:r,htmlHeight:i,alt:o,...a}=e;return(0,n.jsx)("img",{width:r,height:i,ref:t,alt:o,...a})});i.displayName="NativeImage"},39292:function(e,t,r){r.d(t,{VStack:function(){return o}});var n=r(57437),i=r(62587);let o=(0,r(44109).forwardRef)((e,t)=>(0,n.jsx)(i.Stack,{align:"center",...e,direction:"column",ref:t}));o.displayName="VStack"},25706:function(e,t,r){r.d(t,{Textarea:function(){return f}});var n=r(57437),i=r(22223),o=r(10635),a=r(24377),l=r(61222),u=r(44109),s=r(11535),d=r(81284);let c=["h","minH","height","minHeight"],f=(0,u.forwardRef)((e,t)=>{let r=(0,s.useStyleConfig)("Textarea",e),{className:u,rows:f,...p}=(0,i.L)(e),m=(0,l.useFormControl)(p),g=f?(0,o.C)(r,c):r;return(0,n.jsx)(d.chakra.textarea,{ref:t,rows:f,...m,className:(0,a.cx)("chakra-textarea",u),__css:g})});f.displayName="Textarea"}}]);