/**
 * created by Dan on 1/30/2016
 */

'use strict';

import angular from 'angular';

export default class PhotoGalleryModalController {

    constructor($uibModalInstance, photo) {
        this.modalInstance = $uibModalInstance;
        this.photo = photo;
        this.photoIndex = Number(photo.index);
        this.photoArray = photo.photoArray;
        this.showHideButtons();
    }

    showHideButtons() {
        this.modalPhoto = this.photoArray[this.photoIndex];
        if (this.photoIndex === 0) {
            this.hidePrevious = true;
        } else {
            this.hidePrevious = false;
        }
        if (this.photoIndex === (this.photoArray.length - 1)) {
            this.hideNext = true;
        } else {
            this.hideNext = false;
        }
    }

    prev() {
        this.photoIndex--;
        this.showHideButtons();
    }

    next() {
        this.photoIndex++;
        this.showHideButtons();
    }

}

PhotoGalleryModalController.$inject = ['$uibModalInstance', 'photo'];
