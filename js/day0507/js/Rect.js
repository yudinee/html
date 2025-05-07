/*현실의 사각형 막대를 정의한다. */
class Rect{

    constructor(container, x, y, width, height, bg){
        this.div = document.createElement("div");
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.a = 0.1
        this.targetH = 400;

        //style 부여
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        this.div.style.background = this.bg;

        //부모에 부착
        this.container.appendChild(this.div);

        //이퀄라이저이펙트에 rect.js부르고 이거 개발자 모드에 나오는지 확인하기
        //new Rect(document.body, 100, 300, 100, 500, "green"); 

        this.move(); //태어나자 마자 나의 루프를 호출
        
    }

    move(){
        console.log("move()");

        //여기서 막대의 크기를 감속도 공식을 적용하여 움직여보자
        //나의 높이는 현재나의높이 + a*(목표높이 - 현재나의높이)
        this.div.style.height = parseFloat(this.div.style.height + this.a*(this.targetH - parseFloat(this.div.style.height))) + "px";

        //계속호출되게 재귀호출
        // setTimeout(this.move, 10);
        setTimeout( ()=>{
            //this.move(); -> 화살표 함수 안에 this는 상위 스코프를 말함 
            //this.move() -> rect
            this.move();
        }, 10);

    }
}