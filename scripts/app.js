/**
 * AngularJS shopNG
 * @author Truong Thanh Hung <tthung012@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */

var app = angular.module('shopNG', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(function($routeProvider) {
    $routeProvider

    // Route for the home page
        .when("/", {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        // Route for the contact page
        .when("/vinam", {
            templateUrl: 'pages/categoryProduct.html',
            controller: 'homeController'
        })
        .when("/vinu", {
            templateUrl: 'pages/categoryProduct.html',
            controller: 'homeController'
        })
        .when("/thatlung", {
            templateUrl: 'pages/categoryProduct.html',
            controller: 'homeController'
        })

    .when("/blog", {
            templateUrl: 'pages/categoryPost.html',
            controller: 'homeController'
        })
        // Route for the single page
        .when("/vinamdeptphcm", {
            templateUrl: 'pages/singleProduct.html',
            controller: 'homeController'
        })
        .when("/post-single", {
            templateUrl: 'pages/singlePost.html',
            controller: 'homeController'
        })
        .when("/videovinam", {
            templateUrl: 'pages/videoSingle.html',
            controller: 'homeController'
        })
        // Route for the video page
        .when("/review", {
            templateUrl: 'pages/categoryVideo.html',
            controller: 'homeController'
        })
});

app.controller('homeController', function($scope) {

});