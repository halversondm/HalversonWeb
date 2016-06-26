/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";

import grandPrix from "./grandPrix.html";
import charger from "./charger.html";
import honda from "./honda.html";
import yamaha from "./yamaha.html";
import auto from "./auto.html";

routes.$inject = ["$stateProvider"];

/**
 * Routing for this feature.
 *
 * @param {object} $stateProvider A state provider
 */
function routes($stateProvider) {
  $stateProvider.state("auto", {
    url: "/auto",
    template: auto
  });
  $stateProvider.state("grandPrix", {
    url: "/grandPrix",
    template: grandPrix,
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
    template: charger
  });
  $stateProvider.state("honda", {
    url: "/honda",
    template: honda,
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
    template: yamaha,
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

export default routes;
