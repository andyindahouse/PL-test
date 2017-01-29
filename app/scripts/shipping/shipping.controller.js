
(function(app){

app.controller('ShippingCtrl', ShippingCtrl)

ShippingCtrl.$inject = ['shipping'];

function ShippingCtrl(shipping){
    
    const vm = this;    

    shipping.getAll().then(response => {
        console.log(response);
    });    
}

})(app);