(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ef33008"],{"2c93":function(e,a,t){"use strict";t("f271")},"8cd5":function(e,a,t){"use strict";t.r(a);var r=t("7a23"),n={id:"cesiumContainer"};function i(e,a,t,i,o,m){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n)}t("e877");var o=t("ec35"),m={mounted:function(){this.init()},methods:{init:function(){var e=new o["E"]("cesiumContainer");o["m"].supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var a=e.scene,t=new o["q"]({geometry:o["F"].fromConstantHeights({positions:o["f"].fromDegreesArray([-115,44,-90,44]),maximumHeight:2e5,minimumHeight:1e5,vertexFormat:o["C"].POSITION_AND_ST}),attributes:{color:o["i"].fromColor(o["h"].RED)}}),r=a.primitives.add(new o["z"]({geometryInstances:t,appearance:new o["t"]({material:new o["s"]({fabric:{uniforms:{color:new o["h"](1,0,0),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})})),n=new o["q"]({geometry:o["F"].fromConstantHeights({positions:o["f"].fromDegreesArray([-107,43,-97,43,-97,40,-107,40,-107,43]),maximumHeight:1e5,vertexFormat:o["C"].POSITION_AND_ST}),attributes:{color:o["i"].fromColor(o["h"].GREEN)}}),i=a.primitives.add(new o["z"]({geometryInstances:n,appearance:new o["t"]({material:new o["s"]({fabric:{uniforms:{color:new o["h"](0,1,0),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})})),m=o["f"].fromDegreesArray([-115,50,-112.5,50,-110,50,-107.5,50,-105,50,-102.5,50,-100,50,-97.5,50,-95,50,-92.5,50,-90,50]),s=[1e5,2e5,1e5,2e5,1e5,2e5,1e5,2e5,1e5,2e5,1e5],c=[0,1e5,0,1e5,0,1e5,0,1e5,0,1e5,0],f=new o["q"]({geometry:new o["F"]({positions:m,maximumHeights:s,minimumHeights:c,vertexFormat:o["C"].POSITION_AND_ST}),attributes:{color:o["i"].fromColor(o["h"].BLUE)}}),l=a.primitives.add(new o["z"]({geometryInstances:f,appearance:new o["t"]({material:new o["s"]({fabric:{uniforms:{color:new o["h"](0,0,1),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})}));e.scene.preUpdate.addEventListener((function(){var e=r.appearance.material.uniforms.offset;e+=.01,e>1&&(e=0),r.appearance.material.uniforms.offset=e;var a=i.appearance.material.uniforms.offset;a+=.01,a>1&&(a=0),i.appearance.material.uniforms.offset=a;var t=l.appearance.material.uniforms.offset;t+=.01,t>1&&(t=0),l.appearance.material.uniforms.offset=t}))}}},s=(t("2c93"),t("6b0d")),c=t.n(s);const f=c()(m,[["render",i],["__scopeId","data-v-11701cb7"]]);a["default"]=f},f271:function(e,a,t){}}]);