sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2109.controller.View9", {
        onInit() {                              //on Initialize의 약자
                                                //어떠한 행동으로 불러오는 것이 아니라 최초에 자동으로 실행되는 것임.
            // var i = 2;
            // var j = 1;

            // for( i = 2; i <= 9; i++ ) {
            //     for( j = 1; j <= 9; j++ ) {
            //         console.log(`${i} x ${j} = ${i * j}`);
            //     }
            // }

            // var gugu = this.getView().byId("gugudan1").getValue();

            //     for( i = 2; i <= 9; i++ ) {
            //         if( gugu % 2 === 0 ) {
            //             continue;
            //         }
            //         for( j = 1; j <= 9; j++ ) {
            //             console.log(`${i} x ${j} = ${ i * j }`);
            //         }
            //     }

        },

        onClick() {

            var gugu = this.getView().byId("gugudan1").getValue();       //단수 불러오기

            if( gugu == "" ) {
                MessageToast.show("단을 입력하세요!");
            } else {
                for (let index = 1; index < 10; index++) {
                    console.log(gugu*index);
                }
            }



        },

        forClick() {

            var i = 2;
            var j = 1;

            for( i = 2; i <= 9; i++ ) {
                for( j = 1; j <= 9; j++ ) {
                    console.log(`${i} x ${j} = ${i * j}`);
                }
            }

        },

        whileClick() {

            var k = 2;
            var l = 1;

            while(k <= 9) {
                while( l <= 9) {
                    console.log(`${k} x ${l} = ${k * l}`)
                    l++;
                }
                k++;
                l = 1;
            }

        },

        mixClick() {

            var m = 2;
            var n = 1;

            for(m = 2; m <= 9; m++) {
                while(n <= 9) {
                    console.log(`${m} x ${n} = ${m * n}`);
                    n++;
                }
                n = 1;
            }

        },

        onCalcul() {

        var gugud = this.getView().byId("gugudan2").getValue();

            for( o = 2; o <= 9; o++ ) {
                if(o===gugud) {
                    continue;
                }
                for( p = 1; p <= 9; p++ ) {
                    console.log(`${o} x ${p} = ${o * p}`);
                }
            }

        },

        onCliCal() {

        /* % 2, continue 방식 */
        for( var q = 2; q <= 9; q++ ) {
            if( q % 2 === 0 ) {
                continue;
            }
                for( var r = 1; r <= 9; r++ ) {
                    console.log(`${q} x ${r} = ${q * r}`);
                }
        }
            /* q += 2 방식 */
            // for( q = 3; q <= 9; q += 2 ) {
            //     for( r = 1; r <= 9; r++ ) {
            //         console.log(`${q} x ${r} = ${q * r}`);
            //     }
            // }
        },

        onSum() {

            var vData = [ 10, 20, 30, 40, 50 ];
            var vSum = 0;

            for( var Sssum of vData ) {                         //for-in보다는 for-of로 하는 것이 바람직
                vSum += Sssum;
            }

            this.getView().byId("result").setText(vSum);        //화면에 띄우는 것, 굳이 변수 선언을 할 필요가 없음
            
            console.log(vSum);                                  //콘솔창에 띄우는 것

        },

        onShowAll() {

            var vArray = [
                {
                    Team : "기아 타이거즈",
                    Area : "광주"
                },
                {
                    Team : "삼성 라이온즈",
                    Area : "대구"
                },
                {
                    Team : "NC 다이노스",
                    Area : "창원"
                },
                {
                    Team : "두산 베어스",
                    Area : "서울"
                },
                {
                    Team : "LG 트윈스",
                    Area : "서울"
                }
            ]

            for( var Bindex of vArray ) {
                for ( var key in Bindex ) {
                    console.log(Bindex[key]);
                }
            }

        }

    });
});