sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.func.code2.cl2.b2108.controller.Mainview", {
        onInit() {
        },

        onClick() {
            let vMsg = this.getView().byId("fruit").getValue();
            //input 박스에 타이핑한 값이 vMsg가 되는 것임.

            if( vMsg == "" ) {                                  //만약 아무 것도 타이핑 안 했다면,
                alert("Please input value");                    //경고창을 띄우고,
                this.getView().byId("itext").setText("");       //밑에 text를 "공백"으로 설정.
            } else {
                MessageToast.show(vMsg);
                this.getView().byId("itext").setText(vMsg);
            }

        },

        setWidth() {
            // Get input value
            let vSize = this.getView().byId("size").getValue();

            // Set width to input component
            this.getView().byId("size").setWidth(vSize + "rem");

        }

    });
});