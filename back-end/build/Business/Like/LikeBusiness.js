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
const Like_1 = require("../../Model/Like");
const authenticator_1 = require("../../Utilities/authenticator");
const idGenerator_1 = require("../../Utilities/idGenerator");
class LikeBusiness {
    constructor(likeDataImplementation) {
        this.create = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const { postId } = input;
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            if (!postId) {
                throw new Error("Insira todos os campos!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const id = this.idGenerator.generate();
            const user_id = authenticator.id;
            const like = new Like_1.Like(id, user_id, postId);
            const searchLike = yield this.likeData.findById(user_id, postId);
            if (searchLike) {
                throw new Error("Esse post já possui seu like!");
            }
            const result = yield this.likeData.insert(like);
            return result;
        });
        this.delete = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const postId = input;
            if (!postId) {
                throw new Error("Insira todos os campos!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const user_id = authenticator.id;
            const searchRelation = yield this.likeData.findById(user_id, postId);
            if (searchRelation) {
                yield this.likeData.delete(user_id, input);
            }
            if (!searchRelation) {
                throw new Error("Você ainda não curtiu esse post!");
            }
        });
        this.likeData = likeDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.authenticator = new authenticator_1.Authenticator();
    }
}
exports.default = LikeBusiness;
//# sourceMappingURL=LikeBusiness.js.map