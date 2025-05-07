class Rects{

    constructor(container, x, y, width, height, bg){
        this.container = this.container;
        this.div = document.createElement("div");
        this.x = this.x;
        this.y = this.y;
        this.width = width;
        this.height = height;
        this.bg = bg;


        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        this.div.style.background = this.bg;

        //부모에 부착
        this.container.appendChild(this.div);
    }

    move(){
        setTimeout( ()=> {
            this.move();
        }, 10)
    }
}