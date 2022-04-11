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
const User_1 = require("../Model/User");
const idGenerator_1 = require("../Utilities/idGenerator");
class UserBusiness {
    constructor(userDataImplementation) {
        this.insertUser = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, participation } = input;
            if (!name || !lastName || !participation) {
                throw new Error("Insira todos os campos!");
            }
            const id = this.idGenerator.generate();
            const user = new User_1.User(id, name, lastName, participation);
            yield this.userData.insert(user);
        });
        this.userData = userDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map