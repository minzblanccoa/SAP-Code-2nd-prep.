/*global QUnit*/

sap.ui.define([
	"code2/odata21/code2/cl2/2106/controller/ODataView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ODataView Controller");

	QUnit.test("I should test the ODataView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
