'use strict';

describe('myApp', function() {

  describe('Sort tests', function(){

    var $componentController;
    const data = [{"transit_hours": "120", 'price': {'total_price': 100}},
                  {"transit_hours": "96", 'price': {'total_price': 10}},
                  {"transit_hours": "48", 'price': {'total_price': 30}}];
    const shippingService  = {
        getAll: () => ({ then: (cb) => cb(data)})                    
    };
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;        
    }));

    it('should sort array by transit_property', () => {

      var serviceListCtrl = $componentController('serviceList',                                                 
                                                {'shipping': shippingService}, null);      
      serviceListCtrl.$onInit();
      serviceListCtrl.services = data;       
      serviceListCtrl.sortBy('time');

      expect(serviceListCtrl.services[0].transit_hours).toBe('48');
      expect(serviceListCtrl.services[1].transit_hours).toBe('96');
      expect(serviceListCtrl.services[2].transit_hours).toBe('120');

    });

    it('should sort array by price.tota_price property', function() {

      var serviceListCtrl = $componentController('serviceList',                                                 
                                                {'shipping': shippingService}, null);

      serviceListCtrl.$onInit();      
      serviceListCtrl.services =  data;      
      serviceListCtrl.sortBy('price');

      expect(serviceListCtrl.services[0].price.total_price).toBe(10);
      expect(serviceListCtrl.services[1].price.total_price).toBe(30);
      expect(serviceListCtrl.services[2].price.total_price).toBe(100);

    });
  });
});