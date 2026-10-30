/*global QUnit*/

sap.ui.define([
	"jsontable/code2/cl2/b2111/controller/TableView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TableView Controller");

	QUnit.test("I should test the TableView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
