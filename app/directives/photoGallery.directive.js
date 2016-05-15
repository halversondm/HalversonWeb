/**
 * Created by Daniel on 1/31/2016.
 */
'use strict';
import angular from "angular";

const MODAL = new WeakMap();

class PhotoGalleryDirective {
  constructor($uibModal) {
    this.restrict = 'E';
    this.scope = {photoArray: '='};
    this.template = require('./photoTemplate.html');
    MODAL.set(this, $uibModal);
  }

  link(scope) {
    scope.clickAction = function($index) {
      MODAL.get(PhotoGalleryDirective.instance).open({
        animation: false,
        template: require('./photoModal.html'),
        controller: 'PhotoGalleryModalController',
        controllerAs: 'modal',
        size: 'lg',
        resolve: {
          photo: function() {
            return {
              "index": $index,
              "photoArray": scope.photoArray
            };
          }
        }
      });
    };
  }

  static directiveFactory($uibModal) {
    PhotoGalleryDirective.instance = new PhotoGalleryDirective($uibModal);
    return PhotoGalleryDirective.instance;
  }

}

PhotoGalleryDirective.directiveFactory.$inject = ['$uibModal'];

export default angular.module('directives.photoGallery', [])
  .directive('photoGallery', PhotoGalleryDirective.directiveFactory)
  .name;
