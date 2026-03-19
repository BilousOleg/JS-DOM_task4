class UserMessage {
  constructor({
    firstName,
    lastName,
    email,
    phone1,
    phone2,
    phone3,
    subject,
    message,
  }) {
    this.name = `${firstName} ${lastName}`;
    this.email = email;
    this.phone = `${phone1}-${phone2}-${phone3}`;
    this.subject = subject;
    this.message = message;
  }

  set name(value) {
    value = value.trim();
    this._name = value;
  }

  get name() {
    const [firstName, lastName] = this._name.split(' ');
    return {
      firstName: firstName,
      lastName: lastName,
    };
  }

  set email(value) {
    value = value.trim();
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set phone(value) {
    this._phone = value;
  }

  get phone() {
    return this._phone;
  }

  set subject(value) {
    this._subject = value;
  }

  get subject() {
    return this._subject;
  }

  set message(value) {
    // Заміна кількох пробілів, що йдуть поспіль, на один за допомогою regular expression
    value = value.trim().replace(/\s{2,}/, ' ');
    this._message = value;
  }

  get message() {
    return this._message;
  }
}
