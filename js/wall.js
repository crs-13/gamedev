function wall() {
    this.x = random(screen.width);
    this.y = random(screen.height);
    this.w = 70;
    this.h = 70;
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