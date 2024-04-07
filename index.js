const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Set canvas width and height
canvas.width = 1024;
canvas.height = 576;

// Draw on the canvas
c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, 150);
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});

// Draw the sprites
player.draw();
enemy.draw();

console.log(player);

//Create animation loop

function animate() {
    window.requestAnimationFrame(animate)

}

animate()