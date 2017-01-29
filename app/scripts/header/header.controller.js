(function(app){

app.controller('HeaderCtrl', HeaderController);

HeaderController.$inject = ['$rootScope'];

function HeaderController($rootScope){
    
    const vm = this;

    vm.changeLang = changeLang;

    function changeLang(lang){
        $rootScope.currentLang = lang;        
        localStorage.setItem('lang', lang);
    }

}

})(app);