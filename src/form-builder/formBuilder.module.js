(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('formBuilder.config', [])
      .value('formBuilder.config', {
          debug: true
      });

  // Modules
  angular.module('formBuilder.directives', []);
  angular.module('formBuilder.services', []);
  angular.module('formBuilder',
      [
          'formBuilder.config',
          'formBuilder.directives',
          'formBuilder.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
