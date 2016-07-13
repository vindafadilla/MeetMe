(function() {
  'use strict';

  angular
    .module('meetme')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/settings',{
        templateUrl: 'app/pages/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      })
      .when('/register', {
        templateUrl : 'app/pages/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .when('/dashboard', {
        templateUrl : 'app/pages/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .when('/addEventParticipant', {
        templateUrl : 'app/pages/addEventParticipant/addEventParticipant.html',
        controller: 'AddEventParticipantController',
        controllerAs: 'eventParticipant'
      })
      .when('/profile', {
        templateUrl : 'app/pages/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .when('/profile/:userEmail', {
        templateUrl : 'app/pages/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .when('/description', {
        templateUrl : 'app/pages/description/description.html',
        controller: 'DescriptionController',
        controllerAs: 'description'
      })
      .when('/maindashboard', {
        templateUrl : 'app/pages/maindashboard/maindashboard.html',
        controller: 'mainDashboardController',
        controllerAs: 'dashboard'
      })
      .when('/plannerdashboard', {
        templateUrl : 'app/pages/plannerdashboard/plannerdashboard.html',
        controller: 'plannerDashboardController',
        controllerAs: 'planner'
      })
      .when('/participantdashboard', {
        templateUrl : 'app/pages/participantdashboard/participantdashboard.html',
        controller: 'participantDashboardController',
        controllerAs: 'participant'
      })
      .when('/addgroup', {
        templateUrl : 'app/pages/addgroup/addgroup.html',
        controller: 'AddgroupController',
        controllerAs: 'addgroup'
      })
      .when('/timeoptions', {
        templateUrl : 'app/pages/timeoptions/timeoptions.html',
        controller: 'TimeOptionsController',
        controllerAs: 'time'
      })
      .when('/guestpage', {
        templateUrl : 'app/pages/guestpage/guestpage.html',
        controller: 'GuestPageController',
        controllerAs: 'guest'
      })
      .when('/addparticipant', {
        templateUrl : 'app/pages/addParticipant/addParticipant.html',
        controller: 'addParticipantController',
        controllerAs: 'addparticipant'
      })
      .when('/invitation', {
        templateUrl : 'app/pages/invitation/invitation.html',
        controller: 'InvitationController',
        controllerAs: 'invitation'
      })
      .when('/confirmation', {
        templateUrl : 'app/pages/confirmationPage/confirmation.html',
        controller: 'confirmationPageController',
        controllerAs: 'confirmationPage'
      })
      .when('/memberpage', {
        templateUrl : 'app/pages/confirmationPage/confirmation.html',
        controller: 'MemberPageController',
        controllerAs: 'member'
      })
      .when('/confimationpage', {
        templateUrl : 'app/pages/confirmationPage/confirmation.html',
        controller: 'confirmationPageController',
        controllerAs: 'confirmationPage'
      })
      .otherwise({
        redirectTo: '#/'
      });
  }

})();
