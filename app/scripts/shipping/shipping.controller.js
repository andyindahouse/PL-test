
(function(app){

app.controller('ShippingCtrl', ShippingCtrl)

ShippingCtrl.$inject = ['shipping'];

function ShippingCtrl(shipping){

    shipping.getShippings().then(response => {
        console.log(response);
    });

    
}

})(app);