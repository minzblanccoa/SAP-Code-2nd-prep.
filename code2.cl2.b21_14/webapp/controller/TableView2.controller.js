sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2114.controller.TableView2", {
        onInit() {                                                                      //초기에 preview application 실행 시 view로 띄우는 작업

            let oModel = new JSONModel("/json/air.json");               //Import json file

            this.getView().setModel(oModel);                            //Model binding

            /* console.log(oModel); */


            let oModel2 = new JSONModel("/json/team.json");

            this.getView().setModel(oModel2, "hitRate");

            console.log(oModel, oModel2);

        }
    });
});