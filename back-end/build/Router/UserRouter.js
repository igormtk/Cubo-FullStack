"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../Controller/UserController"));
exports.userRouter = express_1.default.Router();
const userController = new UserController_1.default();
exports.userRouter.post("/submit", userController.submitUser);
//# sourceMappingURL=UserRouter.js.map