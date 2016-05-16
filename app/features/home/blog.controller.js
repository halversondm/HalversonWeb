/**
 * Created by Daniel on 2/6/2016.
 */
"use strict";

export default class BlogController {

  constructor($http, $sce) {
    this.http = $http;
    this.sce = $sce;
    this.call();
  }

  call() {
    var myBlog = "http://tech-dan.blogspot.com/feeds/posts/default";
    var service = "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";
    var url = service + encodeURIComponent(myBlog);
    this.http.jsonp(url).then(response => {
      this.feeds = response.data.responseData.feed.entries;
    });
  }

  getHtml(data) {
    return this.sce.trustAsHtml(data);
  }

}
BlogController.$inject = ["$http", "$sce"];
