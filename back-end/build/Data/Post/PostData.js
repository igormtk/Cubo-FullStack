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
const Post_1 = require("../../Model/Post");
const BaseDatabase_1 = __importDefault(require("../BaseDatabase"));
class PostData extends BaseDatabase_1.default {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "Labook_Posts";
        this.insert = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default
                    .connection(this.TABLE_NAME)
                    .insert(post);
                return post;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield BaseDatabase_1.default
                    .connection(this.TABLE_NAME)
                    .select()
                    .where({ id });
                return queryResult[0] && Post_1.Post.toUserModel(queryResult[0]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getPosts = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield BaseDatabase_1.default
                    .connection.raw(`
                SELECT Labook_Posts.id, photo, description, type, created_at, author_id, Labook_Users.name
                FROM Labook_Posts
                JOIN Labook_Users
                ON Labook_Posts.author_id = Labook_Users.id
                JOIN Labook_Relations
                ON Labook_Relations.user2_id = Labook_Posts.author_id
                AND Labook_Relations.user1_id = '${id}'
                ORDER BY created_at DESC
                LIMIT 5
            `);
                return queryResult[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getPostsByEvent = (id, event) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield BaseDatabase_1.default
                    .connection.raw(`
                SELECT Labook_Posts.id, photo, description, type, created_at, author_id, Labook_Users.name
                FROM Labook_Posts
                JOIN Labook_Users
                ON Labook_Posts.author_id = Labook_Users.id
                JOIN Labook_Relations
                ON Labook_Relations.user2_id = Labook_Posts.author_id
                AND Labook_Relations.user1_id = '${id}'
                WHERE type = '${event}'
                ORDER BY created_at DESC
            `);
                return queryResult[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.default = PostData;
//# sourceMappingURL=PostData.js.map