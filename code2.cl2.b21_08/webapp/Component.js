sap.ui.define([
    "sap/ui/core/UIComponent",
    "ui5/func/code2/cl2/b2108/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("ui5.func.code2.cl2.b2108.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});