/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
routes.$inject = ["$stateProvider"];
/**
 * Routing for this feature.
 *
 * @param {object} $stateProvider A state provider
 */
export default function routes($stateProvider) {
  $stateProvider.state("auto", {
    url: "/auto",
    template: require("./auto.html")
  });
  $stateProvider.state("grandPrix", {
    url: "/grandPrix",
    template: require("./grandPrix.html"),
    resolve: {
      galleryConfig: function() {
        return {
          perPage: 38,
          totalPhotos: 38,
          filePrefix: "images/grandPrixPhotos/photo",
          fileSuffix: ".jpg"
        };
      }
    },
    controller: "PhotoGalleryController",
    controllerAs: "photoCtrl"
  });
  $stateProvider.state("charger", {
    url: "/charger",
    template: require("./charger.html")
  });
  $stateProvider.state("honda", {
    url: "/honda",
    template: require("./honda.html"),
    resolve: {
      galleryConfig: function() {
        return {
          perPage: 6,
          totalPhotos: 6,
          filePrefix: "images/hondaPhotos/photo",
          fileSuffix: ".jpg"
        };
      }
    },
    controller: "PhotoGalleryController",
    controllerAs: "photoCtrl"
  });
  $stateProvider.state("yamaha", {
    url: "/yamaha",
    template: require("./yamaha.html"),
    resolve: {
      galleryConfig: function() {
        return {
          perPage: 4,
          totalPhotos: 4,
          filePrefix: "images/yamahaPhotos/photo",
          fileSuffix: ".jpg"
        };
      }
    },
    controller: "PhotoGalleryController",
    controllerAs: "photoCtrl"
  });
}
