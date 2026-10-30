sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2105.controller.View5", {
        onInit() {

            var vData = [
                ["A", "B", "C", "D"],
                ["E", "F", "G", "H"]
            ];

            /* FOR IN & IN : Index of array */
            for( var row in vData ) {                           //vData의 '행'의 index 번호를 가져옴. [0,과 1] arr=0 abcd '한 바퀴', arr=1 efgh '두 바퀴', (만약 여기서 console.log 찍으면 0과 1이 나옴)
                for( var col in vData[row] ) {                  //vData[row]의 '열'의 index 번호를 가져옴. [0, 1, 2, 3] 따라서 0과 1을 한 바퀴만 돌게 된다.
                    console.log(vData[row][col]);               //vData의 [행][열]
                }                                               //for-in vData는 2차원
            }

            /* FOR OF & OF : Data of array */
            for( var rowData of vData ) {                       //vData의 '행'의 전체 데이터를 읽음.
                for(var colData of rowData )                    //읽어들인 행의 데이터를 순회하며 읽음.
                    console.log(colData);                       //값이 바로 변수 colData에 들어갔기 때문에 데이터만 바로 꺼낼 수 있음.
            }

            /*  */

        }
    });
});