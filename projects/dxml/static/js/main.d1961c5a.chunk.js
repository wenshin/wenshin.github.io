(this.webpackJsonpdxml=this.webpackJsonpdxml||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return r}));var c=n(21);function i(e){return"".concat(e,"[align-items] {\n    display: flex;\n  }\n  ").concat(e,'[align-items="center"] {\n    align-items: center;\n    justify-content: center;\n  }\n  ').concat(e,'[align-items="top"] {\n    align-items: flex-start;\n    justify-content: center;\n  }\n  ').concat(e,'[align-items="bottom"] {\n    align-items: flex-end;\n    justify-content: center;\n  }\n  ').concat(e,'[align-items="left"] {\n    align-items: center;\n    justify-content: flex-start;\n  }\n  ').concat(e,'[align-items="left-top"] {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n  ').concat(e,'[align-items="left-bottom"] {\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  ').concat(e,'[align-items="right"] {\n    align-items: center;\n    justify-content: flex-end;\n  }\n  ').concat(e,'[align-items="right-top"] {\n    align-items: flex-start;\n    justify-content: flex-end;\n  }\n  ').concat(e,'[align-items="right-bottom"] {\n    align-items: flex-end;\n    justify-content: flex-end;\n  }')}function l(e){if(!e.parentNode)return 0;var t=document.createElement("span");return t.classList.add("text-corp-elem"),t.innerHTML="A",e.appendChild(t),t.offsetHeight}function a(e,t){var n=document.getElementById(e);n||((n=document.createElement("style")).id=e,n.textContent=t,document.head.appendChild(n))}function o(e){a("d-dimension-".concat(e),'[dimension][dimension="'.concat(e,'"] { flex-grow: ').concat(e,"; }"))}function s(e){var t=e.split(" "),n=Object(c.a)(t,2),i=n[0],l=n[1];a("d-gap-".concat(i,"-").concat(l||i),'[gap="'.concat(e,'"] > * { margin-right: ').concat(i,"; margin-bottom: ").concat(l||i,"; }"))}function r(e){a("d-text-crop-".concat(e),'[crop="'.concat(e,'"]::before, [crop="').concat(e,'"]::after { margin-top: -').concat(e,"; }"))}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(2),i=n(3),l=n(4),a=n(5),o=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return n}(Object(a.a)(HTMLElement));o.id="d-float-id",o.tag="d-float",window.customElements&&!window.customElements.get(o.tag)&&window.customElements.define(o.tag,o)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),i=n(6),l=n(3),a=n(4),o=n(5),s=n(1),r=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"connectedCallback",value:function(){var e=this.getAttribute("dimension");"stretch"!==e&&e&&this.parentElement&&Object(s.d)(e);var t=this.getAttribute("gap");t&&Object(s.e)(t)}}]),n}(Object(o.a)(HTMLElement));r.tag="d-row",r.id="d-row-id",window.customElements&&!window.customElements.get(r.tag)&&window.customElements.define(r.tag,r)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),i=n(6),l=n(3),a=n(4),o=n(5),s=n(1),r=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"connectedCallback",value:function(){var e=this.getAttribute("dimension");"stretch"!==e&&e&&this.parentElement&&Object(s.d)(e);var t=this.getAttribute("gap");t&&Object(s.e)(t)}}]),n}(Object(o.a)(HTMLElement));r.tag="d-col",r.id="d-col-id",window.customElements&&!window.customElements.get(r.tag)&&window.customElements.define(r.tag,r)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(2),i=n(3),l=n(4),a=n(5),o=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return n}(Object(a.a)(HTMLElement));o.tag="d-elem",o.id="d-elem-id",window.customElements&&!window.customElements.get(o.tag)&&window.customElements.define(o.tag,o)},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(2),i=n(6),l=n(3),a=n(4),o=n(5),s=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"connectedCallback",value:function(){var e=this.getAttribute("mask")||"none";switch(e){case"none":case"white":case"black":break;default:this.setAttribute("style","background-color: ".concat(e,";"))}}}]),n}(Object(o.a)(HTMLElement));s.id="d-layer-id",s.tag="d-layer",window.customElements&&!window.customElements.get(s.tag)&&window.customElements.define(s.tag,s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),i=n(6),l=n(3),a=n(4),o=n(5),s=n(1),r=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return(e=t.call.apply(t,[this].concat(l))).delta=0,e}return Object(i.a)(n,[{key:"connectedCallback",value:function(){var e=this.getAttribute("crop");e?Object(s.c)(e):this.updateStyle()}},{key:"attributeChangedCallback",value:function(e){this.getAttribute("crop")||"style"!==e&&"class"!==e||this.updateStyle()}},{key:"updateStyle",value:function(){var e=this.children.length?this.children[0]:this,t=Object(s.b)(e),c=window.getComputedStyle(e),i=parseFloat(c.fontSize);if(t>i){var l=(t-i)/2;if(this.delta!==l){this.delta=l;var a="".concat(n.tag,"-crop-").concat(l);this.classList.add(a),Object(s.f)(a,"\n          ".concat(n.tag,".").concat(a,"::before, ").concat(n.tag,".").concat(a,"::after {\n            margin-top: -").concat(l,"px;\n          }\n        "))}}}}]),n}(Object(o.a)(HTMLElement));r.tag="d-text",r.id="d-text-id",window.customElements&&!window.customElements.get(r.tag)&&window.customElements.define(r.tag,r)},,,function(e,t){},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(2),i=n(6),l=n(3),a=n(4),o=n(5),s=n(1),r=function(e){Object(l.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"connectedCallback",value:function(){var e=this.getAttribute("gap");e&&Object(s.e)(e)}}]),n}(Object(o.a)(HTMLElement));r.tag="d-view",r.id="d-view-id",window.customElements&&!window.customElements.get(r.tag)&&window.customElements.define(r.tag,r)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";var c=n(1),i=n(20),l=n(8),a=n(9),o=n(11),s=n(7),r=n(14),d=n(15);n(18);Object(c.f)("d-common-id","".concat(i.a.tag,' {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n[layout="inline"] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  align-content: flex-start;\n}\n').concat(l.a.tag,", ").concat(a.a.tag,', [layout="row"], [layout="col"] {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  flex: none;\n}\n').concat(l.a.tag,', [layout="row"] {\n  flex-direction: row;\n  width: 100%;\n}\n').concat(l.a.tag,' > [dimension], [layout="row"] > [dimension] {\n  width: 1px;\n  min-width: 1px;\n  overflow: auto;\n  flex: 1;\n}\n').concat(l.a.tag,' > [dimension="stretch"], [layout="row"] > [dimension="stretch"] {\n  overflow: auto;\n  flex: 1;\n}\n').concat(a.a.tag,', [layout="col"] {\n  flex-direction: column;\n  height: 100%;\n}\n').concat(a.a.tag,' > [dimension], [layout="col"] > [dimension] {\n  height: 1px;\n  min-height: 1px;\n  overflow: auto;\n  flex: 1;\n}\n').concat(a.a.tag,' > [dimension="stretch"], [layout="col"] > [dimension="stretch"] {\n  overflow: auto;\n  flex: 1;\n}\n').concat(l.a.tag,'[gap] > *,\n[layout="row"][gap] > * {\n  margin-bottom: 0;\n}\n').concat(a.a.tag,'[gap] > *,\n[layout="col"][gap] > * {\n  margin-right: 0;\n}\n[layout="row"][gap] > *:last-child,\n').concat(l.a.tag,'[gap] > *:last-child,\n[layout="col"][gap] > *:last-child,\n').concat(a.a.tag,"[gap] > *:last-child {\n  margin-right: 0;\n  margin-bottom: 0;\n}\n").concat(o.a.tag,", ").concat(o.a.tag,"[layout] {\n  display: inline-flex;\n  width: initial;\n  height: initial;\n}\n").concat(o.a.tag,'[layout="row"] {\n  max-width: 100%;\n}\n').concat(o.a.tag,'[layout="col"] {\n  max-height: 100%;\n}\n').concat(o.a.tag,"[layout] > * {\n  flex-grow: 0;\n  flex-shrink: 1;\n}\n").concat(Object(c.a)(""),"\n").concat(s.a.tag," {\n  position: absolute;\n  box-sizing: border-box;\n  display: block;\n  pointer-events: auto;\n  /* default is left top */\n  left: 0px;\n  top: 0px;\n}\n").concat(s.a.tag,'[align="top"] {\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n').concat(s.a.tag,'[align="right-top"] {\n  top: 0px;\n  right: 0px;\n  left: initial;\n}\n').concat(s.a.tag,'[align="right"] {\n  left: initial;\n  right: 0px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n').concat(s.a.tag,'[align="right-bottom"] {\n  bottom: 0px;\n  right: 0;\n  top: initial;\n  left: initial;\n}\n').concat(s.a.tag,'[align="bottom"] {\n  bottom: 0px;\n  top: initial;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n').concat(s.a.tag,'[align="left-bottom"] {\n  left: 0px;\n  top: initial;\n  bottom: 0px;\n}\n').concat(s.a.tag,'[align="left"] {\n  left: 0px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n').concat(s.a.tag,'[align="center"] {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n').concat(r.a.tag," {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  display: block;\n  height: 100%;\n  width: 100%;\n  overflow: visible;\n}\n").concat(r.a.tag,'[mask="none"] {\n  pointer-events: none;\n  background-color: transparent;\n}\n').concat(r.a.tag,'[mask="white"] {\n  background-color: #ffffffbb;\n}\n').concat(r.a.tag,'[mask="black"] {\n  background-color: #00000073;\n}\n').concat(d.a.tag," {\n  display: inline-block;\n  box-sizing: border-box;\n  overflow: visible;\n}\n").concat(d.a.tag,"::before, ").concat(d.a.tag,"::after {\n  content: '';\n  display: block;\n  height: 0;\n  width: 0;\n}\n").concat(d.a.tag," .text-corp-elem {\n  margin:0;\n  padding:0;\n  width: 0;\n  display: inline-block;\n  overflow: hidden;\n}"))},function(e,t,n){"use strict";n.r(t);var c=n(12),i=n.n(c),l=n(19),a=n.n(l),o=(n(26),n(27),n(0));var s=function(){return Object(o.jsxs)("div",{style:{padding:20},children:[Object(o.jsx)("h1",{children:"\u524d\u8a00"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("p",{children:"\u4e00\u76f4\u4ee5\u6765\u524d\u7aef\u5de5\u7a0b\u5316\u9886\u57df\uff0c\u4e00\u76f4\u81f4\u529b\u4e8e\u5728 css + js \u5f00\u53d1\u4e0a\u8fdb\u884c\u63d0\u8d28\u3001\u63d0\u6548\uff0c\u5374\u4e00\u76f4\u5ffd\u7565 html + css \u7684\u8d28\u6548\u95ee\u9898\u3002"}),Object(o.jsx)("p",{children:"\u6700\u8fd1\u51e0\u5e74\u867d\u7136\u6211\u5df2\u7ecf\u80fd\u89e3\u51b3\u524d\u7aef\u51e0\u4e4e\u6240\u6709\u7684\u5e03\u5c40\uff0c\u5c24\u5176\u662f flex\u3001grid \u5e03\u5c40\u51fa\u73b0\u540e\uff0c\u8ba9\u590d\u6742\u7ed3\u6784\u5e03\u5c40\u80fd\u529b\u66f4\u52a0\u5b8c\u7f8e\u548c\u9ad8\u6548\u3002 \u4f46\u662f\u6211\u53d1\u73b0\u590d\u6742\u7684\u5e03\u5c40\u7528 html + css \u6216\u8005 wxml + css \u6765\u5904\u7406\u4ecd\u7136\u662f\u5f88\u4f4e\u6548\u7684\uff0c \u4e00\u4e2a\u590d\u6742\u7684\u9875\u9762\u5e03\u5c40\u5982\u679c\u6ca1\u6709\u73b0\u6210\u7684\u7ec4\u4ef6\u53ef\u7528\uff0c\u9700\u8981\u8017\u65f6\u534a\u5929\u5230\u4e00\u5929\u4e0d\u7b49\u3002"}),Object(o.jsx)("p",{children:"\u5e76\u4e14\u6211\u89c9\u5f97\u8bbe\u8ba1\u9886\u57df\u548c\u6280\u672f\u9886\u57df\u6ca1\u6709\u7edf\u4e00\u7684\u5e03\u5c40 DSL\uff0c\u4e5f\u662f\u963b\u788d\u8bbe\u8ba1\u7a3f\u81ea\u52a8\u4ee3\u7801\u5316\u7684\u5173\u952e\u70b9\u4e4b\u4e00\u3002 \u5f53\u7136\u4e1a\u5185\u963f\u91cc\u7684 imgcook \u975e\u5e38\u5389\u5bb3\uff0c\u5b83\u9760\u590d\u6742\u7684\u667a\u80fd\u6280\u672f\u5bf9\u8bbe\u8ba1\u7a3f\u56fe\u7247\u6216\u8005\u6e90\u6587\u4ef6\u8fdb\u884c\u5206\u6790\uff0c\u63d0\u53d6\u51fa\u5143\u7d20\u6811\uff0c\u5e76\u4e14\u9002\u914d\u4e86 React\u3001Vue\u3001\u5c0f\u7a0b\u5e8f\u3001Flutter\u3001Android \u7b49\u591a\u79cd DSL\u3002 \u8fd9\u9879\u6280\u672f\u4e5f\u6709\u7f3a\u70b9\uff0c \u9996\u5148\uff0c\u6280\u672f\u6210\u672c\u5f88\u9ad8\uff0c\u4ece 2017 \u5e74\u5f00\u59cb\uff0c2019 \u5e74 1 \u6708\u53d1\u5e03\u4f53\u9a8c\u7248\uff0c\u76ee\u524d\u4fdd\u6301\u6bcf\u6708\u8fed\u4ee3\uff0c\u6574\u4e2a\u7f51\u7ad9\u6613\u7528\u6027\u8fd8\u662f\u6bd4\u8f83\u5dee\uff0cloading \u65f6\u95f4\u957f\uff0c\u963b\u585e\u95ee\u9898\u6bd4\u8f83\u591a\uff0c\u660e\u663e\u7ef4\u62a4\u6295\u5165\u4e0d\u662f\u5f88\u5145\u8db3\u3002 \u5176\u6b21\uff0c\u8bbe\u8ba1\u548c\u7814\u53d1\u89c4\u8303\u8fed\u4ee3\u7ef4\u62a4\u6210\u672c\u5982\u4f55\uff0c\u4ee5\u53ca\u5982\u4f55\u4fdd\u6301\u548c\u9002\u914d DSL \u517c\u5bb9\u5e76\u4fdd\u8bc1\u53ef\u9760\u6027\uff0c\u90fd\u8fd8\u6ca1\u6709\u5f97\u5230\u5f88\u597d\u9a8c\u8bc1\u3002 \u56e0\u6b64\u5982\u679c\u6709\u4e00\u5957\u8bbe\u8ba1\u548c\u6280\u672f\u90fd\u9075\u5faa\u7684 DSL\uff0c\u76f8\u4fe1 imgcook \u7684\u6210\u672c\u548c\u4e0d\u786e\u5b9a\u6027\u5c06\u5927\u5927\u964d\u4f4e\u3002"}),Object(o.jsx)("p",{children:"\u5728\u6df1\u5165\u5b66\u4e60 flex \u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u53d1\u73b0\u5b83\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\uff0c\u5e95\u5c42\u62bd\u8c61\u6781\u81f4\u7684\u5e03\u5c40\u4f53\u7cfb\u3002 \u4f46\u662f\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff0c\u9996\u5148\u6982\u5ff5\u590d\u6742\uff0c\u7406\u89e3\u548c\u719f\u7ec3\u5e94\u7528\u6210\u672c\u5f88\u9ad8\uff1b\u5176\u6b21\u548c\u5e38\u89c1\u7684 UI \u8bbe\u8ba1\u5de5\u5177\u6982\u5ff5\u5dee\u5f02\u5f88\u5927\u3002 \u8bf4\u7684\u76f4\u767d\u70b9\uff0c\u662f\u8fd9\u4e2a\u8bbe\u8ba1\u592a\u6280\u672f\u5316\uff0c\u662f\u4e00\u4e2a\u66f4\u4eb2\u8fd1\u6280\u672f\u7684\u8bbe\u8ba1\u3002"}),Object(o.jsx)("p",{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u5728\u5b50\u5143\u7d20\u5e03\u5c40\u548c\u5bf9\u9f50\u4e0a\u5c31\u6709\u56db\u79cd\u5c5e\u6027 align-items\u3001align-content\u3001justify-content \u548c align-self\u3002 \u800c\u5bf9\u4e8e UI \u8bbe\u8ba1\u5de5\u5177\u6765\u8bf4\uff0c\u53ea\u5173\u6ce8\u4e24\u79cd\uff0c \u4e00\u4e2a\u662f\u5b50\u5143\u7d20\u548c\u7236\u5143\u7d20\u4f4d\u7f6e\uff0c\u5982\uff1a\u5de6\u53f3\u3001\u4e0a\u4e0b\u3001\u4e2d\u95f4\u3001\u5de6\u4e0a\u3001\u5de6\u4e0b\u3001\u53f3\u4e0a\u3001\u53f3\u4e0b 9 \u4e2a\u4f4d\u7f6e\uff1b \u4e00\u4e2a\u662f\u5b50\u5143\u7d20\u4e4b\u95f4\u5bf9\u9f50\uff0c\u5982\uff1a\u5c45\u4e2d\u5bf9\u9f50\u6700\u591a\u3001\u7136\u540e\u662f\u9876\u90e8\u5bf9\u9f50\u548c\u5e95\u90e8\u5bf9\u9f50\u3002"}),Object(o.jsx)("p",{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u8ba9 UI \u8bbe\u8ba1\u6982\u5ff5\u4e0e\u6280\u672f\u65b9\u6848\u8fdb\u884c\u878d\u5408\uff0c\u751a\u81f3\u5b9e\u73b0\u81ea\u52a8\u5316\u3002 \u6211\u5c1d\u8bd5\u8bbe\u8ba1\u4e00\u5957\u65b0\u7684 XML \u8bed\u8a00\uff0c\u547d\u540d\u4e3a Design XML \u7f29\u5199 DXML\u3002"})]}),Object(o.jsx)("h1",{children:"DXML \u4ecb\u7ecd"}),Object(o.jsx)("h2",{children:Object(o.jsx)("d-text",{crop:"2px",children:"\u6838\u5fc3\u7406\u5ff5"})}),Object(o.jsx)("section",{children:Object(o.jsx)("p",{children:"DXML \u7684\u6838\u5fc3\u7406\u5ff5\u662f\u8bbe\u8ba1\u66f4\u7b26\u5408\u8bbe\u8ba1\u8bed\u8a00\u7684 DSL\u3002 html + css \u8bbe\u8ba1\u4e4b\u521d\u662f\u4e3a\u4e86\u670d\u52a1\u597d\u56fe\u6587\u5185\u5bb9\u7684\u5c55\u793a\uff0c\u800c\u73b0\u4ee3 Web \u5e94\u7528\u7ed3\u6784\u5316\u5e03\u5c40\u66f4\u591a\u3002"})}),Object(o.jsx)("h2",{children:Object(o.jsx)("d-text",{crop:"2px",children:"\u6807\u7b7e\u4ecb\u7ecd"})}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"view"}),"\uff1a\u59cb\u7ec8\u5360\u6ee1\u7236\u5143\u7d20\u7a7a\u95f4"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"row"}),"\uff1a\u59cb\u7ec8\u5360\u6ee1\u7236\u5143\u7d20\u5bbd\u5ea6\uff0c\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u5b50\u5143\u7d20\u59cb\u7ec8\u5728\u4e00\u884c\u5185\u8fdb\u884c\u5e03\u5c40"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"col"}),"\uff1a\u59cb\u7ec8\u5360\u6ee1\u7236\u5143\u7d20\u9ad8\u5ea6\uff0c\u5bbd\u5ea6\u81ea\u9002\u5e94\uff0c\u5b50\u5143\u7d20\u59cb\u7ec8\u5728\u4e00\u884c\u5185\u8fdb\u884c\u5e03\u5c40"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"layer"}),"\uff1a\u59cb\u7ec8\u5360\u6ee1\u7236\u5143\u7d20\u7a7a\u95f4\uff0c\u5e76\u4e14\u6f02\u6d6e\u5728\u5176\u4ed6\u5143\u7d20\u4e4b\u4e0a\uff0c\u652f\u6301\u9f20\u6807\u4e8b\u4ef6\u7a7f\u900f\u548c\u80cc\u666f\u8272\u8bbe\u7f6e"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"elem"}),"\uff1a\u9ed8\u8ba4\u9002\u5e94\u5185\u90e8\u89c6\u89c9\u5143\u7d20\u5c3a\u5bf8\uff0c\u5982\uff1a\u6587\u672c\u3001\u56fe\u7247\u7b49"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"text"}),"\uff1aelem \u6d3e\u751f\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u652f\u6301\u5904\u7406\u6587\u672c line-height \u5bfc\u81f4\u7684\u7a7a\u95f4\u6ea2\u51fa"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:"inline-code",children:"float"}),"\uff1aelem \u6d3e\u751f\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u652f\u6301\u6f02\u6d6e\u5728\u7236\u5143\u7d20\u7684\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u3001\u4e2d\u3001\u5de6\u4e0a\u3001\u5de6\u4e0b\u3001\u53f3\u4e0a\u3001\u53f3\u4e0b 9 \u4e2a\u4f4d\u7f6e"]})]}),Object(o.jsx)("h1",{children:"\u5b9e\u4f8b"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u5723\u676f\u5e03\u5c40"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"col",gap:"10px",children:[Object(o.jsx)("d-row",{"align-items":"center",children:"Header"}),Object(o.jsxs)("d-row",{dimension:"stretch",gap:"10px",style:{backgroundColor:"transparent"},children:[Object(o.jsx)("d-col",{"align-items":"center",children:"SideBar"}),Object(o.jsx)("d-col",{dimension:"stretch","align-items":"center",children:"Content"}),Object(o.jsx)("d-col",{"align-items":"center",children:"SideBar"})]}),Object(o.jsx)("d-row",{"align-items":"center",children:"Footer"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='col' gap='10px'>\n  <d-row align-items='center'>\n    Header\n  </d-row>\n  <d-row dimension='stretch' gap='10px' style={{ backgroundColor: 'transparent' }}>\n    <d-col align-items='center'>SideBar</d-col>\n    <d-col dimension='stretch' align-items='center'>Content</d-col>\n    <d-col align-items='center'>SideBar</d-col>\n  </d-row>\n  <d-row align-items='center'>\n    Footer\n  </d-row>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u7b49\u5bbd 3 \u5217\uff0c\u5143\u7d20\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"row",gap:"12px",children:[Object(o.jsx)("d-col",{dimension:"1","align-items":"center",children:Object(o.jsxs)("d-row",{"align-items":"center",children:[Object(o.jsx)("div",{children:"A"}),Object(o.jsx)("div",{children:"A"})]})}),Object(o.jsx)("d-col",{dimension:"1","align-items":"center",children:"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"}),Object(o.jsx)("d-col",{dimension:"1","align-items":"center",children:"CC"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='row' gap='12px'>\n  <d-col dimension='1' align-items='center'>\n    <d-row align-items='center'>\n      <div>A</div>\n      <div>A</div>\n    </d-row>\n  </d-col>\n  <d-col dimension='1' align-items='center'>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</d-col>\n  <d-col dimension='1' align-items='center'>CC</d-col>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u4e0d\u540c\u6bd4\u4f8b\u5217\uff0c\u5143\u7d20\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"row",gap:"12px",children:[Object(o.jsxs)("d-col",{dimension:"1","align-items":"center",children:[Object(o.jsx)("div",{children:"A"}),Object(o.jsx)("div",{children:"A"})]}),Object(o.jsx)("d-col",{dimension:"2","align-items":"center",children:"BB"}),Object(o.jsx)("d-col",{dimension:"2","align-items":"center",children:"CC"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='row' gap='12px'>\n  <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>\n  <d-col dimension='2' align-items='center'>BB</d-col>\n  <d-col dimension='2' align-items='center'>CC</d-col>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u6c34\u5e73\u4e09\u660e\u6cbb\u5e03\u5c40"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"row",gap:"12px",children:[Object(o.jsx)("d-col",{"align-items":"center",children:"AAA"}),Object(o.jsx)("d-col",{dimension:"stretch","align-items":"center",children:"B"}),Object(o.jsx)("d-col",{"align-items":"center",children:"C"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='row' gap='12px'>\n  <d-col align-items='center'>AAA</d-col>\n  <d-col dimension='stretch' align-items='center'>B</d-col>\n  <d-col align-items='center'>C</d-col>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u5782\u76f4\u4e09\u660e\u6cbb\u5e03\u5c40"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"col",gap:"12px",children:[Object(o.jsx)("d-row",{"align-items":"center",children:"A"}),Object(o.jsx)("d-row",{dimension:"stretch","align-items":"center",children:"B"}),Object(o.jsx)("d-row",{"align-items":"center",children:"C"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='col' gap='12px'>\n  <d-row align-items='center'>A</d-row>\n  <d-row dimension='stretch' align-items='center'>B</d-row>\n  <d-row align-items='center'>C</d-row>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u4e0d\u540c\u6bd4\u4f8b\u884c\u5e03\u5c40"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"col",gap:"12px",children:[Object(o.jsxs)("d-row",{dimension:"1",gap:"10px",style:{backgroundColor:"transparent"},children:[Object(o.jsx)("d-col",{"align-items":"center",children:"A"}),Object(o.jsx)("d-col",{dimension:"stretch","align-items":"center",children:"B"}),Object(o.jsx)("d-col",{"align-items":"center",children:"C"})]}),Object(o.jsxs)("d-row",{dimension:"2",gap:"10px",style:{backgroundColor:"transparent"},children:[Object(o.jsx)("d-col",{"align-items":"center",style:{width:30},children:"A"}),Object(o.jsx)("d-col",{dimension:"stretch","align-items":"center",children:"B"}),Object(o.jsx)("d-col",{"align-items":"center",children:"C"})]})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout='col' gap='12px'>\n  <d-row dimension='1' gap='10px' style={{backgroundColor: 'transparent'}}>\n    <d-col align-items='center'>A</d-col>\n    <d-col dimension='stretch' align-items='center'>B</d-col>\n    <d-col align-items='center'>C</d-col>\n  </d-row>\n  <d-row dimension='2' gap='10px' style={{backgroundColor: 'transparent'}}>\n    <d-col align-items='center' style={{ width: 30 }}>A</d-col>\n    <d-col dimension='stretch' align-items='center'>B</d-col>\n    <d-col align-items='center'>C</d-col>\n  </d-row>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u6d6e\u52a8\u5143\u7d20\u5b9a\u4f4d"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{children:[Object(o.jsx)("d-float",{class:"my-class",align:"top",children:"top"}),Object(o.jsx)("d-float",{align:"right-top",children:"right-top"}),Object(o.jsx)("d-float",{align:"right",children:"right"}),Object(o.jsx)("d-float",{align:"right-bottom",children:"right-bottom"}),Object(o.jsx)("d-float",{align:"bottom",children:"bottom"}),Object(o.jsx)("d-float",{align:"left-bottom",children:"left-bottom"}),Object(o.jsx)("d-float",{align:"left",children:"left"}),Object(o.jsx)("d-float",{align:"left-top",children:"left-top"}),Object(o.jsx)("d-float",{align:"center",children:"center"})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view>\n  <d-float class='my-class' align='top'>top</d-float>\n  <d-float align='right-top'>right-top</d-float>\n  <d-float align='right'>right</d-float>\n  <d-float align='right-bottom'>right-bottom</d-float>\n  <d-float align='bottom'>bottom</d-float>\n  <d-float align='left-bottom'>left-bottom</d-float>\n  <d-float align='left'>left</d-float>\n  <d-float align='left-top'>left-top</d-float>\n  <d-float align='center'>center</d-float>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"inline \u5143\u7d20\u5e03\u5c40"})}),Object(o.jsx)("div",{className:"case-container",children:Object(o.jsxs)("d-view",{layout:"inline",gap:"12px 16px",children:[Object(o.jsx)("d-elem",{className:"inline-elem1",children:"test"}),Object(o.jsxs)("d-elem",{class:"inline-elem2",layout:"row",gap:"10px",children:[Object(o.jsxs)("d-col",{"align-items":"center",children:[Object(o.jsx)("span",{children:"A"}),Object(o.jsx)("span",{children:"B"}),Object(o.jsx)("span",{children:"C"})]}),Object(o.jsx)("d-col",{"align-items":"center",children:"B"}),Object(o.jsx)("d-col",{"align-items":"center",children:"C"})]}),Object(o.jsxs)("d-elem",{layout:"col",gap:"10px",children:[Object(o.jsx)("d-row",{children:"A"}),Object(o.jsx)("d-row",{children:"B"}),Object(o.jsx)("d-row",{children:"C"})]}),Object(o.jsxs)("d-elem",{class:"inline-elem3",layout:"row",gap:"10px",children:[Object(o.jsx)("d-col",{"align-items":"center",children:"A"}),Object(o.jsx)("d-col",{"align-items":"center",children:"B"}),Object(o.jsx)("d-col",{"align-items":"center",children:"C"})]})]})}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:"<d-view layout=\"inline\" gap='12px 16px'>\n  <d-elem className='inline-elem1'>test</d-elem>\n  <d-elem class='inline-elem2' layout='row' gap='10px'>\n    <d-col align-items='center'><span>A</span><span>B</span><span>C</span></d-col>\n    <d-col align-items='center'>B</d-col>\n    <d-col align-items='center'>C</d-col>\n  </d-elem>\n  <d-elem layout='col' gap='10px'>\n    <d-row>A</d-row>\n    <d-row>B</d-row>\n    <d-row>C</d-row>\n  </d-elem>\n  <d-elem class='inline-elem3' layout='row' gap='10px'>\n    <d-col align-items='center'>A</d-col>\n    <d-col align-items='center'>B</d-col>\n    <d-col align-items='center'>C</d-col>\n  </d-elem>\n</d-view>"})})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("d-text",{crop:"2px",children:Object(o.jsx)("h2",{children:"\u81ea\u52a8\u4fee\u6b63\u6587\u672c line height \u5bfc\u81f4\u7684\u8fb9\u8ddd\u95ee\u9898"})}),Object(o.jsxs)("d-row",{gap:"12px",children:[Object(o.jsx)("d-text",{crop:"1px",children:"DXML \u8bbe\u8ba1\u4e86\u66f4\u9002\u5408\u8bbe\u8ba1\u7a3f\u76f4\u63a5\u8f6c\u5e03\u5c40\u4ee3\u7801\u7684\u4e00\u5957\u6807\u7b7e"}),Object(o.jsx)("d-text",{crop:"1px",children:"DXML Design for a better layout markable language from design to developer"}),Object(o.jsx)("d-text",{children:"DXML Design for a better layout markable language from design to developer"})]}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{className:"language-html",children:'<d-row>\n  <d-text crop="1px">DXML \u8bbe\u8ba1\u4e86\u66f4\u9002\u5408\u8bbe\u8ba1\u7a3f\u76f4\u63a5\u8f6c\u5e03\u5c40\u4ee3\u7801\u7684\u4e00\u5957\u6807\u7b7e</d-text>\n  <d-text crop="1px">DXML Design for a better layout markable language from design to developer</d-text>\n  <d-text>DXML Design for a better layout markable language from design to developer</d-text>\n</d-row>'})}),Object(o.jsx)("p",{children:"\u63d0\u793a\u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f\uff1ad-text \u6807\u7b7e\u4e0d\u8bbe\u7f6e crop \u6807\u7b7e\u65f6\uff0c\u4f1a\u901a\u8fc7\u63d2\u5165\u65b0\u7684\u8282\u70b9\u6765\u83b7\u5f97\u6587\u672c\u884c\u9ad8\uff0c\u8fd9\u4f1a\u5bf9\u9996\u5c4f\u6e32\u67d3\u6709 10ms \u4ee5\u4e0a\u7684\u6027\u80fd\u5f71\u54cd\uff0c\u5982\u679c\u628a\u672c\u9875\u9762\u4e2d\u7684\u6807\u9898\u90fd\u53bb\u6389 crop \u5c5e\u6027\uff0c\u5f71\u54cd\u5728 30ms \u5de6\u53f3\u3002"})]})]})},r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),l(e),a(e)}))};n(29);a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(s,{})}),document.getElementById("root")),r()}],[[30,1,2]]]);
//# sourceMappingURL=main.d1961c5a.chunk.js.map