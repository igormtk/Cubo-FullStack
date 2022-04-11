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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = __importDefault(require("../../Business/User/UserBusiness"));
const UserData_1 = __importDefault(require("../../Data/User/UserData"));
class UserController {
    constructor() {
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const input = {
                name,
                email,
                password
            };
            try {
                const token = yield this.userBusiness.signup(input);
                res.send({ message: "Usuário Cadastrado com sucesso!", token });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const input = {
                email,
                password
            };
            try {
                const token = yield this.userBusiness.login(input);
                res.send({ token });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.userBusiness = new UserBusiness_1.default(new UserData_1.default());
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map