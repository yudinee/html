class Bullet{
    constructor(container, x, y, width, height, velX, velY){
        this.container = container;
        this.div = document.createElement("div");
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}