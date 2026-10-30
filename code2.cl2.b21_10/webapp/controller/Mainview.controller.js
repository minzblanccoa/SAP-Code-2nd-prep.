sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code2.cl2.b21.code2.cl2.b2110.controller.Mainview", {
        onInit() {

            //Create JSON Model data
            var vOData = {                              //json model은 {중괄호}로 쌓여있음
                FoodSet : [                             //안에 데이터셋 설정[대괄호로]
                    {                                   //Grid Table'로 표시 가능
                        Food : "Noodle",
                        Area : "Guro"
                    },
                    {
                        Food : "BlackBean noodle",
                        Area : "Jongro"
                    },
                    {
                        Food : "Steak",
                        Area : "Gangnam"
                    }
                ],

                Menuset : [
                    {
                        Kind : "Korean",
                        Food : "Kimchi"
                    },
                    {
                        Kind : "Western",
                        Food : "Steak"
                    }
                ]
            };

            // Set model data
            var oModel = new JSONModel(vOData);
            this.getView().setModel(oModel);
            console.log(oModel.oData.FoodSet[1].Food);

            var vFood = oModel.oData.FoodSet[1].Food;
            this.getView().byId("Zzajang").setText(vFood);

            var vMenu = oModel.oData.Menuset[0].Kind;
            this.getView().byId("Menu").setText(vMenu);

        },

        onTeam() {

            var  vOData = {
                TeamSet : [
                    {
                        Team : "Doosan",
                        Stadium : "Jamsil"
                    },
                    {
                        Team : "Kia",
                        Stadium : "Champions Field"
                    },
                    {
                        Team : "Samsung",
                        Stadium : "Lions Park"
                    }
                ]
            }

            var oModel = new JSONModel(vOData);                 //함수를 새로 만들어서 oModel 변수를 다시 선언해 주어야 함.
            this.getView().setModel(oModel);
            //console.log(oModel);                              //데이터 경로 확인하기
            console.log(oModel.oData.TeamSet[1].Stadium);


            var oModel = this.getView().getModel();
            console.log(oModel);

        }


    });
});