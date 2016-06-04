/**
 * created by Dan on 1/30/2016
 */

"use strict";

export default class PhotoGalleryController {

  constructor(galleryConfig) {
    this.galleryConfig = galleryConfig;
    this.photoArray = [];
    this.buttons = [];
    // determine the first photo and the last photo to appear on each page/button.
    // the equal division of photos results in the number of buttons needed.
    this.firstPhoto = [];
    this.lastPhoto = [];
    this.go = true;
    this.page = 0;
    this.init();
    this.buildArray(1);
  }

  init() {
    while (this.go) {
      if (this.page === 0) {
        this.firstPhoto.push(1);
        this.lastPhoto.push(this.galleryConfig.perPage);
      } else {
        var nextFirst = this.lastPhoto[this.page - 1] + 1;
        var nextLast = nextFirst + this.galleryConfig.perPage;
        if (nextLast > this.galleryConfig.totalPhotos) {
          nextLast = this.galleryConfig.totalPhotos;
        }
        this.firstPhoto.push(nextFirst);
        this.lastPhoto.push(nextLast);
      }

      this.buttons.push(this.page + 1);
      if (this.lastPhoto[this.page] === this.galleryConfig.totalPhotos) {
        this.go = false;
      } else {
        this.page++;
      }
    }
  }

  buildArray(pageNumber) {
    this.photoArray = [];
    for (var i = this.firstPhoto[pageNumber - 1]; i <= this.lastPhoto[pageNumber - 1]; i++) {
      var source = this.galleryConfig.filePrefix + i +
        this.galleryConfig.fileSuffix;
      this.photoArray.push(source);
    }
  }

  click(pageNumber) {
    this.buildArray(pageNumber);
  }

}
PhotoGalleryController.$inject = ["galleryConfig"];
