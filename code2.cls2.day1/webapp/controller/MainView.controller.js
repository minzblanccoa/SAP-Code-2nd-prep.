sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cls221.code2.cls2.day1.controller.MainView", {
        onInit() {
            
            // 변수 선언 및 초기값 세팅
            var vNum1 = 70;
            var vLecture = "sports";
            var vNum1, vLecture, vDrunk, vWeek, vKind, vGrade, vFruits;
            vNum1 = 70;
            vLecture = "sports";

            vDrunk = "Y";
            vWeek = 3;
            vKind = "Beer"

            /* Normal If block.
                No Nested!!! */

            if (vNum1 >= 90) {
                vGrade = 'A';
                console.log("Grade = 'A'");
            } else if (vNum1 >= 80) {
                vGrade = 'B';
                console.log("Grade = 'B'");
            } else if (vNum1 >= 70) {
                vGrade = 'C';
                console.log("Grade = 'C'");
            } else if (vNum1 >= 60) {
                vGrade = 'D';
                console.log("Grade = 'D'");
            } else {
                vGrade = 'F';
                console.log("Grade = 'F'");
            }

            // Nested If Block (중첩된 IF문)
            vDrunk = "Y";
            vWeek = 3;
            vKind = "Beer"

            if(vDrunk == "Y") {                 // Are you drunk?
                if(vWeek <= 3) {
                    if(vKind == "Beer" || vKind == "Chicken") {
                        console.log("당신은 통풍입니다!");
                    } else if(vKind == "Soju") {
                        console.log("절주하세요");
                    }
                }
                
            } else {
                console.log("You are healthy");
            }
            
            //Verify grade!!!
            switch (vGrade) {
                case 'A':
                    console.log("우등생");
                    break;

                case 'B':
                    console.log("공부 좀 하네요!");
                    break;

                case 'C':
                    console.log("노력이 필요함!!");
                    break;

                case 'D':
                    console.log("그냥 재수강 해!");
                    break;
            
                default:
                    console.log("넌 무조건 재수강!!!");
                    break;
            }

            vFruits = 'C'
            switch (vFruits) {
                case 'A':
                    console.log("Apple");
                    break;
                
                case 'B':
                    console.log("Banana");
                    break;
                
                case 'C':
                    console.log("Carrot");
                    break;
                
                case 'M':
                    console.log("Melon");
                    break;

                case 'P':
                    console.log("Peach");
                    break;
            
                default:
                    console.log("Please input fruits")
                    break;
            }
        }
    });


});