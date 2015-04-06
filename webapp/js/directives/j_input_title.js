angular.module('application')
    .directive('jInputTitle', function () {
        return {
            scope: {
                key: '@i18n',
                error: '=error'
            },
            replace: true,
            restrict: 'E',
            template: '<div class="input-labels-wrapper">' +
            '<div class="line"></div>' +
            '<span class="ph-label">{{key|translate}}</span>' +
            '<span class="ph-label-error fr" ng-show="error">{{error}}</span>' +
            '<div class="clear"></div>' +
            '</div>'
        };
    });