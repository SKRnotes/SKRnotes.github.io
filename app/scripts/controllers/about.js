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

    //<editor-fold desc="Variables">
    var vm = this;
    var avatarRinaldy = '../images/ninja.png';
    var avatarSivarjuen = '../images/avatar.png';
    var avatarKaranvir = '../images/avatar.png';
    //</editor-fold>

    //<editor-fold desc="Functions">
    vm.openLink = openLink;
    vm.getAvatar = getAvatar;
    //</editor-fold>

    vm.members = [
      {
        name: 'Karanvir Singh Kalsi',
        university: 'University of Birmingham',
        course: 'MSci Computer Science w/ Industrial Year',
        avatar: 'karanvir',
        link: 'https://github.com/kalsi97'
      },
      {
        name: 'Sivarjuen Ravichandran',
        university: 'University of Birmingham',
        course: 'MSci Computer Science w/ Industrial Year',
        avatar: 'sivarjuen',
        link: 'https://github.com/Sivarjuen'
      },
      {
        name: 'Rinaldy Ridwan',
        university: 'University of Birmingham',
        course: 'BSc Computer Science',
        avatar: 'rinaldy',
        link: 'https://github.com/Rinaldyr'
      }
    ];

    function openLink(link) {
      window.open(link);
    }

    function getAvatar(whos) {
      switch (whos) {
        case 'rinaldy': return avatarRinaldy;
        case 'sivarjuen': return avatarSivarjuen;
        case 'karanvir': return avatarKaranvir;
        default: return '../images/avatar.png';
      }
    }
  }
})();
