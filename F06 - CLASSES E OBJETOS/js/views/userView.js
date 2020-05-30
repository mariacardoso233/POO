import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();
    }
}