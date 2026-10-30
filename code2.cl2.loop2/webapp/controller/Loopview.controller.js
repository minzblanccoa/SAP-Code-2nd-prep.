sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.b21.code2.cl2.loop.controller.Loopview", {
        onInit() {

            //for 구문
            let vSum = 0;

            for(var i = 1; i <= 100; i++) {         //여기서 for가 i라는 변수를 선언했기 때문에, 이후에도 별도로 선언하지 않아도 i를 계속해서 사용할 수 있음.
                
                // Summary
                vSum = vSum + i;
            }

            console.log("Sum from 1 to 100 = "+vSum);

                                                    //이미 사용된 변수를 clear 해주기. (위에서 이미 사용됐음)
            vSum = 0;
            i = 1;                                  //여기까지 초기문 설정

            while ( i <= 100 ) {                    //조건(한계치) -> 선조건확인 후실행
                vSum = vSum + i;                    //코드
                i++;
            }

            console.log("Sum by while = "+vSum);
            
            vSum = 0;
            i = 0;

            do {
                vSum = vSum + i;
                i++;
            }while( i <= 100 )

                console.log("Sum by Do While = " + vSum);

            i = 0;
            var j = 0;

            for ( i = 1; i < 10; i++ ) {
                for ( j = 1; j < 10; j++ ) {
                    console.log(`${i} x ${j} =`, i * j);
                }
            }


            i = 0;
            j = 0;

            for ( i = 1; i < 10; )


        }
    });
});