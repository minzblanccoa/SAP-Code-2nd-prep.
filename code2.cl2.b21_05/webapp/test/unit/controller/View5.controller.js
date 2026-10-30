/*global QUnit*/

sap.ui.define([
	"code2/cl2/code2/cl2/b2105/controller/View5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View5 Controller");

	QUnit.test("I should test the View5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
