sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b21.01.controller.View1", {
        onInit() {

            var i = 0;
            var j = 0;

            for( i = 1; i < 10; i++ ) {
                for( j = 1; j < 10; j++ ) {
                    console.log(`${i} x ${j} =`, i * j);
                }
            }

            //변수 재설정
            var i = 1;
            var j = 1;

            while ( i < 10 ) {
                while ( j < 10 ) {
                    console.log(`${i} x ${j} =`, i * j);
                    j++;
                }
                i++;
                j = 1;
            }

            //변수 재설정
            var i = 0;
            var j = 1;

            for( i = 1; i < 10; i++ ) {
                while ( j < 10 ) {
                    console.log(`${i} x ${j} =`, i * j);
                    j++;
                }
                j = 1;
            }


            /* 객체 순환 (Object Looping) */

            let vData = {
                Name: "조민제",
                Age: "27",
                Height: "179",
                Mbti: "ISFJ",
                "Phone num": "010.9298.3129"
            }

            for( let key in vData ) {
                console.log(`His ${key} is ${vData[key]}`)
            }
            
            /* 배열식 */

            let NewvData = Object.keys(vData);

            for ( i = 0; i < NewvData.length; i++ ) {
                var NowvData = NewvData[i];
                console.log(`His ${NowvData} is ${vData[NowvData]}`);
            }

        
            let oData = {
                Team: "LG",
                Area: "Seoul",
                Kind: "Baseball",
                Rank: "4"
            }

            for ( let key in oData ) {
                // console.log(`Key: ${key}`);
                // console.log(`Value: ${oData[key]}`);
                // if(key === "Kind") {
                //     console.log(`${key} : ${oData[key]}`);
                // }

                switch ( key ) {
                    case 'Kind':
                        console.log(`Kind's Value = ${oData[key]}`);
                        break;
                }

            }


            // 배열(Array)을 순환하는 FOR - IN 구문
            let aData = [ 'Apple', 'Banana', 'Carrot', 'Melon', 'Orange' ];
            
            for ( var vIndex in aData ) {
                 console.log(`${vIndex} : ${aData[vIndex]}`);
                 //console.log("aData[] = "+aData);
            }

            let aData2 =
            [
                [ 'Mercedes', 'Hyundai', 'Tesla'],
                [ 'Apple', 'Samsung', 'Hwawei'],
                [ 'nVidia', 'Micron', 'SK Hynix']
            ]

            // for ( var vIndex in aData2 ) {
            //     console.log(`vIndex = ` + vIndex);
            //     console.log(`aData[] = ` + aData2[vIndex]);
            //     console.log(aData2[vIndex][1]);
            // }

            for( var vIndex in aData2 ) {
                switch(vIndex) {
                    case "0":
                        console.log(aData2[vIndex][2]);
                        break;

                    case "1":
                        console.log(aData2[vIndex][1]);
                        break;

                    case "2":
                        console.log(aData2[vIndex][0]);
                        break;
                }
            }

        }
    });
});