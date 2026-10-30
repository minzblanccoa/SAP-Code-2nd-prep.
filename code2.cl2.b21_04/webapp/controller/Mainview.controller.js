sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.code2.cl2.b2104.controller.Mainview", {
        onInit() {

            var vData = [
                ['Blue', 'Red', 'Green'],
                ['Yellow', 'Orange', 'Gray'],
                ['Black', 'Violet']
            ]

            for ( var color of vData ) {
                for ( var newColor in color ) {
                    console.log(color[newColor]);
                }
            }

            // for( var color of vData ) {
            //     console.log(color);
            // }

            for( color of vData ) {
                for( var index in color ) {
                    console.log(color[index]);
                }
            }

            var vData2 = [
                ['Car', 'Ship', 'Airplane'],
                ['House', 'Building', 'Farm'],
                ['Sun', 'Cloud', 'Rain', 'Snow', 'Wind']
            ]

            for( var arr of vData2 ) {
                for( var arrIndex in arr ) {            //index 번호를 쓰려고 38번째 줄을 쓴 건데 밑에서 사용을 안 했음
                    switch(arr[arrIndex]) {             //헷갈린 부분 (원래 arrIndex만 썼었음)
                        case 'Car':
                            console.log(`Genesis`);
                            break;

                        case 'Building':
                            console.log(`Juho`);
                            break;

                        case 'Rain':
                            console.log(`Umbrella`);
                            break;
                    }
                }
            }

        }
    });
});