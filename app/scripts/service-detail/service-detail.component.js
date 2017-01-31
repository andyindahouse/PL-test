app.component('serviceDetail', {
  templateUrl: 'scripts/service-detail/service-detail.html',
  bindings: {
    service: '<',
    onSelect: '&',
  },
  controller: function () {
    this.select = () => this.onSelect({service: this.service});
  }
});