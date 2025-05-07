class Bullets {
    constructor(y, bg){
        this.div = document.createElement("div");
        this.x = 0;
        this.y = y;
        this.velX = 5;
        this.bg = bg;

        this.div.style.width = 20 + "px";
        this.div.style.height = 20 + "px";
        this.div.style.borderRadius = 50 + "%";
        this.div.style.background = this.bg;

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        document.body.appendChild(this.div);

        console.log("응애");

    }


    move(){
        this.x += this.velX;
        this.div.style.left = this.x + "px";
    }
}