(function(app){

app.factory('shipping', shipping)

shipping.$inject = ['$q'];

function shipping($q) {

    const api = {
        getAll
    };
    
    return api;

    function getAll(){
        return $q(function(resolve, reject){
            setTimeout(() => resolve(response), 1000);
        });
    }
}

const response = {
    "services":[
        {
            "currency": "EUR",
            "carrier": "UPS",
            "from": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "service_info": [
                {
                    "text": "Printer required"
                },
                {
                    "text": "100€ insurance for free"
                },
                {
                    "text": "Tracking available"
                }
            ],
            "price": {
                "total_price": 13.06,
                "tax_price": 2.27,
                "base_price": 10.79
            },
            "name": "Euro Business Parcel",
            "to": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "transit_hours": "120",
            "details_url": "http://ups.com/ES/es/20133"
        },
        {
            "currency": "EUR",
            "carrier": "UPS",
            "from": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "service_info": [
                {
                    "text": "Printer required"
                },
                {
                    "text": "100€ insurance for free"
                },
                {
                    "text": "Tracking available"
                }
            ],
            "price": {
                "total_price": 15.63,
                "tax_price": 2.71,
                "base_price": 12.92
            },
            "name": "Express Europa",
            "to": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "transit_hours": "96",
            "details_url": "http://ups.com/ES/es/20301"
        },
        {
            "currency": "EUR",
            "carrier": "UPS",
            "from": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "service_info": [
                {
                    "text": "Printer required"
                },
                {
                    "text": "100€ insurance for free"
                },
                {
                    "text": "Tracking available"
                }
            ],
            "price": {
                "total_price": 15.35,
                "tax_price": 2.66,
                "base_price": 12.69
            },
            "name": "Aéreo",
            "to": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "transit_hours": "48",
            "details_url": "http://ups.com/ES/es/20187"
        },
        {
            "currency": "EUR",
            "carrier": "UPS",
            "from": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "service_info": [
                {
                    "text": "Printer required"
                },
                {
                    "text": "100€ insurance for free"
                },
                {
                    "text": "Tracking available"
                }
            ],
            "price": null,
            "name": "Classic",
            "to": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "transit_hours": "96",
            "details_url": "http://ups.com/ES/es/20190"
        },
        {
            "currency": "EUR",
            "carrier": "UPS",
            "from": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "service_info": [
                {
                    "text": "Printer required"
                },
                {
                    "text": "100€ insurance for free"
                },
                {
                    "text": "Tracking available"
                }
            ],
            "price": {
                "total_price": 18.14,
                "tax_price": 3.15,
                "base_price": 14.99
            },
            "name": "Economy Europa",
            "to": {
                "text": "Pickup at home/offices",
                "time": "mornings 8 to 14h"
            },
            "transit_hours": "96",
            "details_url": "http://ups.com/ES/es/20134"
        }
    ]
};
})(app);