describe('toggleDescription', function() {
  it('should be a method on a fish model', function() {
    var goldfish = new Fish({name: 'Goldfish'});
    goldfish.should.have.property('toggleDescription');
    goldfish.toggleDescription.should.be.a('function');
  });

  it('should set `displayInfo` to false if originally true', function() {
    var goldfish = myPond.findWhere({name: 'Goldfish'});
    goldfish.set('displayInfo', false);
    goldfish.toggleDescription();
    goldfish.get('displayInfo').should.equal(true);
  });

  it('should set `displayInfo` to true if originally false', function() {
    var goldfish = myPond.findWhere({name: 'Goldfish'});
    goldfish.set('displayInfo', true);
    goldfish.toggleDescription();
    goldfish.get('displayInfo').should.equal(false);
  });

  it('should show the description text in the `td` element', function() {
    var goldfish = myPond.findWhere({name: 'Goldfish'});
    var $goldfishRow = $('tr:contains("Goldfish")');

    goldfish.set('displayInfo', false);
    $goldfishRow.children().length.should.equal(2);
    
    goldfish.toggleDescription();
    $goldfishRow.children().length.should.equal(3);
    $goldfishRow.children().last().text().should.equal(goldfish.get('description'));
  });

  it('should not show the description of other fishes\' `td` elements', function() {
    var goldfish = myPond.findWhere({name: 'Goldfish'});
    var $goldfishRow = $('tr:contains("Goldfish")');
    var tuna = myPond.findWhere({name: 'Tuna'});
    var $tunaRow = $('tr:contains("Tuna")');

    tuna.set('displayInfo', false);
    goldfish.set('displayInfo', false);
    
    goldfish.toggleDescription();
    $tunaRow.children().length.should.equal(2);
    $goldfishRow.children().length.should.equal(3);
  });

  it('should show and hide the fishes description', function() {
    var goldfish = myPond.findWhere({name: 'Goldfish'});
    var $goldfishRow = $('tr:contains("Goldfish")');
    
    goldfish.set('displayInfo', false);
    goldfish.toggleDescription();
    $goldfishRow.children().length.should.equal(3);
    $goldfishRow.children().last().text().should.equal(goldfish.get('description'));

    goldfish.toggleDescription();
    $goldfishRow.children().length.should.equal(2);
  });
});
