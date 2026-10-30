/*global QUnit*/

sap.ui.define([
	"code2/cl2/code2/cl2/b21/b213/controller/code2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("code2 Controller");

	QUnit.test("I should test the code2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
