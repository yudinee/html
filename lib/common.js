
//랜덤한 값 구하기
//원하는 정수를 반환받기 위해서는 n의 값을 호출시 결정하자
    //예) getRandom(1001)을 넘기면 0~1000반환
    //예) getRandom(901)을 넘기면 0~900반환
    // function getRandom(n) {
    //     return parseInt(Math.random()*n);  //0~4사이 값
    //  }
// return parseInt(Math.random()*n); -> getRandom()이 함수를 호출하면 
//parseInt(Math.random()*n); -> 이 값을 반환한다.
//매개변수 n 넣어서 


 //원하는 수를 넣으면 해당 수 까지를 최대값으로 하는 랜덤한 값을 반환하는 함수 정의
 function getRandom(max) {
    return parseInt(Math.random()*(max+1)); // 0~1사이의 난수
      
  }



  /*한 자릿수 정수에 대한 0처리 */
  function zeroString(n){
    //만일 n이 한자릿 수 이면 앞에 '0'문자를 붙여 주자
    
    let str = n;
    if(n>0 && n<10) str="0" + n;

    return str;

  }



  /*해당 월의 시작 요일 구하기
  API사용 예) 2025년 5월 -> getStrartDay(2025,4)
   */
  function getStartDay(yy,mm){
    let d = new Date(yy,mm,1); //2025년 5월 1일(시작 요일 구하기니까 1일)

    return d.getDay(); //요일반환
  }



  /*영어 또는 한국어로 요일을 변환하여 반환하기
  API사용 예) convertDay(2, "kor") -> 한국어 요일 원함
  */
 //n -> 몇번째 요일인지 인덱스 가져옴, lang -> 사용자가 영어, 한국어 선택하게 
  function convertDay(n, lang){
    let korArray=["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let engArray=["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

    //어떤 요일을 선택할 지 결정
    let day = (lang=="kor")? korArray[n] : engArray[n];
    return day;
  }
 

  /*해당 월의 마지막 날 구하기
  API 사용 예) getLastDate(원하는 연도, 원하는 월)
  getDate는 0부터여서 원래는 6월의 마지막 날을 보고싶으면 (6,0) 하면 7월의0번째로 가서 6월의 마지막 날이 보임
  근데 mm+ 된 경우는 (6,0)하면 +1이 돼서 7월의 마지막 날을 보여줌
   */
  function getLastDate(yy, mm){
    let d = new Date(yy, mm+1, 0); // mm+1, 0 -> 원하는 월에 +1 한 다음 0 하면 그 원하는 월의 마지막 보여줌

    return d.getDate();
  }