sap.ui.define([
    "sap/ui/core/mvc/Controller",                                       //라이브러리: 이미 상속 받은 것. 추가 상속은 ',' 후에 순차적으로 작성.
    "sap/m/MessageToast",                                               //라이브러리: 추가 상속 -> 상속 받는 순서는 일치해야 한다. 순서 틀릴 시 오류 발생.
    "sap/ui/model/json/JSONModel"                                       //라이브러리: 추가 상속 -> 이하 동일. (대소문자 유의)
], (Controller, MessageToast, JSONModel) => {                           //위 상속순서에 맞게 매개변수 또한 순서 설정.
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2107.controller.WorkView", {
        onInit() {                                                      //oninit은 화면을 띄우기 위한 준비 공간, 모델 데이터를 화면에 띄우기 위해서 메모리에 불러오는 것

            //onInit's role: Create JSON Model, Setting Data 
            const oData = {
                
                desc : {
                    val : "This is value",
                    dec : "This is description"
                },

                league : {
                    team : "Doosan",
                    area : "Seoul"
                }

            };
            
            //Create object -> 아래는 공식이니까 암기해도 됨.
            var oModel = new JSONModel(oData);                          //JSONModel: 데이터 상자를 만드는 설계도, oData: 데이터 상자에 들어갈 내용, new: 데이터 상자를 실제로 메모리에 만들어내는 연산자
            this.getView().setModel(oModel);                            //this 연산자: 나 자신을 가르키는 연산자
                                                                        //컨트롤러가 관리하는 View는 딱 하나뿐이라 대상을 선택할 필요가 없음. 그래서 전달할 값(매개변수) 없이 괄호를 비워둔 채 호출.

            /* 길게 표현하면 */
            //this.getView().setModel(new JSONModel(oData));
        
        },

        onShowHello() {
            //alert("Hello world");
            MessageToast.show("Hello world");
        },

        setWord() {
            //Set text to input component!!!
            this.byId("Word").setValue("Fiori UI5");
            //this.byId("hello").setText("Fiori UI5");                    //byId: 특정 컴포넌트 불러올 때 사용(byId에는 'getView()'가 이미 내장되어 있어서 따로 안 써줘도 됨.)
        }
        //onInit은 '앱이 시작될 때 해야 할 명령어 모음집'일 뿐이며,
        //onShowHello나 setWord는 컨트롤러가 평소에 소지하고 있어야 하는 '독립된 도구'들이기 때문에
        //반드시 같은 레벨에 위치시켜야 합니다.

    });
});