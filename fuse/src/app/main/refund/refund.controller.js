(function ()
{
    'use strict';

    angular
        .module('app.refund')
        .controller('RefundController', RefundController);

    /** @ngInject */
    function RefundController(RefundData, $mdDialog, $document)
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

        vm.dtOptions = {
          dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
          pagingType: 'simple',
          autoWidth : false,
          responsive: false
        };


        // Methods
        vm.rejectRefund = function(item) {
          console.log("reject refund");
          alert("Refund Item  <" + item.item + "> requested by " + item.username + " is rejected");
        };

        vm.acceptRefund = function() {
          alert("accept refund");
        };

        vm.rejectDialog = function() {
          console.log("reject dialog open");
          $mdDialog.show({
            controller         : 'ComposeDialogController',
            controllerAs       : 'vm',
            locals             : {
              testing: 'abc'
            },
            templateUrl        : 'app/main/refund/dialogs/compose/compose-dialog.html',
            parent             : angular.element($document.body),
            clickOutsideToClose: true
          })
        };

        //////////
        console.log('in refund controller');

    }
})();
