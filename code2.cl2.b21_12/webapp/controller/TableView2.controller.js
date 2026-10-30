sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("jsontable.code2.cl2.b2111.controller.TableView", {
        onInit() {

            var oData1 = {
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


            var oData2 = {
                Customer : [
                    {
                        Kunnr: "K1011",
                        Name: "Weldorf",
                        Street: "Main street1"
                    },
                    {
                        Kunnr: "K1023",
                        Name: "Frankfurt",
                        Street: "Main street2"
                    },
                    {
                        Kunnr: "K1027",
                        Name: "Newyork",
                        Street: "Main street3"
                    }
                ]
            }

            var oModel1 = new JSONModel(oData1);                    //Import model
            var oModel2 = new JSONModel(oData2);
            this.getView().setModel(oModel1);                       //Set Model -> id가 공백임
            this.getView().setModel(oModel2, "cust");               //Set Model -> cust라는 id를 부여한 모델
            console.log(oModel1);
        }
    });
});