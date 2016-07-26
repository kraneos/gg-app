// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material',
    'parse': 'vendor/parse'
};
/** User packages configuration. */
var packages = {
    '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/checkbox': { format: 'cjs', defaultExtension: 'js', main: 'checkbox.js' },
    '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/icon': { format: 'cjs', defaultExtension: 'js', main: 'icon.js' },
    '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' },
    '@angular2-material/list': { format: 'cjs', defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/radio': { format: 'cjs', defaultExtension: 'js', main: 'radio.js' },
    '@angular2-material/sidenav': { format: 'cjs', defaultExtension: 'js', main: 'sidenav.js' },
    '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/progress-circle': { format: 'cjs', defaultExtension: 'js', main: 'progress-circle.js' },
    '@angular2-material/slide-toggle': { format: 'cjs', defaultExtension: 'js', main: 'slide-toggle.js' },
    'parse': { format: 'cjs', defaultExtension: 'js', main: 'index.js' }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/home',
    'app/clients',
    'app/login',
    'app/clients-detail',
    'app/policies-detail',
    'app/policies',
    'app/policies-collect',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map