(function () {

	'use strict';

	app.config(['$mdThemingProvider', function($mdThemingProvider) {
    
    // Extend the blue theme with a different color and make the contrast color black instead of white.
    // For example: raised button text will be black instead of white.
    var neonBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      '100': '#0000ff',
      'contrastDefaultColor': 'white'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('neonBlue', neonBlueMap);

    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('neonBlue');

    }]);

})()