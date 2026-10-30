/*global QUnit*/

sap.ui.define([
	"code2/cl2/b21/code2/cl2/loop/controller/Loopview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Loopview Controller");

	QUnit.test("I should test the Loopview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
