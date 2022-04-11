"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, lastName, participation) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.participation = participation;
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.participation = participation;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
    getParticipation() {
        return this.participation;
    }
    static toUserModel(data) {
        return new User(data.id, data.name, data.lastName, data.participation);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map