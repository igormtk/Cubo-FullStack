"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(id, post_id, description) {
        this.id = id;
        this.post_id = post_id;
        this.description = description;
        this.id = id;
        this.post_id = post_id;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.post_id;
    }
    getDescription() {
        return this.description;
    }
    static toUserModel(data) {
        return new Comment(data.id, data.post_id, data.description);
    }
}
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map