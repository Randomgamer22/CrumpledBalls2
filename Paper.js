class Paper {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
            friction: 0.5, 
            density: 1.2
        }

        this.paper = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png")

        World.add(world, this.paper);
    }

    display() {
        push();
        imageMode(CENTER);
        fill(255);
        translate(this.paper.position.x, this.paper.position.y);
        image(this.image, 0, 0, (this.radius*2)+10, (this.radius*2)+10);
        pop();
    }
}