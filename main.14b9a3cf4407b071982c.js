!function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);m.length;)m.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={0:0},l=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;l.push([210,1]),r()}({200:function(e,t,r){},210:function(e,t,r){r(211),e.exports=r(412)},406:function(e,t,r){},407:function(e,t,r){},412:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(119),o=r(10);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=a.createElement("path",{d:"M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"});var u=function(e){return a.createElement("svg",i({viewBox:"0 0 111 30",className:"logo_svg__svg-icon logo_svg__svg-icon-netflix-logo"},e),c)},s=r(3);var d=Object(s.a)(u)`
width: 110px;
	height: 30px;
	fill: red;
`;const m=s.a.div`
	background: #555;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;var p=()=>n.a.createElement(m,null,n.a.createElement(d,null)),v=r.p+"Assets/images/header-background.52c3af2075e83fb65aa7ee0104697c81.jpg";function b(e){return{type:"UPDATE_WORDS",payload:e}}function h(e){return{type:"OPEN_MODAL",payload:e}}const E=s.a.button`
	position: absolute;
	right: 150px;
	top: 20px;
`;var f=Object(o.b)(null,e=>({openModal:t=>e(h({id:t,data:null}))}))(e=>n.a.createElement(E,{onClick:()=>e.openModal("addNewMovie")},"+ Add a movie"));const g=s.a.button`
	position: absolute;
	right: 0;
	top: 20px;
`;var y=Object(o.b)(null,e=>({openModal:t=>e(h({id:t,data:null}))}))(e=>n.a.createElement(g,{onClick:()=>e.openModal("addNewWord")},"+ Add a word"));var w=s.a.button`
	background: none;
	border: 1px solid #fff;
	padding: 10px;
	color: #fff;
	cursor: pointer;

	&:hover {
		background-color: #fff;
		color: #232323;
	}
`,O=r(54),j=r(13);var S=()=>{const e=Object(j.g)(),{searchQuery:t}=Object(j.h)(),r={searchQuery:t||""};return n.a.createElement("div",null,n.a.createElement(O.c,{initialValues:r,onSubmit:t=>{e.push("/search/"+t.searchQuery)}},n.a.createElement(O.b,null,n.a.createElement(O.a,{placeholder:"Search words",name:"searchQuery"}),n.a.createElement(w,{type:"submit"},"Search"))))};var x=s.a.div`
	margin: 0 auto;
	max-width: 1000px;
	padding: 0 20px;
	width: 100%;
	box-sizing: border-box;
	position: relative;
`,W=r(39);const k=s.a.div`
	background-image: url(${e=>e.image});
	position: relative;
`,A=s.a.div`
	background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`,P=s.a.div`
	position: absolute;
	left: 0;
	top: 20px;
`,M=Object(s.a)(x)`
	display: flex;
	height: 70px;
	align-items: center;
	justify-content: center;
`;var _,D=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{image:v},n.a.createElement(A,null),n.a.createElement(M,null,n.a.createElement(P,null,n.a.createElement(W.b,{to:"/"},n.a.createElement(d,null))),n.a.createElement(y,null),n.a.createElement(f,null),n.a.createElement(S,null))));!function(e){e.All="All",e.Site="Site",e.SameWord="The same word"}(_||(_={}));const I=s.a.ul`
	display: flex;
`;s.a.li`

`;var B=Object(o.b)(e=>{const{wordsState:t}=e;return{groupBy:t.groupBy}},e=>({updateGroupBy:t=>e({type:"GROUP_BY",payload:t})}))(e=>{const{updateGroupBy:t}=e,r=Object.keys(_).map(e=>({id:e,label:_[e]})),a=e=>r=>{r.preventDefault(),t(e.label)};return n.a.createElement("div",null,"Group By:",n.a.createElement(I,null,r.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement("button",{onClick:a(e)},e.label)))))});var C=()=>n.a.createElement("div",null,"Sort By",n.a.createElement("select",{name:"",id:""},["Release Date","Title"].map((e,t)=>n.a.createElement("option",{key:t,value:e},e))));const V=s.a.div`
	display: flex;
	justify-content: space-between;
`;var R=()=>n.a.createElement(V,null,n.a.createElement(B,null),n.a.createElement(C,null));const T=s.a.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.7);
	z-index: 10;
`,L=s.a.div`
	position: relative;
	padding: 54px 20px 20px;
	background-color: #232323;
`,F=s.a.button`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
`,N=s.a.h3`
	margin-bottom: 20px;
`;var z=Object(o.b)(null,e=>({close:()=>e({type:"CLOSE_MODAL"})}))(e=>{const t=n.a.createRef();return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,{onClick:r=>{t.current===r.target&&e.close()},ref:t},n.a.createElement(L,null,n.a.createElement(F,{onClick:e.close},"✕"),e.title?n.a.createElement(N,null,e.title):null,e.children)))}),U=r(80);function Q(e){return Number(e)===e&&e%1!=0}r(406);var G=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};var q=e=>{const{label:t,error:r}=e,a=G(e,["label","error"]),[l,o,i]=Object(O.d)(a);return n.a.createElement("div",null,n.a.createElement("label",null,t),n.a.createElement("input",Object.assign({},l,a)),o.touched&&o.error||r?n.a.createElement("div",{className:"error"},(null==r?void 0:r.replace("{{field}}",t))||o.error):null)};r(200);var J=e=>{const{initialValues:t,validationSchema:r,remoteErrorMessages:a,submit:l}=e,o=(e,t,r)=>e&&0===Object.keys(t).length||!e||r||0!==Object.keys(a).length;return n.a.createElement(O.c,{initialValues:t,validationSchema:r,onSubmit:l},({touched:e,isValid:t,isSubmitting:r})=>n.a.createElement(O.b,null,n.a.createElement(q,{name:"title",label:"Title",error:a.title}),n.a.createElement(q,{name:"voteAverage",label:"Vote Average",type:"number",error:a.title}),n.a.createElement(q,{name:"posterPath",label:"Poster Path",error:a.posterPath}),n.a.createElement(q,{name:"overview",label:"Overview",error:a.overview}),n.a.createElement(q,{name:"budget",label:"Budget",type:"number",error:a.budget}),n.a.createElement("button",{disabled:o(t,e,r),type:"submit"},"Submit")))},H=function(e,t,r,a){return new(r||(r=Promise))((function(n,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))};var Y=e=>{const[t,r]=Object(a.useState)({}),[l,o]=Object(a.useState)(!1),i=!(!e.data||!e.movieId),c=Object(U.b)().shape({title:Object(U.c)().typeError("Title should be a string").required("Title is required"),voteAverage:Object(U.a)().typeError("Vote Average should be a number").test("is-decimal","Vote Average is invalid decimal",Q),posterPath:Object(U.c)().typeError("Poster should be a string").required("Poster path is required"),overview:Object(U.c)().typeError("Overview should be a string").required("Overview is required"),budget:Object(U.a)().typeError("Budget should be a number").positive("Budget should be a positive number").integer("Budget should be a number")}),u=Object.assign(Object.assign({},{title:"",voteAverage:.1,posterPath:"",overview:"",budget:0,genres:[]}),e.data);return n.a.createElement(n.a.Fragment,null,l?n.a.createElement("p",null,"Success!"):n.a.createElement(J,{initialValues:u,validationSchema:c,remoteErrorMessages:t,submit:(t,{setSubmitting:a})=>H(void 0,void 0,void 0,(function*(){const n=Object.assign(Object.assign({},i?{id:e.movieId}:{}),t),l=yield fetch("http://localhost:4000/movies",{method:i?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=yield l.json();l.ok?o(!0):r(c.messages.reduce((e,t)=>{const r=[...t.matchAll(/"(.*?)"(.*)/g)][0];return e[r[1]]="{{field}}"+r[2],e},{})),a(!1)}))}))};var X=()=>n.a.createElement(z,{title:"Add a new movie"},n.a.createElement(Y,null));var K=s.a.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
`;const $=s.a.label`
	color: #fff;
	margin-bottom: 5px;
`;var Z=e=>{const{id:t,label:r,type:a,value:l,placeholder:o,name:i}=e;return n.a.createElement(K,null,r?n.a.createElement($,{id:t},r):null,n.a.createElement("input",{type:a||"text",defaultValue:l,placeholder:o,name:i}))};var ee=e=>{var t;const r=null!==(t=e.data)&&void 0!==t?t:{originWord:"",translation:""};return n.a.createElement("form",{action:""},n.a.createElement(Z,{label:"Word",name:"originWord",value:r.originWord}),n.a.createElement(Z,{label:"Translation",name:"translation",value:r.translation}),n.a.createElement(w,{type:"submit",onClick:t=>{t.preventDefault(),e.data&&e.submit&&e.submit(e.data)}},"Save"))};var te=()=>n.a.createElement(z,{title:"Add a new word"},n.a.createElement(ee,null));var re=Object(o.b)(e=>{const{wordsState:t,modalState:r}=e;return{words:t.words,modal:r}},e=>({closeModal:()=>e({type:"CLOSE_MODAL"}),updateWords:t=>e(b(t))}))(e=>{const{words:t,updateWords:r,closeModal:a,modal:l}=e;return n.a.createElement(z,{title:"Edit word"},n.a.createElement(ee,{data:l.data,submit:e=>{if(!e||!t)return void a();const n=t.reduce((t,r)=>(t.push(r.id===e.id?e:r),t),[]);r(n),a()}}))});var ae=Object(o.b)(e=>{const{wordsState:t,modalState:r}=e;return{words:t.words,modal:r}},e=>({closeModal:()=>e({type:"CLOSE_MODAL"}),updateWords:t=>e(b(t))}))(e=>{var t,r,a;const{words:l,updateWords:o,closeModal:i,modal:c}=e;return n.a.createElement(z,{title:"Delete word"},"Remove word ",(null===(t=c.data)||void 0===t?void 0:t.selection)||(null===(r=c.data)||void 0===r?void 0:r.originWord)," - ",null===(a=c.data)||void 0===a?void 0:a.translation,n.a.createElement("div",null,n.a.createElement(w,{onClick:e=>{e.preventDefault();const t=c.data;if(!t||!l)return void i();const r=l.reduce((e,r)=>(r.id!==t.id&&e.push(r),e),[]);o(r),i()}},"Remove")))});var ne=Object(o.b)(e=>{const{modalState:t}=e;return{modalId:t.id}})(e=>{const{modalId:t}=e;return n.a.createElement(n.a.Fragment,null,"editWord"===t?n.a.createElement(re,null):null,"removeWord"===t?n.a.createElement(ae,null):null,"addNewWord"===t?n.a.createElement(te,null):null,"addNewMovie"===t?n.a.createElement(X,null):null)});var le=e=>{const{count:t}=e;let r;return r=t?0===t?"No Words Found":1===t?"1 Word Found":t+" Words Found":"Loading...",n.a.createElement("div",null,r)};const oe=s.a.article`
	padding: 10px 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 40px;

	.buttons {
		display: none;
	}

	&:hover {
		background-color: #000;

		.buttons {
			display: block;
		}
	}
`,ie=Object(s.a)(W.b)`
	cursor: pointer;
`;var ce=Object(o.b)(null,e=>({openModal:(t,r)=>e(h({id:t,data:r}))}))(e=>{const{word:t,openModal:r}=e;return n.a.createElement(oe,null,n.a.createElement("div",null,n.a.createElement(ie,{to:"/words/"+t.id},n.a.createElement("div",null,t.selection," - ",t.translation)),n.a.createElement("div",null,t.uri)),n.a.createElement("div",{className:"buttons"},n.a.createElement(w,{onClick:e=>{e.preventDefault(),r("editWord",t)}},"Edit"),n.a.createElement(w,{onClick:e=>{e.preventDefault(),r("removeWord",t)}},"Delete")))});var ue={groupWords(e,t){switch(e){case _.Site:return this._groupWordsBySite(t);case _.SameWord:return this._groupWordsTheSameWord(t);case _.All:default:return this._groupWordsByAll(t)}},_groupWordsByAll:e=>[{id:"All",words:e}],_groupWordsBySite(e){const t=e.reduce((e,t)=>(e[t.uri]||(e[t.uri]=[]),e[t.uri].push(t),e),{});return Object.keys(t).map(e=>({id:e,words:t[e]}))},_groupWordsTheSameWord(e){const t=e.reduce((e,t)=>{const r=t.originWord||t.selection.trim();return e[r]||(e[r]=[]),e[r].push(t),e},{});return Object.keys(t).map(e=>({id:e,words:t[e]}))}};const se=s.a.ul`
	display: flex;
	flex-wrap: wrap;
`;var de=Object(o.b)(e=>{const{wordsState:t}=e;return Object.assign({},t)})(e=>{const{words:t,groupBy:r}=e,{searchQuery:l}=Object(j.h)(),o=Object(a.useCallback)((e,t)=>e.filter(e=>e.selection.includes(t)||e.translation.includes(t)||e.originWord.includes(t)||e.context.includes(t)),[t,l]),i=Object(a.useCallback)((e,t)=>ue.groupWords(e,t),[t,r])(r,l?o(t||[],l):t||[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(le,{count:null==t?void 0:t.length}),t?n.a.createElement("ul",null,i.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement("h3",null,e.id),n.a.createElement(se,null,e.words.map(e=>n.a.createElement(ce,{key:e.id,word:e})))))):null)});const me=s.a.div`
	flex: 1;
	background-color: #232323;
	color: #fff;

	a {
		color: #bdbdbd;
	}
`;var pe=()=>n.a.createElement(me,null,n.a.createElement(x,null,n.a.createElement(R,null),n.a.createElement(de,null),n.a.createElement(ne,null)));r(407);class ve extends a.Component{static getDerivedStateFromError(e){return{hasError:!0}}constructor(e={}){super(e),this.state={hasError:!1}}componentDidCatch(e,t){console.log(e,t)}render(){return this.state.hasError?n.a.createElement("h1",null,"Oops, something went wring"):this.props.children}}var be=()=>n.a.createElement("div",null,n.a.createElement("h1",null,"Page not found"),n.a.createElement("p",null,"Go ",n.a.createElement(W.b,{to:"/"},"home")));var he,Ee=Object(o.b)(e=>{const{wordsState:t}=e;return{words:t.words}})(e=>{let{wordId:t}=Object(j.h)();const r=e.words.filter(e=>e.id===t).shift();return r?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",null,"Selection"),n.a.createElement("div",null,r.selection)),n.a.createElement("div",null,n.a.createElement("div",null,"Origin word:"),n.a.createElement("div",null,r.originWord)),n.a.createElement("div",null,n.a.createElement("div",null,"Translation"),n.a.createElement("div",null,r.translation)),n.a.createElement("div",null,n.a.createElement("div",null,"URL"),n.a.createElement("div",null,r.uri)),n.a.createElement("div",null,n.a.createElement("div",null,"Start Range"),n.a.createElement("div",null,JSON.stringify(r.startRange))),n.a.createElement("div",null,n.a.createElement("div",null,"End Range"),n.a.createElement("div",null,JSON.stringify(r.endRange))))):n.a.createElement(j.a,{to:"/"})}),fe=(r(413),r(30)),ge=(r(408),r(410),function(e,t,r,a){return new(r||(r=Promise))((function(n,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))}),ye=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};he=new WeakMap;const we=new class{constructor(){he.set(this,{apiKey:"AIzaSyCQ_4yQHE9RQsrtreYRNazDVEeXbTjplzg",authDomain:"english-words-367a1.firebaseapp.com",databaseURL:"https://english-words-367a1.firebaseio.com",projectId:"english-words-367a1",storageBucket:"english-words-367a1.appspot.com",messagingSenderId:"738119441981",appId:"1:738119441981:web:ffcc08f756a04a1de89454",measurementId:"G-XGM265DLSR"})}init(){return ge(this,void 0,void 0,(function*(){return fe.apps.length||fe.initializeApp(ye(this,he)),console.log(fe.analytics()),yield this.onAuth()}))}registerUser(e,t){var r;return ge(this,void 0,void 0,(function*(){try{const a=yield fe.auth().createUserWithEmailAndPassword(e,t);if(!(null===(r=a.user)||void 0===r?void 0:r.uid))throw new Error("[FirebaseService.registerUser] user.user.uid doesn't exist");return a.user.uid}catch(e){return console.log(e),e}}))}signInUser(e,t){var r;return ge(this,void 0,void 0,(function*(){try{const a=yield fe.auth().signInWithEmailAndPassword(e,t);if(!(null===(r=a.user)||void 0===r?void 0:r.uid))throw new Error("[FirebaseService.signInUser] user.user.uid doesn't exist");return a.user}catch(e){return e}}))}logOut(){return ge(this,void 0,void 0,(function*(){try{fe.auth().signOut()}catch(e){throw e}}))}addItem(e){var t;return ge(this,void 0,void 0,(function*(){if(!(null===(t=this.user)||void 0===t?void 0:t.uid))throw new Error("[FirebaseService.addItem] user.uid is undefined");try{const t=yield fe.database().ref("words").push(Object.assign({userId:this.user.uid},e));if(!t.key)throw new Error("[FirebaseService.addItem] response.key is undefined");return t.key}catch(e){throw e}}))}editItem(e,t){var r;return ge(this,void 0,void 0,(function*(){if(!(null===(r=this.user)||void 0===r?void 0:r.uid))throw new Error("[FirebaseService] user.uid is undefined");try{return yield fe.database().ref("words").child(e).update(Object.assign({userId:this.user.uid},t)),!0}catch(e){throw e}}))}removeItem(e){return ge(this,void 0,void 0,(function*(){try{return yield fe.database().ref("words").child(e).remove(),!0}catch(e){throw e}}))}onAuth(){return new Promise((e,t)=>{fe.auth().onAuthStateChanged(t=>ge(this,void 0,void 0,(function*(){let r;t?this.user=t:(r=yield this.signInUser("admin@admin.com","admin123"),this.user=r);const a=yield this.loadAll();e(a)})))})}loadAllForLocation(){return ge(this,void 0,void 0,(function*(){try{return new Promise(e=>ge(this,void 0,void 0,(function*(){yield fe.database().ref("words").orderByChild("uri").equalTo(window.location.href).once("value",(function(t){e(t.val()||{})}))})))}catch(e){throw e}}))}loadAll(){return ge(this,void 0,void 0,(function*(){try{return new Promise(e=>ge(this,void 0,void 0,(function*(){yield fe.database().ref("words").once("value",(function(t){e(t.val()||{})}))})))}catch(e){throw e}}))}},Oe=s.a.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;var je=Object(o.b)(null,e=>({setWords:t=>e(function(e){return{type:"ADD_WORDS",payload:e}}(t))}))(e=>{const[t]=Object(a.useState)();return Object(a.useEffect)(()=>{we.init().then(e=>Object.keys(e).map(t=>Object.assign({id:t},e[t]))).then(t=>{e.setWords(t)})},[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(Oe,null,n.a.createElement(ve,null,n.a.createElement(W.a,{basename:"/"},n.a.createElement(j.d,null,n.a.createElement(j.b,{path:"/",exact:!0},n.a.createElement(D,null),n.a.createElement(pe,null)),n.a.createElement(j.b,{path:"/react-mentoring",exact:!0},n.a.createElement(D,null),n.a.createElement(pe,null)),n.a.createElement(j.b,{path:"/words",exact:!0},n.a.createElement(j.a,{to:"/"})),n.a.createElement(j.b,{path:"/words/:wordId"},n.a.createElement(D,null),n.a.createElement(Ee,null)),n.a.createElement(j.b,{path:"/search",exact:!0},n.a.createElement(j.a,{to:"/"})),n.a.createElement(j.b,{path:"/search/:searchQuery"},n.a.createElement(D,null),n.a.createElement(pe,null)),n.a.createElement(j.b,{path:"*"},n.a.createElement(D,null),n.a.createElement(be,null)))),n.a.createElement(p,null))))}),Se=r(76),xe=r(209);const We={id:null,data:null};const ke={words:[],groupBy:_.All};var Ae=Object(Se.combineReducers)({wordsState:function(e=ke,t){switch(t.type){case"ADD_WORDS":case"UPDATE_WORDS":return Object.assign(Object.assign({},e),{words:t.payload});case"GROUP_BY":return Object.assign(Object.assign({},e),{groupBy:t.payload});default:return e}},modalState:function(e=We,t){switch(t.type){case"OPEN_MODAL":return Object.assign({data:null},t.payload);case"CLOSE_MODAL":return{id:null,data:null};default:return e}}});var Pe=Object(Se.createStore)(Ae,Object(xe.composeWithDevTools)());Object(l.render)(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,{store:Pe},n.a.createElement(je,null))),document.getElementById("app"))}});