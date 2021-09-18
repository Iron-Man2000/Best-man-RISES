class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.1,
            density: 0.3,
            restitution: 0.2,
        }

        this.drop = Bodies.circle(x, y, 10);
        this.x = x;
        this.y = y;

        World.add(world, this.drop);
    }
    update() {
        var pos = this.drop.position;
        if(pos.y > height) {
            Matter.Body.setPosition(this.drop, {x: random(0, 400), y: random(0, 400)})
        }
    }

    display() {
        var pos = this.drop.position;
        fill("blue");
        circle(pos.x, pos.y, 10);
    }
}