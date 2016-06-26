/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";

import home from "./home.html";
import contact from "./contact.html";
import blog from "./blog.html";
import resume from "./resume.html";
import about from "./about.html";

routes.$inject = ["$stateProvider"];

/**
 * Routing for this feature.
 *
 * @param {object} $stateProvider A state provider
 */
function routes($stateProvider) {
  $stateProvider.state("home", {
    url: "/",
    template: home
  });
  $stateProvider.state("contact", {
    url: "/contact",
    template: contact
  });
  $stateProvider.state("blog", {
    url: "/blog",
    template: blog,
    controller: "BlogController",
    controllerAs: "blog"
  });
  $stateProvider.state("resume", {
    url: "/resume",
    template: resume
  });
  $stateProvider.state("about", {
    url: "/about",
    template: about
  });
}

export default routes;
