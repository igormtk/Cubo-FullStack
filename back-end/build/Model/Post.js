"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST_TYPES = exports.Post = void 0;
class Post {
    constructor(id, photo, description, type, created_at, author_id) {
        this.id = id;
        this.photo = photo;
        this.description = description;
        this.type = type;
        this.created_at = created_at;
        this.author_id = author_id;
        this.id = id;
        this.photo = photo;
        this.description = description;
        this.type = type;
        this.created_at = created_at;
        this.author_id = author_id;
    }
    getId() {
        return this.id;
    }
    getPhoto() {
        return this.photo;
    }
    getDescription() {
        return this.description;
    }
    getType() {
        return this.type;
    }
    getCreatedAt() {
        return this.created_at;
    }
    getAuthorId() {
        return this.author_id;
    }
    static toUserModel(data) {
        return new Post(data.id, data.photo, data.description, data.type, data.created_at, data.author_id);
    }
}
exports.Post = Post;
var POST_TYPES;
(function (POST_TYPES) {
    POST_TYPES["NORMAL"] = "normal";
    POST_TYPES["EVENT"] = "event";
})(POST_TYPES = exports.POST_TYPES || (exports.POST_TYPES = {}));
//# sourceMappingURL=Post.js.map