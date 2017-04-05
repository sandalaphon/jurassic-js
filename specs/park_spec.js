var assert = require('assert');
var Dinosaur = require('../dinosaur.js')
var Park = require("../park.js")

describe("Park Tests", function(){
  var myPark ;
  var tRex
  var bronto
  beforeEach(function(){
    myPark = new Park()
    tRex = new Dinosaur("Tyrannosaurus Rex", 1.5)
    bronto = new Dinosaur("Brontosaurus", 3)
  })

  it("Can add a dinosaur", function(){
    myPark.add(tRex)
   assert.strictEqual(1, Object.keys(myPark.enclosure).length)
})

    it("Can add two diffent dinosaurs", function(){
      myPark.add(tRex)
      myPark.add(bronto)
     assert.strictEqual(2, Object.keys(myPark.enclosure).length)
  })

      it("Remove all of type", function(){
        myPark.add(tRex)
        myPark.add(bronto)
        myPark.add(bronto)
        myPark.removeType("Brontosaurus")
       assert.strictEqual(1, Object.keys(myPark.enclosure).length)
    })

      it("find high fertility breeds", function(){
        myPark.add(tRex)
        myPark.add(bronto)
        myPark.add(bronto)
        assert.strictEqual([ 'Brontosaurus' ], myPark.highFertility())

      })





})