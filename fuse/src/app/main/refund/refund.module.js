(function ()
{
    'use strict';

    angular
        .module('app.refund', ['datatables'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.refund', {
                url    : '/refund',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/refund/refund.html',
                        controller : 'RefundController as vm'
                    }
                },
                resolve: {
                    RefundData: function (msApi)
                    {
                        return msApi.resolve('refund@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/refund');

        // Api
        msApiProvider.register('refund', ['app/data/refund/refund.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('fuse.refund', {
            title    : 'Refund',
            icon     : 'icon-account',
            state    : 'app.refund',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'REFUND.REFUND_NAV',
            weight   : 5
        });
    }
})();
