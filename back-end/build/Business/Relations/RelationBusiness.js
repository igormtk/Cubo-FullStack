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
const Relation_1 = require("../../Model/Relation");
const authenticator_1 = require("../../Utilities/authenticator");
const idGenerator_1 = require("../../Utilities/idGenerator");
class RelationBusiness {
    constructor(relationDataImplementation) {
        this.create = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const { userId } = input;
            if (!userId) {
                throw new Error("Insira todos os campos!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const id = this.idGenerator.generate();
            const user1_id = authenticator.id;
            const relation = new Relation_1.Relation(id, user1_id, userId);
            const searchRelation = yield this.relationData.findById(user1_id, userId);
            const searchRelation2 = yield this.relationData.findById(userId, user1_id);
            if (user1_id === userId) {
                throw new Error("Você não pode fazer amizade com você mesmo!");
            }
            if (searchRelation || searchRelation2) {
                throw new Error("Você já é amigo desta pessoa!");
            }
            const result = yield this.relationData.insert(relation);
            return result;
        });
        this.delete = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const userId = input;
            if (!userId) {
                throw new Error("Insira todos os campos!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const user1_id = authenticator.id;
            const searchRelation = yield this.relationData.findById(user1_id, userId);
            const searchRelation2 = yield this.relationData.findById(userId, user1_id);
            if (user1_id === userId) {
                throw new Error("Você não pode desfazer amizade com você mesmo!");
            }
            if (searchRelation || searchRelation2) {
                yield this.relationData.delete(user1_id, input);
                yield this.relationData.delete(input, user1_id);
            }
            if (!searchRelation && !searchRelation2) {
                throw new Error("Você ainda não possui amizade com essa pessoa!");
            }
        });
        this.relationData = relationDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.authenticator = new authenticator_1.Authenticator();
    }
}
exports.default = RelationBusiness;
//# sourceMappingURL=RelationBusiness.js.map