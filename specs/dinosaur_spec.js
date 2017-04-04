var assert = require('assert');
var Dinosaur = require('../dinosaur.js')

describe("Dinosaur Tests", function(){
  var tRex ;
  beforeEach(function(){
    tRex = new Dinosaur("Tyrannosaurus Rex", 4)
  })

  it("Dinosaur type ", function(){
   assert.strictEqual("Tyrannosaurus Rex", tRex.type)
})



})