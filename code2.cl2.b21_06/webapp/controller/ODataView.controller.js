sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.odata21.code2.cl2.2106.controller.ODataView", {
        onInit() {

            let vOData = [
                {
                    Team : "LG",
                    Area : "Seoul",
                    Kind : "Baseball"
                },
                {
                    Team : "Lotte",
                    Area : "Busan",
                    Kind : "Baseball"
                },
                {
                    Team : "Samsung",
                    Area : "Suwon",
                    Kind : "Soccer"
                }
            ];

            for(var i = 0; i < vOData.length; i++) {
                console.log(i);
            }


            for( var arrSports in vOData ) {
                console.log(vOData[arrSports]);
            }


            /* Extract by FOR-IN */
            for( var sports in vOData ) {
                console.log(`Team: ${vOData[sports].Team}`);
                console.log(`Area: ${vOData[sports].Area}`);
                console.log(`Kind: ${vOData[sports].Kind}`);
            }


            /* Extract by FOR-OF */
            for( var athletics of vOData ) {
                console.log(`Team: ${athletics.Team}`);
                console.log(`Area: ${athletics.Area}`);
                console.log(`Kind: ${athletics.Kind}`);
            }

            var vComp = [
                {
                    Comp : "Samsung",
                    Major : "Electronic",
                    Product: "Phone"
                },
                {
                    Comp : "LG",
                    Major : "Electronic",
                    Product : "Phone"
                },
                {
                    Comp : "Hyundai",
                    Major: "Vehicle",
                    Product: "Electronic Car"
                }
            ];

            for( var newArr in vComp ) {
                console.log(`Comp: ${vComp[newArr].Comp}`);
                console.log(`Major: ${vComp[newArr].Major}`);
                console.log(`Product: ${vComp[newArr].Product}`);
            }

            for( var newComp of vComp ) {
                console.log(`Comp: ${newComp.Comp}`);
                console.log(`Major: ${newComp.Major}`);
                console.log(`Product: ${newComp.Product}`);
            }


            /* FOR OF & IN 중첩 */
            for(var newArco of vComp ) {
                for( var newCorr in newArco ) {
                    console.log(newArco[newCorr]);
                }
            }

        }
    });
});