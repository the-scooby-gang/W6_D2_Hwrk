const Room = function(area){
    this.area = area
    this.colours = []
}
module.exports = Room

Room.prototype.getColourOfRoom=function(){
    return this.colours.length;
}
Room.prototype.paintRoom=function(colour){
    this.colours.push(colour)
}