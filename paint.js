const Paint = function(litres){
    this.can_capacity = litres
    this.paint_level = []
}

Paint.prototype.getPaintLevel=function(){
    return this.paint_level.length;
}

Paint.prototype.increasePaintLevel=function(Paint){
    this.paint_level.push(Paint)
}
Paint.prototype.emptyPaintLevel=function(){
    this.paint_level.splice([])
}


module.exports = Paint


