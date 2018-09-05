(function () {

	'use strict';

	app.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet("../../img/svg/avatars.svg", 128)
      .icon("menu", "../../img/svg/menu.svg", 24)
      .icon("share", "../../img/svg/share.svg", 24)
      .icon("google_plus", "../../img/svg/google_plus.svg", 24)
      .icon("hangouts", "../../img/svg/hangouts.svg", 24)
      .icon("twitter", "../../img/svg/twitter.svg", 24)
      .icon("phone", "../../img/svg/phone.svg", 24)
      .icon("asterisk", "../../lib/Font-Awesome/advanced-options/raw-svg/solid/asterisk.svg", 24);
  	}]);

})()