(function(app, i18n){

    app.filter('translate', translate);

    translate.$inject = ['$rootScope'];

    function translate($rootScope){

        filter.$stateful = true;

        return filter;

        function filter(str) {
            return i18n[$rootScope.currentLang][str];
        };
    }

})(app, i18n);