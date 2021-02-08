function wall(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(this.x, this.y, this.w,this.h,{isStatic : true});
    World.add(engine.world, this.body);
    this.display = function() {
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
       // translate(pos.x, pos.y);
        rect(pos.x,pos.y, this.w , this.h,);
        pop();
    }

}