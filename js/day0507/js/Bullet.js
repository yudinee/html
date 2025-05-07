/*현실의 총알을 정의한다.
java, c#, python... 모든 클래스안에는 단 2가지 작성할 수 있음 - 변수(상태)와 함수(동작, 상태변화코드) */
class Bullet{

    //아래의 생성자 메서드는 new 연산자 뒤에서 호출 됨
    //예) new Bullet()방식으로
    constructor(bg, velY){
        //총알이 보유할 변수(속성 = property)를 선언
        this.div = document.createElement("div");
        this.x = 0; //총알의 x축 값
        this.velX = 10; //총알의 속도
        this.bg = bg; //매개변수로 넘어온 데이터를 클래스 변수에 보관해놓기(this를 붙여서 매개변수와
        //구분하기)  this.bg -> 클래스(Bullet)가 보유한 속성  = bg -> 매개변수
        this.velY = velY;

        //총알이 어떤 모습으로 보여질지 개성을 결정(style)
        this.div.style.width = 20 + "px";
        this.div.style.height = 20 + "px";
        this.div.style.borderRadius = 50 + "%";
        this.div.style.background = bg; //매개변수는 this안붙임
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = velY + "px"; //y값 매개변수로 받아서 화면에 여러개 찍을 수 있게

        document.body.appendChild(this.div);

        //개발자 창에 new Bullet()치면 나옴
        console.log("저 방금 태어났어요");
    }

    //총알의 상태를 변경시키기 위한 움직임을 표현한 메서드 정의
    move() {
        this.x += this.velX; //등속도 운동
        this.div.style.left = this.x + "px";
    }
    
}