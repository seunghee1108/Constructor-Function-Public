class User {
  /**
   * class User는 매개변수 username, email 정보를 받아서
   * 객체를 만드는 목적의 생성자 함수이다.
  */
  constructor(username, email) {
    this.username = username;
    // 객체의 값을 부여하는데, '적절한' 값이어야'만' 값으로 대입되도록
    // setter 함수를 통해 return 처리를 분해해서 진행한다.
    // 참인경우 은닉화된 키 값인 _email에 값을 대입하고,
    // 거짓인 경우 null을 대입한다.
    // 여기서 null은 '존재(자리)하지만 값이 없는' 상태를 의미한다.
    // 에러를 내지 않고 null을 대입해서 무분별한 에러를 방지한다.

    // validateEmail 메서드 : 이메일 유효성 검사
    if(this.validateEmail(email)) {
      this._email = email;
    } else {
      this._email = null;
      // null 데이터타입의 값어치
    }
  }
  
  // '가져오는', '읽어오는' 작업을 할 수 있는 getter 기능으로
  // 읽기 전용(readonly) 프로퍼티를 정의한다.
  // getter 함수는 키워드 get을 사용한다.
  // 실제 값인 _email을 새로 대입하거나 변경하는 목적이 아닌,
  // 읽어오는 목적으로만 사용한다.
  get eamil() {
    return this._email;
  }
  
  // 유효한지 검사하는 함수 처리
  set email(newEmail) {
    if(this.validateEmail(newEmail)) {
      this._email = newEmail;
    } else {
      console.error("유효한 이메일 형식이 아닙니다.")
    }
  }
  // setter 함수를 적절히 사용하기 위해 아래의 메서드를 제작했다.
  // return이 boolean으로, false 반환을 통해 constructor에서
  // null을 대입하는 것을 방지한다.

  // 문자열 형식이 아니거나 
  validateEmail(email) {
    if(typeof email !== 'string') {
      return false;
    }

    // "@"와, "."을 포함하지 않는 경우, 메서드는 'flase'를 반환하여 이메일이 유효하지 않음을 나타내기.
    if(!email.includes("@") || !email.includes(".")) {
      return false;
    }
    // true 반환 영역
    return true;
  }
  
  // 아래는 간단한 프로필을 출력하는 메서드이다.
  showProfilie() {
    console.log(`Username : ${this.username}, Email: ${this._email}`);
  }
}

// 예제 호출
const userBang = new User("bangseunghee", "bangseunghee@example.com");
userBang.showProfilie();
// Username : bangseunghee, Email: bangseunghee@example.com