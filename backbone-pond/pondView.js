var PondView = Backbone.View.extend({
  tagName: 'table',
  
  render: function() {
    this.$el.html('');
    this.collection.each(function(fishModel) {
      this.$el.append(new FishView({model: fishModel}).$el);
    }, this);

    return this;
  },
  
  initialize: function() {
    this.render();
  }
  
});
