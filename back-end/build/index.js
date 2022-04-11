"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./Data/app");
const UserRouter_1 = require("./Router/UserRouter");
app_1.app.use("/user", UserRouter_1.userRouter);
//# sourceMappingURL=index.js.map