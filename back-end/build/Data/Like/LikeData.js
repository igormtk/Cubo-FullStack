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
const Like_1 = require("../../Model/Like");
const BaseDatabase_1 = __importDefault(require("../BaseDatabase"));
class LikeData extends BaseDatabase_1.default {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "Labook_Likes";
        this.insert = (like) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default
                    .connection(this.TABLE_NAME)
                    .insert(like);
                return like;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findById = (id, postId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield BaseDatabase_1.default
                    .connection(this.TABLE_NAME)
                    .select()
                    .where({ user_id: id, post_id: postId });
                return queryResult[0] && Like_1.Like.toUserModel(queryResult[0]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.delete = (id, postId) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default
                    .connection(this.TABLE_NAME)
                    .delete()
                    .where({ user_id: id, post_id: postId });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.default = LikeData;
//# sourceMappingURL=LikeData.js.map