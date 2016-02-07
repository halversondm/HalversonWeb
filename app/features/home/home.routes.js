/**
 * Created by Daniel on 1/24/2016.
 */
'use strict';
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('home', {
        url : '/',
        template: require('./home.html')
    });
    $stateProvider.state('contact', {
        url: '/contact',
        template: require('./contact.html')
    });
    $stateProvider.state('blog', {
        url: '/blog',
        template: require('./blog.html'),
        controller: 'BlogController',
        controllerAs: 'blog'
    });
    $stateProvider.state('resume', {
        url: '/resume',
        template: require('./resume.html')
    });
    $stateProvider.state('about', {
        url: '/about',
        template: require('./about.html')
    });
}
