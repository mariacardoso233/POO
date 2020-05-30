export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    getAll() {
        return this.users;
    }

    _persist() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}