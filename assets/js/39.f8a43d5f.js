(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{245:function(e){e.exports=JSON.parse('{"ja-JP":{"h3":{"appearance":"見た目"},"location":"位置：","fontSize":"文字サイズ：","fgColor":"文字色：","fgColorGrad":"グラデーション","fgColor1":"文字色(上)：","fgColor2":"文字色(下)：","alpha":"不透明度=","bgColor":"背景色：","bgOffset":"背景位置：","size":"サイズ：","left":"左","right":"右","top":"上","bottom":"下","display":{"duration":"表示時間：","frame":"(フレーム)","sec":"(秒)"}},"en-US":{"h3":{"appearance":"Appearance"},"location":"Location: ","fontSize":"Font size: ","fgColor":"Font color: ","fgColorGrad":"Gradient","fgColor1":"Font color(Top): ","fgColor2":"Font color(Bottom): ","alpha":"Alpha=","bgColor":"Background color: ","bgOffset":"Background offset: ","size":"Size: ","left":"Left","right":"Right","top":"Top","bottom":"Bottom","display":{"duration":"Display duration: ","frame":"(frame)","sec":"(sec)"}},"fr-FR":{"location":"Position : ","fontSize":"Taille de police : ","fgColor":"Couleur du texte : ","fgColorGrad":"Dégradé","fgColor1":"Couleur du texte (haut) : ","fgColor2":"Couleur du texte (bas) : ","bgColor":"Couleur de fond : ","alpha":"Alpha = "}}')},321:function(e,o,t){},360:function(e,o,t){"use strict";t(321)},400:function(e,o,t){"use strict";t.r(o);var n=t(299),r=t(350),a=t(243),i=t(245);const l=Object(a.e)(n.lskey,n.defaultConfig,null,r.a);var u={props:{version:{type:String}},methods:{updateConfig:l,rgbI2S:a.f,rgbS2I:a.g},data:()=>({...Object(n.getConfig)()}),computed:{l(){return Object(a.d)(i,this.$lang)}},watch:{x:l,y:l,lw:l,height:l,bgRGB:l,bgA:l}},s=(t(360),t(10)),p=Object(s.a)(u,(function(){var e=this,o=e._self._c;return o("div",[o("section",{staticClass:"appearance"},[o("h3",[e._v(e._s(e.l("h3.appearance")))]),e._v(" "),o("div",[o("div",[o("span",[e._v(e._s(e.l("location"))+"(")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.x,expression:"x",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"600"},domProps:{value:e.x},on:{input:function(o){o.target.composing||(e.x=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}}),o("span",[e._v(", ")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.y,expression:"y",modifiers:{number:!0}}],attrs:{type:"number",min:"16",max:"464"},domProps:{value:e.y},on:{input:function(o){o.target.composing||(e.y=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}}),o("span",[e._v(")")])]),e._v(" "),o("div",[o("span",[e._v(e._s(e.l("size")))]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.height,expression:"height",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:e.height},on:{input:function(o){o.target.composing||(e.height=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}})]),e._v(" "),o("div",[o("span",[e._v(e._s(e.l("bgColor")))]),o("input",{attrs:{type:"color"},domProps:{value:e.rgbI2S(e.bgRGB)},on:{change:function(o){e.bgRGB=e.rgbS2I(o.target.value)}}}),e._v(" "),o("span",[e._v(e._s(e.l("alpha")))]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.bgA,expression:"bgA",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"255"},domProps:{value:e.bgA},on:{input:function(o){o.target.composing||(e.bgA=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}}),o("span",[e._v("/255="+e._s((e.bgA/2.55).toFixed(1))+"%")])])])])])}),[],!1,null,"5cdfe97c",null);o.default=p.exports}}]);