export default class Contact {
    name = '';
    lastname = '';
    email = '';
    status = false;

    constructor (name, lastname, email, online) {
        this.name = name;
        this.lastname = lastname;
        this.email = email
        this.status = online;
    }
}