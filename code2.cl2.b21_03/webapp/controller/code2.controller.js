sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b21.b213.controller.code2", {
        onInit() {

            var vData = {   Lang: "ABAP",
                            Area: "Guro",
                            Time: "9H",
                            Lunch: "Food",
                            Study: "Funny"
            }

            for( var key in vData ) {
                console.log(`key: ${key}, value: ${vData[key]}`);
            }


            /* for-in */
            var aData = [ 10, 20, 30, 40, 50 ];     
            var vSum = 0;                           //합계를 구할 때는 합계를 모아둘 박스를 만들어두어야 함.

            for( var i in aData ) {                 //i는 aData arr에 있는 요소들을 모두 훑고 다님.
                vSum += aData[i];                   //vSum = vSum + aData[i];
            }

            console.log( vSum );                    //console.log를 밖에 찍으면 합계만 출력되고 for문 안에 찍으면 과정이 모두 출력됨.

            /* for-of */
            var cData = [ 100, 200, 300, 400, 500 ];
            var vSum2 = 0;

            for( var numArray of cData ) {          //numArray는 cData의 값을 '직접' 가져온다.
                vSum2 += numArray;                  //따라서 vSum2을 구할 때는 그냥 vSum2 + numArray; 하면 됨.
            }

            console.log( vSum2 );


            /* 2차원 배열 for-in */
            var aData2 = [
                ['First', 'Second', 'Third'],
                ['One', 'Two', 'Three']
            ]

            for( var newIndex2 in aData2 ) {
                console.log(aData2[newIndex2]);
            }

            for( var newIndex in aData2 ) {
                console.log(aData2[newIndex][2]);
            }

            /* 2차원 배열 for-of */
            var aData4 = [
                ['L.Messi', 'L.Suarez', 'Neymar.jr',],
                ['G.Bale', 'K.Benzema', 'C.Ronaldo'],
                ['Xavi', 'S.Busquets', 'A.Iniesta'],
                ['T.Kroos', 'Casemiro', 'L.Modric']
            ]


            /* Case A */

            for( var El_Clasico of aData4 ) {
                console.log( El_Clasico );                      //행 전체의 값이 모두 출력됨.
            }


            /* Case B */

            for( var El_Clasico of aData4 ) {
                console.log( El_Clasico[1] );
            }


            /* Case C */

            for( var El_Clasico of aData4 ) {                           //aData4의 데이터값을 El_Clasico에 담아줌. (예: 메시, 수아레스, 네이마르)
                for( var Starwars in El_Clasico ) {                     //Starwars 변수 선언하고 El_Clasico의 index값이 나옴. (예: 0, 1, 2)
                    console.log( El_Clasico[Starwars] );                //El_Clasico의 데이터 값을 Starwars의 인덱스 번호대로 출력.
                }                                                       //예: 
            }


            /* Case D */

            for( var El_Clasico of aData4 ) {                                               //aData4에서 행단위로 El_Clasico에 보내줌.
                for ( var football = 0; football < El_Clasico.length; football++ ) {        //fb는 0이고 El_Clasico의 길이보다 작을 때까지 반복. ※length 설정 시, aData4의 데이터가 El_Clasico에 있으므로 El_Clasico.length로 설정해야 함.
                    console.log( El_Clasico[football] );                                    //기본 for문: 직접 조건과 증가량을 정해 숫자 인덱스를 만듦.
                }                                                                           //즉, 시작 위치는 football = 0번 인덱스로 설정.
            }


            


        }
    });
});