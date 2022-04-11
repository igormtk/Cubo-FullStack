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
const PostBusiness_1 = __importDefault(require("../../Business/Post/PostBusiness"));
const PostData_1 = __importDefault(require("../../Data/Post/PostData"));
class PostController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const { photo, description, type } = req.body;
            const input = {
                photo,
                description,
                type
            };
            try {
                const post = yield this.postBusiness.create(token, input);
                res.send({ message: "Post criado com sucesso!", post });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.find = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const input = req.params.id;
            try {
                const post = yield this.postBusiness.find(token, input);
                res.send({ post });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            try {
                const posts = yield this.postBusiness.get(token);
                res.send({ posts: posts });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.getPostsByType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const input = req.params.type;
            try {
                const posts = yield this.postBusiness.getPostsByType(token, input);
                res.send({ posts: posts });
            }
            catch (error) {
                res.statusCode = 400;
                let message = error.sqlMessage || error.message;
                res.send({ message });
            }
        });
        this.postBusiness = new PostBusiness_1.default(new PostData_1.default());
    }
}
exports.default = PostController;
//# sourceMappingURL=PostController.js.map