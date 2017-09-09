//create a `toggleDescription` function such that when a fish <tr> is clicked,
//the fish description will toggle on or off. DO NOT MODIFY any other files.
// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }, 

   toggle: function() {
      this.ocClick({displayInfo: !this.get("displayInfo")});
    } 

});
