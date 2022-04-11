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
const Post_1 = require("../../Model/Post");
const authenticator_1 = require("../../Utilities/authenticator");
const idGenerator_1 = require("../../Utilities/idGenerator");
class PostBusiness {
    constructor(postDataImplementation) {
        this.create = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const { photo, description, type } = input;
            if (!photo || !description || !type) {
                throw new Error("Insira todos os campos!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            if (type !== "normal" && type !== "event") {
                throw new Error("O tipo de evento não é válido!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const id = this.idGenerator.generate();
            const created_at = new Date();
            const author_id = authenticator.id;
            const post = new Post_1.Post(id, photo, description, type, created_at, author_id);
            const result = yield this.postData.insert(post);
            return result;
        });
        this.find = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const inputParams = input;
            if (!inputParams) {
                throw new Error("Insira um ID!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            yield this.authenticator.getTokenData(token);
            const result = yield this.postData.findById(inputParams);
            if (!result) {
                throw new Error("Não existe um post com esse id");
            }
            return result;
        });
        this.get = (inputHeaders) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const userId = authenticator.id;
            const result = yield this.postData.getPosts(userId);
            return result;
        });
        this.getPostsByType = (inputHeaders, input) => __awaiter(this, void 0, void 0, function* () {
            const token = inputHeaders;
            const inputParams = input;
            if (!inputParams) {
                throw new Error("Preencha todos os campos!");
            }
            if (inputParams !== 'normal' && inputParams !== 'event') {
                throw new Error("Não é um tipo de post válido!");
            }
            if (!token || token === undefined) {
                throw new Error("É necessário uma autorização!");
            }
            const authenticator = yield this.authenticator.getTokenData(token);
            const userId = authenticator.id;
            const result = yield this.postData.getPostsByEvent(userId, inputParams);
            return result;
        });
        this.postData = postDataImplementation;
        this.idGenerator = new idGenerator_1.IdGenerator();
        this.authenticator = new authenticator_1.Authenticator();
    }
}
exports.default = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map