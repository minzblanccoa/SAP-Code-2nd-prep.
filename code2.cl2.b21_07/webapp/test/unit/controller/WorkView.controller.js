/*global QUnit*/

sap.ui.define([
	"code2/cl2/code2/cl2/b2107/controller/WorkView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("WorkView Controller");

	QUnit.test("I should test the WorkView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
