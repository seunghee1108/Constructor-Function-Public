class User {
  constructor(username, email) {
    this.username = username;
    if(this.validateEmail(email)) {
      this._email = email;
    } else {
      this._email = null;
    }
  }
  get eamil() {
    return this._email;
  }
  set email(newEmail) {
    if(this.validateEmail(newEmail)) {
      this._email = newEmail;
    } else {
      console.error("유효한 이메일 형식이 아닙니다.")
    }
  }
  validateEmail(email) {
    if(typeof email !== 'string') {
      return false;
    }
    if(!email.includes("@") || !email.includes(".")) {
      return false;
    }
    return true;
  }
  showProfilie() {
    console.log(`Username : ${this.username}, Email: ${this._email}`);
  }
}
const userBang = new User("bangseunghee", "bangseunghee@example.com");
userBang.showProfilie();
// Username : bangseunghee, Email: bangseunghee@example.com