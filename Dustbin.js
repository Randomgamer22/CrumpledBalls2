class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.body1 = Bodies.rectangle(x, y, 80, 20, options);
        this.body2 = Bodies.rectangle(x + 50, y - 40, 20, 100, options);
        this.body3 = Bodies.rectangle(x - 50, y - 40, 20, 100, options);

        this.image = loadImage("dustbingreen.png");

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.body1.position.x, this.body3.position.y, 100, 100);
        pop();
    }
}