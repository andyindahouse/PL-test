'use strict'

const app = angular.module('myApp', []);

(function(app){

app.run(init)

init.$inject = ['$rootScope'];

function init($rootScope){
    $rootScope.currentLang = 'esLang';
}

})(app);