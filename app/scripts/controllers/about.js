(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name skrnotesgithubioApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the skrnotesgithubioApp
   */
  angular
    .module('skrnotesgithubioApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = [];
  function AboutCtrl() {
    var vm = this;

    //<editor-fold desc="Functions">
    vm.openLink = openLink;
    //</editor-fold>

    vm.members = [
      {
        name: 'Karanvir Singh Kalsi',
        university: 'University of Birmingham',
        course: 'MSci Computer Science w/ Industrial Year',
        avatar: '../images/avatar.png',
        link: 'https://github.com/kalsi97'
      },
      {
        name: 'Sivarjuen Ravichandran',
        university: 'University of Birmingham',
        course: 'MSci Computer Science w/ Industrial Year',
        avatar: '../images/avatar.png',
        link: 'https://github.com/Sivarjuen'
      },
      {
        name: 'Rinaldy Ridwan',
        university: 'University of Birmingham',
        course: 'BSc Computer Science',
        avatar: '../images/avatar.png',
        link: 'https://github.com/Rinaldyr'
      }
    ];

    function openLink(link) {
      window.open(link);
    }
  }
})();
