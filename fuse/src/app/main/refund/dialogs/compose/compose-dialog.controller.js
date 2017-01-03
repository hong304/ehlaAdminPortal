(function ()
{
    'use strict';

    angular
        .module('app.refund')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog)
    {
        var vm = this;

        // // Data
        vm.testing = "abc";


        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();
