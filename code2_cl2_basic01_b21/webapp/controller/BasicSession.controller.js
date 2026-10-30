sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code2cl2basic01b21.code2cl2basic01b21.controller.BasicSession", {
        onInit() {
            let vNumber = 10;

            if( vNumber === 10 ) {
                console.log("Correct");
            } else {
                console.log("Incorrect");
            }
        },

        ifCheck01() {

            // let vNumber = 0;

            // let oView = null;

            // oView = this.getView();                                      /* 현재 UI5 앱의 View를 얻어옴. */
            // oInput = oView.byId("text1");                                /* View로 가서 Input에 있는 text1이라는 id를 가져옴. */

            // vNumber = oInput.getValue();                                 /* Input 객체에 입력된 값을 가지고 옴. */

            let vNumber = this.getView().byId("text1").getValue();          /* 위 과정을 함축한 게 이것임. */

            if(vNumber > 10) {                                              /* 너무 별로임 다시 짜야함 */
                MessageToast.show("Bigger than 10");
            } else if(vNumber === '10') {
                MessageToast.show("Equal to 10");
            } else if (vNumber < 10) {
                MessageToast.show("Smaller than 10");
            } else 
        },

        onClick() {
            
        let vId = this.getView().byId("identi").getValue();
            
            if(vId == "minzblanccoa") {
                MessageToast.show("Login Complete");
            } else if (vId === "") {
                MessageToast.show("Please enter your ID");
            } else {
                MessageToast.show("Incorrect ID");
            }
            
        }
    });
});