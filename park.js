var Park = function(){
  this.enclosure={} 
  this.dinosaurs=[]
}

Park.prototype = {
  add: function(dinosaur){
      if (this.enclosure[dinosaur.type]==undefined){
          this.enclosure[dinosaur.type] = 1
          this.dinosaurs.push(dinosaur)
      } else {
        var number_of_type = this.enclosure[dinosaur.type]
        this.enclosure[dinosaur.type]=number_of_type+1
        this.dinosaurs.push(dinosaur)
      }
  },

  removeType: function(dinosaurType){
    if(this.enclosure[dinosaurType]!=undefined){
     delete this.enclosure[dinosaurType]
     for(var i = 0 ; i < this.dinosaurs.length ; i++){
      if (this.dinosaurs[i].type===dinosaurType){
        this.dinosaurs.splice(i, 1)
      }
     }
    }
  },

  highFertility: function(){
    var highlyFertile = []
    for(var i =0; i < this.dinosaurs.length ; i++){
      if (!highlyFertile.includes(this.dinosaurs[i].type)&&this.dinosaurs[i].fertility>2){
        highlyFertile.push(this.dinosaurs[i].type)
      }
    }

    return highlyFertile
  }


}









module.exports = Park;