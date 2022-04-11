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
const UserBusiness_1 = __importDefault(require("../Business/UserBusiness"));
const UserData_1 = __importDefault(require("../Data/User/UserData"));
class UserController {
    constructor() {
        this.submitUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, participation } = req.body;
            const input = {
                name,
                lastName,
                participation
            };
            try {
                const user = yield this.userBusiness.insertUser(input);
                res.send({ message: "Usuário inserido com sucesso!", user });
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