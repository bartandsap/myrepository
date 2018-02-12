// sap.ui.define([
// 	"sap/ui/core/mvc/Controller",
// 	"sap/m/MessageToast",
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/model/resource/ResourceModel"
// ], function(Controller, MessageToast, JSONModel, ResourceModel) {

// sap.ui.define([
// 	"sap/ui/core/mvc/Controller",
// 	"sap/m/MessageToast"
// ], function(Controller, MessageToast) {
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		// onInit: function() {
		// var oData = {
		// 	recipient : { name : "World" }
		// };	
		// var oModel = new JSONModel(oData);
		// this.getView().setModel(oModel);

		// var oI18n = new ResourceModel({
		// 	bundleName : "sap.ui.demo.walkthrough.i18n.i18n"
		// });
		// this.getView().setModel(oI18n, "i18n");
		// },

		// onShowHello: function() {
		// 	// show a native JavaScript alert
		// 	// alert("Hello World");
		// 	// MessageToast.show("Hello World");
		// 	var oBundle = this.getView().getModel("i18n").getResourceBundle();
		// 	var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		// 	var sMsg = oBundle.getText("helloMsg", [sRecipient]);
		// 	MessageToast.show(sMsg);
		// },

		// onLiveChange: function(oEvevnt) {
		// 	var sName = this.getView().getModel().getProperty("/recipient/name");
		// }

		onOpenDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});