class Ground {
    constructor(x, y, width) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, 60, options);
        this.width = width;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, 60);
        pop();
    }
}