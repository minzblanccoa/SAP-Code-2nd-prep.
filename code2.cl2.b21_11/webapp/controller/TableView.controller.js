sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("jsontable.code2.cl2.b2111.controller.TableView", {
        onInit() {

            var oData = {
                AirlineSet : [
                    {
                        Carrid : "AA",
                        Name : "America Airline",
                        Country : "America"
                    },
                    {
                        Carrid : "LH",
                        Name : "Luft Hanza",
                        Country : "Germany"
                    },
                    {
                        Carrid : "DL",
                        Name : "Delta Airline",
                        Country : "America"
                    },
                    {
                        Carrid : "KA",
                        Name : "Korean Air",
                        Country : "Korea"
                    },
                    {
                        Carrid : "AS",
                        Name : "Asiana Airline",
                        Country : "Korea"
                    }
                ]
            }

            var oModel = new JSONModel(oData);  //Import Model
            this.getView().setModel(oModel);    //Set Model
            console.log(oModel);

        }
    });
});