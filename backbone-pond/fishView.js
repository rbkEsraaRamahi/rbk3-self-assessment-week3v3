//DO NOT MODIFY THIS FILE

var FishView = Backbone.View.extend({
  tagName: 'tr',

  fishTemplateBasic: _.template('<td class="fish-name"><%=name%></td><td><img src="<%=image%>"></td>'),

  fishTemplateDetails: _.template('<td class="fish-name"><%=name%></td><td><img src="<%=image%>"></td><td class="fish-description"><%= description%></td>'),
  
  render: function() {
    var fishTemplate = this.model.get('displayInfo') ? this.fishTemplateDetails : this.fishTemplateBasic;
    this.$el.html(fishTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
    this.model.on('toggle:description', this.render, this);
  },

  events: {
    'click': function() {
      this.model.toggleDescription();
    }
  }
});