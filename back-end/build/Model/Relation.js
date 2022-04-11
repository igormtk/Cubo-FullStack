"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relation = void 0;
class Relation {
    constructor(id, user1_id, user2_id) {
        this.id = id;
        this.user1_id = user1_id;
        this.user2_id = user2_id;
        this.id = id;
        this.user1_id = user1_id;
        this.user2_id = user2_id;
    }
    getId() {
        return this.id;
    }
    getId1() {
        return this.user1_id;
    }
    getId2() {
        return this.user2_id;
    }
    static toUserModel(data) {
        return new Relation(data.id, data.user1_id, data.user2_id);
    }
}
exports.Relation = Relation;
//# sourceMappingURL=Relation.js.map