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
        vm.items = RefundData.data;
        vm.items_pending = _.filter(vm.items, function(item){
          return item.status == 'pending';
        });
        vm.items_refunded = _.filter(vm.items, function(item){
          return item.status == 'refunded';
        });
        vm.items_rejected = _.filter(vm.items, function(item){
          return item.status == 'rejected';
        });


        // Methods


        //////////
        console.log('in refund controller');

    }
})();
