"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
class Like {
    constructor(id, user_id, post_id) {
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.user_id;
    }
    getPostId() {
        return this.post_id;
    }
    static toUserModel(data) {
        return new Like(data.id, data.user_id, data.post_id);
    }
}
exports.Like = Like;
//# sourceMappingURL=Like.js.map