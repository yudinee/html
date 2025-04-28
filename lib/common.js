
//랜덤한 값 구하기
//원하는 정수를 반환받기 위해서는 n의 값을 호출시 결정하자
    //예) getRandom(1001)을 넘기면 0~1000반환
    //예) getRandom(901)을 넘기면 0~900반환
    function getRandom(n) {
        return parseInt(Math.random()*n);  //0~4사이 값
     }

// return parseInt(Math.random()*n); -> getRandom()이 함수를 호출하면 
//parseInt(Math.random()*n); -> 이 값을 반환한다.
//매개변수 n 넣어서 