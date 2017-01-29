
(function(app){

app.controller('ShippingCtrl', ShippingCtrl)

ShippingCtrl.$inject = ['shipping'];

function ShippingCtrl(shipping){
    
    const vm = this;
    vm.loading = true;
    vm.services = [];
    vm.sortBy = sortBy;
    const orderBy = {
        'time': sortByTime,
        'price': sortByPrice
    };

    activate();

    function activate(){
        shipping.getAll().then(response => {
            vm.services = response.services;
            vm.loading = false;
        });
    }

    function sortBy(prop){
        vm.services = vm.services.sort(orderBy[prop]);
    }

    function sortByTime({transit_hours: aValue}, {transit_hours: bValue}){
        return parseInt(aValue) - parseInt(bValue);
    }

    function sortByPrice({price: aObj}, {price: bObj}) {   

        if(!aObj){ return -1; }
        if(!bObj){ return 1; }

        return aObj.total_price - bObj.total_price;
    }

}

})(app);