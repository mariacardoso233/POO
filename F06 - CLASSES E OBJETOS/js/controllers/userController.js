import UserModel from ".../models/userModel.js"

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }
}