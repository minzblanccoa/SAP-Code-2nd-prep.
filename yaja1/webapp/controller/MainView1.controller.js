sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("yaja1.yaja1.controller.MainView1", {
        onInit() {

            var oData = {
                Player : [
                    {
                        Name : "Ronaldo",
                        Country : "Portugal",
                        Height : "187cm"
                    },
                    {
                        Name : "Messi",
                        Country : "Argentina",
                        Height : "169cm"
                    },
                    {
                        Name : "Otani",
                        Country : "Japan",
                        Height : "187cm"
                    },
                    {
                        Name : "Son",
                        Country : "Korea",
                        Height : "182cm"
                    },
                    {
                        Name : "Bruno",
                        Country : "Portugal",
                        Height : "175cm"
                    }
                ]
            }

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            console.log(oModel);

        }
    });
});