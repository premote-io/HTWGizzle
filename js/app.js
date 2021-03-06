'use strict';


// Declare app level module which depends on filters, and services
var htwgApp = angular.module('htwgApp', ['Centralway.lungo-angular-bridge' , 'htwgServices']);

htwgApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {templateUrl: "partials/login.html", controller: "LoginCtrl"});
    $routeProvider.when('/dashboard', {templateUrl: "partials/dashboard.html", controller: "DashboardCtrl"});
    $routeProvider.when('/updateCourse', {templateUrl: "partials/updateCourse.html", controller: "updateCourseCtrl"});
    $routeProvider.when('/updateSemester', {templateUrl: "partials/updateSemester.html", controller: "updateSemesterCtrl"});
    $routeProvider.when('/updateProfile', {templateUrl: "partials/updateProfile.html", controller: "updateProfileCtrl"});
    $routeProvider.when('/rooms', {templateUrl: "partials/roomList.html", controller: "RoomListCtrl"});
    $routeProvider.when('/rooms/alphabetical', {templateUrl: "partials/roomList.html", controller: "RoomListCtrl"});
    $routeProvider.when('/rooms/ordered', {templateUrl: "partials/roomList.html", controller: "RoomListCtrl"});
    $routeProvider.when('/room/detail/:id', {templateUrl: "partials/room.html", controller: "RoomDetailCtrl"});
    $routeProvider.when('/persons', {templateUrl: "partials/personList.html", controller: "PersonListCtrl"});
    $routeProvider.when('/persons/alphabetical', {templateUrl: "partials/personList.html", controller: "PersonListCtrl"});
    $routeProvider.when('/persons/ordered', {templateUrl: "partials/personList.html", controller: "PersonListCtrl"});
    $routeProvider.when('/person/detail/:id', {templateUrl: "partials/person.html", controller: "PersonDetailCtrl"});
    $routeProvider.when('/message/new', {templateUrl: "partials/newMessage.html", controller: "NewMessageCtrl"});
    $routeProvider.when('/message/edit/:id', {templateUrl: "partials/updateMessage.html", controller: "UpdateMessageCtrl"});
    $routeProvider.when('/messages/detail/:id', {templateUrl: "partials/detailMessage.html", controller: "MessageDetailCtrl"});
    $routeProvider.when('/schedule', {templateUrl: "partials/schedule.html", controller: "ScheduleCtrl"});
    $routeProvider.when('/schedules/detail/:courseID/:semester', {templateUrl: "partials/detailSchedule.html", controller: "ScheduleCtrl"});
    $routeProvider.when('/lectures/detail/:lectureID', {templateUrl: "partials/detailLecture.html", controller: "LectureCtrl"});
    $routeProvider.when('/search', {templateUrl: "partials/search.html", controller: "SearchCtrl"});
    $routeProvider.when('/mensa', {templateUrl: "partials/mensa.html", controller: "MensaCtrl"});
    $routeProvider.when('/quota', {templateUrl: "partials/quota.html", controller: "QuotaCtrl"});
    /*$routeProvider.when('/courses', {templateUrl: "partials/courses.html", controller: "CoursesCtrl"});
    $routeProvider.when('/library', {templateUrl: "partials/library.html", controller: "LibraryCtrl"});

    $routeProvider.when('/moodle', {templateUrl: "partials/moodle.html", controller: "MoodleCtrl"});

    $routeProvider.when('/settings', {templateUrl: "partials/setings.html", controller: "SettingsCtrl"});*/
    $routeProvider.otherwise({redirectTo: '/boot', templateUrl: "partials/boot.html", controller: "BaseCtrl"});
    $locationProvider.html5Mode(false);
  }]).config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);
