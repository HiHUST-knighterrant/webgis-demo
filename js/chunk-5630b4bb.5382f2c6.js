(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5630b4bb"],{"38d5":function(t,n,e){"use strict";e("9ba3")},"9ba3":function(t,n,e){},c83a:function(t,n,e){"use strict";e.r(n);var o=e("7a23"),a=function(t){return Object(o["pushScopeId"])("data-v-4f7c4c91"),t=t(),Object(o["popScopeId"])(),t},i={class:"container"},r=a((function(){return Object(o["createElementVNode"])("canvas",{id:"c"},null,-1)})),c=[r];function d(t,n,e,a,r,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,c)}e("159b");var s=e("5a89"),u=e("8571"),h={mounted:function(){this.init()},methods:{init:function(){var t=new s["C"];t.fog=new s["k"](1118495,.002);var n=document.querySelector("#c"),e=new s["M"]({canvas:n});e.setClearColor(t.fog.color),e.setSize(n.innerWidth,n.innerHeight),e.setPixelRatio(window.devicePixelRatio);var o=new s["w"](60,n.clientWidth/n.clientHeight,1,1e3);o.position.z=1,o.rotation.x=1.16,o.rotation.y=-.12,o.rotation.z=.27;var a=new s["a"](5592405);t.add(a);var i=new s["f"](16772829);i.position.set(0,0,1),t.add(i);var r=new s["y"](16777215,30,500,1.7);r.position.set(200,300,100),t.add(r);for(var c=new s["d"],d=new Array,h=15e3,l=0;l<h;l++){var w=new s["L"](400*Math.random()-200,500*Math.random()-250,400*Math.random()-200);w.velocity=0,d.push(w)}c.setFromPoints(d);var p=new s["A"]({color:11184810,size:.1,transparent:!0}),f=new s["z"](c,p);t.add(f);var m=[],v=new s["G"];function y(t){var n=t.domElement,e=n.clientWidth,o=n.clientHeight,a=n.width!==e||n.height!==o;return a&&t.setSize(e,o,!1),a}function b(){if(y(e)){var n=e.domElement;o.aspect=n.clientWidth/n.clientHeight,o.updateProjectionMatrix()}m.forEach((function(t){t.rotation.z-=.002})),d.forEach((function(t){t.velocity-=.1+.1*Math.random(),t.y+=t.velocity,t.y<-200&&(t.y=200,t.velocity=0)})),c.setFromPoints(d),f.rotation.y+=.002,(Math.random()>.93||r.power>100)&&(r.power<100&&r.position.set(400*Math.random(),300+200*Math.random(),100),r.power=50+500*Math.random()),e.render(t,o),requestAnimationFrame(b)}v.load(u,(function(n){for(var e=new s["x"](500,500),o=new s["t"]({map:n,transparent:!0}),a=0;a<25;a++){var i=new s["r"](e,o);i.position.set(800*Math.random()-400,500,500*Math.random()-450),i.rotation.x=1.16,i.rotation.y=-.12,i.rotation.z=360*Math.random(),i.material.opacity=.6,m.push(i),t.add(i)}b()}),(function(){}),(function(t){console.error(t)}))}}},l=(e("38d5"),e("d959")),w=e.n(l);const p=w()(h,[["render",d],["__scopeId","data-v-4f7c4c91"]]);n["default"]=p}}]);