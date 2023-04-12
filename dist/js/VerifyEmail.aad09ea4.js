"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[3478],{2921:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(6252),u=n(3577),l=["type","value","maxlength"];function a(e,t,n,a,i,o){return(0,r.wg)(),(0,r.iD)("input",{class:(0,u.C_)(["lg:text-sm text-xs",n.theme]),type:n.type,value:n.value,maxlength:n.maxlength,onInput:t[0]||(t[0]=function(e){return a.handleInput(e.target.value)})},null,42,l)}var i={name:"PsInput",props:{value:String,type:{type:String,default:"text"},theme:{type:String,default:"ring-primary-200 dark:ring-primaryDark-grey focus:outline-none focus:ring py-2 ps-4 form-input bg-primary-000 dark:bg-primaryDark-black text-secondary-500 dark:text-secondaryDark-white rounded-xl lg:rounded-2xl"},maxlength:{type:Number,default:99999999},onInput:Function},setup:function(e,t){var n=t.emit;function r(t){n("update:value",t),null!=e.onInput&&e.onInput(t)}return{handleInput:r}}},o=n(8118);const s=(0,o.Z)(i,[["render",a]]);var c=s},9639:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(6252),u=n(3577),l=n(9963),a={class:"sm:mt-32 lg:mt-36 mt-28 h-screen flex flex-col"},i={class:"w-96 flex flex-col mx-auto m-auto rounded-lg"},o={class:"flex items-center justify-center mb-4"},s={class:"flex items-center justify-center mb-4"};function c(e,t,n,c,d,p){var f=(0,r.up)("ps-label-title"),m=(0,r.up)("ps-label"),v=(0,r.up)("ps-input"),_=(0,r.up)("ps-button"),y=(0,r.up)("ps-route-link"),g=(0,r.up)("ps-error-dialog");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[(0,r._)("div",i,[(0,r.Wm)(f,{class:"mt-8 mx-auto text-2xl"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(e.$t("verify_email__verify_your_email")),1)]})),_:1}),(0,r.Wm)(m,{class:"mt-4 mx-8"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(e.$t("verify__verification_code"))+" : ",1)]})),_:1}),(0,r.Wm)(v,{class:"mt-2 mx-8",type:"text",placeholder:e.$t("verify__verification_code"),onKeyup:(0,l.D2)(c.clicked,["enter"]),value:c.code,"onUpdate:value":t[0]||(t[0]=function(e){return c.code=e})},null,8,["placeholder","onKeyup","value"]),(0,r._)("div",o,[c.userProvider.loading.value?((0,r.wg)(),(0,r.j4)(_,{key:0,class:"mt-6 mx-8",onClick:c.clicked,disabled:!0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(e.$t("verify__loading")),1)]})),_:1},8,["onClick"])):((0,r.wg)(),(0,r.j4)(_,{key:1,class:"mt-6 mx-8",onClick:c.clicked,disabled:!1},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(e.$t("verify__submit")),1)]})),_:1},8,["onClick"]))]),(0,r._)("div",s,[(0,r.Wm)(y,{class:"mx-8",to:{name:"login"}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(e.$t("verify__back_to_login")),1)]})),_:1})])])]),(0,r.Wm)(g,{ref:"ps_error_dialog"},null,512)],64)}var d=n(655),p=n(2262),f=n(3824),m=n(4687),v=n(1340),_=n(3013),y=n(2921),g=n(2776),k=n(5429),h=n(9399),x=n(7259),b=n(3300),w=n(2567),I=n(679),Z=n(7640),U={name:"VerifyEmailView",components:{PsLabel:m.Z,PsLabelTitle:v.Z,PsButton:_.Z,PsInput:y.Z,PsRouteLink:g.Z,PsErrorDialog:k.Z},setup:function(){var e=(0,x.ie)(),t=new b.Z,n=h.$.psValueHolder,r=n.getVerifyUserId(),u=(0,p.iH)();null!=r&&""!=r&&r!=Z.Z.NO_LOGIN_USER||f.Z.push({name:"login"});var l=(0,p.iH)();function a(){return(0,d.mG)(this,void 0,void 0,(function(){var n;return(0,d.Jh)(this,(function(a){switch(a.label){case 0:return t.userId=r,t.code=l.value,[4,e.postUserEmailVerify(t)];case 1:return n=a.sent(),n.status==w.Z.SUCCESS?(h.$.psValueHolder.login(n.data.userId,n.data.userName,n.data.deviceToken),f.Z.push({name:"dashboard"})):u.value.openModal("",I.a.global.t("verify_email__incorrect_code")),[2]}}))}))}return{userProvider:e,clicked:a,code:l,ps_error_dialog:u}}},P=n(8118);const C=(0,P.Z)(U,[["render",c]]);var $=C},3300:function(e,t){var n=function(){function e(){this.userId="",this.code=""}return e.prototype.UserEmailVerifyParameterHolder=function(){this.userId="",this.code=""},e.prototype.toMap=function(){var e={};return e["user_id"]=this.userId,e["code"]=this.code,e},e}();t["Z"]=n}}]);
//# sourceMappingURL=VerifyEmail.aad09ea4.js.map