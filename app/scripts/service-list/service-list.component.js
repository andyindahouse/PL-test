(function(){

app.component('serviceList', {
  templateUrl: 'scripts/service-list/service-list.html',
  controller: ['shipping', ServiceListController]
});

function ServiceListController(shipping) {
    
  const orderBy = {
    'time': sortByTime,
    'price': sortByPrice
  };
    
  this.$onInit = onInit;
  this.selectService = selectService;
    
  function onInit() {
    this.loading = true;
    this.services = [];
    this.sortBy = sortBy;
    shipping.getAll().then(response => {
      this.services = response.services;
      this.loading = false;
    });   
  }

  function selectService(service) {
    console.log('service selected:');
    console.table(service);
  }

  function sortBy(prop) {
    this.services = this.services.sort(orderBy[prop]);
  }

  function sortByTime({transit_hours: aValue}, {transit_hours: bValue}){
    return parseInt(aValue, 10) - parseInt(bValue, 10);
  }

  function sortByPrice({price: aObj}, {price: bObj}) {   
    if(!aObj){ return -1; }
    if(!bObj){ return 1; }
    return aObj.total_price - bObj.total_price;
  }

}

})(app);