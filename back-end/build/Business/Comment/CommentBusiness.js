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
const authenticator_1 = require("../../Utilities/authenticator");
const idGenerator_1 = require("../../Utilities/idGenerator");
const Comment_1 = require("../../Model/Comment");
class LikeBusiness {
    constructor(commentDataImplementation) {
        this.create = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const { post_id, description } = input;
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            if (!post_id || !description) {
                throw new Error("Insira todos os campos!");
            }
            yield this.authenticator.getTokenData(token);
            const id = this.idGenerator.generate();
            const comment = new Comment_1.Comment(id, post_id, description);
            const result = yield this.commentData.insert(comment);
            return result;
        });
        this.commentData = commentDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.authenticator = new authenticator_1.Authenticator();
    }
}
exports.default = LikeBusiness;
//# sourceMappingURL=CommentBusiness.js.map