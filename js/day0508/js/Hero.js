//주인공을 정의한다. 
class Hero{
    //ES6의 클래스는 멤버변수를 생성자 안에 둬야 함
    constructor(container, x, y, width, height, velX, velY) {
        //외부에서 전달된 데이터를 나의 객체에 보관하는 기법을 injection
        this.container = container;
        this.img = document.createElement("img");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        //주인공의 sprite이미지(한컷한컷 모인것)명 배열 선언
        //img배열 담는 것 doIdle()이 함수에 안하고 member변수로 선언한 이유는 함수 doIdle함수
        //안에 쓰면 계속 정의 되니까 한번만 정의 하려고
        this.imgArray=[];
        this.n = 0; //이미지 배열의 index를 결정짓는 변수 (1부터 18까지인데 밑에 n++이 있어서 0)
        for(let i=1; i<=18; i++){
            this.imgArray.push(`../../images/hero/image${i}.png`)
        }


        this.img.src = "../../images/hero/image1.png";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //컨테이너에 부착
        this.container.appendChild(this.img);

        //new Hero(document.getElementById("stage"), 100, 100, 100, 100, 0, 0);
        //개발자 창에 쳐서 잘 나오나 확인해 보기

        //움직이기 시작
        this.doIdle(); //hero(자기자신)의 메서드니까 this로


    }

    //주인공 펄럭임 동작
    //gameLoop와 상관없이 자체적으로 끝없는 루프로 움직임 표현
    doIdle(){
        
        //for문으로 18까지 안돌리는 이유는 반복문은 너무 빨라서 정지된 거 처럼 보임
        this.n++;
        this.img.src= this.imgArray[this.n];
        if(this.n >= 17) this.n=1; //이미지가 끝에 도달하면 다시 n을 1로 초기화
        setTimeout( ()=>{
            //화살표함수는 this를 가질 수 없으므로 여기서의 this는 상위 스코프를 나타냄
            //this.doIdle 의 상위스코프는 doIdle()함수 근데 doIdle()은 hero의 메소드이기 때문에
            //this.doIdle은 hero
            this.doIdle();
        }, 100);
    }

    //모든 방향에 대한 움직임 동작 정의
    move(){
        this.x += this.velX; //물리적 변화량
        this.y += this.velY; //물리적 변화량
        console.log(this.x, this.y);

        //변화된 물리량을 화면에 반영 (rendering)
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }

}