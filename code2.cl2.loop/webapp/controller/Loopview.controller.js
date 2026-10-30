sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.cl2.b21.code2.cl2.loop.controller.Loopview", {
        onInit() {

            //for 구문
            let vSum = 0;

            for(let i = 1; i <= 100; i++) {
                
                // Summary
                vSum = vSum + i;
            }

            console.log("Sum from 1 to 100 = "+vSum);

        }
    });
});