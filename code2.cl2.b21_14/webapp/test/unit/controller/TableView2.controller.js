/*global QUnit*/

sap.ui.define([
	"code2/cl2/code2/cl2/b2114/controller/TableView2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TableView2 Controller");

	QUnit.test("I should test the TableView2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
