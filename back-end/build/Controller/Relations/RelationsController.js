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
const RelationBusiness_1 = __importDefault(require("../../Business/Relations/RelationBusiness"));
const RelationsData_1 = __importDefault(require("../../Data/Relations/RelationsData"));
class RelationController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const { id } = req.body;
            const input = {
                userId: id
            };
            try {
                yield this.relationBusiness.create(token, input);
                res.send({ message: "VIVA! Você acabou de fazer uma amizade!" });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const input = req.params.id;
            try {
                yield this.relationBusiness.delete(token, input);
                res.send({ message: "É uma pena ver uma amizade se desfazer!" });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.relationBusiness = new RelationBusiness_1.default(new RelationsData_1.default());
    }
}
exports.default = RelationController;
//# sourceMappingURL=RelationsController.js.map