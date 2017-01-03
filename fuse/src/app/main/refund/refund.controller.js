(function ()
{
    'use strict';

    angular
        .module('app.refund')
        .controller('RefundController', RefundController);

    /** @ngInject */
    function RefundController(RefundData)
    {
        var vm = this;

        // Data
        // vm.helloText = UsersData.data.helloText;
        vm.testing = "abc";

        vm.item = RefundData.data;

        // Methods

        //////////
      console.log('in refund controller');
    }
})();
