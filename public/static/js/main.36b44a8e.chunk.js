(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},122:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),s=n.n(o),l=(n(102),n(6)),c=n(11),i=n(13),u=n(12),m=n(14),h=n(232),d=n(31),p=n.n(d),g=function e(){var t=this;Object(l.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=p.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/api",withCredentials:!0});this.service=n},v=(n(122),n(94)),b=n.n(v),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).logout=function(){n.service.logout().then(function(){n.props.setTheUserInTheAppComponent(null)})},n.state={loggedInUser:null},n.service=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({loggedInUser:e.userInSession})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("img",{className:"navbar-brand tideLogo",src:b.a,alt:"logo"}),r.a.createElement("ul",{className:"navbar-nav navlist"},r.a.createElement("li",{className:"nav-item active greeter"},"Welcome, ",this.state.loggedInUser.username)),r.a.createElement("ul",{className:"navbar-nav navlist ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(h.a,{className:"nav-item active mr-sm-2",to:"/posts",style:{textDecoration:"none"}},r.a.createElement("button",{className:"btn btn-info buttonRound"},"Posts"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(h.a,{className:"nav-item active mr-sm-2",to:"/newpost",style:{textDecoration:"none"}},r.a.createElement("button",{className:"btn btn-info buttonRound"},"New Post"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("button",{className:"btn btn-info buttonRound",onClick:function(){return e.logout()}},"Log Out")))):r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(h.a,{className:"nav-link",to:"/signup",style:{textDecoration:"none"}},"Signup")))))}}]),t}(a.Component),E=n(236),O=n(233),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getAllPosts=function(){p.a.get("http://localhost:5000/api/posts").then(function(e){n.setState({listOfPosts:e.data})})},n.state={listOfPosts:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllPosts()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},this.state.listOfPosts.map(function(e,t){return r.a.createElement("div",{key:e._id},r.a.createElement(h.a,{to:"/posts/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement("p",{style:{maxWidth:"400px"}},e.content," "))})),r.a.createElement("div",{style:{width:"40%",float:"right"}}))}}]),t}(a.Component),C=n(20),w=n(60),S=(n(58),n(93),n(217),n(32)),y=n(37),N=(n(219),n(235)),U=n(237),I=n(95),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handlePostSubmit=function(e){console.log("clicked!"),e.preventDefault();var t=n.state.title,a=n.state.blerb,o=n.state.loggedInUser,s=Object(C.convertFromRaw)(n.state.editorState);console.log(s);var l=Object(I.stateToHTML)(s);p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:""}).BASE_URL+"/posts",{title:t,blerb:a,content:l,contentState:s,user:o}).then(function(){return r.a.createElement(N.a,{to:"/PostList"})}).catch(function(e){return console.log(e)})},n.state={loggedInUser:null,title:"",blerb:"",editorState:C.EditorState.createEmpty()},n.onChange=function(e){n.setState({editorState:e})},n.handleKeyCommand=n.handleKeyCommand.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({loggedInUser:this.props.userInSession})}},{key:"handleKeyCommand",value:function(e,t){var n=C.RichUtils.handleKeyCommand(t,e);return n?(this.onChange(n),"handled"):"not-handled"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row editor-row"},r.a.createElement("div",{className:"col-4 text-writer"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend colAligner"},r.a.createElement("span",{className:"input-group-text inputTag",id:"inputGroup-sizing-lg"},"Title")),r.a.createElement("input",{type:"text",name:"title",className:"form-control colAligner",value:this.state.title,onChange:function(t){return e.handleChange(t)},"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"}),r.a.createElement("div",{className:"input-group colAligner"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text inputTag"},"Blerb")),r.a.createElement("textarea",{className:"form-control",name:"blerb",value:this.state.blerb,onChange:function(t){return e.handleChange(t)},"aria-label":"With textarea"}))),r.a.createElement(h.a,{to:"/",onClick:this.handlePostSubmit},r.a.createElement("button",{type:"button",className:"btn btn-dark darkButton"},"Submit Post!"))),r.a.createElement("div",{className:"col-6 text-writer"},r.a.createElement(w.Editor,{handleKeyCommand:this.handleKeyCommand,onChange:this.onChange})))))}}]),t}(r.a.Component),x=Object(U.a)(k),T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({username:"",password:""}),n.props.setTheUserInTheAppComponent(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.state={username:"",password:""},n.service=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have an account?",r.a.createElement(h.a,{to:"/signup"}," Signup")))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then(function(e){n.setState({username:"",password:""}),n.props.setTheUserInTheAppComponent(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.state={username:"",password:""},n.service=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(h.a,{to:"/"}," Login")))}}]),t}(a.Component),A=(a.Component,function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).logMeIn=function(e){n.setState({loggedInUser:e})},n.onEditorStateChange=function(e){n.setState({editorState:e})},n.state={loggedInUser:null,editorState:C.EditorState.createEmpty()},n.service=new g,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement("div",{className:"App"},r.a.createElement(f,{setTheUserInTheAppComponent:this.logMeIn,userInSession:this.state.loggedInUser}),r.a.createElement(E.a,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(T,Object.assign({},e.props,{setTheUserInTheAppComponent:e.logMeIn}))}}),r.a.createElement(O.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(P,Object.assign({},e.props,{setTheUserInTheAppComponent:e.logMeIn}))}}),r.a.createElement(O.a,{exact:!0,path:"/posts",component:j}),r.a.createElement(O.a,{exact:!0,path:"/newpost",render:function(){return r.a.createElement(x,Object.assign({},e.props,{userInSession:e.state.loggedInUser}))}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(234);s.a.render(r.a.createElement(L.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,n){e.exports=n.p+"static/media/T1D3icon.4ecf6dd3.svg"},97:function(e,t,n){e.exports=n(231)}},[[97,2,1]]]);
//# sourceMappingURL=main.36b44a8e.chunk.js.map