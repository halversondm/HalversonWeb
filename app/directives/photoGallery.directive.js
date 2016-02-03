/**
 * Created by Daniel on 1/31/2016.
 */
'use strict';
import angular from 'angular';

class PhotoGalleryDirective {
    constructor() {
        this.restrict = 'E';
        this.scope = {photoArray: '='};
        this.template = require('./photoTemplate.html');
    }

    controller($scope, $uibModal) {
        $scope.modal = $uibModal;
        $scope.clickAction = function ($index) {
            $scope.modal.open({
                animation: false,
                template: require('./photoModal.html'),
                controller: 'PhotoGalleryModalController',
                controllerAs: 'modal',
                size: 'lg',
                resolve: {
                    photo: function () {
                        return {
                            "index": $index,
                            "photoArray": $scope.photoArray
                        };
                    }
                }
            });
        }
    }

}

PhotoGalleryDirective.$inject = ['$uibModal'];

export default angular.module('directives.photoGallery', [])
    .directive('photoGallery', () => new PhotoGalleryDirective)
    .name;