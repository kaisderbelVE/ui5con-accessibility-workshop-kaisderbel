sap.ui.define([
    "sap/m/MessageToast"
],
    function (MessageToast) {
        "use strict";

        return {
            onPopoverSave: function (oEvent) {
                let oMessageToast = MessageToast;
                oMessageToast.show("Save Command executed (Ctr+s)");
            },

            onPopoverDelete: function (oEvent) {
                // Add a MessageToast here
                let oMessageToast = MessageToast;
                oMessageToast.show("Delete Command executed (Ctre+d)");
            }

        };
    });