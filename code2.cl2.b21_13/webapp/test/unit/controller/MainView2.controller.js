/*global QUnit*/

sap.ui.define([
	"code2/cl2/code2/cl2/b2113/controller/MainView2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainView2 Controller");

	QUnit.test("I should test the MainView2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
