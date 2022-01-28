(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cf900f3"],{"19f4":function(e,n,a){"use strict";a("4e5e")},"4e5e":function(e,n,a){},d2e8:function(e,n,a){"use strict";a.r(n);var t=a("7a23"),r={id:"cesiumContainer"};function i(e,n,a,i,o,l){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",r)}a("e877");var o=a("ec35"),l={mounted:function(){this.init()},methods:{init:function(){var e=new o["X"]("cesiumContainer");o["u"].supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var n=e.scene,a=new o["k"]({center:o["h"].fromDegrees(114,33),radius:250,vertexFormat:o["V"].POSITION_AND_ST}),t=new o["z"]({geometry:a}),r=n.primitives.add(new o["P"]({geometryInstances:t,appearance:new o["G"]({material:new o["F"]({translucent:!1,fabric:{uniforms:{color:new o["l"](0,1,0),rotate:90,percent:.1},source:"\n                  float get_angle(vec2 base,vec2 dir)\n                  { \n                    base = normalize(base);\n                    dir = normalize(dir);\n                    float angle = degrees(acos(abs(dot(dir,base))));\n                    if (dir.s > 0.0 && dir.t > 0.0){angle = angle;}\n                    else if (dir.s < 0.0 && dir.t > 0.0){angle = 180.0 - angle;}\n                    else if (dir.s < 0.0 && dir.t < 0.0){angle = 180.0 + angle;}\n                    else{angle = 360.0 - angle;}\n                    return angle;\n                  }\n\n                  uniform vec4 color;\n                  uniform float rotate;\n                  uniform float percent;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  material.diffuse = czm_gammaCorrect(color.rgb); \n\n                  vec2 st = materialInput.st;\n                  vec2 base = vec2(0.5,0.0);\n                  vec2 dir = st-vec2(0.5,0.5);\n                  float len = length(dir);\n                  if(len > 0.49){\n                    material.alpha = (len - 0.49)/0.01;\n                  }\n                  else{\n                    float angle = get_angle(base,dir);\n                    material.alpha = (mod(angle+rotate,360.0)-(1.0-percent)*360.0)/(360.0*percent);\n                  } \n                  material.emission=vec3(0.5);\n                  return material;\n                }"}})})}));e.camera.flyToBoundingSphere(o["k"].createGeometry(a).boundingSphere),e.scene.preUpdate.addEventListener((function(){var e=r.appearance.material.uniforms.rotate;e-=1,r.appearance.material.uniforms.rotate=e}))}}},c=(a("19f4"),a("6b0d")),s=a.n(c);const m=s()(l,[["render",i],["__scopeId","data-v-316d672b"]]);n["default"]=m}}]);