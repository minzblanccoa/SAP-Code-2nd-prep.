/*global QUnit*/

sap.ui.define([
	"code2cl2basic01b21/code2cl2basic01b21/controller/BasicSession.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BasicSession Controller");

	QUnit.test("I should test the BasicSession controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
