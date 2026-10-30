sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2113.controller.MainView2", {
        onInit() {

            var oData1 = {
                VehicleSet: [
                    {
                        Car : "Genesis",
                        Oil : "Gasoline",
                        Comp : "Hyundai"
                    },
                    {
                        Car : "Ionuq5",
                        Oil : "Gasoline",
                        Comp : "Hyundai"
                    },
                    {
                        Car : "Santafe",
                        Oil : "Diesel",
                        Comp : "Hyundai"
                    },
                    {
                        Car : "EV6",
                        Oil : "Electronic",
                        Comp : "KIA"
                    },
                    {
                        Car : "Soul",
                        Oil : "Gasoline",
                        Comp : "KIA"
                    }
                ]
            }

            var oModel1 = new JSONModel(oData1);
            this.getView().setModel(oModel1);  

        },

        onClick() {

            var horizon = this.getView().byId("h1").getValue();
            var vertical = this.getView().byId("v1").getValue();
         
            var area = horizon*vertical;

            this.getView().byId("area").setValue(area);

        },

        onResult() {

            var fr = this.getView().byId("fruit").getValue();

            switch (fr) {

                case "A":
                   this.getView().byId("fResult").setText("Apple");
                   break;

                case "B":
                    this.getView().byId("fResult").setText("Banana");
                    break;

                case "C":
                    this.getView().byId("fResult").setText("Choco");
                    break;

                case "D":
                    this.getView().byId("fResult").setText("Delicious");
                    break;

                default:
                    MessageToast.show("올바른 값을 입력하세요!");
                    this.getView().byId("fResult").setText("");
                    
            }
        },

        onDiscount() {

            var won = parseInt(this.getView().byId("won").getValue());
            var disc = parseInt(this.getView().byId("disc").getValue());

            var dc = disc/100;
            var dcpc = won - (won*dc);

            this.getView().byId("result").setValue(dcpc);

        }
    });
});