"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../Model/User");
const hashManager_1 = require("../../Services/hashManager");
const authenticator_1 = require("../../Utilities/authenticator");
const idGenerator_1 = require("../../Utilities/idGenerator");
class UserBusiness {
    constructor(userDataImplementation) {
        this.signup = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = input;
            if (!name || !email || !password) {
                throw new Error("Insira todos os campos!");
            }
            const registeredUser = yield this.userData.findByEmail(email);
            if (registeredUser) {
                throw new Error("Email já cadastrado!");
            }
            const id = this.idGenerator.generate();
            const hashedPassword = yield this.hashManager.hash(password);
            const user = new User_1.User(id, name, email, hashedPassword);
            yield this.userData.insert(user);
            const token = this.authenticator.generateToken({ id });
            return token;
        });
        this.login = (input) => __awaiter(this, void 0, void 0, function* () {
            let statusCode = 400;
            const { email, password } = input;
            if (!email || !password) {
                statusCode = 406;
                throw new Error("Insira todos os campos!");
            }
            const registeredUser = yield this.userData.findByEmail(email);
            if (!registeredUser) {
                statusCode = 401;
                throw new Error("O E-mail ainda não é cadastrado!");
            }
            const hashedPassword = registeredUser.getPassword();
            const id = registeredUser.getId();
            const comparedPassword = yield this.hashManager.compareHash(password, hashedPassword);
            if (!comparedPassword) {
                statusCode = 401;
                throw new Error("Senha inválida!");
            }
            const token = this.authenticator.generateToken({ id });
            return token;
        });
        this.userData = userDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.hashManager = new hashManager_1.HashManager();
        this.authenticator = new authenticator_1.Authenticator();
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map