var Park = function(){
  this.enclosure={}
}

Park.prototype = {
  add: function(dinosaur){
      if (this.enclosure[dinosaur.type]==undefined){
          this.enclosure[dinosaur.type] = 1
      } else {
        var number_of_type = this.enclosure[dinosaur.type]
        this.enclosure[dinosaur.type]=number_of_type+1
      }
  },

  removeType: function(dinosaurType){
    if(this.enclosure[dinosaurType]!=undefined){
     delete this.enclosure[dinosaurType]
    }
  }


}









module.exports = Park;