(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'src':                        'src', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'typescript':                 'node_modules/typescript/lib/typescript.js',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'moment':                     'node_modules/moment/moment.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'src':                        { main: 'main',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'typescript':                 { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    defaultJSExtensions: true,
    transpiler: 'typescript',
    typescriptOptions: {
      'module': 'commonjs',
      'emitDecoratorMetadata': true
    },

    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
