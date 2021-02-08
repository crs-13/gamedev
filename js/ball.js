function Box(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.circle(this.x, this.y, this.w);
    World.add(engine.world, this.body);
    this.show = function() {
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.w*2, this.w*2);
        pop();
    }

}