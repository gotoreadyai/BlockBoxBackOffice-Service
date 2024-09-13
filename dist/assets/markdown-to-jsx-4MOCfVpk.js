import{r as e}from"./react-ByP4G4OI.js";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}const n=["children","options"],r={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var i,l;(l=i||(i={}))[l.MAX=0]="MAX",l[l.HIGH=1]="HIGH",l[l.MED=2]="MED",l[l.LOW=3]="LOW",l[l.MIN=4]="MIN";const a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,p=/\n{2,}$/,u=/^(\s*>[\s\S]*?)(?=\n{2,})/,f=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,b=/\r\n?/g,v=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,S=/^\[\^([^\]]+)]/,E=/\f/g,$=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,w=/^\s*?\[(x|\s)\]/,C=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,z=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,L=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,A=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,T=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,O=/^<!--[\s\S]*?(?:-->)/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,B=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,U=/^<([^ >]+@[^ >]+)>/,j=/^<([^ >]+:\/[^ >]+)>/,D=/-([a-z])?/gi,N=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,H=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,F=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,P=/^\[([^\]]*)\] ?\[([^\]]*)\]/,_=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,Z=/(^ *\||\| *$)/g,q=/^ *:-+: *$/,Q=/^ *:-+ *$/,V=/^ *-+: *$/,X="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",J=new RegExp(`^([*_])\\1${X}\\1\\1(?!\\1)`),K=new RegExp(`^([*_])${X}\\1(?!\\1|\\w)`),Y=new RegExp(`^==${X}==`),ee=new RegExp(`^~~${X}~~`),te=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,re=/^\n+/,ie=/^([ \t]*)/,le=/\\([^\\])/g,ae=/ *\n+$/,oe=/(?:^|\n)( *)$/,ce="(?:\\d+\\.)",se="(?:[*+-])";function de(e){return"( *)("+(1===e?ce:se)+") +"}const pe=de(1),ue=de(2);function fe(e){return new RegExp("^"+(1===e?pe:ue))}const he=fe(1),me=fe(2);function ge(e){return new RegExp("^"+(1===e?pe:ue)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ce:se)+" )[^\\n]*)*(\\n|$)","gm")}const ye=ge(1),ke=ge(2);function xe(e){const t=1===e?ce:se;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const be=xe(1),ve=xe(2);function Se(e,t){const n=1===t,i=n?be:ve,l=n?ye:ke,a=n?he:me;return{match(e,t,n){const r=oe.exec(n);return r&&(t.list||!t.inline&&!t.simple)?i.exec(e=r[1]+e):null},order:1,parse(e,t,r){const i=n?+e[2]:void 0,o=e[0].replace(p,"\n").match(l);let c=!1;return{items:o.map((function(e,n){const i=a.exec(e)[0].length,l=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(l,"").replace(a,""),d=n===o.length-1,p=-1!==s.indexOf("\n\n")||d&&c;c=p;const u=r.inline,f=r.list;let h;r.list=!0,p?(r.inline=!1,h=s.replace(ae,"\n\n")):(r.inline=!0,h=s.replace(ae,""));const m=t(h,r);return r.inline=u,r.list=f,m})),ordered:n,start:i}},render:(t,n,i)=>e(t.ordered?"ol":"ul",{key:i.key,start:t.type===r.orderedList?t.start:void 0},t.items.map((function(t,r){return e("li",{key:r},n(t,i))})))}}const Ee=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),$e=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,we=[u,g,y,C,L,z,O,N,ye,be,ke,ve],Ce=[...we,/^[^\n]+(?:  \n|\n{2,})/,A,B];function ze(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Le(e){return V.test(e)?"right":q.test(e)?"center":Q.test(e)?"left":null}function Ae(e,t,n,i){const l=n.inTable;n.inTable=!0;let a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,l)=>("|"===l.trim()?e.push(i?{type:r.tableSeparator}:{type:r.text,text:l}):""!==l&&e.push.apply(e,t(l,n)),e)),[]);n.inTable=l;let o=[[]];return a.forEach((function(e,t){e.type===r.tableSeparator?0!==t&&t!==a.length-1&&o.push([]):(e.type!==r.text||null!=a[t+1]&&a[t+1].type!==r.tableSeparator||(e.text=e.text.trimEnd()),o[o.length-1].push(e))})),o}function Te(e,t,n){n.inline=!0;const i=e[2]?e[2].replace(Z,"").split("|").map(Le):[],l=e[3]?(o=e[3],c=t,s=n,o.trim().split("\n").map((function(e){return Ae(e,c,s,!0)}))):[],a=Ae(e[1],t,n,!!l.length);var o,c,s;return n.inline=!1,l.length?{align:i,cells:l,header:a,type:r.table}:{children:a,type:r.paragraph}}function Oe(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Me(e){return function(t,n){return n.inline?e.exec(t):null}}function Be(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Re(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ie(e){return function(t){return e.exec(t)}}function Ue(e,t,n){if(t.inline||t.simple)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!we.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const i=r.trimEnd();return""==i?null:[r,i]}function je(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(t){return null}return e}function De(e){return e.replace(le,"$1")}function Ne(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function He(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function Fe(e,t,n){const r=n.inline||!1;n.inline=!1;const i=e(t,n);return n.inline=r,i}const Pe=(e,t,n)=>({children:Ne(t,e[1],n)});function _e(){return{}}function We(){return null}function Ge(...e){return e.filter(Boolean).join(" ")}function Ze(e,t,n){let r=e;const i=t.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||n}const qe=i=>{let{children:l="",options:p}=i,Z=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(i[n]=e[n]);return i}(i,n);return e.cloneElement(function(n="",i={}){function l(e,n,...r){const l=Ze(i.overrides,`${e}.props`,{});return i.createElement(function(e,t){const n=Ze(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ze(t,`${e}.component`,e):e}(e,i.overrides),t({},n,l,{className:Ge(null==n?void 0:n.className,l.className)||void 0}),...r)}function p(t){t=t.replace($,"");let n=!1;i.forceInline?n=!0:i.forceBlock||(n=!1===W.test(t));const r=le(X(n?t:`${t.trimEnd().replace(re,"")}\n\n`,{inline:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===i.wrapper)return r;const a=i.wrapper||(n?"span":"div");let o;if(r.length>1||i.forceWrapper)o=r;else{if(1===r.length)return o=r[0],"string"==typeof o?l("span",{key:"outer"},o):o;o=null}return e.createElement(a,{key:"outer"},o)}function Z(t,n){const r=n.match(s);return r?r.reduce((function(n,r,l){const o=r.indexOf("=");if(-1!==o){const c=function(e){return-1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(D,(function(e,t){return t.toUpperCase()}))),e}(r.slice(0,o)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(r.slice(o+1).trim()),d=a[c]||c,u=n[d]=function(e,t,n,r){return"style"===t?n.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===t||"src"===t?r(n,e,t):(n.match(R)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(t,c,s,i.sanitizer);"string"==typeof u&&(A.test(u)||B.test(u))&&(n[d]=e.cloneElement(p(u.trim()),{key:l}))}else"style"!==r&&(n[a[r]||r]=!0);return n}),{}):null}i.overrides=i.overrides||{},i.sanitizer=i.sanitizer||je,i.slugify=i.slugify||ze,i.namedCodesToUnicode=i.namedCodesToUnicode?t({},o,i.namedCodesToUnicode):o,i.createElement=i.createElement||e.createElement;const q=[],Q={},V={[r.blockQuote]:{match:Re(u),order:1,parse:(e,t,n)=>({children:t(e[0].replace(f,""),n)}),render:(e,t,n)=>l("blockquote",{key:n.key},t(e.children,n))},[r.breakLine]:{match:Ie(h),order:1,parse:_e,render:(e,t,n)=>l("br",{key:n.key})},[r.breakThematic]:{match:Re(m),order:1,parse:_e,render:(e,t,n)=>l("hr",{key:n.key})},[r.codeBlock]:{match:Re(y),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>l("pre",{key:r.key},l("code",t({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[r.codeFenced]:{match:Re(g),order:0,parse:e=>({attrs:Z("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:r.codeBlock})},[r.codeInline]:{match:Be(k),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>l("code",{key:n.key},e.text)},[r.footnote]:{match:Re(v),order:0,parse:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),render:We},[r.footnoteReference]:{match:Me(S),order:1,parse:e=>({target:`#${i.slugify(e[1],ze)}`,text:e[1]}),render:(e,t,n)=>l("a",{key:n.key,href:i.sanitizer(e.target,"a","href")},l("sup",{key:n.key},e.text))},[r.gfmTask]:{match:Me(w),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>l("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[r.heading]:{match:Re(i.enforceAtxHeadings?z:C),order:1,parse:(e,t,n)=>({children:Ne(t,e[2],n),id:i.slugify(e[2],ze),level:e[1].length}),render:(e,t,n)=>l(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[r.headingSetext]:{match:Re(L),order:0,parse:(e,t,n)=>({children:Ne(t,e[1],n),level:"="===e[2]?1:2,type:r.heading})},[r.htmlBlock]:{match:Ie(A),order:1,parse(e,t,n){const[,r]=e[3].match(ie),i=new RegExp(`^${r}`,"gm"),l=e[3].replace(i,""),a=(o=l,Ce.some((e=>e.test(o)))?Fe:Ne);var o;const s=e[1].toLowerCase(),d=-1!==c.indexOf(s),p=(d?s:e[1]).trim(),u={attrs:Z(p,e[2]),noInnerParse:d,tag:p};return n.inAnchor=n.inAnchor||"a"===s,d?u.text=e[3]:u.children=a(t,l,n),n.inAnchor=!1,u},render:(e,n,r)=>l(e.tag,t({key:r.key},e.attrs),e.text||n(e.children,r))},[r.htmlSelfClosing]:{match:Ie(B),order:1,parse(e){const t=e[1].trim();return{attrs:Z(t,e[2]||""),tag:t}},render:(e,n,r)=>l(e.tag,t({},e.attrs,{key:r.key}))},[r.htmlComment]:{match:Ie(O),order:1,parse:()=>({}),render:We},[r.image]:{match:Be($e),order:1,parse:e=>({alt:e[1],target:De(e[2]),title:e[3]}),render:(e,t,n)=>l("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:i.sanitizer(e.target,"img","src")})},[r.link]:{match:Me(Ee),order:3,parse:(e,t,n)=>({children:He(t,e[1],n),target:De(e[2]),title:e[3]}),render:(e,t,n)=>l("a",{key:n.key,href:i.sanitizer(e.target,"a","href"),title:e.title},t(e.children,n))},[r.linkAngleBraceStyleDetector]:{match:Me(j),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],type:r.link})},[r.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Me(I)(e,t),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],title:void 0,type:r.link})},[r.linkMailtoDetector]:{match:Me(U),order:0,parse(e){let t=e[1],n=e[1];return d.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:r.text}],target:n,type:r.link}}},[r.orderedList]:Se(l,1),[r.unorderedList]:Se(l,2),[r.newlineCoalescer]:{match:Re(x),order:3,parse:_e,render:()=>"\n"},[r.paragraph]:{match:Ue,order:3,parse:Pe,render:(e,t,n)=>l("p",{key:n.key},t(e.children,n))},[r.ref]:{match:Me(H),order:0,parse:e=>(Q[e[1]]={target:e[2],title:e[4]},{}),render:We},[r.refImage]:{match:Be(F),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,n)=>Q[e.ref]?l("img",{key:n.key,alt:e.alt,src:i.sanitizer(Q[e.ref].target,"img","src"),title:Q[e.ref].title}):null},[r.refLink]:{match:Me(P),order:0,parse:(e,t,n)=>({children:t(e[1],n),fallbackChildren:t(e[0].replace(_,"\\$1"),n),ref:e[2]}),render:(e,t,n)=>Q[e.ref]?l("a",{key:n.key,href:i.sanitizer(Q[e.ref].target,"a","href"),title:Q[e.ref].title},t(e.children,n)):l("span",{key:n.key},t(e.fallbackChildren,n))},[r.table]:{match:Re(N),order:1,parse:Te,render(e,t,n){const r=e;return l("table",{key:n.key},l("thead",null,l("tr",null,r.header.map((function(e,i){return l("th",{key:i,style:Oe(r,i)},t(e,n))})))),l("tbody",null,r.cells.map((function(e,i){return l("tr",{key:i},e.map((function(e,i){return l("td",{key:i,style:Oe(r,i)},t(e,n))})))}))))}},[r.text]:{match:Ie(ne),order:4,parse:e=>({text:e[0].replace(T,((e,t)=>i.namedCodesToUnicode[t]?i.namedCodesToUnicode[t]:e))}),render:e=>e.text},[r.textBolded]:{match:Be(J),order:2,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>l("strong",{key:n.key},t(e.children,n))},[r.textEmphasized]:{match:Be(K),order:3,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>l("em",{key:n.key},t(e.children,n))},[r.textEscaped]:{match:Be(te),order:1,parse:e=>({text:e[1],type:r.text})},[r.textMarked]:{match:Be(Y),order:3,parse:Pe,render:(e,t,n)=>l("mark",{key:n.key},t(e.children,n))},[r.textStrikethroughed]:{match:Be(ee),order:3,parse:Pe,render:(e,t,n)=>l("del",{key:n.key},t(e.children,n))}};!0===i.disableParsingRawHTML&&(delete V[r.htmlBlock],delete V[r.htmlSelfClosing]);const X=function(e){let t=Object.keys(e);function n(r,i){let l=[],a="";for(;r;){let o=0;for(;o<t.length;){const c=t[o],s=e[c],d=s.match(r,i,a);if(d){const e=d[0];r=r.substring(e.length);const t=s.parse(d,n,i);null==t.type&&(t.type=c),l.push(t),a=e;break}o++}}return l}return t.sort((function(t,n){let r=e[t].order,i=e[n].order;return r!==i?r-i:t<n?-1:1})),function(e,t){return n(e.replace(b,"\n").replace(E,"").replace(G,"    "),t)}}(V),le=(ae=function(e,t){return function(n,r,i){const l=e[n.type].render;return t?t((()=>l(n,r,i)),n,r,i):l(n,r,i)}}(V,i.renderRule),function e(t,n={}){if(Array.isArray(t)){const r=n.key,i=[];let l=!1;for(let a=0;a<t.length;a++){n.key=a;const r=e(t[a],n),o="string"==typeof r;o&&l?i[i.length-1]+=r:null!==r&&i.push(r),l=o}return n.key=r,i}return ae(t,e,n)});var ae;const oe=p(n);return q.length?l("div",null,oe,l("footer",{key:"footer"},q.map((function(e){return l("div",{id:i.slugify(e.identifier,ze),key:e.identifier},e.identifier,le(X(e.footnote,{inline:!0})))})))):oe}(l,p),Z)};export{qe as M};
